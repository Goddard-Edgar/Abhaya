import { lookbookEntries } from '@/lib/lookbook'
import { RevealSection } from '@/components/ui/RevealSection'
import { MadhubaniDivider } from '@/components/patterns/MadhubaniDivider'
import { LookbookScene } from '@/components/lookbook/LookbookScene'

export const metadata = {
  title: 'Lookbook — ABHAYA',
  description: 'ABHAYA SS 2025 Lookbook — fearless Indian streetwear editorial.',
}

export default function Lookbook() {
  return (
    <main className="pt-24">
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <RevealSection className="mb-4">
          <p className="text-xs tracking-[0.25em] uppercase text-earth-warm mb-4 font-display">SS 2025</p>
          <h1
            className="font-display font-bold text-earth-light mb-6"
            style={{ fontSize: 'clamp(48px, 8vw, 100px)', letterSpacing: '-0.02em', lineHeight: 1 }}
          >
            Lookbook
          </h1>
          <p className="font-serif italic text-earth-warm/60 text-lg max-w-lg">
            Fearlessness in fabric. An editorial journey through Madhubani plains and Kullvi mountains.
          </p>
        </RevealSection>

        <div className="opacity-20 my-12">
          <MadhubaniDivider />
        </div>

        {/* CSS columns masonry — 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {lookbookEntries.map((entry, i) => (
            <RevealSection key={entry.id} delay={i * 0.05} className="break-inside-avoid mb-4 block">
              <div
                className="relative overflow-hidden bg-black-soft ring-1 ring-transparent hover:ring-sky-bright/30 transition-all duration-500"
                style={{
                  aspectRatio:
                    entry.aspectRatio === 'portrait' ? '3 / 4' : entry.aspectRatio === 'landscape' ? '4 / 3' : '1 / 1',
                }}
              >
                <LookbookScene entry={entry} tilt={i % 2 === 0 ? -3 : 3} />
              </div>
            </RevealSection>
          ))}
        </div>
      </section>
    </main>
  )
}
