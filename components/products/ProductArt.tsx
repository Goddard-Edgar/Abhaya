'use client'

import { useId } from 'react'
import { TEE_PATH, TEE_PRINT_AREA } from './TshirtBlank'
import { MotifPrint } from '@/components/patterns/MotifPrint'

/**
 * Stylised "product photography" replacement — a backdrop panel with the tee
 * silhouette and its motif screen-printed in place, rendered entirely in SVG
 * so every product visual is true to its actual print rather than stock photography.
 */
export function ProductArt({
  motif,
  accentHex,
  accentHex2,
  view = 'front',
  backdrop = true,
  className,
}: {
  motif: string
  accentHex: string
  accentHex2?: string
  view?: 'front' | 'back'
  /** Set false to composite the tee into a scene that supplies its own background. */
  backdrop?: boolean
  className?: string
}) {
  const teeGrad = useId()
  const backdropGrad = useId()

  return (
    <svg viewBox="0 0 240 280" className={className} preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id={teeGrad} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1C1C1C" />
          <stop offset="50%" stopColor="#222222" />
          <stop offset="100%" stopColor="#161616" />
        </linearGradient>
        {backdrop && (
          <radialGradient id={backdropGrad} cx="50%" cy="38%" r="65%">
            <stop offset="0%" stopColor={accentHex} stopOpacity="0.16" />
            <stop offset="100%" stopColor={accentHex} stopOpacity="0" />
          </radialGradient>
        )}
      </defs>

      {/* Backdrop panel */}
      {backdrop && (
        <>
          <rect x="0" y="0" width="240" height="280" fill="#0E0E0E" />
          <rect x="0" y="0" width="240" height="280" fill={`url(#${backdropGrad})`} />
        </>
      )}

      {/* Garment silhouette */}
      <g style={{ filter: view === 'back' ? 'brightness(0.8)' : 'none' }}>
        <path d={TEE_PATH} fill={`url(#${teeGrad})`} stroke={accentHex} strokeOpacity="0.35" strokeWidth="1.5" />
        <path d="M 95 40 Q 120 60 145 40" fill="none" stroke={accentHex} strokeOpacity="0.6" strokeWidth="2.5" />
        <line x1="65" y1="90" x2="65" y2="260" stroke={accentHex} strokeOpacity="0.15" strokeWidth="1" />
        <line x1="175" y1="90" x2="175" y2="260" stroke={accentHex} strokeOpacity="0.15" strokeWidth="1" />
        <line x1="65" y1="255" x2="175" y2="255" stroke={accentHex} strokeOpacity="0.15" strokeWidth="1" />

        {/* The print — only shown on the front view */}
        {view === 'front' && (
          <svg
            x={TEE_PRINT_AREA.x}
            y={TEE_PRINT_AREA.y}
            width={TEE_PRINT_AREA.width}
            height={TEE_PRINT_AREA.height}
            viewBox="0 0 100 100"
            overflow="visible"
          >
            <MotifPrint motif={motif} color={accentHex} color2={accentHex2} />
          </svg>
        )}
      </g>
    </svg>
  )
}
