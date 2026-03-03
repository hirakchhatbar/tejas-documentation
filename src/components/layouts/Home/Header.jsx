import SectionWrapper from '@/components/layouts/Home/SectionWrapper.jsx'
import CodeBlock from '@/components/shared/CodeBlock.jsx'
import { Button } from '@/components/ui/button.jsx'
import initializeTejas from '@/data/code-blocks/initialize-tejas.js'
import { tejasThemeBgCard } from '@/lib/code-block-themes.js'
import { ChevronRight, ExternalLink, Github } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const GITHUB_URL = 'https://github.com/hirakchhatbar/te.js'

const Header = () => {
  const navigate = useNavigate()
  return (
    <SectionWrapper variant="hero" className='max-w-4xl mx-auto relative'>
      <div
        className='absolute inset-0 -z-10 overflow-hidden pointer-events-none hero-grid'
        aria-hidden
      />
      <div
        className='absolute inset-0 -z-10 overflow-hidden pointer-events-none'
        aria-hidden
      >
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[420px] bg-gradient-to-b from-sky-500/12 via-sky-400/5 to-transparent rounded-full blur-3xl' />
      </div>
      <div className='flex flex-col items-center gap-8 text-center'>
        <img
          src='tejas-logo.svg'
          alt='Tejas'
          className='w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 shrink-0 opacity-0 animate-fade-in'
          style={{ animationDelay: '0ms' }}
          width={256}
          height={256}
        />
        <div className='flex flex-col gap-4 opacity-0 animate-fade-in-up' style={{ animationDelay: '80ms' }}>
          <h1 className='font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight bg-gradient-to-r from-sky-500 via-sky-400 to-cyan-400 bg-clip-text text-transparent'>
            A Node Framework For Powerful Backend Services
          </h1>
          <p className='text-lg text-muted-foreground max-w-xl mx-auto flex items-center justify-center gap-1.5'>
            Built for speed. Designed for precision.
            <ChevronRight className='w-4 h-4 text-sky-500/70 shrink-0' aria-hidden />
          </p>
        </div>
        <div className='flex flex-wrap items-center justify-center gap-3 opacity-0 animate-fade-in-up' style={{ animationDelay: '180ms' }}>
          <Button
            size='lg'
            className='bg-sky-500 hover:bg-sky-600 text-white border-0'
            onClick={() => navigate('/docs')}
          >
            Get Started
            <ExternalLink className='w-4 h-4 ml-2' />
          </Button>
          <Button
            variant='outline'
            size='lg'
            className='border-border'
            onClick={() => navigate('/docs')}
          >
            View docs
          </Button>
          <Button variant='outline' size='lg' className='border-border' asChild>
            <a href={GITHUB_URL} target='_blank' rel='noopener noreferrer'>
              <Github className='w-4 h-4 mr-2' />
              GitHub
            </a>
          </Button>
        </div>
        <div className='flex items-center gap-4 text-sm text-muted-foreground opacity-0 animate-fade-in' style={{ animationDelay: '280ms' }}>
          <button
            type='button'
            onClick={() => navigate('/docs')}
            className='hover:text-foreground transition-colors underline underline-offset-2'
          >
            Docs
          </button>
          <span aria-hidden>·</span>
          <a
            href={GITHUB_URL}
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-foreground transition-colors underline underline-offset-2'
          >
            GitHub
          </a>
        </div>
      </div>

      <div className='w-full max-w-2xl mx-auto mt-16 flex flex-col gap-4 opacity-0 animate-fade-in-up' style={{ animationDelay: '380ms' }}>
        <div
          id='termynal'
          data-termynal
          className='rounded-lg border border-border overflow-hidden bg-zinc-950/50'
        >
          <span data-ty='input'>npx fly-tejas</span>
        </div>
        <CodeBlock
          language='javascript'
          theme={tejasThemeBgCard}
          code={initializeTejas}
          className='rounded-lg border border-border overflow-hidden border-l-2 border-l-sky-500/30'
        />
      </div>
      <div className='horizon-line mt-4' aria-hidden />
    </SectionWrapper>
  )
}

export default Header
