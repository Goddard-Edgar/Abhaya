import Image from 'next/image'
import Link from 'next/link'
import { RevealSection } from '@/components/ui/RevealSection'
import { lookbookImages } from '@/lib/lookbook'

export function LookbookTeaser() {
  const images = lookbookImages.slice(0, 4)

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
        {images.map((img, i) => (
          <RevealSection key={img.id} delay={i * 0.08}>
            <div className={`relative overflow-hidden bg-black-soft ${i % 2 === 1 ? 'md:mt-8' : ''}`} style={{ aspectRatio: '3/4' }}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black-deep/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-[10px] tracking-[0.2em] uppercase text-sky-bright/80 font-display">{img.season}</p>
              </div>
              <div
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 30% 80%, rgba(0,180,216,0.12), transparent 60%)' }}
              />
            </div>
          </RevealSection>
        ))}
      </div>
    </section>
  )
}
