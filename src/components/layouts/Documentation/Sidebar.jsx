import SidebarMenu from '@/components/layouts/Documentation/Sidebar/SidebarMenu.jsx'
import { cn } from '@/lib/utils.js'

const SIDEBAR_WIDTH = 240

const Sidebar = ({ className, isOpen = true, onMobileClose }) => {
  return (
    <aside
      className={cn(
        className,
        'flex flex-col w-[240px] min-w-[240px] bg-transparent border-r border-border py-6 pl-6 pr-4',
        'fixed left-0 top-0 bottom-0 z-50 transform transition-transform duration-200 ease-out md:relative md:translate-x-0',
        isOpen ? 'translate-x-0' : '-translate-x-full'
      )}
      style={{ width: SIDEBAR_WIDTH }}
      aria-hidden={!isOpen}
    >
      <SidebarMenu onItemClick={onMobileClose} />
    </aside>
  )
}

export default Sidebar
