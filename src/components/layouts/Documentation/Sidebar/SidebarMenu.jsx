import { sidebarGroups } from '@/data/web-content/documentation/sidebar-menu.js'
import { cn } from '@/lib/utils.js'
import docStore from '@/pages/Documentation/DocumentationStore.jsx'
import { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const SidebarMenu = ({ onItemClick }) => {
  const location = useLocation()
  const navigate = useNavigate()

  const selectedMenu = docStore((state) => state.selectedMenu)
  const setSelectedPrimaryMenu = docStore((state) => state.setSelectedMenu)

  useEffect(() => {
    const pathname = location.pathname
    const flat = sidebarGroups.flatMap((g) => g.items)
    const menu = flat.find((item) => item.path === pathname)
    if (!menu) {
      navigate('/docs/installation')
      return
    }
    setSelectedPrimaryMenu(menu)
  }, [location, navigate, setSelectedPrimaryMenu])

  const handleLinkClick = () => {
    onItemClick?.()
  }

  return (
    <div className='flex flex-col w-full'>
      {sidebarGroups.map((group, groupIndex) => (
        <div
          key={group.label}
          className={cn('flex flex-col', groupIndex > 0 && 'mt-4')}
        >
          <span className='py-1.5 pl-2 pr-3 text-xs font-semibold uppercase tracking-wider text-foreground'>
            {group.label}
          </span>
          <div className='flex flex-col pl-4'>
            {group.items.map((item) => {
              const isActive = selectedMenu?.path === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={handleLinkClick}
                  className={cn(
                    'flex items-center gap-2 py-1.5 pl-3 pr-3 text-sm rounded-r-md border-l-2 -ml-px',
                    isActive
                      ? 'border-sky-500 bg-sky-500/10 text-foreground font-medium'
                      : 'border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  )}
                >
                  <span className='truncate'>{item.title}</span>
                  {item.comingSoon && (
                    <span className='ml-auto shrink-0 rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground'>
                      Soon
                    </span>
                  )}
                </Link>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

export default SidebarMenu
