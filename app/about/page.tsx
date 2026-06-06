import { RevealSection } from '@/components/ui/RevealSection'
import { MadhubaniDivider } from '@/components/patterns/MadhubaniDivider'
import { KullviBorder } from '@/components/patterns/KullviBorder'
import { PatternBackground } from '@/components/patterns/PatternBackground'

export const metadata = {
  title: 'About — ABHAYA',
  description: 'The story of ABHAYA — fearlessness, friendship, and the fusion of Madhubani and Kullvi traditions.',
}

export default function About() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-center px-6 overflow-hidden">
        <PatternBackground variant="madhubani" opacity={0.04} />
        <div className="relative z-10 max-w-3xl">
          <RevealSection>
            <p className="text-xs tracking-[0.3em] uppercase text-earth-warm mb-6 font-display">The Story</p>
            <h1
              className="font-serif italic text-earth-light mb-8"
              style={{ fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: 1.1 }}
            >
              Born from friendship.<br />
              Rooted in earth.<br />
              Reaching for sky.
            </h1>
          </RevealSection>
        </div>
      </section>

      <div className="opacity-30">
        <MadhubaniDivider />
      </div>

      {/* The Name */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <RevealSection>
            <p className="text-xs tracking-[0.25em] uppercase text-earth-warm mb-4 font-display">01 — The Name</p>
            <h2
              className="font-display font-bold text-earth-light mb-6"
              style={{ fontSize: 'clamp(48px, 8vw, 96px)', letterSpacing: '-0.02em', lineHeight: 1 }}
            >
              अभय
            </h2>
            <h3 className="font-serif italic text-earth-warm text-2xl mb-6">Abhaya</h3>
            <p className="text-earth-light/60 leading-relaxed text-base mb-6">
              In Sanskrit, <em>Abhaya</em> means fearlessness — freedom from fear. It is also a sacred gesture, the
              Abhaya Mudra: the right hand raised, palm outward, offered as a gesture of protection, courage, and
              the promise that you need not be afraid.
            </p>
            <p className="text-earth-light/60 leading-relaxed text-base">
              ABHAYA is not just a brand name. It is a declaration. That clothes can carry courage. That what
              you wear can be a reminder of who you are — and who you are becoming.
            </p>
          </RevealSection>
          <RevealSection delay={0.2}>
            <div className="relative aspect-square flex items-center justify-center">
              <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-64 h-64">
                {/* Stylized Abhaya Mudra hand */}
                <circle cx="150" cy="150" r="140" stroke="#C4956A" strokeWidth="1" opacity="0.2" />
                <circle cx="150" cy="150" r="100" stroke="#C4956A" strokeWidth="0.6" opacity="0.15" />
                {/* Palm */}
                <path d="M 120 200 L 120 120 Q 120 100 135 100 L 135 160" stroke="#C4956A" strokeWidth="2" fill="none" opacity="0.6" />
                <path d="M 135 160 L 135 95 Q 135 78 148 78 L 148 155" stroke="#C4956A" strokeWidth="2" fill="none" opacity="0.6" />
                <path d="M 148 155 L 148 82 Q 148 65 161 65 L 161 155" stroke="#C4956A" strokeWidth="2" fill="none" opacity="0.6" />
                <path d="M 161 155 L 161 90 Q 161 73 174 73 L 174 160" stroke="#C4956A" strokeWidth="2" fill="none" opacity="0.6" />
                <path d="M 120 200 Q 120 215 147 215 Q 174 215 174 200 L 174 160" stroke="#C4956A" strokeWidth="2" fill="none" opacity="0.6" />
                {/* Decorative lines */}
                {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a) => {
                  const r = (a * Math.PI) / 180
                  return (
                    <line
                      key={a}
                      x1={150 + Math.cos(r) * 105}
                      y1={150 + Math.sin(r) * 105}
                      x2={150 + Math.cos(r) * 140}
                      y2={150 + Math.sin(r) * 140}
                      stroke="#C4956A"
                      strokeWidth="0.8"
                      opacity="0.3"
                    />
                  )
                })}
              </svg>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Changing Time */}
      <section className="py-24 bg-black-soft px-6">
        <div className="max-w-6xl mx-auto">
          <RevealSection className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-xs tracking-[0.25em] uppercase text-sky-bright mb-4 font-display">02 — Changing Time</p>
            <h2
              className="font-display font-bold text-earth-light mb-6"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
            >
              The world changes.<br />We wear the change.
            </h2>
            <p className="text-earth-light/50 leading-relaxed">
              Time does not stand still, and neither does craft. ABHAYA believes that tradition is not a museum piece —
              it is a living language. Madhubani has survived centuries. Kullvi weaving has clothed mountain communities
              for generations. We carry these forward, not preserved in amber, but alive in thread.
            </p>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { year: 'Ancient', label: 'Madhubani origins in Mithila', desc: 'A tradition of women painting sacred spaces with earth pigments' },
              { year: 'Centuries', label: 'Kullvi weaving in Kullu valley', desc: 'Mountain communities weaving identity into geometric cloth' },
              { year: 'Now', label: 'ABHAYA brings them together', desc: 'Two traditions. One brand. The future of Indian identity wear.' },
            ].map(({ year, label, desc }, i) => (
              <RevealSection key={year} delay={i * 0.15}>
                <div className="border-t border-earth-dark/30 pt-6 px-5 pb-6 backdrop-blur-md bg-white/[0.03] hover:bg-white/[0.06] transition-colors duration-300">
                  <p className="text-xs tracking-[0.25em] uppercase text-earth-warm mb-3 font-display">{year}</p>
                  <h3 className="font-display font-bold text-earth-light text-lg mb-3">{label}</h3>
                  <p className="text-earth-light/40 text-sm leading-relaxed">{desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <div className="opacity-20">
        <KullviBorder color="#00B4D8" />
      </div>

      {/* Friendship */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <RevealSection className="max-w-3xl">
          <p className="text-xs tracking-[0.25em] uppercase text-earth-warm mb-4 font-display">03 — Friendship</p>
          <h2
            className="font-display font-bold text-earth-light mb-8"
            style={{ fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
          >
            ABHAYA started with people,<br />not with products.
          </h2>
          <p className="text-earth-light/50 leading-relaxed text-lg mb-6 font-serif italic">
            &ldquo;What if what we wore told the story of where we come from — and where we are going together?&rdquo;
          </p>
          <p className="text-earth-light/50 leading-relaxed">
            The brand was not born in a boardroom. It was born in conversations — between friends from different
            states, different cultures, different backgrounds. In those conversations, something became clear:
            India&apos;s richest cultural treasures were hidden from each other. Bihar did not know Kullu. Kullu did
            not know Bihar. ABHAYA is the introduction.
          </p>
        </RevealSection>
      </section>

      <div className="opacity-30 mb-0">
        <MadhubaniDivider />
      </div>
    </main>
  )
}
