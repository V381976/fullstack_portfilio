'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'
import { TechChipList } from '@/components/ui/TechChip'
import CardAccent3D from '@/components/three/CardAccent3D'

const experiences = [
  {
    id: 1,
    company: 'Kuchoriya  TechSoft Pvt. Ltd.',
    position: ' Full Stack Developer Intern',
    location: 'Jaipur ,Rajasthan, India',
    startDate: 'December 2025 ',
    endDate: 'March 2026',
    current: false,
    description: 'Leading development of enterprise applications using Next.js, React, and Node.js. Mentoring junior developers and implementing best practices.',
    achievements: [
      'Led a team of 5 developers to deliver a major e-commerce platform',
      'Improved application performance by 40% through optimization',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'AWS', 'Docker'],
  },
  {
    id: 2,
    company: 'Rewathi Innovations Pvt. Ltd.',
    position: 'Full Stack Developer',
    location: 'Jaipur ,Rajasthan, India',
    startDate: 'April 2026',
    endDate: 'Present',
    current: true,
    description: 'Built scalable web applications and RESTful APIs for various clients across different industries.',
    achievements: [
      'Developed 15+ web applications for clients in healthcare, finance, and e-commerce',
      'Integrated payment gateways processing $1M+ in transactions',
      'Built real-time collaboration tools using WebSockets',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Redis', 'Socket.io'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative py-12 sm:py-16 md:py-20">
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            <span className="gradient-text">Work Experience</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            My professional journey in the tech industry
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            >
              <Card className="glass hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
                <CardAccent3D index={index} className="absolute right-0 top-0 h-24 w-24 opacity-80 pointer-events-none" />
                <CardContent className="p-6 md:p-8 relative z-10">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold">{exp.position}</h3>
                        {exp.current && (
                          <Badge variant="glow">Current</Badge>
                        )}
                      </div>
                      <p className="text-primary font-medium mb-1">{exp.company}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {exp.startDate} - {exp.endDate}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4">{exp.description}</p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <TechChipList items={exp.technologies} />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
