'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const [isTouch, setIsTouch] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [pos, setPos] = useState({ x: -100, y: -100 })

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true)
      return
    }

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
    }

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      setIsHovering(
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') !== null ||
        target.closest('button') !== null
      )
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
    }
  }, [])

  if (isTouch) return null

  return (
    <>
      {/* Outer ring */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        animate={{
          x: pos.x - (isHovering ? 20 : 16),
          y: pos.y - (isHovering ? 20 : 16),
          width: isHovering ? 40 : 32,
          height: isHovering ? 40 : 32,
          opacity: isHovering ? 0.5 : 0.3,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 28, mass: 0.5 }}
        style={{
          borderRadius: '50%',
          border: '1px solid #C4956A',
        }}
      />
      {/* Dot */}
      <motion.div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        animate={{ x: pos.x - 3, y: pos.y - 3 }}
        transition={{ type: 'spring', stiffness: 600, damping: 30 }}
        style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: '#C4956A',
        }}
      />
    </>
  )
}
