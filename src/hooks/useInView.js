import { useEffect, useRef, useState } from 'react'

/**
 * Lightweight Intersection Observer hook. Returns [ref, inView].
 * Use ref on the element; when it scrolls into view, inView becomes true (and stays true).
 */
export function useInView(options = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px', ...options }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, inView]
}
