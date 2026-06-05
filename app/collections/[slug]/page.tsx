import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { collections } from '@/lib/collections'
import { RevealSection } from '@/components/ui/RevealSection'
import { MadhubaniDivider } from '@/components/patterns/MadhubaniDivider'

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const collection = collections.find((c) => c.slug === slug)
  if (!collection) return {}
  return { title: `${collection.name} — ABHAYA`, description: collection.tagline }
}

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const collection = collections.find((c) => c.slug === slug)
  if (!collection) notFound()

  const categoryColor = collection.category === 'kullvi' ? 'text-sky-bright' : 'text-earth-warm'

  return (
    <main className="pt-24">
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <RevealSection className="mb-4">
          <Link href="/collections" className="text-xs tracking-[0.2em] uppercase text-earth-light/30 hover:text-earth-warm transition-colors font-display">
            ← Collections
          </Link>
        </RevealSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <RevealSection>
            <div className="relative aspect-[3/4] overflow-hidden bg-black-soft">
              <Image
                src={collection.image}
                alt={collection.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </RevealSection>

          <RevealSection delay={0.2} className="lg:sticky lg:top-32">
            <p className={`text-xs tracking-[0.25em] uppercase ${categoryColor} mb-4 font-display`}>
              {collection.category}
            </p>
            <h1
              className="font-display font-bold text-earth-light mb-6"
              style={{ fontSize: 'clamp(36px, 5vw, 64px)', letterSpacing: '-0.02em', lineHeight: 1.05 }}
            >
              {collection.name}
            </h1>
            <p className="font-serif italic text-earth-warm text-xl mb-8">{collection.tagline}</p>
            <p className="text-earth-light/50 leading-relaxed mb-10">{collection.description}</p>

            <div className="border-t border-earth-dark/20 pt-8 mb-10">
              <p className="text-xs tracking-[0.2em] uppercase text-earth-light/30 font-display mb-2">Pieces in collection</p>
              <p className="font-display font-bold text-earth-light text-3xl">{collection.items}</p>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                href="/contact"
                className="text-xs tracking-[0.25em] uppercase font-display font-medium text-earth-light bg-earth-dark/30 border border-earth-warm/30 px-8 py-4 hover:bg-earth-warm/10 hover:border-earth-warm transition-all duration-300 text-center"
              >
                Enquire About This Collection
              </Link>
              <Link
                href="/lookbook"
                className="text-xs tracking-[0.25em] uppercase font-display font-medium text-earth-warm/50 hover:text-earth-warm transition-colors text-center"
              >
                View Lookbook →
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      <div className="opacity-20 mt-12">
        <MadhubaniDivider />
      </div>
    </main>
  )
}
