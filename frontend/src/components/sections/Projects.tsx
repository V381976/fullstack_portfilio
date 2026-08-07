'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, Filter } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with real-time inventory management and AI-powered recommendations.',
    longDescription: 'Built a comprehensive e-commerce solution featuring product catalog, shopping cart, payment integration, order management, and AI-powered product recommendations.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    liveUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example/ecommerce',
    techStack: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Stripe', 'OpenAI'],
    category: 'Full Stack',
    featured: true,
    performance: 98,
    seo: 95,
    accessibility: 92,
  },
  {
    id: 2,
    title: 'AI Dashboard',
    description: 'An intelligent analytics dashboard with real-time data visualization and predictive insights.',
    longDescription: 'Developed an AI-powered analytics platform with real-time data visualization, predictive analytics, and automated reporting capabilities.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    liveUrl: 'https://dashboard.example.com',
    githubUrl: 'https://github.com/example/ai-dashboard',
    techStack: ['React', 'Python', 'TensorFlow', 'D3.js', 'FastAPI'],
    category: 'AI/ML',
    featured: true,
    performance: 96,
    seo: 90,
    accessibility: 88,
  },
  {
    id: 3,
    title: 'Social Media App',
    description: 'A modern social media platform with real-time messaging and content sharing.',
    longDescription: 'Created a feature-rich social media application with real-time messaging, content sharing, user profiles, and advanced privacy controls.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    liveUrl: 'https://social.example.com',
    githubUrl: 'https://github.com/example/social-app',
    techStack: ['Next.js', 'Socket.io', 'MongoDB', 'Redis', 'AWS'],
    category: 'Full Stack',
    featured: false,
    performance: 94,
    seo: 92,
    accessibility: 90,
  },
  {
    id: 4,
    title: 'Portfolio Generator',
    description: 'An AI-powered portfolio builder that creates stunning developer portfolios.',
    longDescription: 'Built an automated portfolio generator using AI to create beautiful, optimized developer portfolios from basic user information.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    liveUrl: 'https://portfolio-builder.example.com',
    githubUrl: 'https://github.com/example/portfolio-gen',
    techStack: ['Next.js', 'OpenAI', 'Prisma', 'Vercel', 'Tailwind'],
    category: 'AI/ML',
    featured: true,
    performance: 99,
    seo: 98,
    accessibility: 95,
  },
  {
    id: 5,
    title: 'Task Management',
    description: 'A collaborative task management tool with real-time updates and AI insights.',
    longDescription: 'Developed a team collaboration platform with task management, real-time updates, AI-powered task suggestions, and comprehensive reporting.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    liveUrl: 'https://tasks.example.com',
    githubUrl: 'https://github.com/example/task-manager',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Socket.io', 'Docker'],
    category: 'Productivity',
    featured: false,
    performance: 95,
    seo: 91,
    accessibility: 89,
  },
  {
    id: 6,
    title: 'Weather App',
    description: 'A beautiful weather application with 3D visualizations and forecasts.',
    longDescription: 'Created an immersive weather application with 3D globe visualizations, accurate forecasts, and location-based services.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop',
    liveUrl: 'https://weather.example.com',
    githubUrl: 'https://github.com/example/weather-app',
    techStack: ['React', 'Three.js', 'OpenWeather API', 'Vercel'],
    category: 'Frontend',
    featured: false,
    performance: 97,
    seo: 94,
    accessibility: 93,
  },
]

const categories = ['All', 'Full Stack', 'AI/ML', 'Frontend', 'Productivity']

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="projects" className="relative py-20">
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
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of my best work showcasing full-stack development, AI integration, and creative problem-solving
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'glass text-muted-foreground hover:text-foreground'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Card className="glass h-full overflow-hidden group hover:border-primary/50 transition-all duration-300 card-3d">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredProject === project.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <Badge className="absolute top-4 right-4 bg-primary">
                      Featured
                    </Badge>
                  )}
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.techStack.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.techStack.length - 4}
                      </Badge>
                    )}
                  </div>

                  {/* Performance Metrics */}
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="p-2 rounded bg-white/5">
                      <div className="text-lg font-bold text-green-400">{project.performance}</div>
                      <div className="text-xs text-muted-foreground">Perf</div>
                    </div>
                    <div className="p-2 rounded bg-white/5">
                      <div className="text-lg font-bold text-blue-400">{project.seo}</div>
                      <div className="text-xs text-muted-foreground">SEO</div>
                    </div>
                    <div className="p-2 rounded bg-white/5">
                      <div className="text-lg font-bold text-purple-400">{project.accessibility}</div>
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
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="magnetic-button">
            <Github className="mr-2" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
