'use client'

import { useEffect, useState } from 'react'

/** Desktop + fine pointer + no reduced-motion — safe to mount Three.js */
export function useDesktop3D() {
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    const update = () => {
      setEnabled(!reduceMotion.matches)
    }

    update()
    reduceMotion.addEventListener('change', update)

    return () => {
      reduceMotion.removeEventListener('change', update)
    }
  }, [])

  return enabled
}
