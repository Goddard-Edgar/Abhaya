import Image from 'next/image'
import { lookbookImages } from '@/lib/lookbook'
import { RevealSection } from '@/components/ui/RevealSection'
import { MadhubaniDivider } from '@/components/patterns/MadhubaniDivider'

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

        {/* CSS columns masonry */}
        <div
          className="gap-4"
          style={{
            columnCount: 3,
            columnGap: '1rem',
          }}
        >
          {lookbookImages.map((img, i) => (
            <RevealSection key={img.id} delay={i * 0.05} className="break-inside-avoid mb-4 block">
              <div className="relative overflow-hidden bg-black-soft group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={img.aspectRatio === 'portrait' ? 800 : img.aspectRatio === 'landscape' ? 400 : 600}
                  className="w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  style={{ display: 'block' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black-deep/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <p className="text-[10px] tracking-[0.25em] uppercase text-earth-warm font-display mb-1">{img.season}</p>
                    <p className="text-xs text-earth-light/70">{img.alt}</p>
                  </div>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </section>
    </main>
  )
}
