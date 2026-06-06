import Link from 'next/link'
import type { Product } from '@/types/product'
import { ProductArt } from '@/components/products/ProductArt'
import { collections } from '@/lib/collections'

export function ProductCard({ product, collectionSlug }: { product: Product; collectionSlug: string }) {
  const collection = collections.find((c) => c.slug === collectionSlug)
  const isFusion = collection?.category === 'fusion'
  const accentHex = isFusion ? '#C4956A' : collection?.category === 'kullvi' ? '#00B4D8' : '#C4956A'
  const accentHex2 = isFusion ? '#00B4D8' : undefined

  return (
    <Link href={`/collections/${collectionSlug}/${product.slug}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden bg-black-soft mb-3 ring-1 ring-transparent group-hover:ring-sky-bright/30 transition-all duration-500">
        <ProductArt
          motif={product.motifKey}
          accentHex={accentHex}
          accentHex2={accentHex2}
          className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: 'radial-gradient(circle at 70% 20%, rgba(0,180,216,0.15), transparent 60%)' }}
        />
        <div className="absolute top-3 right-3 backdrop-blur-md bg-black-deep/40 px-2 py-1">
          <span className="text-[10px] tracking-[0.15em] text-earth-light/70 font-display">₹{product.price.toLocaleString('en-IN')}</span>
        </div>
      </div>
      <h3 className="font-display font-medium text-sm text-earth-light mb-0.5 group-hover:text-sky-bright transition-colors duration-300">
        {product.name}
      </h3>
      <p className="text-xs text-earth-light/30 tracking-wide">{product.fit}</p>
    </Link>
  )
}
