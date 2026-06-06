'use client'

import { useRef, type ReactNode } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { cn } from '@/lib/cn'

/**
 * Wraps content in a perspective stage and tilts it toward the cursor —
 * children that set `transform: translateZ(Npx)` float forward at depth,
 * producing a layered, "rendered model" feel rather than a flat hover.
 */
export function Tilt3DCard({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)

  const rotateX = useSpring(useTransform(py, [0, 1], [11, -11]), { stiffness: 260, damping: 24, mass: 0.6 })
  const rotateY = useSpring(useTransform(px, [0, 1], [-11, 11]), { stiffness: 260, damping: 24, mass: 0.6 })
  const scale = useSpring(1, { stiffness: 260, damping: 24 })

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    px.set((e.clientX - rect.left) / rect.width)
    py.set((e.clientY - rect.top) / rect.height)
  }
  function onEnter() {
    scale.set(1.025)
  }
  function onLeave() {
    px.set(0.5)
    py.set(0.5)
    scale.set(1)
  }

  return (
    <div ref={ref} onMouseMove={onMove} onMouseEnter={onEnter} onMouseLeave={onLeave} className={cn('group/tilt', className)} style={{ perspective: 1400 }}>
      <motion.div
        style={{ rotateX, rotateY, scale, transformStyle: 'preserve-3d' }}
        className="relative w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  )
}
