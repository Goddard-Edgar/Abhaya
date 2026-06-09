'use client'

import { useState } from 'react'

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Razorpay: new (options: Record<string, unknown>) => { open: () => void }
  }
}

interface Props {
  productName: string
  productSlug: string
  price: number
  sizes: string[]
}

function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (window.Razorpay) { resolve(true); return }
    document.getElementById('razorpay-sdk')?.remove()
    const script = document.createElement('script')
    script.id = 'razorpay-sdk'
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.onload = () => resolve(true)
    script.onerror = () => resolve(false)
    document.body.appendChild(script)
  })
}

export function BuyNowButton({ productName, productSlug, price, sizes }: Props) {
  const [selectedSize, setSelectedSize] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleBuyNow = async () => {
    if (!selectedSize || status === 'loading') return
    setStatus('loading')
    setErrorMsg('')

    try {
      const loaded = await loadRazorpayScript()
      if (!loaded) throw new Error('Payment script failed to load — check your connection')

      const orderRes = await fetch('/api/payment/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: price, productName, productSlug, size: selectedSize }),
      })
      if (!orderRes.ok) {
        const text = await orderRes.text()
        throw new Error(`Order creation failed (${orderRes.status}): ${text}`)
      }

      const { orderId, amount, currency, keyId } = await orderRes.json()

      if (!window.Razorpay) throw new Error('Razorpay not available after script load')

      const options = {
        key: keyId,
        amount,
        currency,
        name: 'ABHAYA',
        description: `${productName} — Size ${selectedSize}`,
        order_id: orderId,
        handler: async (response: {
          razorpay_order_id: string
          razorpay_payment_id: string
          razorpay_signature: string
        }) => {
          try {
            const verifyRes = await fetch('/api/payment/verify', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                productName,
                size: selectedSize,
              }),
            })
            const { verified, paymentId } = await verifyRes.json()
            if (verified) {
              window.location.href = `/payment/success?payment_id=${paymentId}&product=${encodeURIComponent(productName)}&size=${selectedSize}`
            } else {
              setErrorMsg('Payment verification failed.')
              setStatus('error')
            }
          } catch {
            setErrorMsg('Verification error — contact support.')
            setStatus('error')
          }
        },
        prefill: {},
        theme: { color: '#C4956A' },
        modal: { ondismiss: () => setStatus('idle') },
      }

      new window.Razorpay(options).open()
      setStatus('idle')
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Unknown error'
      console.error('[BuyNow]', msg)
      setErrorMsg(msg)
      setStatus('error')
    }
  }

  return (
    <div className="flex flex-col gap-5">

      {/* ── Size selector ── */}
      <div>
        <p className="text-[10px] tracking-[0.2em] uppercase font-display mb-3"
          style={{ color: 'rgba(240,212,176,0.6)' }}>
          Select Size
        </p>
        <div className="flex gap-2 flex-wrap">
          {sizes.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => { setSelectedSize(size); setStatus('idle'); setErrorMsg('') }}
              style={selectedSize === size
                ? { background: '#C4956A', color: '#0A0A0A', borderColor: '#C4956A', cursor: 'pointer' }
                : { cursor: 'pointer' }
              }
              className="w-12 h-12 text-sm font-display font-medium tracking-wide transition-all duration-200 border border-earth-warm/60 text-earth-warm hover:border-earth-warm hover:bg-earth-warm/10"
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* ── Buy Now ── */}
      <button
        type="button"
        onClick={handleBuyNow}
        style={{
          cursor: 'pointer',
          background: selectedSize ? '#C4956A' : 'transparent',
          color: selectedSize ? '#0A0A0A' : '#C4956A',
          border: selectedSize ? '2px solid #C4956A' : '2px solid rgba(196,149,106,0.5)',
          opacity: status === 'loading' ? 0.75 : 1,
        }}
        className="w-full py-4 text-sm tracking-[0.25em] uppercase font-display font-semibold transition-all duration-300"
      >
        {status === 'loading' && (
          <span className="flex items-center justify-center gap-2">
            <span className="inline-block w-3 h-3 border border-current border-t-transparent rounded-full animate-spin" />
            Opening Checkout…
          </span>
        )}
        {status === 'error' && '⚠ Try Again'}
        {status === 'idle' && (
          selectedSize
            ? `Buy Now — ₹${price.toLocaleString('en-IN')}`
            : '↑ Select a Size Above'
        )}
      </button>

      {/* Error detail */}
      {status === 'error' && errorMsg && (
        <p className="text-xs text-red-400/80 text-center -mt-2 font-mono">
          {errorMsg}
        </p>
      )}

    </div>
  )
}
