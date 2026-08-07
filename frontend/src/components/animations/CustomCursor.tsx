'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useCustomCursor } from '@/hooks/use-custom-cursor'

export default function CustomCursor() {
  const { position, isHovering } = useCustomCursor()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    // Don't hide default cursor to avoid interaction issues
    
    return () => {
      document.body.style.cursor = 'auto'
    }
  }, [])

  if (!isMounted) return null

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="custom-cursor fixed w-4 h-4 bg-primary rounded-full pointer-events-none z-[9999]"
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
      
      {/* Outer ring */}
      <motion.div
        className="custom-cursor fixed w-12 h-12 border-2 border-primary rounded-full pointer-events-none z-[9998]"
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
      
      {/* Glow effect */}
      <motion.div
        className="custom-cursor fixed w-24 h-24 bg-primary/20 rounded-full blur-xl pointer-events-none z-[9997]"
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
