import { useEffect, useRef, useState } from 'react'

export function useMagnetic<T extends HTMLElement = HTMLElement>(strength: number = 0.3) {
  const ref = useRef<T>(null)
  const [transform, setTransform] = useState('')

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      setTransform(
        `translate(${x * strength}px, ${y * strength}px)`
      )
    }

    const handleMouseLeave = () => {
      setTransform('')
    }

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [strength])

  return { ref, transform }
}
