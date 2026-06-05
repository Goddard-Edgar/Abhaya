import Link from 'next/link'
import { MadhubaniDivider } from '@/components/patterns/MadhubaniDivider'

const navLinks = [
  { href: '/about',       label: 'About' },
  { href: '/collections', label: 'Collections' },
  { href: '/culture',     label: 'Culture' },
  { href: '/lookbook',    label: 'Lookbook' },
  { href: '/contact',     label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="bg-black-mid border-t border-earth-dark/20">
      <div className="py-2">
        <MadhubaniDivider />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h2 className="font-display font-bold text-4xl tracking-[0.15em] text-earth-light uppercase mb-4">
              ABHAYA
            </h2>
            <p className="font-serif italic text-earth-warm/80 text-lg leading-relaxed">
              Where earth meets sky.<br />
              Where plains meet mountains.<br />
              Where cloth becomes identity.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-earth-warm/50 mb-6">Navigate</p>
            <nav className="flex flex-col gap-3">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm tracking-[0.1em] uppercase text-earth-light/50 hover:text-earth-light transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Philosophy */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-earth-warm/50 mb-6">Philosophy</p>
            <div className="flex flex-col gap-2">
              {['Changing Time', 'Friendship', 'Mixing of Cultures', 'Madhubani × Kullvi', 'Fearlessness'].map((item) => (
                <p key={item} className="text-sm text-earth-light/40 tracking-wide">{item}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-earth-dark/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs tracking-[0.15em] uppercase text-earth-light/20">
            © 2025 ABHAYA. All rights reserved.
          </p>
          <p className="font-serif italic text-earth-warm/30 text-sm">
            अभय — Fearlessness
          </p>
        </div>
      </div>
    </footer>
  )
}
