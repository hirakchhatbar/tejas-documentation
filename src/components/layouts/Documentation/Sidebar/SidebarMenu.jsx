import primaryMenu from '@/data/web-content/sidebar/primary-menu.js'
import { cn } from '@/lib/utils.js'
import docStore from '@/pages/Docuementation/DocumentationStore.jsx'
import { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const SidebarMenu = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const selectedPrimaryMenu = docStore((state) => state.selectedMenu)
  const setSelectedPrimaryMenu = docStore((state) => state.setSelectedMenu)

  useEffect(() => {
    const pathname = location.pathname
    const menu = primaryMenu.find(
      (item) => item.path === pathname)
    if (!menu) {
      navigate('/docs/installation')
      return
    }

    setSelectedPrimaryMenu(menu)
  }, [location, navigate, setSelectedPrimaryMenu])

  return (
    <div className="flex flex-col gap-3 w-full">
      {primaryMenu.map((item, index) => (
        <Link key={index} to={item.path}
              className={cn(
                'flex flex-row items-center gap-2 px-6 py-3 rounded-md',
                selectedPrimaryMenu.path === item.path
                  ? 'bg-primary !text-heading'
                  : '!text-body'
              )}>
          <item.Icon className={'w-4 h-4 !text-heading'} />
          <p className={'text-sm font-normal !text-heading'}>{item.title}</p>
        </Link>
      ))}
    </div>
  )
}

export default SidebarMenu
