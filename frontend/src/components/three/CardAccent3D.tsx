'use client'

import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'
import { useDesktop3D } from '@/hooks/use-desktop-3d'

const CardAccentScene = dynamic(() => import('@/components/three/CardAccentScene'), {
  ssr: false,
  loading: () => null,
})

const ACCENTS = ['#569cd6', '#4ec9b0', '#6a9955', '#007acc'] as const

type Props = {
  index?: number
  className?: string
}

/** Small Three.js accent for project / experience cards */
export default function CardAccent3D({ index = 0, className }: Props) {
  const desktopOk = useDesktop3D()
  const hostRef = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  const color = ACCENTS[index % ACCENTS.length]

  useEffect(() => {
    const el = hostRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: '60px', threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={hostRef}
      className={`hidden md:block ${className ?? 'absolute right-2 top-2 h-20 w-20 pointer-events-none'}`}
      aria-hidden
    >
      {desktopOk && inView ? <CardAccentScene color={color} /> : null}
    </div>
  )
}
