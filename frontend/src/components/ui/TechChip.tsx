'use client'

import { motion } from 'framer-motion'
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaPython,
} from 'react-icons/fa'
import {
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiRedis,
  SiSocketdotio,
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiPrisma,
  SiTailwindcss,
  SiRedux,
  SiVercel,
  SiNodedotjs,
} from 'react-icons/si'
import { Code2, Database, Braces, Cloud } from 'lucide-react'
import type { IconType } from 'react-icons'

type TechMeta = {
  Icon: IconType | typeof Code2
  color: string
}

const TECH_META: Record<string, TechMeta> = {
  React: { Icon: FaReact, color: '#61DAFB' },
  'React.js': { Icon: FaReact, color: '#61DAFB' },
  'Next.js': { Icon: SiNextdotjs, color: '#ffffff' },
  'next js': { Icon: SiNextdotjs, color: '#d4d4d4' },
  'Node.js': { Icon: FaNodeJs, color: '#68A063' },
  Node: { Icon: SiNodedotjs, color: '#68A063' },
  MongoDB: { Icon: SiMongodb, color: '#47A248' },
  Mongodb: { Icon: SiMongodb, color: '#47A248' },
  Express: { Icon: SiExpress, color: '#ffffff' },
  'Express.js': { Icon: SiExpress, color: '#ffffff' },
  Redis: { Icon: SiRedis, color: '#DC382D' },
  'Socket.io': { Icon: SiSocketdotio, color: '#d4d4d4' },
  TypeScript: { Icon: SiTypescript, color: '#3178C6' },
  JavaScript: { Icon: SiJavascript, color: '#F7DF1E' },
  PostgreSQL: { Icon: SiPostgresql, color: '#4169E1' },
  Prisma: { Icon: SiPrisma, color: '#4ec9b0' },
  Neon: { Icon: Database, color: '#00E599' },
  Nodemailer: { Icon: Cloud, color: '#569cd6' },
  Zod: { Icon: Braces, color: '#3E67EE' },
  JWT: { Icon: Code2, color: '#d4d4d4' },
  'REST API': { Icon: Cloud, color: '#4ec9b0' },
  CSS: { Icon: Code2, color: '#264DE4' },
  Docker: { Icon: FaDocker, color: '#2496ED' },
  AWS: { Icon: FaAws, color: '#FF9900' },
  Git: { Icon: FaGitAlt, color: '#F05032' },
  GitHub: { Icon: FaGitAlt, color: '#d4d4d4' },
  Python: { Icon: FaPython, color: '#3776AB' },
  Redux: { Icon: SiRedux, color: '#764ABC' },
  'Tailwind CSS': { Icon: SiTailwindcss, color: '#06B6D4' },
  Vercel: { Icon: SiVercel, color: '#ffffff' },
  Render: { Icon: Cloud, color: '#46E3B7' },
}

function resolveTech(name: string): TechMeta {
  return (
    TECH_META[name] ||
    TECH_META[name.trim()] || {
      Icon: Code2,
      color: '#569cd6',
    }
  )
}

type Props = {
  tech: string
  index?: number
}

/** Attractive tech chip with icon — used on Projects / Experience / About */
export default function TechChip({ tech, index = 0 }: Props) {
  const { Icon, color } = resolveTech(tech)

  return (
    <motion.span
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04, duration: 0.25 }}
      whileHover={{ y: -2, scale: 1.04 }}
      className="inline-flex items-center gap-1 sm:gap-1.5 rounded-md border px-2 sm:px-2.5 py-1 text-[10px] sm:text-xs font-mono font-medium transition-shadow max-w-full"
      style={{
        color,
        borderColor: `${color}55`,
        background: `linear-gradient(135deg, ${color}18 0%, #252526 55%)`,
        boxShadow: `0 0 0 1px ${color}10, 0 4px 14px ${color}14`,
      }}
    >
      <Icon size={13} style={{ color }} aria-hidden />
      {tech}
    </motion.span>
  )
}

export function TechChipList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5 sm:gap-2">
      {items.map((tech, i) => (
        <TechChip key={`${tech}-${i}`} tech={tech} index={i} />
      ))}
    </div>
  )
}
