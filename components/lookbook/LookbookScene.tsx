import Image from 'next/image'
import { ProductArt } from '@/components/products/ProductArt'
import { MadhubaniCorner } from '@/components/patterns/MadhubaniCorner'
import { KullviGeometric } from '@/components/patterns/KullviGeometric'
import type { LookbookEntry } from '@/types/lookbook'

const THEME = {
  madhubani: {
    accent: '#C4956A',
    accent2: undefined as string | undefined,
    gradient: 'linear-gradient(160deg, rgba(42,27,16,0.72) 0%, rgba(14,14,14,0.85) 100%)',
  },
  kullvi: {
    accent: '#00B4D8',
    accent2: undefined as string | undefined,
    gradient: 'linear-gradient(160deg, rgba(12,37,48,0.72) 0%, rgba(14,14,14,0.88) 100%)',
  },
  fusion: {
    accent: '#C4956A',
    accent2: '#00B4D8',
    gradient: 'linear-gradient(135deg, rgba(42,27,16,0.7) 0%, rgba(14,14,14,0.8) 50%, rgba(12,37,48,0.7) 100%)',
  },
}

export function LookbookScene({ entry, tilt = 0 }: { entry: LookbookEntry; tilt?: number }) {
  const theme = THEME[entry.style]

  return (
    <div className="relative w-full h-full overflow-hidden bg-black-deep">
      {/* Real photo background */}
      {entry.bg && (
        <Image
          src={entry.bg}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      )}

      {/* Tinted gradient overlay */}
      <div className="absolute inset-0" style={{ background: theme.gradient }} />

      {/* Corner brand ornament */}
      <div className="absolute -top-3 -left-3 opacity-30">
        {entry.style === 'kullvi' ? (
          <KullviGeometric size={88} />
        ) : (
          <MadhubaniCorner size={88} />
        )}
      </div>

      {/* Tee with motif print */}
      <div
        className="absolute inset-0 flex items-center justify-center p-8"
        style={{ transform: `rotate(${tilt}deg)` }}
      >
        <ProductArt
          motif={entry.motif}
          accentHex={theme.accent}
          accentHex2={theme.accent2}
          backdrop={false}
          className="w-full h-full max-w-[200px] drop-shadow-[0_28px_56px_rgba(0,0,0,0.7)]"
        />
      </div>

      {/* Bottom fade + caption */}
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black-deep/90 to-transparent pointer-events-none" />
      <div className="absolute bottom-4 left-4 right-4">
        <p className="text-[9px] tracking-[0.25em] uppercase font-display" style={{ color: theme.accent }}>
          {entry.season}
        </p>
        <p className="text-xs text-earth-light/70 font-serif italic mt-0.5 leading-snug">{entry.caption}</p>
      </div>
    </div>
  )
}
