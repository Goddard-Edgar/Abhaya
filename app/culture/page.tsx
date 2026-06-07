import Image from 'next/image'
import { RevealSection } from '@/components/ui/RevealSection'
import { MadhubaniDivider } from '@/components/patterns/MadhubaniDivider'
import { KullviBorder } from '@/components/patterns/KullviBorder'
import { KullviGeometric } from '@/components/patterns/KullviGeometric'
import { PatternBackground } from '@/components/patterns/PatternBackground'
import { MadhubaniCorner } from '@/components/patterns/MadhubaniCorner'

export const metadata = {
  title: 'Culture — ABHAYA',
  description: 'The living traditions behind ABHAYA — Madhubani art and Kullvi weaving, united in fearless cloth.',
}

export default function Culture() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden px-6">
        {/* Split photo background — rangoli left, loom right */}
        <div className="absolute inset-0 grid grid-cols-2">
          <div className="relative overflow-hidden">
            <Image src="/images/lookbook/madhubani-rangoli.jpg" alt="" fill className="object-cover opacity-20" sizes="50vw" />
          </div>
          <div className="relative overflow-hidden">
            <Image src="/images/lookbook/kullvi-loom-hands.jpg" alt="" fill className="object-cover opacity-20" sizes="50vw" />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black-deep/80 via-black-deep/60 to-black-deep/80" />
        <PatternBackground variant="madhubani" opacity={0.04} />
        <PatternBackground variant="kullvi" opacity={0.03} className="opacity-50" />
        <div className="absolute top-4 left-4 opacity-20">
          <MadhubaniCorner rotate={0} size={100} />
        </div>
        <div className="absolute top-4 right-4 opacity-20">
          <MadhubaniCorner rotate={90} size={100} />
        </div>
        <div className="relative z-10 text-center max-w-4xl">
          <RevealSection>
            <p className="text-xs tracking-[0.3em] uppercase text-earth-warm mb-6 font-display">The Heritage</p>
            <h1
              className="font-display font-bold text-earth-light mb-6"
              style={{ fontSize: 'clamp(48px, 8vw, 100px)', letterSpacing: '-0.02em', lineHeight: 1 }}
            >
              CULTURE
            </h1>
            <p className="font-serif italic text-earth-warm/70 text-xl max-w-2xl mx-auto leading-relaxed">
              Two ancient visual languages, separated by mountains and plains,
              finally introduced to each other through cloth.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* Madhubani Section — all earth tones */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #0A0A0A, #1A0F0A)' }}>
        <PatternBackground variant="madhubani" opacity={0.06} />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <RevealSection>
              {/* Photo composition — real Madhubani cultural imagery */}
              <div className="relative aspect-square overflow-hidden">
                {/* Primary: peacock feather — close-up richness */}
                <div className="absolute inset-0">
                  <Image
                    src="/images/lookbook/madhubani-peacock.jpg"
                    alt="Peacock feather — Madhubani's Mayur motif in nature"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {/* Earth-tone overlay */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, rgba(42,27,16,0.55) 0%, rgba(14,14,14,0.4) 60%, rgba(42,27,16,0.7) 100%)' }} />

                {/* Inset: holi/folk colour — bottom-left panel */}
                <div className="absolute bottom-4 left-4 w-2/5 aspect-[4/3] overflow-hidden ring-1 ring-earth-warm/30">
                  <Image
                    src="/images/lookbook/culture-madhubani-holi.jpg"
                    alt="Indian folk colour tradition"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                  <div className="absolute inset-0" style={{ background: 'rgba(42,27,16,0.35)' }} />
                </div>

                {/* Inset: lotus — bottom-right panel */}
                <div className="absolute bottom-4 right-4 w-2/5 aspect-[4/3] overflow-hidden ring-1 ring-earth-warm/30">
                  <Image
                    src="/images/lookbook/madhubani-lotus.jpg"
                    alt="Lotus — sacred Kamal motif"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                  <div className="absolute inset-0" style={{ background: 'rgba(42,27,16,0.3)' }} />
                </div>

                {/* SVG motif overlay — brand art on top of photography */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <svg viewBox="0 0 400 400" fill="none" className="w-3/4 opacity-60">
                    <rect x="10" y="10" width="380" height="380" stroke="#C4956A" strokeWidth="2" fill="none" opacity="0.5" />
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
                      const rad = (angle * Math.PI) / 180
                      const cx = 200 + Math.cos(rad) * 70
                      const cy = 200 + Math.sin(rad) * 70
                      return <ellipse key={angle} cx={cx} cy={cy} rx={40} ry={14} transform={`rotate(${angle}, ${cx}, ${cy})`} stroke="#C4956A" strokeWidth="1.5" fill="none" opacity="0.9" />
                    })}
                    <circle cx="200" cy="200" r="25" stroke="#C4956A" strokeWidth="2" fill="none" opacity="0.9" />
                    <circle cx="200" cy="200" r="4" fill="#C4956A" opacity="0.9" />
                    {[[60,60,45],[340,60,135],[60,340,315],[340,340,225]].map(([x, y, rot]) => (
                      <g key={`${x}-${y}`} transform={`translate(${x}, ${y}) rotate(${rot})`}>
                        <ellipse cx="0" cy="0" rx="22" ry="11" stroke="#C4956A" strokeWidth="1.2" fill="none" opacity="0.8" />
                        <path d="M -22 0 L -30 -9 L -30 9 Z" stroke="#C4956A" strokeWidth="1" fill="none" opacity="0.8" />
                        <circle cx="12" cy="-2" r="2.5" fill="#C4956A" opacity="0.8" />
                      </g>
                    ))}
                  </svg>
                </div>

                {/* Corner ornament */}
                <div className="absolute top-2 right-2 opacity-40">
                  <MadhubaniCorner rotate={90} size={64} />
                </div>
              </div>
            </RevealSection>

            <RevealSection delay={0.2}>
              <p className="text-xs tracking-[0.25em] uppercase text-earth-warm mb-6 font-display">01 — The Earth Tradition</p>
              <h2
                className="font-display font-bold text-earth-light mb-6"
                style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.1, letterSpacing: '-0.01em' }}
              >
                Madhubani
              </h2>
              <p className="font-serif italic text-earth-warm text-lg mb-6">
                The Art of Mithila
              </p>
              <p className="text-earth-light/50 leading-relaxed mb-6">
                For centuries, women in the Mithila region of Bihar have painted their homes with sacred images —
                fish, lotus, sun, moon, birds, and geometric patterns — using earth pigments, plant dyes, and
                their own hands. This was not decoration. It was prayer. It was story. It was identity.
              </p>
              <p className="text-earth-light/50 leading-relaxed mb-6">
                The fish represents fertility and good fortune. The lotus signifies purity rising from mud. The
                geometric patterns hold cosmic order. Every motif has meaning that goes back thousands of years.
              </p>
              <p className="text-earth-light/50 leading-relaxed">
                In ABHAYA, Madhubani becomes wearable — the fish swims across a chest, the lotus blooms on a
                shoulder, the sun rises at the hem. The tradition continues, in cotton and thread.
              </p>

              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-earth-dark/30 pt-8">
                {[['Origin', 'Mithila, Bihar'], ['Medium', 'Earth pigments, thread'], ['Motifs', 'Fish, lotus, sun, birds']].map(([label, val]) => (
                  <div key={label}>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-earth-warm/40 mb-1 font-display">{label}</p>
                    <p className="text-sm text-earth-light/60">{val}</p>
                  </div>
                ))}
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      <div className="opacity-30">
        <MadhubaniDivider />
      </div>

      {/* Kullvi Section — all blue tones */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #0A0A0A, #060F15)' }}>
        <PatternBackground variant="kullvi" opacity={0.06} />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <RevealSection delay={0.2} className="order-2 lg:order-1">
              <p className="text-xs tracking-[0.25em] uppercase text-sky-bright mb-6 font-display">02 — The Mountain Tradition</p>
              <h2
                className="font-display font-bold text-earth-light mb-6"
                style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.1, letterSpacing: '-0.01em' }}
              >
                Kullvi
              </h2>
              <p className="font-serif italic text-sky-bright text-lg mb-6">
                The Weave of Kullu
              </p>
              <p className="text-earth-light/50 leading-relaxed mb-6">
                High in the Kullu valley, where the Beas river cuts through Himalayan peaks, communities have woven
                their identity into fabric for generations. The Kullvi shawl — with its distinctive geometric borders,
                diamond lattices, and deep indigo dyes — is not just clothing. It is a flag. A declaration of home.
              </p>
              <p className="text-earth-light/50 leading-relaxed mb-6">
                The patterns are architectural: precise, geometric, ordered. The mountain people built their aesthetic
                from the geometry of peaks and valleys, the symmetry of the high-altitude world. Every diamond in
                the weave holds a piece of that landscape.
              </p>
              <p className="text-earth-light/50 leading-relaxed">
                In ABHAYA, Kullvi geometry moves from the loom to the city. The diamond pattern becomes a print.
                The shawl border becomes a hem detail. The mountain comes down to the street.
              </p>

              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-sky-deep/20 pt-8">
                {[['Origin', 'Kullu, Himachal Pradesh'], ['Medium', 'Wool, indigo dye, weaving'], ['Motifs', 'Diamonds, chevrons, lattice']].map(([label, val]) => (
                  <div key={label}>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-sky-bright/40 mb-1 font-display">{label}</p>
                    <p className="text-sm text-earth-light/60">{val}</p>
                  </div>
                ))}
              </div>
            </RevealSection>

            <RevealSection className="order-1 lg:order-2">
              {/* Photo composition — real Kullvi cultural imagery */}
              <div className="relative aspect-square overflow-hidden">
                {/* Primary: loom hands with colourful Kullvi textiles */}
                <div className="absolute inset-0">
                  <Image
                    src="/images/lookbook/kullvi-loom-hands.jpg"
                    alt="Hands at the Kullu loom — Kullvi weaving tradition"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {/* Sky-blue overlay */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, rgba(12,37,48,0.5) 0%, rgba(14,14,14,0.35) 60%, rgba(12,37,48,0.72) 100%)' }} />

                {/* Inset: himachal man — bottom-left */}
                <div className="absolute bottom-4 left-4 w-2/5 aspect-[4/3] overflow-hidden ring-1 ring-sky-bright/30">
                  <Image
                    src="/images/lookbook/culture-kullvi-man.jpg"
                    alt="Himachal man — Kullvi heritage"
                    fill
                    className="object-cover object-top"
                    sizes="25vw"
                  />
                  <div className="absolute inset-0" style={{ background: 'rgba(12,37,48,0.35)' }} />
                </div>

                {/* Inset: himalayan mountain — bottom-right */}
                <div className="absolute bottom-4 right-4 w-2/5 aspect-[4/3] overflow-hidden ring-1 ring-sky-bright/30">
                  <Image
                    src="/images/lookbook/kullvi-himalaya.jpg"
                    alt="Himalayan peaks — the world behind the Kullvi weave"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                  <div className="absolute inset-0" style={{ background: 'rgba(12,37,48,0.3)' }} />
                </div>

                {/* KullviGeometric SVG overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <KullviGeometric color="#00B4D8" size={280} className="opacity-40" />
                </div>

                {/* Corner ornament */}
                <div className="absolute top-2 left-2 opacity-40">
                  <KullviGeometric size={64} color="#00B4D8" />
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      <div className="opacity-20">
        <KullviBorder color="#00B4D8" />
      </div>

      {/* Fusion / Confluence section */}
      <section className="py-32 relative overflow-hidden text-center px-6">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, #1A0F08 0%, #0A0A0A 60%)' }} />
        <PatternBackground variant="madhubani" opacity={0.04} />
        <PatternBackground variant="kullvi" opacity={0.04} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <RevealSection>
            <p className="text-xs tracking-[0.3em] uppercase text-earth-warm mb-6 font-display">03 — The Meeting</p>
            <h2
              className="font-display font-bold mb-8"
              style={{ fontSize: 'clamp(48px, 8vw, 100px)', lineHeight: 1, letterSpacing: '-0.02em' }}
            >
              <span className="text-earth-warm">Earth</span>
              <span className="text-earth-light/20 mx-4">×</span>
              <span className="text-sky-bright">Sky</span>
            </h2>
            <p className="font-serif italic text-earth-light/60 text-xl leading-relaxed mb-10">
              When Madhubani&apos;s fish meets Kullvi&apos;s diamond — when Bihar&apos;s ochres dissolve into Himachal&apos;s indigo —
              something new is created. Not a compromise. A conversation.
            </p>
            <p className="text-earth-light/40 leading-relaxed max-w-xl mx-auto">
              This is ABHAYA&apos;s deepest belief: that cultures are not diluted by meeting each other. They are
              enriched. The Confluence collection is the proof — two traditions in the same garment, neither
              diminished, both amplified.
            </p>
          </RevealSection>
        </div>
      </section>

      <div className="opacity-30">
        <MadhubaniDivider />
      </div>
    </main>
  )
}
