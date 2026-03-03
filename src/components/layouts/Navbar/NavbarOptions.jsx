import { Button } from '@/components/ui/button.jsx'
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from '@/components/ui/sheet.jsx'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip.jsx'
import ThemeToggle from '@/components/shared/ThemeToggle.jsx'
import NavbarMenu from '@/components/layouts/Navbar/NavbarMenu.jsx'
import { Github, Menu, Search } from 'lucide-react'
import { cn } from '@/lib/utils.js'
import { useState } from 'react'

const isMac =
  typeof navigator !== 'undefined' &&
  /Mac|iPod|iPhone|iPad/.test(navigator.platform)

export default function NavbarOptions() {
  const [sheetOpen, setSheetOpen] = useState(false)
  const searchShortcut = isMac ? '⌘K' : 'Ctrl+K'
  const closeSheet = () => setSheetOpen(false)

  return (
    <div className="flex flex-row items-center gap-2">
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            type="button"
            className="hidden items-center gap-2 rounded-md border border-input bg-muted/50 px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:flex"
            aria-label="Search (opens with keyboard shortcut)"
          >
            <Search className="h-4 w-4" />
            <span className="hidden lg:inline">Search</span>
            <kbd className="hidden rounded border border-border bg-background px-1.5 py-0.5 font-mono text-xs lg:inline">
              {searchShortcut}
            </kbd>
          </button>
        </TooltipTrigger>
        <TooltipContent>Search ({searchShortcut})</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href="https://github.com/hirakchhatbar/te.js"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
            )}
            aria-label="Open GitHub repository"
          >
            <Github className="h-5 w-5" />
          </a>
        </TooltipTrigger>
        <TooltipContent>Open GitHub</TooltipContent>
      </Tooltip>
      <ThemeToggle />
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <Tooltip>
          <TooltipTrigger asChild>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
                aria-expanded={sheetOpen}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
          </TooltipTrigger>
          <TooltipContent>Open menu</TooltipContent>
        </Tooltip>
        <SheetContent side="right" className="w-[280px] sm:max-w-[280px]">
          <div className="flex flex-col gap-4 pt-6">
            <NavbarMenu mobile onMobileClose={closeSheet} />
            <div className="flex flex-col gap-3 border-t border-border pt-4">
              <button
                type="button"
                className="flex items-center gap-3 rounded-md border border-input bg-muted/50 px-3 py-2 text-left text-sm text-muted-foreground hover:bg-muted"
                aria-label="Search (opens with keyboard shortcut)"
              >
                <Search className="h-4 w-4 shrink-0" />
                <span>Search...</span>
                <kbd className="ml-auto rounded border border-border bg-background px-1.5 py-0.5 font-mono text-xs">
                  {searchShortcut}
                </kbd>
              </button>
              <a
                href="https://github.com/hirakchhatbar/te.js"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                onClick={closeSheet}
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <ThemeToggle />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
