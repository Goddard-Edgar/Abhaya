import { ProductArt } from '@/components/products/ProductArt'
import { MadhubaniCorner } from '@/components/patterns/MadhubaniCorner'
import { KullviGeometric } from '@/components/patterns/KullviGeometric'
import { PatternBackground } from '@/components/patterns/PatternBackground'
import type { LookbookEntry } from '@/types/lookbook'

const THEME = {
  madhubani: {
    accent: '#C4956A',
    accent2: undefined as string | undefined,
    pattern: 'madhubani' as const,
    gradient: 'radial-gradient(ellipse at 30% 20%, #2A1B10 0%, #0E0E0E 65%)',
  },
  kullvi: {
    accent: '#00B4D8',
    accent2: undefined as string | undefined,
    pattern: 'kullvi' as const,
    gradient: 'radial-gradient(ellipse at 70% 20%, #0C2530 0%, #0E0E0E 65%)',
  },
  fusion: {
    accent: '#C4956A',
    accent2: '#00B4D8',
    pattern: 'madhubani' as const,
    gradient: 'linear-gradient(135deg, #2A1B10 0%, #0E0E0E 50%, #0C2530 100%)',
  },
}

/**
 * Editorial "lookbook frame" composed entirely from ABHAYA's own design
 * system — gradient backdrop, hand-drawn corner ornament, and the actual
 * tee print rendered in scene — standing in for fashion photography so
 * every visual matches the garments the brand really makes.
 */
export function LookbookScene({ entry, tilt = 0 }: { entry: LookbookEntry; tilt?: number }) {
  const theme = THEME[entry.style]

  return (
    <div className="relative w-full h-full overflow-hidden" style={{ background: theme.gradient }}>
      <PatternBackground variant={theme.pattern} opacity={0.05} />

      <div className="absolute -top-3 -left-3 opacity-20">
        {entry.style === 'kullvi' ? (
          <KullviGeometric size={92} />
        ) : (
          <MadhubaniCorner size={92} />
        )}
      </div>

      <div
        className="absolute inset-0 flex items-center justify-center p-10"
        style={{ transform: `rotate(${tilt}deg)` }}
      >
        <ProductArt
          motif={entry.motif}
          accentHex={theme.accent}
          accentHex2={theme.accent2}
          backdrop={false}
          className="w-full h-full max-w-[200px] drop-shadow-[0_24px_48px_rgba(0,0,0,0.5)]"
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black-deep/75 to-transparent pointer-events-none" />

      <div className="absolute bottom-4 left-4 right-4">
        <p className="text-[9px] tracking-[0.25em] uppercase font-display" style={{ color: theme.accent }}>
          {entry.season}
        </p>
        <p className="text-xs text-earth-light/60 font-serif italic mt-0.5 leading-snug">{entry.caption}</p>
      </div>
    </div>
  )
}
