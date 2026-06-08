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
    if (!selectedSize) return

    setStatus('loading')

    const loaded = await loadRazorpayScript()
    if (!loaded) {
      setStatus('error')
      return
    }

    try {
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
        handler: async (response: { razorpay_order_id: string; razorpay_payment_id: string; razorpay_signature: string }) => {
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
    <div className="flex flex-col gap-4">
      {/* Size selector */}
      <div>
        <p className="text-[10px] tracking-[0.2em] uppercase text-earth-light/30 font-display mb-3">Select Size</p>
        <div className="flex gap-2 flex-wrap">
          {sizes.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => setSelectedSize(size)}
              className={cn(
                'w-12 h-12 text-xs font-display tracking-wide transition-all duration-200 border',
                selectedSize === size
                  ? 'border-earth-warm bg-earth-warm/15 text-earth-light'
                  : 'border-earth-dark/30 text-earth-light/40 hover:border-earth-warm/50 hover:text-earth-light/70'
              )}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Buy Now */}
      <button
        type="button"
        onClick={handleBuyNow}
        disabled={!selectedSize || status === 'loading'}
        className={cn(
          'text-xs tracking-[0.25em] uppercase font-display font-medium px-8 py-4 transition-all duration-300 text-center',
          selectedSize && status !== 'loading'
            ? 'text-black-deep bg-earth-warm hover:bg-earth-light cursor-pointer'
            : 'text-earth-light/30 border border-earth-dark/20 cursor-not-allowed'
        )}
      >
        {status === 'loading' ? 'Opening Checkout…' : status === 'error' ? 'Try Again' : selectedSize ? `Buy Now — ₹${price.toLocaleString('en-IN')}` : 'Select a Size'}
      </button>
    </div>
  )
}
