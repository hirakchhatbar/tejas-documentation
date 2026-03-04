import { cn } from '@/lib/utils.js'
import { useEffect, useState } from 'react'

/**
 * Right-side "On this page" TOC with scroll spy.
 * @param {{ items: { title: string, link: string, depth?: number }[] }} props
 */
const TableOfContentsRail = ({ items }) => {
  const [activeId, setActiveId] = useState(() => {
    if (typeof window === 'undefined') return ''
    const hash = window.location.hash.replace(/^#/, '')
    return hash || ''
  })

  useEffect(() => {
    const onHashChange = () => {
      const id = window.location.hash.replace(/^#/, '')
      if (id) setActiveId(id)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    if (!items?.length) return

    const ids = items.map((item) => item.link.replace(/^#/, ''))

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const id = entry.target.id
          if (ids.includes(id)) setActiveId(id)
        }
      },
      {
        rootMargin: '-80px 0% -70% 0%',
        threshold: 0
      }
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [items])

  if (!items?.length) return null

  return (
    <nav
      className="sticky top-20 hidden lg:block w-[200px] shrink-0"
      aria-label="On this page"
    >
      <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
        On this page
      </h2>
      <ul className="space-y-1.5 text-sm">
        {items.map((item) => {
          const id = item.link.replace(/^#/, '')
          const isActive = activeId === id
          const depth = item.depth ?? 0
          return (
            <li
              key={item.link}
              style={{ paddingLeft: depth * 12 }}
              className={cn(
                'transition-colors',
                isActive
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <a
                href={item.link}
                className="block py-0.5 hover:text-sky-600 dark:hover:text-sky-400"
              >
                {item.title}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default TableOfContentsRail
