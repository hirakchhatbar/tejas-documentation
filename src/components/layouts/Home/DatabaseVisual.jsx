import { cn } from '@/lib/utils.js'

/**
 * Animated visual for the Built-in Database feature card.
 * Shows a stylised connection panel with Redis and MongoDB entries,
 * status indicators, and a latency readout. Sky accent.
 * Respects prefers-reduced-motion.
 */

const CONNECTIONS = [
  {
    name: 'Redis',
    host: 'localhost:6379',
    status: 'connected',
    badge: 'bg-rose-400/60',
    label: 'text-rose-300/70',
    latency: '0.3 ms'
  },
  {
    name: 'MongoDB',
    host: 'cluster0.atlas.net',
    status: 'connected',
    badge: 'bg-emerald-400/60',
    label: 'text-emerald-300/70',
    latency: '12 ms'
  }
]

const DatabaseVisual = () => {
  return (
    <div
      className="database-visual w-full h-full overflow-hidden flex items-center justify-center relative"
      aria-hidden
    >
      <div className="absolute inset-0 bg-gradient-to-br from-sky-950/95 via-slate-900/85 to-sky-950/95" />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'radial-gradient(circle, hsl(199 89% 58% / 0.35) 1px, transparent 1px)',
          backgroundSize: '1rem 1rem'
        }}
      />

      {/* Glow behind panel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-2/3 rounded-2xl bg-sky-500/5 blur-2xl" />

      {/* Connection panel */}
      <div className="relative z-10 w-full max-w-[15rem] sm:max-w-[17rem] mx-auto px-3">
        <div className="rounded-lg border border-sky-500/20 bg-black/50 overflow-hidden">
          {/* Header */}
          <div className="px-3 py-1.5 border-b border-sky-500/10 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400/50" />
            <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-wider text-sky-300/40">
              Connections
            </span>
          </div>

          {/* Connection entries */}
          <div className="px-3 py-2.5 space-y-3">
            {CONNECTIONS.map((conn, i) => (
              <div key={i} className="space-y-1">
                <div className="flex items-center gap-2">
                  {/* Status dot */}
                  <span
                    className={cn(
                      'w-1.5 h-1.5 rounded-full shrink-0 motion-safe:animate-pulse-slow',
                      conn.badge
                    )}
                    style={{ animationDelay: `${i * 1.2}s` }}
                  />
                  {/* Name */}
                  <span
                    className={cn(
                      'font-mono text-[10px] sm:text-[11px] font-bold tracking-wide',
                      conn.label
                    )}
                  >
                    {conn.name}
                  </span>
                  <span className="font-mono text-[8px] sm:text-[9px] text-sky-300/25 ml-auto tabular-nums">
                    {conn.latency}
                  </span>
                </div>
                <div className="flex items-center gap-2 pl-3.5">
                  <span className="font-mono text-[8px] sm:text-[9px] text-sky-200/25 truncate">
                    {conn.host}
                  </span>
                  <span className="font-mono text-[7px] sm:text-[8px] text-emerald-400/40 ml-auto shrink-0">
                    ● {conn.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Footer: code hint */}
          <div className="px-3 py-2 border-t border-sky-500/10">
            <code className="font-mono text-[8px] sm:text-[9px] text-sky-300/30">
              app.withRedis() <span className="text-sky-300/15">|</span> app.withMongo()
            </code>
          </div>
        </div>

        {/* Glow under panel */}
        <div className="absolute -bottom-2 left-1/4 right-1/4 h-4 bg-sky-500/15 blur-xl rounded-full" />
      </div>
    </div>
  )
}

export default DatabaseVisual
