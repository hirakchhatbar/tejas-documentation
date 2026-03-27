import CodeBlock from '@/components/shared/CodeBlock.jsx'
import HudFrame from '@/components/layouts/Home/HudFrame.jsx'
import { useInView } from '@/hooks/useInView.js'
import { cn } from '@/lib/utils.js'
import { tejasTheme } from '@/lib/code-block-themes.js'
import { quickStart } from '@/data/code-blocks/radar/index.js'
import { Button } from '@/components/ui/button.jsx'
import { BookOpen } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const RadarSetup = () => {
  const [sectionRef, sectionInView] = useInView()
  const navigate = useNavigate()

  return (
    <section className='w-full' id='setup'>
      <div className='mx-auto px-6 sm:px-10 lg:px-16 py-24'>
        <div
          ref={sectionRef}
          className={cn(
            'relative flex flex-col gap-10 max-w-4xl mx-auto',
            'scroll-in-up',
            sectionInView && 'in-view'
          )}
        >
          <HudFrame callsign='RDR-02 // CONFIG' size='lg' />

          <div className='text-center space-y-2'>
            <h2 className='text-2xl font-semibold tracking-tight text-foreground sm:text-3xl'>
              One Line to Observe Everything
            </h2>
            <p className='text-muted-foreground text-base sm:text-lg max-w-xl mx-auto'>
              Get an API key and add Radar before takeoff. That&apos;s it.
            </p>
            <div className='bento-dark-divider mt-2' aria-hidden />
          </div>

          <CodeBlock
            code={quickStart}
            language='javascript'
            withLineNumbers
            withCopy
            theme={tejasTheme}
          />

          <div className='flex flex-col items-center gap-4'>
            <p className='text-sm text-muted-foreground text-center max-w-lg'>
              Radar supports full configuration for capture options, privacy
              masking, batching, custom transports, and more.
            </p>
            <Button
              variant='outline'
              size='lg'
              className='border-border'
              onClick={() => navigate('/docs/radar')}
            >
              <BookOpen className='mr-2 h-4 w-4' />
              View Full Documentation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RadarSetup
