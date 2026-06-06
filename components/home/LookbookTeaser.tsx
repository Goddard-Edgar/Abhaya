import Link from 'next/link'
import { RevealSection } from '@/components/ui/RevealSection'
import { LookbookScene } from '@/components/lookbook/LookbookScene'
import { lookbookEntries } from '@/lib/lookbook'

export function LookbookTeaser() {
  const entries = lookbookEntries.slice(0, 4)

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <RevealSection className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="text-xs tracking-[0.25em] uppercase text-earth-warm mb-3 font-display">Lookbook</p>
          <h2
            className="font-display font-bold text-earth-light"
            style={{ fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.05, letterSpacing: '-0.02em' }}
          >
            SS 2025<br />
            <span className="font-serif italic font-normal text-earth-warm/60">Editorial</span>
          </h2>
        </div>
        <Link
          href="/lookbook"
          className="text-xs tracking-[0.2em] uppercase text-earth-warm/60 hover:text-sky-bright transition-colors font-display"
        >
          Full Lookbook →
        </Link>
      </RevealSection>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {entries.map((entry, i) => (
          <RevealSection key={entry.id} delay={i * 0.08}>
            <div
              className={`relative overflow-hidden bg-black-soft ring-1 ring-transparent hover:ring-sky-bright/30 transition-all duration-500 ${i % 2 === 1 ? 'md:mt-8' : ''}`}
              style={{ aspectRatio: '3/4' }}
            >
              <LookbookScene entry={entry} tilt={i % 2 === 0 ? -3 : 3} />
            </div>
          </RevealSection>
        ))}
      </div>
    </section>
  )
}
