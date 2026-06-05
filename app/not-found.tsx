import Link from 'next/link'
import { MadhubaniCorner } from '@/components/patterns/MadhubaniCorner'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-8 left-8 opacity-20">
        <MadhubaniCorner rotate={0} size={80} />
      </div>
      <div className="absolute bottom-8 right-8 opacity-20">
        <MadhubaniCorner rotate={180} size={80} />
      </div>
      <div className="text-center px-6">
        <p className="text-xs tracking-[0.3em] uppercase text-earth-warm mb-6 font-display">404</p>
        <h1
          className="font-display font-bold text-earth-light mb-6"
          style={{ fontSize: 'clamp(60px, 12vw, 140px)', letterSpacing: '-0.02em', lineHeight: 1 }}
        >
          Lost
        </h1>
        <p className="font-serif italic text-earth-light/40 text-xl mb-10">
          Even the fearless sometimes take the wrong path.
        </p>
        <Link
          href="/"
          className="text-xs tracking-[0.25em] uppercase font-display font-medium text-earth-light border border-earth-warm/30 px-8 py-3 hover:bg-earth-warm/10 hover:border-earth-warm transition-all duration-300"
        >
          Return Home
        </Link>
      </div>
    </main>
  )
}
