import { Button } from '@/components/ui/button.jsx'
import HudFrame from '@/components/layouts/Home/HudFrame.jsx'
import { useInView } from '@/hooks/useInView.js'
import { cn } from '@/lib/utils.js'
import { BookOpen, ExternalLink } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const RADAR_URL = 'https://radar.usetejas.com'

const RadarCTA = () => {
  const [ref, inView] = useInView()
  const navigate = useNavigate()

  return (
    <section className='w-full border-t border-border/80'>
      <div
        ref={ref}
        className={cn(
          'relative flex flex-col items-center justify-center gap-6 px-6 py-20',
          'scroll-in-up',
          inView && 'in-view'
        )}
      >
        <HudFrame callsign='RDR-03 // LAUNCH' />

        <div
          className='absolute inset-0 -z-10 overflow-hidden pointer-events-none'
          aria-hidden
        >
          <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-sky-500/10 via-transparent to-transparent rounded-full blur-2xl' />
        </div>

        {/* Radar sweep accent */}
        <svg
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] pointer-events-none opacity-[0.04] dark:opacity-[0.05]'
          viewBox='0 0 100 100'
          aria-hidden
        >
          <circle cx='50' cy='50' r='38' fill='none' stroke='hsl(199 89% 58%)' strokeWidth='0.6' />
          <circle cx='50' cy='50' r='24' fill='none' stroke='hsl(199 89% 58%)' strokeWidth='0.4' />
          <path d='M 50 50 L 50 12 A 38 38 0 0 1 79 28 Z' fill='hsl(199 89% 58%)' opacity='0.2' />
        </svg>

        <h2 className='text-center text-xl font-semibold tracking-tight text-foreground sm:text-2xl'>
          Ready to add observability?
        </h2>
        <div className='flex flex-wrap items-center justify-center gap-3'>
          <Button
            size='lg'
            className='bg-sky-500 hover:bg-sky-600 text-white border-0 glow-sky'
            asChild
          >
            <a href={RADAR_URL} target='_blank' rel='noopener noreferrer'>
              Sign Up
              <ExternalLink className='ml-2 h-4 w-4' />
            </a>
          </Button>
          <Button
            variant='outline'
            size='lg'
            className='border-border'
            onClick={() => navigate('/docs/radar')}
          >
            <BookOpen className='mr-2 h-4 w-4' />
            Read the Docs
          </Button>
        </div>

        <span
          className='font-mono text-[9px] sm:text-[10px] tracking-[0.25em] text-muted-foreground/20 uppercase select-none'
          aria-hidden
        >
          RADAR ONLINE · TELEMETRY NOMINAL
        </span>
      </div>
    </section>
  )
}

export default RadarCTA
