import { useEffect, useLayoutEffect, useRef } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

const STORAGE_KEY = 'rg-scroll-positions'
const MAX_RETRY_FRAMES = 20

function readPositions() {
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY)) || {}
  } catch {
    return {}
  }
}

function savePosition(key, pathname, y) {
  try {
    const positions = readPositions()
    positions[key] = { pathname, y: Math.round(y) }
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(positions))
  } catch {
    /* sessionStorage có thể bị chặn (private mode) — bỏ qua */
  }
}

function isReloadOrHistoryLoad() {
  const [nav] = performance.getEntriesByType?.('navigation') ?? []
  return nav?.type === 'reload' || nav?.type === 'back_forward'
}

/**
 * Điều khiển vị trí cuộn khi đổi trang:
 * - Back/Forward: về đúng vị trí đã xem.
 * - Link có #anchor: tới section (mượt nếu cùng trang).
 * - Còn lại: lên đầu trang ngay, không hiệu ứng trượt.
 */
export function ScrollToTop() {
  const location = useLocation()
  const navigationType = useNavigationType()
  const prevPathname = useRef(null)
  const lastScrollY = useRef(0)

  useEffect(() => {
    if (!('scrollRestoration' in window.history)) return undefined
    const previous = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'
    return () => {
      window.history.scrollRestoration = previous
    }
  }, [])

  // Đọc scrollY trong lúc cleanup là không an toàn: DOM trang mới đã render và trình duyệt
  // có thể đã kẹp vị trí cuộn, nên giữ giá trị cuối cùng từ sự kiện scroll.
  useLayoutEffect(() => {
    const { key, pathname } = location
    const onScroll = () => {
      lastScrollY.current = window.scrollY
    }
    const onPageHide = () => savePosition(key, pathname, lastScrollY.current)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('pagehide', onPageHide)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('pagehide', onPageHide)
      savePosition(key, pathname, lastScrollY.current)
    }
  }, [location])

  useLayoutEffect(() => {
    const { pathname, hash, key } = location
    const isFirstLoad = prevPathname.current === null
    const samePage = prevPathname.current === pathname
    prevPathname.current = pathname
    let frame = 0

    const scrollToY = (top) => {
      window.scrollTo({ top, left: 0, behavior: 'instant' })
      lastScrollY.current = window.scrollY
    }

    const restore = (target, attempt = 0) => {
      scrollToY(target)
      if (Math.abs(window.scrollY - target) > 2 && attempt < MAX_RETRY_FRAMES) {
        frame = requestAnimationFrame(() => restore(target, attempt + 1))
      }
    }

    const scrollToHash = (id, behavior, attempt = 0) => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior, block: 'start' })
        return
      }
      if (attempt < MAX_RETRY_FRAMES) {
        frame = requestAnimationFrame(() => scrollToHash(id, behavior, attempt + 1))
      } else {
        scrollToY(0)
      }
    }

    const hashId = hash ? decodeURIComponent(hash.slice(1)) : ''
    const entry = readPositions()[key]
    const saved = entry?.pathname === pathname ? entry.y : undefined
    const canRestore = navigationType === 'POP' && (!isFirstLoad || isReloadOrHistoryLoad())
    // <a href="#..."> thuần đến qua POP với key "default" (trùng lần tải đầu) — ưu tiên anchor.
    if (hashId && samePage) {
      const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
      scrollToHash(hashId, reduceMotion ? 'instant' : 'smooth')
    } else if (canRestore && typeof saved === 'number') {
      restore(saved)
    } else if (hashId) {
      scrollToHash(hashId, 'instant')
    } else {
      scrollToY(0)
    }

    return () => cancelAnimationFrame(frame)
  }, [location, navigationType])

  return null
}
