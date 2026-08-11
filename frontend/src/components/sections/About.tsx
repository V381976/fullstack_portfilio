'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Code, Heart, Target, Award } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TechChipList } from '@/components/ui/TechChip'
import CardAccent3D from '@/components/three/CardAccent3D'


const education = [
  {
    degree: 'Bachelor of Computer Science ( BCA )',
    institution: 'S S Jain Subodh P.G. College jaipur',
    year: '2022 - 2025',
    description: 'Specialized in Computer Science Engineering ',
  },
]

const certificates = [
 " cyber security "  , 'Full Stack Development'
]

export default function About() {
  return (
    <section id="about" className="relative py-12 sm:py-16 md:py-20">
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate developer with a love for creating exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="glass h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="text-primary" />
                  Personal Info
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="text-muted-foreground" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground">Birthday</p>
                    <p className="font-medium">29 July 2002</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-muted-foreground" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Rajasthan, India</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Code className="text-muted-foreground" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground">Experience</p>
                    <p className="font-medium">1+ Years</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="text-muted-foreground" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground">Focus</p>
                    <p className="font-medium">Full Stack Development &  Freelancer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="glass h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 py-3">
                  <Award className="text-primary" />
                  My Journey
                </CardTitle>
              </CardHeader>
              <CardContent>
         <p className="text-muted-foreground leading-relaxed">
  I am passionate about exploring AI-powered applications, cloud technologies,
  and modern web development. I enjoy solving complex problems, learning new
  tools, and building high-performance applications that deliver an excellent
  user experience. I am always ready to learn, adapt, and contribute to
  innovative development teams.
</p>

<p className="text-muted-foreground leading-relaxed mb-4">
  My technical expertise includes JavaScript, TypeScript, React.js, Next.js,
  Node.js, Express.js, MongoDB, MySQL, Tailwind CSS, Python, Git, GitHub, and
  Data Structures & Algorithms (DSA). I focus on writing clean, maintainable,
  and scalable code while following modern development practices.
</p>

<p className="text-muted-foreground leading-relaxed">
  As a fresher, I am excited to begin my professional journey as a Full Stack
  Developer. I am looking for opportunities where I can contribute to meaningful
  projects, collaborate with experienced teams, and continue growing as a
  software developer. My goal is to build high-quality digital products that
  create a positive impact.
</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>



        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Education</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <Card className="glass">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-2">{edu.degree}</h4>
                    <p className="text-primary mb-2">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground mb-4">{edu.year}</p>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Certifications</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge variant="glow" className="px-6 py-3 text-base">
                  {cert}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
