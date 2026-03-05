import { cn } from '@/lib/utils.js'

/**
 * Animated visual for the Built-in Rate Limiting feature card.
 * Shows a request log with allowed/blocked entries, a pulsing 429 indicator,
 * and a token capacity bar. Rose accent. Respects prefers-reduced-motion.
 */

const REQUESTS = [
  { method: 'GET', path: '/users', status: 200, ok: true },
  { method: 'POST', path: '/data', status: 201, ok: true },
  { method: 'GET', path: '/users', status: 200, ok: true },
  { method: 'GET', path: '/users', status: 429, ok: false }
]

const RateLimitVisual = () => {
  return (
    <div
      className="rate-limit-visual w-full h-full overflow-hidden flex items-center justify-center relative"
      aria-hidden
    >
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950/95 via-rose-950/50 to-neutral-950/95" />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'radial-gradient(circle, hsl(347 77% 50% / 0.35) 1px, transparent 1px)',
          backgroundSize: '1rem 1rem'
        }}
      />

      {/* Glow behind panel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-2/3 rounded-2xl bg-rose-500/5 blur-2xl" />

      {/* Log panel */}
      <div className="relative z-10 w-full max-w-[15rem] sm:max-w-[17rem] mx-auto px-3">
        <div className="rounded-lg border border-rose-500/20 bg-black/50 overflow-hidden">
          {/* Header */}
          <div className="px-3 py-1.5 border-b border-rose-500/10 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400/50" />
            <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-wider text-rose-300/40">
              Request Log
            </span>
          </div>

          {/* Entries */}
          <div className="px-3 py-2 space-y-1">
            {REQUESTS.map((req, i) => (
              <div
                key={i}
                className={cn(
                  'flex items-center gap-2 py-0.5 rounded px-1.5 -mx-1.5',
                  !req.ok && 'bg-rose-500/8'
                )}
              >
                <span
                  className={cn(
                    'font-mono text-[9px] sm:text-[10px] font-bold tracking-wide w-8 shrink-0',
                    req.ok ? 'text-rose-200/40' : 'text-rose-200/60'
                  )}
                >
                  {req.method}
                </span>
                <span
                  className={cn(
                    'font-mono text-[9px] sm:text-[10px] flex-1 truncate',
                    req.ok ? 'text-rose-200/30' : 'text-rose-200/45'
                  )}
                >
                  {req.path}
                </span>
                <span
                  className={cn(
                    'font-mono text-[9px] sm:text-[10px] font-bold tabular-nums shrink-0',
                    req.ok ? 'text-emerald-400/50' : 'text-rose-400/90'
                  )}
                >
                  {req.status}
                </span>
                {!req.ok && (
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400/70 motion-safe:animate-pulse-slow shrink-0" />
                )}
              </div>
            ))}
          </div>

          {/* Capacity bar */}
          <div className="px-3 py-2 border-t border-rose-500/10 flex items-center gap-2">
            <span className="font-mono text-[7px] sm:text-[8px] text-rose-300/35 tracking-wider uppercase shrink-0">
              limit
            </span>
            <div className="flex-1 flex gap-0.5">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={cn(
                    'h-1 flex-1 rounded-full',
                    i < 3 ? 'bg-rose-400/50' : 'bg-rose-400/10'
                  )}
                />
              ))}
            </div>
            <span className="font-mono text-[7px] sm:text-[8px] text-rose-300/35 tabular-nums shrink-0">
              3/4
            </span>
          </div>
        </div>

        {/* Glow under panel */}
        <div className="absolute -bottom-2 left-1/4 right-1/4 h-4 bg-rose-500/15 blur-xl rounded-full" />
      </div>
    </div>
  )
}

export default RateLimitVisual
