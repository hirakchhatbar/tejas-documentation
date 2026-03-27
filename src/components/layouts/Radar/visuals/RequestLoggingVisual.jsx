import { cn } from '@/lib/utils.js'

const REQUESTS = [
  { method: 'GET', path: '/api/users', status: 200, duration: '12ms' },
  { method: 'POST', path: '/api/orders', status: 201, duration: '45ms' },
  { method: 'GET', path: '/api/products', status: 200, duration: '8ms' },
  { method: 'DELETE', path: '/api/users/3', status: 404, duration: '3ms' },
  { method: 'GET', path: '/api/health', status: 200, duration: '1ms' }
]

const RequestLoggingVisual = () => {
  return (
    <div
      className='w-full h-full overflow-hidden flex items-center justify-center relative'
      aria-hidden
    >
      <div className='absolute inset-0 bg-gradient-to-br from-neutral-950/95 via-sky-950/50 to-neutral-950/95' />

      <div
        className='absolute inset-0 opacity-[0.08]'
        style={{
          backgroundImage:
            'radial-gradient(circle, hsl(199 89% 58% / 0.35) 1px, transparent 1px)',
          backgroundSize: '1rem 1rem'
        }}
      />

      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-2/3 rounded-2xl bg-sky-500/5 blur-2xl' />

      <div className='relative z-10 w-full max-w-[17rem] mx-auto px-3'>
        <div className='rounded-lg border border-sky-500/20 bg-black/50 overflow-hidden'>
          <div className='px-3 py-1.5 border-b border-sky-500/10 flex items-center gap-1.5'>
            <span className='w-1.5 h-1.5 rounded-full bg-sky-400/50 motion-safe:animate-pulse-slow' />
            <span className='font-mono text-[8px] sm:text-[9px] uppercase tracking-wider text-sky-300/40'>
              Live Requests
            </span>
          </div>

          <div className='px-3 py-2 space-y-1'>
            {REQUESTS.map((req, i) => (
              <div
                key={i}
                className={cn(
                  'flex items-center gap-2 py-0.5 rounded px-1.5 -mx-1.5',
                  req.status >= 400 && 'bg-amber-500/8'
                )}
              >
                <span
                  className={cn(
                    'font-mono text-[9px] sm:text-[10px] font-bold tracking-wide w-10 shrink-0',
                    req.status < 400 ? 'text-sky-200/40' : 'text-amber-200/60'
                  )}
                >
                  {req.method}
                </span>
                <span
                  className={cn(
                    'font-mono text-[9px] sm:text-[10px] flex-1 truncate',
                    req.status < 400 ? 'text-sky-200/30' : 'text-amber-200/45'
                  )}
                >
                  {req.path}
                </span>
                <span
                  className={cn(
                    'font-mono text-[9px] sm:text-[10px] font-bold tabular-nums shrink-0',
                    req.status < 400
                      ? 'text-emerald-400/50'
                      : 'text-amber-400/90'
                  )}
                >
                  {req.status}
                </span>
                <span className='font-mono text-[7px] sm:text-[8px] text-sky-300/25 tabular-nums shrink-0'>
                  {req.duration}
                </span>
              </div>
            ))}
          </div>

          <div className='px-3 py-2 border-t border-sky-500/10 flex items-center justify-between'>
            <span className='font-mono text-[7px] sm:text-[8px] text-sky-300/35 tracking-wider uppercase'>
              batch
            </span>
            <span className='font-mono text-[7px] sm:text-[8px] text-sky-300/35 tabular-nums'>
              5 / 100
            </span>
          </div>
        </div>

        <div className='absolute -bottom-2 left-1/4 right-1/4 h-4 bg-sky-500/15 blur-xl rounded-full' />
      </div>
    </div>
  )
}

export default RequestLoggingVisual
