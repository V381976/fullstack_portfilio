'use client'

import { motion } from 'framer-motion'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiNextdotjs, SiMongodb } from 'react-icons/si'
import type { IconType } from 'react-icons'

export type TechIconId = 'react' | 'nextjs' | 'nodejs' | 'mongodb'

const TECH_ICON_MAP: Record<string, { id: TechIconId; Icon: IconType; color: string }> = {
  React: { id: 'react', Icon: FaReact, color: '#61DAFB' },
  'Next.js': { id: 'nextjs', Icon: SiNextdotjs, color: '#d4d4d4' },
  'Node.js': { id: 'nodejs', Icon: FaNodeJs, color: '#339933' },
  MongoDB: { id: 'mongodb', Icon: SiMongodb, color: '#47A248' },
}

export function getTechIconId(skillName: string): TechIconId | null {
  return TECH_ICON_MAP[skillName]?.id ?? null
}

type Props = {
  skillName: string
  color: string
  className?: string
}

/** CSS / Framer 3D tech icon — no Three.js */
export default function TechIcon3D({ skillName, color, className }: Props) {
  const entry = TECH_ICON_MAP[skillName]

  if (!entry) {
    return (
      <div
        className={className ?? 'w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center text-xs sm:text-sm font-bold'}
        style={{ backgroundColor: `${color}22`, color }}
      >
        {skillName[0]}
      </div>
    )
  }

  const { Icon } = entry
  const iconColor = entry.color

  return (
    <div
      className={className ?? 'w-8 h-8 sm:w-10 sm:h-10 rounded-lg'}
      style={{
        backgroundColor: `${color}22`,
        perspective: '600px',
      }}
      aria-hidden
    >
      <motion.div
        className="w-full h-full flex items-center justify-center"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        whileHover={{ scale: 1.08, rotateX: 12 }}
      >
        <div className="flex items-center justify-center">
          <Icon size={22} className="hidden sm:block" color={iconColor} style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.45))' }} />
          <Icon size={16} className="block sm:hidden" color={iconColor} style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.45))' }} />
        </div>
      </motion.div>
    </div>
  )
}
