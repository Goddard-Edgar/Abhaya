import Link from 'next/link'
import { MadhubaniCorner } from '@/components/patterns/MadhubaniCorner'
import { PatternBackground } from '@/components/patterns/PatternBackground'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <PatternBackground variant="madhubani" opacity={0.04} />
      <div className="absolute top-6 left-6 opacity-20">
        <MadhubaniCorner rotate={0} size={80} />
      </div>
      <div className="absolute top-6 right-6 opacity-20">
        <MadhubaniCorner rotate={90} size={80} />
      </div>
      <div className="absolute bottom-6 left-6 opacity-15">
        <MadhubaniCorner rotate={270} size={60} />
      </div>
      <div className="absolute bottom-6 right-6 opacity-20">
        <MadhubaniCorner rotate={180} size={80} />
      </div>

      <div className="relative z-10 text-center px-6 max-w-lg mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-earth-warm mb-8 font-display">404</p>
        <h1
          className="font-bold text-earth-light mb-4"
          style={{ fontFamily: 'var(--font-hindi)', fontSize: 'clamp(80px, 18vw, 200px)', lineHeight: 1.1 }}
        >
          अभय
        </h1>
        <p className="font-serif italic text-earth-warm/70 text-xl mb-3">
          This path does not exist.
        </p>
        <p className="text-earth-light/30 text-sm mb-12 leading-relaxed">
          The page you&apos;re looking for has wandered off — like a Madhubani fish into the river.
        </p>

        <div
          className="w-12 h-px mb-12 mx-auto"
          style={{ background: 'linear-gradient(90deg, var(--brown-warm), var(--blue-bright))' }}
        />

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Link
            href="/"
            className="text-xs tracking-[0.25em] uppercase font-display font-medium text-earth-light border border-earth-warm/40 px-8 py-3 hover:bg-earth-warm/10 hover:border-earth-warm transition-all duration-300"
          >
            Back to Home
          </Link>
          <Link
            href="/collections"
            className="text-xs tracking-[0.25em] uppercase font-display font-medium text-earth-warm/50 hover:text-sky-bright transition-colors duration-300"
          >
            Explore Collections →
          </Link>
        </div>
      </div>
    </main>
  )
}
