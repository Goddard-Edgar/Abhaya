import { notFound } from 'next/navigation'
import Link from 'next/link'
import { collections } from '@/lib/collections'
import { getProduct, getProductsByCollection } from '@/lib/products'
import { RevealSection } from '@/components/ui/RevealSection'
import { ProductCard } from '@/components/collections/ProductCard'
import { ProductArt } from '@/components/products/ProductArt'
import { TshirtBlank } from '@/components/products/TshirtBlank'
import { MadhubaniDivider } from '@/components/patterns/MadhubaniDivider'

export function generateStaticParams() {
  return collections.flatMap((c) =>
    getProductsByCollection(c.slug).map((p) => ({ slug: c.slug, productSlug: p.slug }))
  )
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; productSlug: string }> }) {
  const { slug, productSlug } = await params
  const product = getProduct(slug, productSlug)
  if (!product) return {}
  return { title: `${product.name} — ABHAYA`, description: product.description }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string; productSlug: string }> }) {
  const { slug, productSlug } = await params
  const collection = collections.find((c) => c.slug === slug)
  if (!collection) notFound()

  const product = getProduct(slug, productSlug)
  if (!product) notFound()

  const categoryColor = collection.category === 'kullvi' ? 'text-sky-bright' : 'text-earth-warm'
  const isFusion = collection.category === 'fusion'
  const accentHex = isFusion ? '#C4956A' : collection.category === 'kullvi' ? '#00B4D8' : '#C4956A'
  const accentHex2 = isFusion ? '#00B4D8' : undefined
  const more = getProductsByCollection(slug).filter((p) => p.slug !== product.slug).slice(0, 4)

  return (
    <main className="pt-24">
      <section className="px-6 py-10 max-w-7xl mx-auto">
        <RevealSection className="mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/collections" className="text-xs tracking-[0.2em] uppercase text-earth-light/30 hover:text-sky-bright transition-colors font-display">
            Collections
          </Link>
          <span className="text-earth-light/15 text-xs">/</span>
          <Link href={`/collections/${collection.slug}`} className="text-xs tracking-[0.2em] uppercase text-earth-light/30 hover:text-sky-bright transition-colors font-display">
            {collection.name}
          </Link>
          <span className="text-earth-light/15 text-xs">/</span>
          <span className="text-xs tracking-[0.2em] uppercase text-earth-light/50 font-display">{product.name}</span>
        </RevealSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Images */}
          <RevealSection>
            <div className="grid grid-cols-1 gap-4">
              {(['front', 'back'] as const).map((view) => (
                <div key={view} className="relative aspect-[3/4] overflow-hidden bg-black-soft">
                  <ProductArt
                    motif={product.motifKey}
                    accentHex={accentHex}
                    accentHex2={accentHex2}
                    view={view}
                    className="absolute inset-0 w-full h-full"
                  />
                  <p className="absolute bottom-3 left-3 text-[9px] tracking-[0.2em] uppercase text-earth-light/30 font-display">
                    {view === 'front' ? 'Front — print detail' : 'Back — plain'}
                  </p>
                </div>
              ))}
            </div>
          </RevealSection>

          {/* Info */}
          <RevealSection delay={0.15} className="lg:sticky lg:top-32">
            <p className={`text-xs tracking-[0.25em] uppercase ${categoryColor} mb-4 font-display`}>
              {collection.name}
            </p>
            <h1
              className="font-display font-bold text-earth-light mb-3"
              style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', letterSpacing: '-0.02em', lineHeight: 1.05 }}
            >
              {product.name}
            </h1>
            <p className="font-display text-earth-light/60 text-xl mb-8">₹{product.price.toLocaleString('en-IN')}</p>

            <p className="text-earth-light/50 leading-relaxed mb-10">{product.description}</p>

            {/* Details — glass box */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-earth-dark/20 pt-8 mb-10 px-5 pb-6 backdrop-blur-md bg-white/[0.03]">
              {[
                ['Fabric', product.fabric],
                ['Fit', product.fit],
                ['Motif', product.motif],
                ['Sizes', product.sizes.join(' · ')],
              ].map(([label, val]) => (
                <div key={label}>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-earth-light/30 font-display mb-1">{label}</p>
                  <p className="text-sm text-earth-light/70 leading-relaxed">{val}</p>
                </div>
              ))}
            </div>

            {/* 3D blank preview */}
            <div className="mb-10">
              <p className="text-[10px] tracking-[0.2em] uppercase text-earth-light/30 font-display mb-4">Garment Blank — Drag to Rotate</p>
              <TshirtBlank accentHex={accentHex} accentHex2={accentHex2} motif={product.motifKey} />
            </div>

            <div className="flex flex-col gap-4">
              <Link
                href="/contact"
                className="text-xs tracking-[0.25em] uppercase font-display font-medium text-earth-light backdrop-blur-md bg-white/[0.04] border border-earth-warm/30 px-8 py-4 hover:bg-earth-warm/10 hover:border-earth-warm transition-all duration-300 text-center"
              >
                Enquire About This Piece
              </Link>
              <Link
                href={`/collections/${collection.slug}`}
                className="text-xs tracking-[0.25em] uppercase font-display font-medium text-earth-warm/50 hover:text-sky-bright transition-colors text-center"
              >
                ← Back to {collection.name}
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* More from this collection */}
      {more.length > 0 && (
        <section className="px-6 py-20 max-w-7xl mx-auto">
          <RevealSection className="mb-10">
            <p className="text-xs tracking-[0.25em] uppercase text-earth-warm mb-2 font-display">More From</p>
            <h2
              className="font-display font-bold text-earth-light"
              style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', letterSpacing: '-0.02em' }}
            >
              {collection.name}
            </h2>
          </RevealSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {more.map((p, i) => (
              <RevealSection key={p.slug} delay={i * 0.06}>
                <ProductCard product={p} collectionSlug={collection.slug} />
              </RevealSection>
            ))}
          </div>
        </section>
      )}

      <div className="opacity-20">
        <MadhubaniDivider />
      </div>
    </main>
  )
}
