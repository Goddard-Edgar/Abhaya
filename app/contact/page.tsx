import { ContactForm } from '@/components/contact/ContactForm'
import { RevealSection } from '@/components/ui/RevealSection'
import { MadhubaniDivider } from '@/components/patterns/MadhubaniDivider'

export const metadata = {
  title: 'Contact — ABHAYA',
  description: 'Get in touch with ABHAYA — collaborations, stockists, press, and enquiries.',
}

export default function Contact() {
  return (
    <main className="pt-24">
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <RevealSection className="mb-16">
          <p className="text-xs tracking-[0.25em] uppercase text-earth-warm mb-4 font-display">Get in Touch</p>
          <h1
            className="font-display font-bold text-earth-light"
            style={{ fontSize: 'clamp(48px, 8vw, 100px)', letterSpacing: '-0.02em', lineHeight: 1 }}
          >
            Contact
          </h1>
        </RevealSection>

        <div className="opacity-20 mb-16">
          <MadhubaniDivider />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left — Brand info */}
          <RevealSection>
            <div className="mb-12">
              <p className="font-serif italic text-earth-warm/70 text-2xl leading-relaxed mb-8 max-w-sm">
                &ldquo;Wear what you believe. Wear where you&apos;re from. Wear fearlessly.&rdquo;
              </p>
              <p className="text-earth-light/40 text-sm leading-relaxed max-w-xs">
                For collaborations, wholesale enquiries, press requests, or just to talk about Madhubani and
                mountains — we&apos;re here.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {[
                { label: 'Collections', desc: 'Enquire about our current or upcoming collections' },
                { label: 'Collaborations', desc: 'Artists, craftspeople, cultural institutions' },
                { label: 'Press & Media', desc: 'Editorial features, lookbook requests, brand story' },
                { label: 'Stockists', desc: 'Carry ABHAYA in your store' },
              ].map(({ label, desc }) => (
                <div key={label} className="border-l border-earth-dark/30 pl-4 py-3 pr-3 backdrop-blur-md bg-white/[0.02] hover:bg-white/[0.05] hover:border-sky-bright transition-all duration-300">
                  <p className="text-sm font-display font-medium text-earth-light mb-1">{label}</p>
                  <p className="text-xs text-earth-light/30">{desc}</p>
                </div>
              ))}
            </div>
          </RevealSection>

          {/* Right — Form */}
          <RevealSection delay={0.2}>
            <ContactForm />
          </RevealSection>
        </div>
      </section>
    </main>
  )
}
