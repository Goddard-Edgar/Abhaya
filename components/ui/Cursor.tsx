'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function Cursor() {
  const [isTouch, setIsTouch] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isDown, setIsDown] = useState(false)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  // Ring trails the raw position with a quick, light spring — no laggy float
  const ringX = useSpring(mouseX, { stiffness: 900, damping: 40, mass: 0.25 })
  const ringY = useSpring(mouseY, { stiffness: 900, damping: 40, mass: 0.25 })

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true)
      return
    }

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
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

    const onDown = () => setIsDown(true)
    const onUp = () => setIsDown(false)

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
    }
  }, [mouseX, mouseY])

  if (isTouch) return null

  const ringSize = isHovering ? 52 : isDown ? 22 : 34

  return (
    <>
      {/* Dot — locked to the raw cursor position, zero lag */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovering ? 0 : 5,
          height: isHovering ? 0 : 5,
          background: 'linear-gradient(135deg, var(--blue-bright), var(--brown-warm))',
        }}
        transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
      />
      {/* Ring — snaps tight to the dot, morphs on hover / click */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          border: isHovering ? '1px solid var(--blue-bright)' : '1px solid var(--brown-warm)',
          background: isHovering ? 'rgba(0,180,216,0.06)' : 'transparent',
        }}
        animate={{
          width: ringSize,
          height: ringSize,
          opacity: isDown ? 0.8 : isHovering ? 0.9 : 0.4,
        }}
        transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
      />
    </>
  )
}
