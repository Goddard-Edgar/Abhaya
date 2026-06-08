import Link from 'next/link'
import { MadhubaniCorner } from '@/components/patterns/MadhubaniCorner'
import { PatternBackground } from '@/components/patterns/PatternBackground'
import { MadhubaniDivider } from '@/components/patterns/MadhubaniDivider'

export const metadata = {
  title: 'Order Confirmed — ABHAYA',
}

export default async function PaymentSuccess({
  searchParams,
}: {
  searchParams: Promise<{ payment_id?: string; product?: string; size?: string }>
}) {
  const { payment_id, product, size } = await searchParams
  const productName = product ? decodeURIComponent(product) : 'Your piece'

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-24">
      <PatternBackground variant="madhubani" opacity={0.04} />
      <div className="absolute top-6 left-6 opacity-20">
        <MadhubaniCorner rotate={0} size={80} />
      </div>
      <div className="absolute top-6 right-6 opacity-20">
        <MadhubaniCorner rotate={90} size={80} />
      </div>

      <div className="relative z-10 max-w-lg mx-auto">
        {/* Check mark */}
        <div className="w-16 h-16 mx-auto mb-8 flex items-center justify-center border border-earth-warm/40">
          <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
            <path d="M5 12l5 5L20 7" stroke="#C4956A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <p className="text-xs tracking-[0.3em] uppercase text-earth-warm mb-4 font-display">Order Confirmed</p>
        <h1
          className="font-display font-bold text-earth-light mb-3"
          style={{ fontSize: 'clamp(32px, 5vw, 52px)', letterSpacing: '-0.02em', lineHeight: 1.05 }}
        >
          Fearlessness,<br />delivered.
        </h1>
        <p className="font-serif italic text-earth-warm/60 text-lg mb-10">
          {productName}{size ? ` · Size ${size}` : ''} is on its way to you.
        </p>

        <div className="opacity-20 mb-10">
          <MadhubaniDivider />
        </div>

        <div className="border-t border-earth-dark/20 pt-8 mb-10 px-5 pb-6 backdrop-blur-md bg-white/[0.03] text-left">
          <div className="flex flex-col gap-3">
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-earth-light/30 font-display mb-1">Payment ID</p>
              <p className="text-sm text-earth-light/60 font-display">{payment_id ?? '—'}</p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-earth-light/30 font-display mb-1">Item</p>
              <p className="text-sm text-earth-light/60">{productName}{size ? ` — Size ${size}` : ''}</p>
            </div>
          </div>
        </div>

        <p className="text-earth-light/30 text-sm mb-10 leading-relaxed">
          We&apos;ll be in touch over email with shipping details. Thank you for wearing your fearlessness.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Link
            href="/collections"
            className="text-xs tracking-[0.25em] uppercase font-display font-medium text-earth-light border border-earth-warm/40 px-8 py-3 hover:bg-earth-warm/10 hover:border-earth-warm transition-all duration-300"
          >
            Continue Shopping
          </Link>
          <Link
            href="/"
            className="text-xs tracking-[0.25em] uppercase font-display font-medium text-earth-warm/50 hover:text-sky-bright transition-colors duration-300"
          >
            Back to Home →
          </Link>
        </div>
      </div>
    </main>
  )
}
