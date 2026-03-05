import { Button } from '@/components/ui/button.jsx'
import HudFrame from '@/components/layouts/Home/HudFrame.jsx'
import { useInView } from '@/hooks/useInView.js'
import { cn } from '@/lib/utils.js'
import { BookOpen, ExternalLink } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const BottomCTA = () => {
  const navigate = useNavigate()
  const [ref, inView] = useInView()

  return (
    <section className="w-full border-t border-border/80">
      <div
        ref={ref}
        className={cn(
          'relative flex flex-col items-center justify-center gap-6 px-6 py-20',
          'scroll-in-up',
          inView && 'in-view'
        )}
      >
        <HudFrame callsign="TX-05 // LAUNCH" />

        <div
          className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
          aria-hidden
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-sky-500/10 via-transparent to-transparent rounded-full blur-2xl" />
        </div>

        {/* Delta-wing accent */}
        <svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] pointer-events-none opacity-[0.04] dark:opacity-[0.05]"
          viewBox="0 0 100 100"
          aria-hidden
        >
          <path
            d="M 50 15 L 78 85 L 50 70 L 22 85 Z"
            fill="hsl(199 89% 58%)"
            opacity="0.3"
          />
          <path
            d="M 50 15 L 78 85 L 50 70 L 22 85 Z"
            fill="none"
            stroke="hsl(199 89% 58%)"
            strokeWidth="0.7"
          />
        </svg>

        <h2 className="text-center text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          Ready for takeoff?
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button
            size="lg"
            className="bg-sky-500 hover:bg-sky-600 text-white border-0"
            onClick={() => navigate('/docs')}
          >
            Get Started
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-border"
            onClick={() => navigate('/docs')}
          >
            <BookOpen className="mr-2 h-4 w-4" />
            Read the Docs
          </Button>
        </div>

        {/* Telemetry sign-off */}
        <span
          className="font-mono text-[9px] sm:text-[10px] tracking-[0.25em] text-muted-foreground/20 uppercase select-none"
          aria-hidden
        >
          SYSTEMS NOMINAL · CLEARED FOR DEPARTURE
        </span>
      </div>
    </section>
  )
}

export default BottomCTA
