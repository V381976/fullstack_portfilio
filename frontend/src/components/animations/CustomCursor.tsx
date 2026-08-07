'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useCustomCursor } from '@/hooks/use-custom-cursor'

export default function CustomCursor() {
  const { position, isHovering } = useCustomCursor()
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const mediaFine = window.matchMedia('(pointer: fine)')
    const mediaMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    const update = () => {
      setEnabled(mediaFine.matches && !mediaMotion.matches)
    }

    update()
    mediaFine.addEventListener('change', update)
    mediaMotion.addEventListener('change', update)

    return () => {
      mediaFine.removeEventListener('change', update)
      mediaMotion.removeEventListener('change', update)
      document.body.style.cursor = 'auto'
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      <motion.div
        className="custom-cursor fixed w-4 h-4 bg-primary rounded-full pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: position.x - 8,
          y: position.y - 8,
          scale: isHovering ? 0.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
      />

      <motion.div
        className="custom-cursor fixed w-12 h-12 border-2 border-primary rounded-full pointer-events-none z-[9998] hidden md:block"
        animate={{
          x: position.x - 24,
          y: position.y - 24,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 20,
        }}
      />

      <motion.div
        className="custom-cursor fixed w-24 h-24 bg-primary/20 rounded-full blur-xl pointer-events-none z-[9997] hidden md:block"
        animate={{
          x: position.x - 48,
          y: position.y - 48,
          scale: isHovering ? 2 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 15,
        }}
      />
    </>
  )
}
