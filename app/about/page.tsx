import Image from 'next/image'
import { RevealSection } from '@/components/ui/RevealSection'

export const metadata = {
  title: 'About — ABHAYA',
  description: 'The story of ABHAYA — fearlessness, friendship, and the fusion of Madhubani and Kullvi traditions.',
}

export default function About() {
  return (
    <main className="pt-24">

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/lookbook/about-diwali.jpg"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0" style={{ background: 'rgba(10,10,10,0.75)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0A0A0A 0%, transparent 60%)' }} />
        </div>
        <div className="relative z-10 max-w-4xl">
          <RevealSection>
            <p className="text-xs tracking-[0.3em] uppercase text-earth-warm mb-5 font-display">The Story</p>
            <h1
              className="font-serif italic text-earth-light"
              style={{ fontSize: 'clamp(36px, 5.5vw, 72px)', lineHeight: 1.1 }}
            >
              Born from friendship.<br />
              Rooted in earth.<br />
              Reaching for sky.
            </h1>
          </RevealSection>
        </div>
      </section>

      {/* The Name */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <RevealSection>
            <p className="text-xs tracking-[0.25em] uppercase text-earth-warm mb-6 font-display">01 — The Name</p>
            <h2
              className="font-display font-bold text-earth-light mb-4"
              style={{ fontSize: 'clamp(56px, 10vw, 112px)', letterSpacing: '-0.02em', lineHeight: 1 }}
            >
              अभय
            </h2>
            <p className="font-serif italic text-earth-warm text-xl mb-8">Abhaya — Fearlessness</p>
            <p className="text-earth-light/50 leading-relaxed mb-6">
              In Sanskrit, <em>Abhaya</em> means fearlessness — freedom from fear. It is also a sacred gesture,
              the Abhaya Mudra: the right hand raised, palm outward, offered as protection and courage.
            </p>
            <p className="text-earth-light/50 leading-relaxed">
              ABHAYA is not just a brand name. It is a declaration — that clothes can carry courage, that what
              you wear can be a reminder of who you are and who you are becoming.
            </p>
          </RevealSection>

          <RevealSection delay={0.15}>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/lookbook/madhubani-lotus.jpg"
                alt="Sacred lotus"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0" style={{ background: 'rgba(10,10,10,0.35)' }} />
            </div>
          </RevealSection>
        </div>
      </section>

      <div className="border-t border-earth-dark/20 max-w-5xl mx-auto" />

      {/* Changing Time */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <RevealSection className="mb-16">
          <p className="text-xs tracking-[0.25em] uppercase text-sky-bright mb-4 font-display">02 — Changing Time</p>
          <h2
            className="font-display font-bold text-earth-light"
            style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
          >
            The world changes.<br />We wear the change.
          </h2>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-earth-dark/10">
          {[
            { year: 'Ancient', label: 'Madhubani origins', desc: 'Women in Mithila painting sacred spaces with earth pigments — prayer, story, identity in every line.' },
            { year: 'Centuries', label: 'Kullvi weaving', desc: 'Mountain communities in Kullu weaving their identity into geometric cloth, generation after generation.' },
            { year: 'Now', label: 'ABHAYA', desc: 'Two traditions. One brand. The future of Indian identity wear — alive in thread, worn on the street.' },
          ].map(({ year, label, desc }, i) => (
            <RevealSection key={year} delay={i * 0.12}>
              <div className="p-8 bg-black-deep">
                <p className="text-xs tracking-[0.25em] uppercase text-earth-warm mb-4 font-display">{year}</p>
                <h3 className="font-display font-semibold text-earth-light text-lg mb-3">{label}</h3>
                <p className="text-earth-light/35 text-sm leading-relaxed">{desc}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      <div className="border-t border-earth-dark/20 max-w-5xl mx-auto" />

      {/* Friendship */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <RevealSection>
            <p className="text-xs tracking-[0.25em] uppercase text-earth-warm mb-6 font-display">03 — Friendship</p>
            <h2
              className="font-display font-bold text-earth-light mb-8"
              style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
            >
              ABHAYA started with people,<br />not with products.
            </h2>
            <p className="font-serif italic text-earth-warm/60 text-lg mb-6 leading-relaxed">
              &ldquo;What if what we wore told the story of where we come from — and where we are going together?&rdquo;
            </p>
            <p className="text-earth-light/40 leading-relaxed">
              The brand was born in conversations between friends from different states, different cultures,
              different backgrounds. India&apos;s richest cultural treasures were hidden from each other.
              Bihar did not know Kullu. Kullu did not know Bihar. ABHAYA is the introduction.
            </p>
          </RevealSection>

          <RevealSection delay={0.15}>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/lookbook/about-friends.jpg"
                alt="The human connection at the heart of ABHAYA"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0" style={{ background: 'rgba(10,10,10,0.25)' }} />
            </div>
          </RevealSection>
        </div>
      </section>

    </main>
  )
}
