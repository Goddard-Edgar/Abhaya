import { CollectionFilter } from '@/components/collections/CollectionFilter'
import { collections } from '@/lib/collections'
import { RevealSection } from '@/components/ui/RevealSection'
import { MadhubaniDivider } from '@/components/patterns/MadhubaniDivider'

export const metadata = {
  title: 'Collections — ABHAYA',
  description: 'Explore the ABHAYA collections — Madhubani Edit, Kullvi Edit, and Confluence.',
}

export default function Collections() {
  return (
    <main className="pt-24">
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <RevealSection className="mb-16">
          <p className="text-xs tracking-[0.25em] uppercase text-earth-warm mb-4 font-display">SS 2025</p>
          <h1
            className="font-display font-bold text-earth-light"
            style={{ fontSize: 'clamp(48px, 8vw, 100px)', letterSpacing: '-0.02em', lineHeight: 1 }}
          >
            Collections
          </h1>
        </RevealSection>

        <div className="opacity-20 mb-12">
          <MadhubaniDivider />
        </div>

        <CollectionFilter collections={collections} />
      </section>
    </main>
  )
}
