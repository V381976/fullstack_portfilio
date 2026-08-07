'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'
import { TechChipList } from '@/components/ui/TechChip'
import CardAccent3D from '@/components/three/CardAccent3D'
import { useIsMobile } from '@/hooks/use-is-mobile'

const projects = [
  {
    id: 1,
    title: 'EV Charging Station Manager',
    description: 'Full-stack management system for EV stations with auth, CRUD, and admin workflows.',
    longDescription: 'Built authentication, station CRUD, and admin-ready workflows for charging station management.',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=600&fit=crop',
    liveUrl: '#',
    githubUrl: 'https://github.com/V381976/',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    category: 'Full Stack',
    featured: true,
    performance: 94,
    seo: 90,
    accessibility: 88,
  },
  {
    id: 2,
    title: 'JWT Login Authentication',
    description: 'Secure authentication flow with protected routes and token-based sessions.',
    longDescription: 'Implemented JWT login/signup with protected dashboard access and API integration.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop',
    liveUrl: '#',
    githubUrl: 'https://github.com/V381976/',
    techStack: ['React', 'Node.js', 'JWT', 'Express'],
    category: 'Full Stack',
    featured: true,
    performance: 95,
    seo: 88,
    accessibility: 90,
  },
  {
    id: 3,
    title: 'Country Info Explorer',
    description: 'Search and explore country details using public REST APIs with a clean React UI.',
    longDescription: 'API-based country search with filters, loading states, and responsive cards.',
    image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&h=600&fit=crop',
    liveUrl: '#',
    githubUrl: 'https://github.com/V381976/',
    techStack: ['React', 'REST API', 'JavaScript', 'CSS'],
    category: 'Frontend',
    featured: false,
    performance: 96,
    seo: 91,
    accessibility: 92,
  },
  {
    id: 4,
    title: 'Portfolio Contact System',
    description: 'Inquiry system with Neon PostgreSQL storage and SMTP email alerts + thank-you mail.',
    longDescription: 'Next.js API routes, Prisma/Neon persistence, Nodemailer SMTP, and branded email templates.',
    image: 'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=800&h=600&fit=crop',
    liveUrl: '#contact',
    githubUrl: 'https://github.com/V381976/fullstack_portfilio',
    techStack: ['Next.js', 'Prisma', 'Neon', 'Nodemailer', 'Zod'],
    category: 'Full Stack',
    featured: true,
    performance: 97,
    seo: 94,
    accessibility: 93,
  },
]

const categories = ['All', 'Full Stack', 'Frontend']

export default function Projects() {
  const isMobile = useIsMobile()
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory)

  return (
    <section id="projects" className="relative py-12 sm:py-16 md:py-20">
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-1">
            Full-stack apps with modern stacks — each card includes a live Three.js accent
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 sm:px-6 py-2 rounded-md text-xs sm:text-sm font-mono font-medium transition-all border touch-manipulation ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'glass text-muted-foreground hover:text-foreground border-border'
              }`}
              whileHover={isMobile ? undefined : { scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              onMouseEnter={() => !isMobile && setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ perspective: isMobile ? undefined : 1000 }}
            >
              <motion.div
                animate={
                  isMobile
                    ? undefined
                    : {
                        rotateX: hoveredProject === project.id ? 4 : 0,
                        rotateY: hoveredProject === project.id ? -4 : 0,
                        y: hoveredProject === project.id ? -6 : 0,
                      }
                }
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                style={{ transformStyle: isMobile ? undefined : 'preserve-3d' }}
              >
                <Card className="glass h-full overflow-hidden group border-border hover:border-primary/60 transition-all duration-300 relative">
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      animate={{
                        scale: hoveredProject === project.id ? 1.08 : 1,
                      }}
                      transition={{ duration: 0.35 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e] via-[#1e1e1e]/40 to-transparent" />
                    <CardAccent3D index={index} className="absolute right-1 top-1 h-24 w-24 z-10 pointer-events-none" />
                    {project.featured && (
                      <Badge className="absolute top-4 left-4 bg-[#007acc] text-white border-0 font-mono">
                        Featured
                      </Badge>
                    )}
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl font-semibold tracking-tight">
                      {project.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm">{project.description}</p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <TechChipList items={project.techStack} />

                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="p-2 rounded-md border border-border bg-[#252526]/80">
                        <div className="text-lg font-bold font-mono text-[#6a9955]">
                          {project.performance}
                        </div>
                        <div className="text-xs text-muted-foreground">Perf</div>
                      </div>
                      <div className="p-2 rounded-md border border-border bg-[#252526]/80">
                        <div className="text-lg font-bold font-mono text-[#569cd6]">
                          {project.seo}
                        </div>
                        <div className="text-xs text-muted-foreground">SEO</div>
                      </div>
                      <div className="p-2 rounded-md border border-border bg-[#252526]/80">
                        <div className="text-lg font-bold font-mono text-[#4ec9b0]">
                          {project.accessibility}
                        </div>
                        <div className="text-xs text-muted-foreground">A11y</div>
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="gap-2">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button variant="gradient" size="sm" className="flex-1" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Live
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="magnetic-button" asChild>
            <a href="https://github.com/V381976/" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
