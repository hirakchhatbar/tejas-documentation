import { Button } from '@/components/ui/button.jsx'
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
        <div
          className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
          aria-hidden
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-sky-500/10 via-transparent to-transparent rounded-full blur-2xl" />
        </div>
        <h2 className="text-center text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          Ready to build something powerful?
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
      </div>
    </section>
  )
}

export default BottomCTA
