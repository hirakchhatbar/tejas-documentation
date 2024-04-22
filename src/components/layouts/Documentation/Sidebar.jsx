import SidebarMenu
  from '@/components/layouts/Documentation/Sidebar/SidebarMenu.jsx'
import { Button } from '@/components/ui/button.jsx'
import { cn } from '@/lib/utils.js'

const Sidebar = ({className}) => {
  return (
    <div className={cn(
      className,
      "flex flex-col min-w-[266px] bg-card p-8 border !border-t-0 !border-b-0 !border-l-0 gap-5"
    )}>
      <Button variant={'outline'} className={"flex flex-row w-full justify-between"}>
        Search Documentation
        <div className={"flex flex-row items-center gap-2"}>
          {window.commandSymbol} T
        </div>
      </Button>

      <SidebarMenu />
    </div>
  )
}

export default Sidebar
