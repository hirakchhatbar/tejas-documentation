import { Button } from '@/components/ui/button'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  function toggleTheme() {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <Button variant='outline' size='icon' onClick={toggleTheme}>
      {theme === 'dark' ? (
        <MoonIcon className='w-5 h-5' id='dark-theme' />
      ) : (
        <SunIcon className='w-5 h-5' id='light-theme' />
      )}
    </Button>
  )
}

export default ThemeToggle
