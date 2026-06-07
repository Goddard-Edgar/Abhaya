'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { MadhubaniCorner } from '@/components/patterns/MadhubaniCorner'
import { PatternBackground } from '@/components/patterns/PatternBackground'
import { letterReveal, staggerContainer, fadeUp } from '@/lib/animations'

const letters = 'अभय'.split('')

export function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] flex flex-col items-center justify-center overflow-hidden">
      {/* LEFT photo panel — Madhubani / peacock feather */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        className="absolute top-0 left-0 bottom-0 w-[38%] pointer-events-none"
      >
        <Image
          src="/images/lookbook/madhubani-peacock.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="38vw"
          priority
        />
        {/* Earth-tone tint */}
        <div className="absolute inset-0" style={{ background: 'rgba(42,27,16,0.45)' }} />
        {/* Fade to black at the right edge */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, transparent 20%, #0A0A0A 100%)' }} />
        {/* Fade to black at top/bottom */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #0A0A0A 0%, transparent 15%, transparent 85%, #0A0A0A 100%)' }} />
      </motion.div>

      {/* RIGHT photo panel — Kullvi / loom hands */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        className="absolute top-0 right-0 bottom-0 w-[38%] pointer-events-none"
      >
        <Image
          src="/images/lookbook/kullvi-loom-hands.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="38vw"
          priority
        />
        {/* Sky-blue tint */}
        <div className="absolute inset-0" style={{ background: 'rgba(12,37,48,0.45)' }} />
        {/* Fade to black at the left edge */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to left, transparent 20%, #0A0A0A 100%)' }} />
        {/* Fade to black at top/bottom */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #0A0A0A 0%, transparent 15%, transparent 85%, #0A0A0A 100%)' }} />
      </motion.div>

      {/* Background pattern — sits on top of photos, adds texture */}
      <PatternBackground variant="madhubani" opacity={0.03} />
      <PatternBackground variant="kullvi" opacity={0.02} className="opacity-60" />

      {/* Radial vignette — keeps the centre text area dark and readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 55% 70% at center, transparent 30%, #0A0A0A 90%)' }}
      />

      {/* Corner ornaments */}
      <div className="absolute top-20 left-6 opacity-30">
        <MadhubaniCorner rotate={0} size={100} />
      </div>
      <div className="absolute top-20 right-6 opacity-25" style={{ filter: 'hue-rotate(150deg) saturate(1.4)' }}>
        <MadhubaniCorner rotate={90} size={100} />
      </div>
      <div className="absolute bottom-8 left-6 opacity-20" style={{ filter: 'hue-rotate(150deg) saturate(1.4)' }}>
        <MadhubaniCorner rotate={270} size={80} />
      </div>
      <div className="absolute bottom-8 right-6 opacity-20">
        <MadhubaniCorner rotate={180} size={80} />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Season label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs tracking-[0.3em] uppercase text-earth-warm mb-8 font-display"
        >
          SS 2025 — Fearlessness
        </motion.p>

        {/* Brand name — letter by letter */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex overflow-hidden mb-6"
          style={{ perspective: '800px' }}
        >
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              variants={letterReveal}
              className="font-bold text-earth-light block"
              style={{
                fontFamily: 'var(--font-hindi)',
                fontSize: 'clamp(72px, 17vw, 210px)',
                lineHeight: 1.15,
                letterSpacing: '0.01em',
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.9 }}
          className="font-serif italic text-earth-warm/80 mb-10 max-w-lg"
          style={{ fontSize: 'clamp(18px, 2.5vw, 26px)', lineHeight: 1.5 }}
        >
          Where <span className="text-sky-bright/90 not-italic">earth meets sky</span>. Where plains meet mountains.<br />
          Where cloth becomes identity.
        </motion.p>

        {/* Divider line — gradient earth to sky */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-20 h-px mb-10 origin-center"
          style={{ background: 'linear-gradient(90deg, var(--brown-warm), var(--blue-bright))' }}
        />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="flex gap-6 items-center"
        >
          <Link
            href="/collections"
            className="text-xs tracking-[0.25em] uppercase font-display font-medium text-earth-light border border-earth-warm/40 px-8 py-3 hover:bg-earth-warm/10 hover:border-earth-warm transition-all duration-300"
          >
            Explore Collections
          </Link>
          <Link
            href="/culture"
            className="text-xs tracking-[0.25em] uppercase font-display font-medium text-earth-warm/60 hover:text-earth-warm transition-colors duration-300"
          >
            Our Culture →
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <p className="text-[10px] tracking-[0.3em] uppercase text-earth-light/20 font-display">Scroll</p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-earth-warm/30 to-transparent"
        />
      </motion.div>
    </section>
  )
}
