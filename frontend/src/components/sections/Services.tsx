'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Code, Database, Cloud, Smartphone, Layout, Zap } from 'lucide-react'
import { useMagnetic } from '@/hooks/use-magnetic'

const services = [
  {
    icon: Code,
    title: 'Full Stack Development',
    description: 'End-to-end web application development using modern technologies like React, Next.js, Node.js, and PostgreSQL.',
    features: [
      'Custom Web Applications',
      'RESTful APIs & GraphQL',
      'Database Design & Optimization',
      'Real-time Applications',
    ],
    priceFrom: '$2,000',
  },
  {
    icon: Layout,
    title: 'Frontend Development',
    description: 'Beautiful, responsive, and performant user interfaces with exceptional user experience and modern design.',
    features: [
      'React & Next.js Applications',
      'Responsive Design',
      'Performance Optimization',
      'Accessibility (WCAG AA)',
    ],
    priceFrom: '$1,500',
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Robust and scalable backend solutions with secure APIs, database management, and cloud integration.',
    features: [
      'API Development',
      'Database Architecture',
      'Authentication & Security',
      'Cloud Deployment',
    ],
    priceFrom: '$1,500',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Cloud infrastructure setup, CI/CD pipelines, and deployment automation for scalable applications.',
    features: [
      'AWS & Vercel Deployment',
      'CI/CD Pipelines',
      'Docker & Kubernetes',
      'Infrastructure Monitoring',
    ],
    priceFrom: '$1,000',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Cross-platform mobile applications using React Native with native performance and seamless user experience.',
    features: [
      'React Native Apps',
      'iOS & Android',
      'Push Notifications',
      'Offline Support',
    ],
    priceFrom: '$2,500',
  },
  {
    icon: Zap,
    title: 'AI Integration',
    description: 'Integrate AI and machine learning capabilities into your applications for intelligent automation and insights.',
    features: [
      'OpenAI Integration',
      'Custom AI Models',
      'Chatbot Development',
      'Predictive Analytics',
    ],
    priceFrom: '$3,000',
  },
]

export default function Services() {
  const magneticRef = useMagnetic<HTMLButtonElement>(0.3)
  return (
    <section id="services" className="relative py-20">
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
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional development services to bring your ideas to life
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="glass h-full hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{service.description}</p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 border-t border-white/10">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Starting from</span>
                        <span className="text-lg font-bold gradient-text">{service.priceFrom}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Card className="glass max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to start your project?</h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how I can help bring your vision to life with custom development solutions.
              </p>
              <Button 
                variant="gradient" 
                size="lg" 
                className="magnetic-button"
                ref={magneticRef.ref}
                style={{ transform: magneticRef.transform }}
              >
                Get a Free Quote
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
