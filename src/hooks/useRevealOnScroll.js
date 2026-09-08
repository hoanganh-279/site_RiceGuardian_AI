import { useEffect, useRef } from 'react'

/**
 * Toggles `is-visible` when the element enters/leaves the viewport
 * so motion replays on scroll up and down.
 * Honors prefers-reduced-motion by revealing immediately.
 */
export function useRevealOnScroll(options = {}) {
  const ref = useRef(null)
  const { rootMargin = '0px 0px -8% 0px', threshold = 0.12, once = false } = options

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      el.classList.add('is-visible')
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          if (once) observer.unobserve(el)
        } else if (!once) {
          el.classList.remove('is-visible')
        }
      },
      { rootMargin, threshold },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [rootMargin, threshold, once])

  return ref
}
