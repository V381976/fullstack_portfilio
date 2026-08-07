'use client'

import dynamic from 'next/dynamic'
import { useDesktop3D } from '@/hooks/use-desktop-3d'

const ParticleField = dynamic(() => import('@/components/atmosphere/ParticleField'), {
  ssr: false,
  loading: () => null,
})

/**
 * Page atmosphere without Three.js / R3F.
 * Uses Canvas 2D particle network (VS Code colors) + CSS editor grid.
 */
export default function PageAtmosphere() {
  const enabled = useDesktop3D()

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 page-gradient-mesh" />
      <div className="absolute inset-0 page-editor-grid" />
      <div className="absolute inset-0 noise" />

      {enabled ? (
        <div className="absolute inset-0 opacity-90">
          <ParticleField />
        </div>
      ) : null}
    </div>
  )
}
