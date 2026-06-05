'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface RevealSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function RevealSection({ children, className = '', delay = 0 }: RevealSectionProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
