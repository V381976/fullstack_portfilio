'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Code, Database, Cloud, Brackets, Cpu } from 'lucide-react'

const skillCategories = {
  frontend: {
    icon: Code,
    skills: [
      { name: 'React', level: 95,color: '#61DAFB' },
      { name: 'Next.js', level: 90, color: '#000000' },
      { name: 'TypeScript', level: 88, color: '#3178C6' },
      { name: 'Tailwind CSS', level: 92, color: '#06B6D4' },
      { name: 'Three.js', level: 75,color: '#FFFFFF' },
      { name: 'Framer Motion', level: 85, color: '#FF5FA3' },
    ],
  },
  backend: {
    icon: Database,
    skills: [
      { name: 'Node.js', level: 90, color: '#339933' },
      { name: 'Express', level: 88,  color: '#000000' },
      { name: 'NestJS', level: 80, color: '#E0234E' },
      { name: 'PostgreSQL', level: 85,  color: '#336791' },
      { name: 'MongoDB', level: 82, color: '#47A248' },
      { name: 'Prisma', level: 78, color: '#0C344B' },
    ],
  },
  cloud: {
    icon: Cloud,
    skills: [
      { name: 'AWS', level: 80,  color: '#FF9900' },
      { name: 'Vercel', level: 88,  color: '#000000' },
      { name: 'Docker', level: 75, color: '#2496ED' },
      { name: 'Git', level: 90, color: '#F05032' },
      { name: 'CI/CD', level: 78,  color: '#6B4FBB' },
      { name: 'caprower', level: 78, color: '#6B4FBB' },
      { name: 'Render', level: 78,  color: '#6B4FBB' },
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="h-full"
    >
      <Card className="glass h-full hover:border-primary/50 transition-all duration-300 card-3d">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold"
              style={{ backgroundColor: `${skill.color}20`, color: skill.color }}
            >
              {skill.name[0]}
            </div>
            <Badge variant="secondary">{skill.level}%</Badge>
          </div>

          <h3 className="text-lg font-bold mb-2">{skill.name}</h3>

          <div className="space-y-3 mb-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-muted-foreground">Proficiency</span>
                <span className="font-medium">{skill.level}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
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

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{skill.years} years exp.</span>
            <span>{skill.projects} projects</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend')

  return (
    <section id="skills" className="relative py-20">
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      <div className="absolute inset-0 noise" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies I use to build exceptional digital experiences
          </p>
        </motion.div>

        {/* Skills Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 glass">
            {Object.entries(skillCategories).map(([key, category]) => {
              const Icon = category.icon
              return (
                <TabsTrigger key={key} value={key} className="flex items-center gap-2">
                  <Icon size={16} />
                  <span className="hidden sm:inline">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                </TabsTrigger>
              )
            })}
          </TabsList>

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
