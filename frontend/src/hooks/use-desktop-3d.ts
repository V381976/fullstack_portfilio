'use client'

import { useEffect, useState } from 'react'

/** Desktop + fine pointer + no reduced-motion — safe to mount Three.js */
export function useDesktop3D() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const desktop = window.matchMedia('(min-width: 768px)')

    const update = () => {
      setEnabled(finePointer.matches && desktop.matches && !reduceMotion.matches)
    }

    update()
    finePointer.addEventListener('change', update)
    reduceMotion.addEventListener('change', update)
    desktop.addEventListener('change', update)

    return () => {
      finePointer.removeEventListener('change', update)
      reduceMotion.removeEventListener('change', update)
      desktop.removeEventListener('change', update)
    }
  }, [])

  return enabled
}
