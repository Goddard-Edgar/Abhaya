'use client'

import { useState } from 'react'
import { cn } from '@/lib/cn'

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
    if (document.getElementById('razorpay-sdk')) { resolve(true); return }
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

  const handleBuyNow = async () => {
    if (!selectedSize || status === 'loading') return
    setStatus('loading')

    try {
      const loaded = await loadRazorpayScript()
      if (!loaded) throw new Error('Razorpay script failed to load')

      const orderRes = await fetch('/api/payment/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: price, productName, productSlug, size: selectedSize }),
      })
      if (!orderRes.ok) throw new Error('Order creation failed')

      const { orderId, amount, currency, keyId } = await orderRes.json()

      const options = {
        key: keyId,
        amount,
        currency,
        name: 'ABHAYA',
        description: `${productName} — Size ${selectedSize}`,
        image: '/favicon.ico',
        order_id: orderId,
        handler: async (response: {
          razorpay_order_id: string
          razorpay_payment_id: string
          razorpay_signature: string
        }) => {
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
            setStatus('error')
          }
        },
        prefill: {},
        theme: { color: '#C4956A' },
        modal: { ondismiss: () => setStatus('idle') },
      }

      new window.Razorpay(options).open()
      setStatus('idle')
    } catch {
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
              onClick={() => { setSelectedSize(size); setStatus('idle') }}
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
        {status === 'error' && '⚠ Something went wrong — Try Again'}
        {status === 'idle' && (
          selectedSize
            ? `Buy Now — ₹${price.toLocaleString('en-IN')}`
            : '↑ Select a Size Above'
        )}
      </button>

      {/* Error hint */}
      {status === 'error' && (
        <p className="text-xs text-earth-warm/60 text-center -mt-2">
          Check your connection and try again.
        </p>
      )}

    </div>
  )
}
