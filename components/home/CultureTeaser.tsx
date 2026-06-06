import Link from 'next/link'
import { RevealSection } from '@/components/ui/RevealSection'
import { KullviGeometric } from '@/components/patterns/KullviGeometric'
import { MadhubaniDivider } from '@/components/patterns/MadhubaniDivider'

export function CultureTeaser() {
  return (
    <section className="py-24 bg-black-soft relative overflow-hidden">
      <div className="absolute right-0 top-0 opacity-10">
        <KullviGeometric color="#00B4D8" size={300} />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <RevealSection>
            <p className="text-xs tracking-[0.25em] uppercase text-sky-bright mb-6 font-display">The Story</p>
            <h2
              className="font-serif italic text-earth-light mb-8"
              style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', lineHeight: 1.2 }}
            >
              Two traditions.<br />
              One fearless vision.
            </h2>
            <p className="text-earth-light/50 leading-relaxed mb-8 text-base">
              Madhubani art from the plains of Bihar meets Kullvi weaving from the mountains of Himachal Pradesh.
              In ABHAYA, these two ancient traditions find each other — not as a fusion, but as a friendship.
              Two cultures that have always existed in parallel, finally made to speak.
            </p>
            <Link
              href="/culture"
              className="text-xs tracking-[0.25em] uppercase font-display font-medium text-sky-bright border border-sky-bright/30 px-6 py-3 hover:bg-sky-bright/10 hover:border-sky-bright transition-all duration-300 inline-block"
            >
              Explore Culture →
            </Link>
          </RevealSection>

          <RevealSection delay={0.2}>
            <div className="grid grid-cols-2 gap-3">
              {[
                { title: 'Madhubani', sub: 'Bihar / Mithila Plains', color: 'border-earth-warm/30 hover:border-earth-warm' },
                { title: 'Kullvi', sub: 'Kullu / Himachal Mountains', color: 'border-sky-deep/30 hover:border-sky-deep' },
                { title: 'Fearlessness', sub: 'अभय — The Core', color: 'border-earth-warm/30 hover:border-earth-warm' },
                { title: 'Confluence', sub: 'Where They Meet', color: 'border-sky-deep/30 hover:border-sky-deep' },
              ].map(({ title, sub, color }) => (
                <div
                  key={title}
                  className={`border p-6 transition-all duration-300 backdrop-blur-md bg-white/[0.03] hover:bg-white/[0.06] ${color}`}
                >
                  <h3 className="font-display font-bold text-earth-light text-lg mb-1">{title}</h3>
                  <p className="text-xs text-earth-light/30 tracking-wide">{sub}</p>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </div>

      <div className="mt-20 opacity-30">
        <MadhubaniDivider color="#00B4D8" />
      </div>
    </section>
  )
}
