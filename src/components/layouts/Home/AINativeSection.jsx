import HudFrame from '@/components/layouts/Home/HudFrame.jsx'
import { useInView } from '@/hooks/useInView.js'
import { cn } from '@/lib/utils.js'
import { BookOpenIcon, CodeIcon, RocketIcon, SparklesIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

const ACCENT = {
  sky: {
    icon: 'text-sky-500 dark:text-sky-400',
    bar: 'from-sky-500/80 to-sky-400/40'
  },
  emerald: {
    icon: 'text-emerald-500 dark:text-emerald-400',
    bar: 'from-emerald-500/80 to-emerald-400/40'
  },
  violet: {
    icon: 'text-violet-500 dark:text-violet-400',
    bar: 'from-violet-500/80 to-violet-400/40'
  }
}

const PROMPT_CARDS = [
  {
    id: 'scaffold',
    title: 'Scaffold & Setup',
    Icon: RocketIcon,
    accent: 'sky',
    prompts: [
      'Scaffold a new te.js project called my-api',
      'Add rate limiting and CORS to my te.js app',
      'Generate OpenAPI spec documentation for this project'
    ],
    poweredBy: 'scaffold_project, generate_app_entry, generate_config'
  },
  {
    id: 'write',
    title: 'Write Code',
    Icon: CodeIcon,
    accent: 'emerald',
    prompts: [
      'Add a target for /api/orders with GET and POST handlers',
      'Generate a target with file upload for user avatars',
      'Create middleware that validates a bearer token and attaches the user to the request'
    ],
    poweredBy: 'generate_target'
  },
  {
    id: 'learn',
    title: 'Learn & Explore',
    Icon: BookOpenIcon,
    accent: 'violet',
    prompts: [
      'I want to limit requests to 100 per minute per IP. What are the available options?',
      'How do I return a 422 with a custom message using ammo?',
      'Show me how to serve the OpenAPI spec and Swagger UI in Tejas'
    ],
    poweredBy: 'get_documentation, get_code_example, search_docs'
  }
]

const AINativeSection = () => {
  const [ref, inView] = useInView()

  return (
    <section className='w-full' id='ai-native'>
      <div className='mx-auto px-6 sm:px-10 lg:px-16 py-24'>
        <div
          ref={ref}
          className={cn(
            'relative flex flex-col gap-10',
            'scroll-in-up',
            inView && 'in-view'
          )}
        >
          <HudFrame callsign='TX-03 // AI CORE' size='lg' />

          <div className='text-center space-y-2'>
            <h2 className='text-2xl font-semibold tracking-tight text-foreground sm:text-3xl'>
              Your AI Already Knows Tejas
            </h2>
            <p className='text-muted-foreground text-base sm:text-lg max-w-xl mx-auto'>
              The MCP server gives your AI assistant full framework knowledge.
              Here&apos;s what you can ask.
            </p>
            <div className='bento-dark-divider mt-2' aria-hidden />
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6'>
            {PROMPT_CARDS.map((card, index) => {
              const accent = ACCENT[card.accent]
              const Icon = card.Icon
              return (
                <div
                  key={card.id}
                  className='bento-card bento-dark-card group flex flex-col rounded-xl overflow-hidden transition-all duration-300'
                  data-accent={card.accent}
                  style={{ transitionDelay: `${Math.min(index * 60, 120)}ms` }}
                >
                  <div
                    className={cn(
                      'h-[2px] w-full bg-gradient-to-r',
                      accent.bar
                    )}
                  />

                  <div className='relative z-10 p-6 pb-3 flex flex-col gap-2'>
                    <div className='flex items-center gap-2.5'>
                      <Icon
                        className={cn('h-5 w-5 shrink-0', accent.icon)}
                        strokeWidth={2}
                      />
                      <h3 className='text-base font-bold text-foreground sm:text-lg'>
                        {card.title}
                      </h3>
                    </div>
                  </div>

                  <div className='bento-dark-visual relative flex-1 p-4 sm:p-6 flex flex-col gap-3'>
                    <div className='flex flex-col gap-2'>
                      {card.prompts.map((prompt, i) => (
                        <div
                          key={i}
                          className='flex items-start gap-2.5 rounded-md border border-border bg-background/80 px-3 py-2.5'
                        >
                          <SparklesIcon className='h-4 w-4 text-sky-500 shrink-0 mt-0.5' />
                          <p className='text-sm text-muted-foreground italic'>
                            &ldquo;{prompt}&rdquo;
                          </p>
                        </div>
                      ))}
                    </div>
                    <p className='mt-auto font-mono text-[10px] text-muted-foreground/70'>
                      Powered by: {card.poweredBy}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          <p className='text-center'>
            <Link
              to='/docs/installation#mcp-setup'
              className='text-sm text-sky-600 dark:text-sky-400 underline underline-offset-2 hover:no-underline'
            >
              Set up Tejas MCP in your IDE →
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default AINativeSection
