import { Button } from '@/components/ui/button.jsx'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet.jsx'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip.jsx'
import ThemeToggle from '@/components/shared/ThemeToggle.jsx'
import NpmBadges from '@/components/layouts/Navbar/NpmBadges.jsx'
import NavbarMenu from '@/components/layouts/Navbar/NavbarMenu.jsx'
import { Github, Menu } from 'lucide-react'
import { useState } from 'react'

export default function NavbarOptions() {
  const [sheetOpen, setSheetOpen] = useState(false)
  const closeSheet = () => setSheetOpen(false)

  return (
    <div className='flex flex-row items-center gap-2'>
      <NpmBadges />
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='outline' size='icon' asChild>
            <a
              href='https://github.com/hirakchhatbar/te.js'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Open GitHub repository'
            >
              <Github className='h-5 w-5' />
            </a>
          </Button>
        </TooltipTrigger>
        <TooltipContent>GitHub</TooltipContent>
      </Tooltip>
      <ThemeToggle />
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <Tooltip>
          <TooltipTrigger asChild>
            <SheetTrigger asChild>
              <Button
                variant='outline'
                size='icon'
                className='md:hidden'
                aria-label='Open menu'
                aria-expanded={sheetOpen}
              >
                <Menu className='h-5 w-5' />
              </Button>
            </SheetTrigger>
          </TooltipTrigger>
          <TooltipContent>Open menu</TooltipContent>
        </Tooltip>
        <SheetContent side='right' className='w-[280px] sm:max-w-[280px]'>
          <div className='flex flex-col gap-4 pt-6'>
            <NavbarMenu mobile onMobileClose={closeSheet} />
            <div className='flex flex-col gap-3 border-t border-border pt-4'>
              <a
                href='https://github.com/hirakchhatbar/te.js'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground'
                onClick={closeSheet}
              >
                <Github className='h-4 w-4' />
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
