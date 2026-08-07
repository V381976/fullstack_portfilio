'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, Mail, Github, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useMagnetic } from '@/hooks/use-magnetic'
import { useIsMobile } from '@/hooks/use-is-mobile'

export default function Hero() {
  const isMobile = useIsMobile()
  const magneticRef1 = useMagnetic<HTMLButtonElement>(isMobile ? 0 : 0.3)
  const magneticRef2 = useMagnetic<HTMLButtonElement>(isMobile ? 0 : 0.3)
  const magneticRef3 = useMagnetic<HTMLButtonElement>(isMobile ? 0 : 0.3)

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20 pb-16 sm:pt-24"
    >
      <motion.div
        className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-primary/25 rounded-full blur-3xl pointer-events-none"
        animate={isMobile ? undefined : { x: [0, 100, 0], y: [0, -100, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-secondary/25 rounded-full blur-3xl pointer-events-none"
        animate={isMobile ? undefined : { x: [0, -100, 0], y: [0, 100, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-10 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 sm:mb-6"
          >
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass text-xs sm:text-sm font-medium text-primary">
              Available for freelance projects
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 leading-tight break-words px-1"
          >
            <span className="text-foreground">Hi, I&apos;m </span>
            <span className="gradient-text">Devendra Saini</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8"
          >
            <span className="font-mono text-primary break-all sm:break-normal">
              &lt;Full Stack Developer /&gt;
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm sm:text-base md:text-lg text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto px-1"
          >
            I craft exceptional digital experiences with cutting-edge technologies,
            blending creativity with technical excellence to build world-class applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 w-full max-w-xl sm:max-w-none mx-auto"
          >
            <Button
              variant="gradient"
              size={isMobile ? 'lg' : 'xl'}
              className="magnetic-button group w-full sm:w-auto"
              ref={magneticRef1.ref}
              style={{ transform: magneticRef1.transform }}
              asChild
            >
              <a href="#projects">
                View Projects
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              variant="outline"
              size={isMobile ? 'lg' : 'xl'}
              className="magnetic-button w-full sm:w-auto"
              ref={magneticRef2.ref}
              style={{ transform: magneticRef2.transform }}
              asChild
            >
              <a href="/file/_DEVENDRA_SAINI_Resume.pdf" download>
                <Download className="mr-2" />
                Download Resume
              </a>
            </Button>
            <Button
              variant="glass"
              size={isMobile ? 'lg' : 'xl'}
              className="magnetic-button w-full sm:w-auto"
              ref={magneticRef3.ref}
              style={{ transform: magneticRef3.transform }}
              asChild
            >
              <a href="#contact">
                <Mail className="mr-2" />
                Contact Me
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center justify-center gap-4"
          >
            {[
              { icon: Github, href: 'https://github.com/V381976/', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/devendra-saini-502042253/', label: 'LinkedIn' },
            ].map((social) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass hover:bg-foreground/10 transition-colors touch-manipulation"
                  whileHover={isMobile ? undefined : { scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <Icon size={20} />
                </motion.a>
              )
            })}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block"
      >
        <a href="#about" aria-label="Scroll to about">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary rounded-full"
            />
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}
