import SidebarMenu from '@/components/layouts/Documentation/Sidebar/SidebarMenu.jsx'
import { cn } from '@/lib/utils.js'

const SIDEBAR_WIDTH = 300

const Sidebar = ({ className, isOpen = true, onMobileClose }) => {
  return (
    <aside
      className={cn(
        className,
        'flex flex-col w-[300px] min-w-[300px] bg-transparent border-r border-border py-4 pl-4 pr-3 overflow-y-auto',
        'fixed left-0 top-0 bottom-0 z-50 transform transition-transform duration-200 ease-out md:sticky md:top-16 md:h-[calc(100vh-64px)] md:translate-x-0',
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
