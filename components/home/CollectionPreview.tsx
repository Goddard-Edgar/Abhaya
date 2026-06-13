'use client'

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

      <div>
        {featured.map((collection, i) => (
          <RevealSection key={collection.slug} delay={i * 0.08}>
            <Link
              href={`/collections/${collection.slug}`}
              className="group flex items-center gap-6 md:gap-10 py-6 border-t border-earth-dark/20 hover:border-earth-warm/20 transition-colors duration-300"
            >
              {/* 3D thumbnail */}
              <Tilt3DCard className="w-16 md:w-24 shrink-0">
                <div
                  className="relative overflow-hidden bg-black-soft ring-1 ring-transparent group-hover:ring-sky-bright/30 transition-all duration-500"
                  style={{ aspectRatio: '3/4', transform: 'translateZ(0px)', boxShadow: '0 20px 40px -12px rgba(0,0,0,0.7)' }}
                >
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    sizes="96px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black-deep/60 via-transparent to-transparent" />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: 'radial-gradient(circle at 70% 20%, rgba(0,180,216,0.2), transparent 60%)' }}
                  />
                </div>
              </Tilt3DCard>

              {/* Row text */}
              <div className="flex items-center justify-between gap-6 flex-1 min-w-0">
                <div className="flex items-baseline gap-5 md:gap-8 min-w-0">
                  <span className="text-xs font-display text-earth-warm/25 tracking-[0.2em] shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0">
                    <h3
                      className="font-display font-bold text-earth-light group-hover:text-earth-warm transition-colors duration-300 truncate"
                      style={{ fontSize: 'clamp(20px, 2.8vw, 38px)', letterSpacing: '-0.01em', lineHeight: 1.1 }}
                    >
                      {collection.name}
                    </h3>
                    <p className="text-sm text-earth-light/30 font-serif italic mt-1 hidden sm:block truncate">
                      {collection.tagline}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-5 shrink-0">
                  <span className="hidden md:block text-xs tracking-[0.15em] text-earth-light/20 font-display uppercase">
                    {collection.items} pieces
                  </span>
                  <span
                    className="text-earth-warm/30 group-hover:text-earth-warm group-hover:translate-x-1.5 transition-all duration-300"
                    style={{ fontSize: '1.1rem' }}
                  >
                    →
                  </span>
                </div>
              </div>
            </Link>
          </RevealSection>
        ))}
        <div className="border-t border-earth-dark/20" />
      </div>
    </section>
  )
}
