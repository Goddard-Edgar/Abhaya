import Image from 'next/image'
import Link from 'next/link'
import type { Collection } from '@/types/collection'

export function CollectionCard({ collection }: { collection: Collection }) {
  return (
    <Link href={`/collections/${collection.slug}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden bg-black-soft mb-4">
        <Image
          src={collection.image}
          alt={collection.name}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black-deep/80 via-transparent to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="text-[10px] tracking-[0.2em] uppercase text-earth-warm bg-black-deep/60 px-2 py-1 font-display">
            {collection.category}
          </span>
        </div>
        <div className="absolute bottom-6 left-6 right-6">
          <p className="text-xs text-earth-light/50 mb-1 font-display tracking-wide">{collection.items} pieces</p>
          <h3 className="font-display font-bold text-xl text-earth-light">{collection.name}</h3>
        </div>
      </div>
      <p className="text-sm text-earth-light/40 font-serif italic">{collection.tagline}</p>
    </Link>
  )
}
