import Image from 'next/image'
import Link from 'next/link'
import type { Collection } from '@/types/collection'
import { Tilt3DCard } from '@/components/ui/Tilt3DCard'

export function CollectionCard({ collection }: { collection: Collection }) {
  return (
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
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black-deep/80 via-transparent to-transparent" />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: 'radial-gradient(circle at 70% 20%, rgba(0,180,216,0.18), transparent 60%)' }}
          />
        </div>

        {/* Category badge — floats forward */}
        <div className="absolute top-4 left-4" style={{ transform: 'translateZ(48px)' }}>
          <span className="text-[10px] tracking-[0.2em] uppercase text-sky-bright bg-black-deep/60 backdrop-blur-md px-2 py-1 font-display">
            {collection.category}
          </span>
        </div>

        {/* Title block — floats forward most, like a label hovering over a rendered model */}
        <div className="absolute bottom-6 left-6 right-6" style={{ transform: 'translateZ(64px)' }}>
          <p className="text-xs text-earth-light/50 mb-1 font-display tracking-wide">{collection.items} pieces</p>
          <h3
            className="font-display font-bold text-xl text-earth-light"
            style={{ textShadow: '0 8px 24px rgba(0,0,0,0.5)' }}
          >
            {collection.name}
          </h3>
        </div>
      </Tilt3DCard>
      <p className="text-sm text-earth-light/40 font-serif italic">{collection.tagline}</p>
    </Link>
  )
}
