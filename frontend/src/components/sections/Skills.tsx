'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Code, Database, Cloud, Cpu } from 'lucide-react'
import TechIcon3D, { getTechIconId } from '@/components/atmosphere/TechIcon3D'

const skillCategories = {
  frontend: {
    icon: Code,
    skills: [
      { name: 'React', level: 95, color: '#61DAFB' },
      { name: 'Next.js', level: 90, color: '#ffffff' },
      { name: 'TypeScript', level: 88, color: '#3178C6' },
      { name: 'Tailwind CSS', level: 92, color: '#06B6D4' },
      { name: 'Three.js', level: 75, color: '#61DAFB' },
      { name: 'Framer Motion', level: 85, color: '#FF5FA3' },
    ],
  },
  backend: {
    icon: Database,
    skills: [
      { name: 'Node.js', level: 90, color: '#339933' },
      { name: 'Express', level: 88, color: '#ffffff' },
      { name: 'NestJS', level: 80, color: '#E0234E' },
      { name: 'PostgreSQL', level: 85, color: '#336791' },
      { name: 'MongoDB', level: 82, color: '#47A248' },
      { name: 'Prisma', level: 78, color: '#0C344B' },
    ],
  },
  cloud: {
    icon: Cloud,
    skills: [
      { name: 'AWS', level: 80, color: '#FF9900' },
      { name: 'Vercel', level: 88, color: '#ffffff' },
      { name: 'Docker', level: 75, color: '#2496ED' },
      { name: 'Git', level: 90, color: '#F05032' },
      { name: 'CI/CD', level: 78, color: '#6B4FBB' },
      { name: 'CapRover', level: 78, color: '#6B4FBB' },
      { name: 'Render', level: 78, color: '#6B4FBB' },
    ],
  },
  tools: {
    icon: Cpu,
    skills: [
      { name: 'VS Code', level: 95, color: '#007ACC' },
      { name: 'Thunder Client', level: 70, color: '#F24E1E' },
      { name: 'Postman', level: 85, color: '#FF6C37' },
    ],
  },
}

function SkillCard({ skill, index }: { skill: any; index: number }) {
  const has3DIcon = Boolean(getTechIconId(skill.name))

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="h-full"
    >
      <Card className="glass h-full hover:border-primary/50 transition-all duration-300 card-3d">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-3">
            {has3DIcon ? (
              <TechIcon3D skillName={skill.name} color={skill.color} className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg" />
            ) : (
              <div
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center text-xs sm:text-sm font-bold"
                style={{ backgroundColor: `${skill.color}20`, color: skill.color }}
              >
                {skill.name[0]}
              </div>
            )}
            <Badge variant="secondary" className="text-xs">{skill.level}%</Badge>
          </div>

          <h3 className="text-sm font-bold mb-2">{skill.name}</h3>

          <div className="space-y-2">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-muted-foreground">Proficiency</span>
                <span className="font-medium">{skill.level}%</span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.05 }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: skill.color }}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend')

  return (
    <section id="skills" className="relative py-12 sm:py-16 md:py-20">
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Technologies I use to build exceptional digital experiences
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="overflow-x-auto -mx-1 px-1 mb-6 sm:mb-8 scrollbar-thin">
            <TabsList
              className="inline-flex sm:grid w-max sm:w-full min-w-full glass h-auto p-1 gap-1 sm:grid-cols-4"
            >
              {Object.entries(skillCategories).map(([key, category]) => {
                const Icon = category.icon
                return (
                  <TabsTrigger
                    key={key}
                    value={key}
                    className="flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm whitespace-nowrap touch-manipulation"
                  >
                    <Icon size={14} />
                    <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                  </TabsTrigger>
                )
              })}
            </TabsList>
          </div>

          {Object.entries(skillCategories).map(([key, category]) => (
            <TabsContent key={key} value={key}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {category.skills.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
