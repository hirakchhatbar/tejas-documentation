import { cn } from '@/lib/utils.js'

const ENDPOINTS = [
  { path: '/api/users', p50: '8ms', p99: '45ms', rpm: 842 },
  { path: '/api/orders', p50: '23ms', p99: '120ms', rpm: 316 },
  { path: '/api/products', p50: '5ms', p99: '28ms', rpm: 1204 }
]

const SPARKLINE = [30, 45, 38, 52, 48, 65, 58, 72, 60, 55, 68, 75]

const MetricsVisual = () => {
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
            'radial-gradient(circle, hsl(160 84% 39% / 0.35) 1px, transparent 1px)',
          backgroundSize: '1rem 1rem'
        }}
      />

      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-2/3 rounded-2xl bg-emerald-500/5 blur-2xl' />

      <div className='relative z-10 w-full max-w-[17rem] mx-auto px-3 flex flex-col gap-2'>
        {/* Sparkline chart */}
        <div className='rounded-lg border border-emerald-500/20 bg-black/50 p-3'>
          <div className='flex items-center justify-between mb-2'>
            <span className='font-mono text-[8px] sm:text-[9px] uppercase tracking-wider text-emerald-300/40'>
              Latency p50
            </span>
            <span className='font-mono text-[9px] sm:text-[10px] text-emerald-400/60 tabular-nums'>
              12ms avg
            </span>
          </div>
          <svg className='w-full h-8' viewBox='0 0 120 32' preserveAspectRatio='none'>
            <polyline
              points={SPARKLINE.map(
                (v, i) => `${(i / (SPARKLINE.length - 1)) * 120},${32 - (v / 100) * 32}`
              ).join(' ')}
              fill='none'
              stroke='hsl(160 84% 39% / 0.6)'
              strokeWidth='1.5'
              strokeLinejoin='round'
              strokeLinecap='round'
              className='motion-safe:animate-line-pulse'
            />
            <polyline
              points={`0,32 ${SPARKLINE.map(
                (v, i) => `${(i / (SPARKLINE.length - 1)) * 120},${32 - (v / 100) * 32}`
              ).join(' ')} 120,32`}
              fill='hsl(160 84% 39% / 0.08)'
              stroke='none'
            />
          </svg>
        </div>

        {/* Endpoint table */}
        <div className='rounded-lg border border-emerald-500/15 bg-black/40 overflow-hidden'>
          <div className='px-3 py-1 border-b border-emerald-500/10 flex items-center gap-1.5'>
            <span className='w-1.5 h-1.5 rounded-full bg-emerald-400/50 motion-safe:animate-pulse-slow' />
            <span className='font-mono text-[8px] sm:text-[9px] uppercase tracking-wider text-emerald-300/40'>
              Top Endpoints
            </span>
          </div>
          <div className='px-3 py-1.5 space-y-1'>
            {ENDPOINTS.map((ep, i) => (
              <div key={i} className='flex items-center gap-2'>
                <span className='font-mono text-[8px] sm:text-[9px] text-emerald-200/35 flex-1 truncate'>
                  {ep.path}
                </span>
                <span className={cn(
                  'font-mono text-[8px] sm:text-[9px] tabular-nums shrink-0',
                  'text-emerald-400/50'
                )}>
                  {ep.p50}
                </span>
                <span className='font-mono text-[7px] text-emerald-300/25 tabular-nums shrink-0'>
                  {ep.rpm}/m
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MetricsVisual
