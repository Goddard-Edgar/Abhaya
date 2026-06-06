import Image from 'next/image'
import Link from 'next/link'
import { collections } from '@/lib/collections'
import { RevealSection } from '@/components/ui/RevealSection'
import { Tilt3DCard } from '@/components/ui/Tilt3DCard'

export function CollectionPreview() {
  const featured = collections.filter((c) => c.featured)

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <RevealSection className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="text-xs tracking-[0.25em] uppercase text-earth-warm mb-3 font-display">Collections</p>
          <h2
            className="font-display font-bold text-earth-light"
            style={{ fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.05, letterSpacing: '-0.02em' }}
          >
            SS 2025
          </h2>
        </div>
        <Link
          href="/collections"
          className="text-xs tracking-[0.2em] uppercase text-earth-warm/60 hover:text-sky-bright transition-colors font-display self-start md:self-auto"
        >
          View All →
        </Link>
      </RevealSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {featured.map((collection, i) => (
          <RevealSection key={collection.slug} delay={i * 0.1}>
            <Link href={`/collections/${collection.slug}`} className="group block">
              <Tilt3DCard className="aspect-[3/4] mb-4">
                <div
                  className="absolute inset-0 overflow-hidden bg-black-soft ring-1 ring-transparent group-hover:ring-sky-bright/30 transition-all duration-500"
                  style={{ transform: 'translateZ(0px)', boxShadow: '0 30px 60px -20px rgba(0,0,0,0.6)' }}
                >
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black-deep/80 via-transparent to-transparent" />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: 'radial-gradient(circle at 70% 20%, rgba(0,180,216,0.18), transparent 60%)' }}
                  />
                </div>

                <div className="absolute bottom-6 left-6 right-6" style={{ transform: 'translateZ(64px)' }}>
                  <p className="text-xs tracking-[0.2em] uppercase text-sky-bright/80 mb-1 font-display">
                    {collection.category}
                  </p>
                  <h3
                    className="font-display font-bold text-xl text-earth-light tracking-tight"
                    style={{ textShadow: '0 8px 24px rgba(0,0,0,0.5)' }}
                  >
                    {collection.name}
                  </h3>
                </div>
              </Tilt3DCard>
              <p className="text-sm text-earth-light/40 font-serif italic">{collection.tagline}</p>
            </Link>
          </RevealSection>
        ))}
      </div>
    </section>
  )
}
