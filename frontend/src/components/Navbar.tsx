'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Menu, X, Download, Code, Mail, User, Briefcase, Zap, Layers } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'About', href: '#about', icon: User },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Skills', href: '#skills', icon: Zap },
  { name: 'Services', href: '#services', icon: Layers },
  { name: 'Projects', href: '#projects', icon: Code },
  { name: 'Contact', href: '#contact', icon: Mail },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navItems.map((item) => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled ? 'glass py-4' : 'py-6'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between gap-3">
            <motion.a
              href="#home"
              className="text-xl sm:text-2xl font-bold gradient-text shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              DS
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = activeSection === item.href.substring(1)
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all',
                      isActive
                        ? 'text-primary bg-primary/10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                    )}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={16} />
                    {item.name}
                  </motion.a>
                )
              })}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Button variant="outline" size="sm" className="magnetic-button" asChild>
                <a href="/file/_DEVENDRA_SAINI_Resume.pdf" download>
                  <Download size={16} className="mr-2" />
                  Resume
                </a>
              </Button>
              <Button variant="gradient" size="sm" className="magnetic-button" asChild>
                <a href="#contact">
                  <Mail size={16} className="mr-2" />
                  Hire Me
                </a>
              </Button>
            </div>

            <button
              type="button"
              className="md:hidden p-2.5 rounded-lg glass touch-manipulation"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-[#1e1e1e]/95 backdrop-blur-xl md:hidden overflow-y-auto"
          >
            <div className="flex flex-col min-h-full p-4 sm:p-6 pt-6 safe-area">
              <div className="flex items-center justify-between mb-6">
                <span className="text-2xl font-bold gradient-text">DS</span>
                <button
                  type="button"
                  className="p-2.5 rounded-lg glass touch-manipulation"
                  aria-label="Close menu"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X size={22} />
                </button>
              </div>

              <nav className="flex-1 space-y-2 pb-6">
                {navItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-3.5 rounded-lg text-base font-medium text-muted-foreground hover:text-foreground hover:bg-foreground/5 touch-manipulation"
                    >
                      <Icon size={20} />
                      {item.name}
                    </a>
                  )
                })}
              </nav>

              <div className="space-y-3">
                <Button variant="outline" className="w-full" size="lg" asChild>
                  <a href="/file/_DEVENDRA_SAINI_Resume.pdf" download onClick={() => setIsMobileMenuOpen(false)}>
                    <Download size={16} className="mr-2" />
                    Download Resume
                  </a>
                </Button>
                <Button variant="gradient" className="w-full" size="lg" asChild>
                  <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <Mail size={16} className="mr-2" />
                    Hire Me
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
