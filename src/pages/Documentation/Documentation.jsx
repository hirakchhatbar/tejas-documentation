import TableOfContentsRail from '@/components/shared/TableOfContentsRail.jsx'
import Content from '@/components/layouts/Documentation/Content.jsx'
import Sidebar from '@/components/layouts/Documentation/Sidebar.jsx'
import { getTocForPage } from '@/data/web-content/documentation/toc-loader.js'
import { Button } from '@/components/ui/button.jsx'
import { cn } from '@/lib/utils.js'
import { Menu } from 'lucide-react'
import { useState } from 'react'
import docStore from '@/pages/Documentation/DocumentationStore.jsx'

const Documentation = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const selectedMenu = docStore((state) => state.selectedMenu)
  const tocItems = getTocForPage(selectedMenu?.tocKey)

  return (
    <div className="relative w-full min-h-[calc(100vh-64px)] flex flex-row">
      <button
        type="button"
        aria-label="Close sidebar"
        className={cn(
          'fixed inset-0 z-40 bg-black/50 transition-opacity md:hidden',
          sidebarOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
        onClick={() => setSidebarOpen(false)}
      />

      <Sidebar
        isOpen={sidebarOpen}
        onMobileClose={() => setSidebarOpen(false)}
      />

      <div className="flex flex-1 min-w-0 flex-col">
        <div className="flex items-center gap-2 p-4 md:hidden">
          <Button
            variant="outline"
            size="icon"
            aria-label="Open documentation menu"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <span className="text-sm text-muted-foreground">Documentation</span>
        </div>

        <div className="flex flex-1 min-w-0 justify-center lg:justify-start">
          <div className="flex w-full max-w-[calc(100vw-240px)] lg:max-w-none flex-1 justify-center gap-8 px-6 py-8">
            <Content className="flex-1 min-w-0 max-w-3xl" />
            <TableOfContentsRail items={tocItems} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Documentation
