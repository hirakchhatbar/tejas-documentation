import { getPrevNext } from '@/data/web-content/documentation/sidebar-menu.js'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils.js'

const PrevNextNav = () => {
  const { pathname } = useLocation()
  const { prev, next } = getPrevNext(pathname)

  if (!prev && !next) return null

  return (
    <nav
      className="flex items-center justify-between gap-4 border-t border-border pt-8 mt-10"
      aria-label="Previous and next documentation"
    >
      <div className="flex-1 min-w-0">
        {prev ? (
          <Link
            to={prev.path}
            className={cn(
              'group flex items-center gap-2 text-sm text-muted-foreground',
              'hover:text-foreground'
            )}
          >
            <ChevronLeft className="h-4 w-4 shrink-0" />
            <span className="truncate">{prev.title}</span>
          </Link>
        ) : (
          <span />
        )}
      </div>
      <div className="flex-1 min-w-0 flex justify-end">
        {next ? (
          <Link
            to={next.path}
            className={cn(
              'group flex items-center gap-2 text-sm text-muted-foreground',
              'hover:text-foreground ml-auto'
            )}
          >
            <span className="truncate">{next.title}</span>
            <ChevronRight className="h-4 w-4 shrink-0" />
          </Link>
        ) : (
          <span />
        )}
      </div>
    </nav>
  )
}

export default PrevNextNav
