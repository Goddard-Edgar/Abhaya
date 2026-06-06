'use client'

import { useId } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { MotifPrint } from '@/components/patterns/MotifPrint'

export const TEE_PATH =
  'M 60 40 L 95 40 Q 120 60 145 40 L 180 40 L 220 70 L 205 110 L 175 90 L 175 260 L 65 260 L 65 90 L 35 110 L 20 70 Z'

export const TEE_PRINT_AREA = { x: 92, y: 120, width: 56, height: 70 }

function TeeFace({ accentHex, accentHex2, gradientId, motif, dim }: { accentHex: string; accentHex2?: string; gradientId: string; motif?: string; dim?: boolean }) {
  return (
    <svg viewBox="0 0 240 280" className="w-full h-full" style={{ filter: dim ? 'brightness(0.78)' : 'none' }}>
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1A1A1A" />
          <stop offset="50%" stopColor="#222222" />
          <stop offset="100%" stopColor="#141414" />
        </linearGradient>
      </defs>
      <path d={TEE_PATH} fill={`url(#${gradientId})`} stroke={accentHex} strokeOpacity="0.35" strokeWidth="1.5" />
      {/* Collar trim */}
      <path d="M 95 40 Q 120 60 145 40" fill="none" stroke={accentHex} strokeOpacity="0.6" strokeWidth="2.5" />
      {/* Side seams */}
      <line x1="65" y1="90" x2="65" y2="260" stroke={accentHex} strokeOpacity="0.15" strokeWidth="1" />
      <line x1="175" y1="90" x2="175" y2="260" stroke={accentHex} strokeOpacity="0.15" strokeWidth="1" />
      {/* Hem */}
      <line x1="65" y1="255" x2="175" y2="255" stroke={accentHex} strokeOpacity="0.15" strokeWidth="1" />
      {/* Screen-printed motif, chest placement */}
      {motif && !dim && (
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
    </svg>
  )
}

export function TshirtBlank({ accentHex = '#C4956A', accentHex2, motif }: { accentHex?: string; accentHex2?: string; motif?: string }) {
  const idFront = useId()
  const idBack = useId()
  const rotateY = useMotionValue(0)
  const springRotateY = useSpring(rotateY, { stiffness: 120, damping: 22, mass: 0.6 })

  return (
    <div
      className="relative w-full max-w-[280px] mx-auto aspect-[6/5] select-none rounded-sm overflow-visible"
      style={{ perspective: 1100 }}
    >
      {/* Ambient glow beneath the garment */}
      <div
        className="absolute inset-x-8 bottom-0 h-1/3 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at center, ${accentHex}22 0%, transparent 70%)`, filter: 'blur(18px)' }}
      />

      <motion.div
        className="absolute inset-0 cursor-grab active:cursor-grabbing"
        style={{ transformStyle: 'preserve-3d', rotateY: springRotateY }}
        drag="x"
        dragElastic={0.15}
        dragConstraints={{ left: 0, right: 0 }}
        dragMomentum={false}
        onDrag={(_, info) => rotateY.set(rotateY.get() + info.delta.x * 0.7)}
        whileTap={{ scale: 0.98 }}
      >
        {/* Front face */}
        <div className="absolute inset-0 flex items-center justify-center p-6" style={{ backfaceVisibility: 'hidden' }}>
          <TeeFace accentHex={accentHex} accentHex2={accentHex2} gradientId={idFront} motif={motif} />
        </div>
        {/* Back face */}
        <div
          className="absolute inset-0 flex items-center justify-center p-6"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <TeeFace accentHex={accentHex} gradientId={idBack} dim />
        </div>
      </motion.div>

      <p className="absolute -bottom-6 left-0 right-0 text-center text-[9px] tracking-[0.2em] uppercase text-earth-light/20 font-display">
        ↔ Drag to spin the blank
      </p>
    </div>
  )
}
