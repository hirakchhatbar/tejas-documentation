import { cn } from '@/lib/utils.js'

const BAR_HEIGHTS = [65, 40, 80, 55, 70, 45, 90, 60, 50, 75, 85, 35]

const DashboardVisual = () => {
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
            'linear-gradient(hsl(199 89% 58% / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(199 89% 58% / 0.1) 1px, transparent 1px)',
          backgroundSize: '1.25rem 1.25rem'
        }}
      />

      <div className='relative z-10 w-full max-w-[18rem] mx-auto px-3 flex flex-col gap-2'>
        {/* Mini chart */}
        <div className='rounded-lg border border-sky-500/20 bg-black/50 p-3'>
          <div className='flex items-center justify-between mb-2'>
            <span className='font-mono text-[8px] sm:text-[9px] uppercase tracking-wider text-sky-300/40'>
              Requests / min
            </span>
            <span className='font-mono text-[9px] sm:text-[10px] text-sky-400/60 tabular-nums'>
              1.2k
            </span>
          </div>
          <div className='flex items-end gap-[3px] h-12'>
            {BAR_HEIGHTS.map((h, i) => (
              <div
                key={i}
                className={cn(
                  'flex-1 rounded-t-sm motion-safe:animate-pulse-slow',
                  h > 70
                    ? 'bg-sky-400/50'
                    : h > 50
                      ? 'bg-sky-400/35'
                      : 'bg-sky-400/20'
                )}
                style={{
                  height: `${h}%`,
                  animationDelay: `${i * 0.2}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Mini log lines */}
        <div className='rounded-lg border border-sky-500/15 bg-black/40 px-3 py-2 space-y-1'>
          {[200, 201, 404].map((status, i) => (
            <div key={i} className='flex items-center gap-2'>
              <span
                className={cn(
                  'w-1.5 h-1.5 rounded-full shrink-0',
                  status < 400
                    ? 'bg-emerald-400/50'
                    : 'bg-amber-400/60 motion-safe:animate-pulse-slow'
                )}
              />
              <span className='font-mono text-[8px] text-sky-200/30 flex-1 truncate'>
                {status === 200
                  ? 'GET /api/users → 200'
                  : status === 201
                    ? 'POST /api/orders → 201'
                    : 'GET /api/missing → 404'}
              </span>
              <span className='font-mono text-[7px] text-sky-300/20 tabular-nums shrink-0'>
                {['2ms', '15ms', '4ms'][i]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DashboardVisual
