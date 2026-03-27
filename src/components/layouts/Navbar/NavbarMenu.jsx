'use client'

import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils.js'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/radar', label: 'Radar' },
  { to: '/docs', label: 'Docs' }
]

const NavbarMenu = ({ mobile = false, onMobileClose }) => {
  const location = useLocation()

  const linkClass = (to) =>
    cn(
      'text-sm font-medium transition-colors hover:text-foreground',
      location.pathname === to ||
        (to !== '/' && location.pathname.startsWith(to))
        ? 'text-foreground'
        : 'text-muted-foreground'
    )

  if (mobile) {
    return (
      <nav className='flex flex-col gap-2' aria-label='Main'>
        {navLinks.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className={cn(
              'rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-muted hover:text-foreground',
              location.pathname === to ||
                (to !== '/' && location.pathname.startsWith(to))
                ? 'bg-muted text-foreground'
                : 'text-muted-foreground'
            )}
            onClick={onMobileClose}
          >
            {label}
          </Link>
        ))}
      </nav>
    )
  }

  return (
    <nav className='hidden items-center gap-1 md:flex' aria-label='Main'>
      {navLinks.map(({ to, label }) => (
        <Link
          key={to}
          to={to}
          className={cn(
            'rounded-md px-3 py-2 transition-colors hover:bg-muted hover:text-foreground',
            linkClass(to)
          )}
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}

export default NavbarMenu
