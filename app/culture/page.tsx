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
              {/* Madhubani SVG artwork */}
              <div className="relative aspect-square flex items-center justify-center">
                <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-sm">
                  {/* Outer border */}
                  <rect x="10" y="10" width="380" height="380" stroke="#C4956A" strokeWidth="2" fill="none" opacity="0.4" />
                  <rect x="18" y="18" width="364" height="364" stroke="#C4956A" strokeWidth="1" fill="none" opacity="0.2" />

                  {/* Central lotus */}
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
                    const rad = (angle * Math.PI) / 180
                    const cx = 200 + Math.cos(rad) * 70
                    const cy = 200 + Math.sin(rad) * 70
                    return (
                      <ellipse
                        key={angle}
                        cx={cx} cy={cy} rx={40} ry={14}
                        transform={`rotate(${angle}, ${cx}, ${cy})`}
                        stroke="#C4956A" strokeWidth="1.5" fill="none" opacity="0.8"
                      />
                    )
                  })}
                  <circle cx="200" cy="200" r="25" stroke="#C4956A" strokeWidth="2" fill="none" opacity="0.8" />
                  <circle cx="200" cy="200" r="10" stroke="#C4956A" strokeWidth="1.5" fill="none" opacity="0.6" />
                  <circle cx="200" cy="200" r="4" fill="#C4956A" opacity="0.8" />

                  {/* Corner fish */}
                  {[[60,60,45],[340,60,135],[60,340,315],[340,340,225]].map(([x, y, rot]) => (
                    <g key={`${x}-${y}`} transform={`translate(${x}, ${y}) rotate(${rot})`}>
                      <ellipse cx="0" cy="0" rx="22" ry="11" stroke="#C4956A" strokeWidth="1.2" fill="none" opacity="0.7" />
                      <path d="M -22 0 L -30 -9 L -30 9 Z" stroke="#C4956A" strokeWidth="1" fill="none" opacity="0.7" />
                      <circle cx="12" cy="-2" r="2.5" fill="#C4956A" opacity="0.7" />
                      <line x1="-18" y1="-6" x2="14" y2="-6" stroke="#C4956A" strokeWidth="0.5" opacity="0.4" />
                      <line x1="-18" y1="0" x2="16" y2="0" stroke="#C4956A" strokeWidth="0.5" opacity="0.4" />
                      <line x1="-18" y1="6" x2="14" y2="6" stroke="#C4956A" strokeWidth="0.5" opacity="0.4" />
                    </g>
                  ))}

                  {/* Sun/peacock elements */}
                  {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a) => {
                    const rad = (a * Math.PI) / 180
                    return (
                      <line
                        key={a}
                        x1={200 + Math.cos(rad) * 130}
                        y1={200 + Math.sin(rad) * 130}
                        x2={200 + Math.cos(rad) * 150}
                        y2={200 + Math.sin(rad) * 150}
                        stroke="#C4956A" strokeWidth="1" opacity="0.4"
                      />
                    )
                  })}
                </svg>
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
              <div className="flex items-center justify-center">
                <KullviGeometric color="#00B4D8" size={320} className="opacity-80" />
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
