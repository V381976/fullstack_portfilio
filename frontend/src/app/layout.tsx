import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import LoadingScreen from '@/components/animations/LoadingScreen'
import CustomCursor from '@/components/animations/CustomCursor'
import SmoothScroll from '@/components/animations/SmoothScroll'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Devendra Saini | Full Stack Developer',
  description: 'World-class full-stack developer portfolio featuring modern web development with React, Next.js, Three.js, and AI integration.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'Three.js', 'TypeScript', 'Web Development'],
  authors: [{ name: 'Devendra Saini' }],
  openGraph: {
    title: 'Devendra Saini | Full Stack Developer',
    description: 'World-class full-stack developer portfolio featuring modern web development with React, Next.js, Three.js, and AI integration.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Devendra Saini | Full Stack Developer',
    description: 'World-class full-stack developer portfolio featuring modern web development with React, Next.js, Three.js, and AI integration.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <LoadingScreen />
        <CustomCursor />
        <SmoothScroll />
        {children}
      </body>
    </html>
  )
}
