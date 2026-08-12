'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useMagnetic } from '@/hooks/use-magnetic'

const socialLinks = [
  { icon: Github, href: 'https://github.com/V381976/', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/devendra-saini-502042253?utm_source=share_via&utm_content=profile&utm_medium=member_android', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Mail, href: '30', label: '30dsaini@gmail.com' },
]

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
]

export default function Footer() {
  const magneticRef = useMagnetic<HTMLButtonElement>(0.3)
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative py-10 sm:py-12 border-t border-border/60">
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">Devendra Saini</h3>
            <p className="text-muted-foreground mb-4">
              Full-stack developer passionate about creating exceptional digital experiences
              with modern technologies.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-primary/20 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Jaipur, Rajasthan, India</li>
              <li>30dsaini@gmail.com</li>
              <li>+91 9462925542</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            © {new Date().getFullYear()} Devendra Saini. Made with{' '}
            <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using Next.js & React
          </p>

          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="magnetic-button"
            ref={magneticRef.ref}
            style={{ transform: magneticRef.transform }}
          >
            <ArrowUp size={16} className="mr-2" />
            Back to Top
          </Button>
        </motion.div>
      </div>
    </footer>
  )
}
