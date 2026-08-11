'use client'

import { motion } from 'framer-motion'

type SkillNode = {
  name: string
  color: string
}

/** Orbital skills view with Framer Motion — no Three.js */
export default function SkillsGalaxy({ skills }: { skills: SkillNode[] }) {
  const items = skills.slice(0, 12)

  return (
    <div className="relative h-[280px] sm:h-[340px] md:h-[380px] w-full rounded-xl overflow-hidden glass flex items-center justify-center">
      <div className="absolute inset-0 page-editor-grid opacity-40" />

      <motion.div
        className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {items.map((skill, index) => {
          const angle = (360 / items.length) * index
          const radius = 110 // Increased radius for better spacing
          const x = Math.cos((angle * Math.PI) / 180) * radius
          const y = Math.sin((angle * Math.PI) / 180) * radius
          
          return (
            <motion.div
              key={skill.name}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
              }}
              whileHover={{ scale: 1.12 }}
            >
              <div
                className="rounded-md border border-border bg-[#252526] px-1.5 sm:px-2.5 py-0.5 sm:py-1 text-[9px] sm:text-[11px] font-mono whitespace-nowrap shadow-md max-w-[88px] sm:max-w-none truncate"
                style={{ color: skill.color, boxShadow: `0 0 12px ${skill.color}33` }}
              >
                {skill.name}
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <div className="w-16 h-16 rounded-full border border-[#007acc]/40 bg-[#1e1e1e]/80 flex items-center justify-center font-mono text-xs text-[#4ec9b0]">
          stack
        </div>
      </div>
    </div>
  )
}
