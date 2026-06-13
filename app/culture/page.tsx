import Image from 'next/image'
import { RevealSection } from '@/components/ui/RevealSection'

export const metadata = {
  title: 'Culture — ABHAYA',
  description: 'The living traditions behind ABHAYA — Madhubani art and Kullvi weaving, united in fearless cloth.',
}

export default function Culture() {
  return (
    <main className="pt-24">

      {/* Hero */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <RevealSection>
          <p className="text-xs tracking-[0.3em] uppercase text-earth-warm mb-6 font-display">The Heritage</p>
          <h1
            className="font-display font-bold text-earth-light mb-8"
            style={{ fontSize: 'clamp(48px, 9vw, 112px)', letterSpacing: '-0.02em', lineHeight: 1 }}
          >
            CULTURE
          </h1>
          <p className="font-serif italic text-earth-light/40 text-lg max-w-xl leading-relaxed">
            Two ancient visual languages, separated by mountains and plains,
            finally introduced to each other through cloth.
          </p>
        </RevealSection>
      </section>

      <div className="border-t border-earth-dark/20 max-w-5xl mx-auto" />

      {/* Madhubani */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <RevealSection>
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/images/lookbook/madhubani-peacock.jpg"
                alt="Peacock feather — Madhubani Mayur motif"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0" style={{ background: 'rgba(10,10,10,0.2)' }} />
            </div>
          </RevealSection>

          <RevealSection delay={0.15}>
            <p className="text-xs tracking-[0.25em] uppercase text-earth-warm mb-6 font-display">01 — The Earth Tradition</p>
            <h2
              className="font-display font-bold text-earth-light mb-2"
              style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', lineHeight: 1.05, letterSpacing: '-0.01em' }}
            >
              Madhubani
            </h2>
            <p className="font-serif italic text-earth-warm text-lg mb-8">The Art of Mithila</p>
            <p className="text-earth-light/45 leading-relaxed mb-5">
              For centuries, women in the Mithila region of Bihar painted their homes with sacred images —
              fish, lotus, sun, moon, birds, geometric patterns — using earth pigments and their own hands.
              This was not decoration. It was prayer. It was story. It was identity.
            </p>
            <p className="text-earth-light/45 leading-relaxed mb-5">
              The fish represents fertility. The lotus signifies purity. The geometric patterns hold cosmic
              order. Every motif has meaning that goes back thousands of years.
            </p>
            <p className="text-earth-light/45 leading-relaxed">
              In ABHAYA, Madhubani becomes wearable — the fish swims across a chest, the lotus blooms on
              a shoulder. The tradition continues, in cotton and thread.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-earth-dark/20 pt-8">
              {[['Origin', 'Mithila, Bihar'], ['Medium', 'Earth pigments'], ['Motifs', 'Fish, lotus, sun']].map(([label, val]) => (
                <div key={label}>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-earth-warm/30 mb-1 font-display">{label}</p>
                  <p className="text-sm text-earth-light/50">{val}</p>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      <div className="border-t border-earth-dark/20 max-w-5xl mx-auto" />

      {/* Kullvi */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <RevealSection delay={0.15} className="order-2 lg:order-1">
            <p className="text-xs tracking-[0.25em] uppercase text-sky-bright mb-6 font-display">02 — The Mountain Tradition</p>
            <h2
              className="font-display font-bold text-earth-light mb-2"
              style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', lineHeight: 1.05, letterSpacing: '-0.01em' }}
            >
              Kullvi
            </h2>
            <p className="font-serif italic text-sky-bright text-lg mb-8">The Weave of Kullu</p>
            <p className="text-earth-light/45 leading-relaxed mb-5">
              High in the Kullu valley, where the Beas river cuts through Himalayan peaks, communities have
              woven their identity into fabric for generations. The Kullvi shawl — with its geometric borders,
              diamond lattices, and deep indigo dyes — is not just clothing. It is a declaration of home.
            </p>
            <p className="text-earth-light/45 leading-relaxed mb-5">
              The patterns are architectural: precise, geometric, ordered. The mountain people built their
              aesthetic from the geometry of peaks and valleys, the symmetry of the high-altitude world.
            </p>
            <p className="text-earth-light/45 leading-relaxed">
              In ABHAYA, Kullvi geometry moves from the loom to the city. The diamond becomes a print.
              The shawl border becomes a hem detail. The mountain comes down to the street.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-sky-deep/20 pt-8">
              {[['Origin', 'Kullu, Himachal'], ['Medium', 'Wool, indigo'], ['Motifs', 'Diamond, chevron']].map(([label, val]) => (
                <div key={label}>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-sky-bright/30 mb-1 font-display">{label}</p>
                  <p className="text-sm text-earth-light/50">{val}</p>
                </div>
              ))}
            </div>
          </RevealSection>

          <RevealSection className="order-1 lg:order-2">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/images/lookbook/kullvi-loom-hands.jpg"
                alt="Hands at the Kullu loom"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0" style={{ background: 'rgba(10,10,10,0.2)' }} />
            </div>
          </RevealSection>
        </div>
      </section>

      <div className="border-t border-earth-dark/20 max-w-5xl mx-auto" />

      {/* Confluence */}
      <section className="py-32 px-6 max-w-5xl mx-auto text-center">
        <RevealSection>
          <p className="text-xs tracking-[0.3em] uppercase text-earth-warm mb-6 font-display">03 — The Meeting</p>
          <h2
            className="font-display font-bold mb-8"
            style={{ fontSize: 'clamp(48px, 8vw, 100px)', lineHeight: 1, letterSpacing: '-0.02em' }}
          >
            <span className="text-earth-warm">Earth</span>
            <span className="text-earth-light/15 mx-4">×</span>
            <span className="text-sky-bright">Sky</span>
          </h2>
          <p className="font-serif italic text-earth-light/50 text-xl leading-relaxed max-w-2xl mx-auto mb-8">
            When Madhubani&apos;s fish meets Kullvi&apos;s diamond — when Bihar&apos;s ochres dissolve into Himachal&apos;s indigo —
            something new is created. Not a compromise. A conversation.
          </p>
          <p className="text-earth-light/30 leading-relaxed max-w-xl mx-auto">
            Cultures are not diluted by meeting each other. They are enriched. The Confluence collection
            is the proof — two traditions in the same garment, neither diminished, both amplified.
          </p>
        </RevealSection>
      </section>

    </main>
  )
}
