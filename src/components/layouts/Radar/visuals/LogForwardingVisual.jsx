import { cn } from '@/lib/utils.js'

const LOG_LINES = [
  { level: 'info', msg: '[Auth] User login successful', trace: 'a7f3' },
  { level: 'warn', msg: '[DB] Slow query detected (340ms)', trace: 'b2c1' },
  { level: 'error', msg: '[Payment] Charge declined', trace: 'c9d4' },
  { level: 'info', msg: '[API] Cache miss /products', trace: 'a7f3' },
  { level: 'warn', msg: '[RateLimit] Threshold 80%', trace: 'e5f2' }
]

const LEVEL_STYLES = {
  info: { dot: 'bg-sky-400/50', text: 'text-sky-300/50', label: 'INF' },
  warn: { dot: 'bg-amber-400/60', text: 'text-amber-300/55', label: 'WRN' },
  error: {
    dot: 'bg-rose-400/70 motion-safe:animate-pulse-slow',
    text: 'text-rose-300/60',
    label: 'ERR'
  }
}

const LogForwardingVisual = () => {
  return (
    <div
      className='w-full h-full overflow-hidden flex items-center justify-center relative'
      aria-hidden
    >
      <div className='absolute inset-0 bg-gradient-to-br from-neutral-950/95 via-emerald-950/50 to-neutral-950/95' />

      <div
        className='absolute inset-0 opacity-[0.08]'
        style={{
          backgroundImage:
            'linear-gradient(hsl(160 84% 39% / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(160 84% 39% / 0.1) 1px, transparent 1px)',
          backgroundSize: '1.25rem 1.25rem'
        }}
      />

      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-2/3 rounded-2xl bg-emerald-500/5 blur-2xl' />

      <div className='relative z-10 w-full max-w-[17rem] mx-auto px-3'>
        <div className='rounded-lg border border-emerald-500/20 bg-black/50 overflow-hidden'>
          <div className='px-3 py-1.5 border-b border-emerald-500/10 flex items-center justify-between'>
            <div className='flex items-center gap-1.5'>
              <span className='w-1.5 h-1.5 rounded-full bg-emerald-400/50 motion-safe:animate-pulse-slow' />
              <span className='font-mono text-[8px] sm:text-[9px] uppercase tracking-wider text-emerald-300/40'>
                TejLogger → Radar
              </span>
            </div>
            <div className='flex gap-1'>
              {['info', 'warn', 'error'].map((l) => (
                <span
                  key={l}
                  className={cn(
                    'font-mono text-[7px] px-1 rounded',
                    l === 'info' && 'text-sky-300/40 bg-sky-500/10',
                    l === 'warn' && 'text-amber-300/40 bg-amber-500/10',
                    l === 'error' && 'text-rose-300/40 bg-rose-500/10'
                  )}
                >
                  {l}
                </span>
              ))}
            </div>
          </div>

          <div className='px-3 py-2 space-y-1.5'>
            {LOG_LINES.map((line, i) => {
              const style = LEVEL_STYLES[line.level]
              return (
                <div key={i} className='flex items-start gap-2'>
                  <span
                    className={cn(
                      'w-1.5 h-1.5 rounded-full shrink-0 mt-1',
                      style.dot
                    )}
                  />
                  <div className='flex-1 min-w-0'>
                    <div className='flex items-center gap-1.5'>
                      <span
                        className={cn(
                          'font-mono text-[8px] font-bold',
                          style.text
                        )}
                      >
                        {style.label}
                      </span>
                      <span className='font-mono text-[8px] text-emerald-300/20 tabular-nums'>
                        trace:{line.trace}
                      </span>
                    </div>
                    <span className='font-mono text-[8px] sm:text-[9px] text-emerald-200/35 block truncate'>
                      {line.msg}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

          <div className='px-3 py-1.5 border-t border-emerald-500/10 flex items-center justify-between'>
            <span className='font-mono text-[7px] sm:text-[8px] text-emerald-300/35 tracking-wider uppercase'>
              forwarded
            </span>
            <span className='font-mono text-[7px] sm:text-[8px] text-emerald-400/40 tabular-nums'>
              5 events · warn,error
            </span>
          </div>
        </div>

        <div className='absolute -bottom-2 left-1/4 right-1/4 h-4 bg-emerald-500/15 blur-xl rounded-full' />
      </div>
    </div>
  )
}

export default LogForwardingVisual
