import type { Metadata, Viewport } from 'next'
import './globals.css'
import LoadingScreen from '@/components/animations/LoadingScreen'
import CustomCursor from '@/components/animations/CustomCursor'
import SmoothScroll from '@/components/animations/SmoothScroll'

export const metadata: Metadata = {
  title: 'Devendra Saini | Full Stack Developer',
  description:
    'Full-stack developer portfolio — React, Next.js, Node.js, Prisma, and modern web apps.',
  keywords: [
    'Full Stack Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Web Development',
    'Devendra Saini',
  ],
  authors: [{ name: 'Devendra Saini' }],
  openGraph: {
    title: 'Devendra Saini | Full Stack Developer',
    description:
      'Full-stack developer portfolio — React, Next.js, Node.js, Prisma, and modern web apps.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Devendra Saini | Full Stack Developer',
    description:
      'Full-stack developer portfolio — React, Next.js, Node.js, Prisma, and modern web apps.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1e1e1e',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased overflow-x-hidden">
        <LoadingScreen />
        <CustomCursor />
        <SmoothScroll />
        {children}
      </body>
    </html>
  )
}
