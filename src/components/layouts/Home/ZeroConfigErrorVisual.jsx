import { cn } from '@/lib/utils.js'

const CODE_LINES = [
  'const user = await db.findUser(id)',
  'if (!user) ammo.throw()',
  'ammo.fire({ user })'
]

const RESPONSE_LINES = [
  '404 Not Found',
  '{ "message": "User not found" }'
]

const ZeroConfigErrorVisual = () => {
  const particleCount = 8
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    angle: (360 / particleCount) * i + 15,
    delay: i * 0.35
  }))
  const responseRayCount = 6
  const responseRays = Array.from({ length: responseRayCount }, (_, i) => ({
    id: i,
    angle: (360 / responseRayCount) * i
  }))

  return (
    <div
      className="zero-config-error-visual w-full h-full overflow-hidden flex items-center justify-center relative"
      aria-hidden
    >
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950/95 via-amber-950/50 to-neutral-950/95" />

      {/* Warm ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-24 h-24 rounded-full bg-amber-500/10 blur-3xl motion-safe:animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/3 w-20 h-20 rounded-full bg-orange-500/8 blur-2xl motion-safe:animate-pulse-slow" style={{ animationDelay: '1.2s' }} />

      {/* Code blocks */}
      <div className="absolute inset-0 flex flex-col gap-5 p-5 pt-6 select-none pointer-events-none z-0 items-start justify-start" aria-hidden>
        <code
          className={cn(
            'font-mono text-base sm:text-lg leading-relaxed whitespace-pre text-left rounded-lg border-2 px-4 py-3',
            'text-amber-200/55',
            'bg-black/40 border-amber-500/30'
          )}
        >
          {CODE_LINES.join('\n')}
        </code>
        <code
          className={cn(
            'font-mono text-base sm:text-lg leading-relaxed whitespace-pre text-left rounded-lg border-2 px-4 py-3',
            'text-emerald-200/55',
            'bg-black/40 border-emerald-500/30'
          )}
        >
          {RESPONSE_LINES.join('\n')}
        </code>
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: 'radial-gradient(circle, hsl(38 92% 55% / 0.4) 1px, transparent 1px)',
          backgroundSize: '1rem 1rem'
        }}
      />

      {/* Animation: lower-right corner */}
      <div className="absolute right-6 bottom-6 w-28 h-28 sm:right-8 sm:bottom-8 sm:w-32 sm:h-32">
        {/* Outer ring glow */}
        <div
          className="absolute left-1/2 top-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-amber-400/50 bg-amber-500/20 motion-safe:animate-server-pulse -translate-x-1/2 -translate-y-1/2"
          style={{
            boxShadow: '0 0 36px hsl(38 92% 55% / 0.25), inset 0 0 20px hsl(38 92% 55% / 0.1)'
          }}
        />
        {/* Inner core */}
        <div
          className="absolute left-1/2 top-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-400/35 motion-safe:animate-server-pulse -translate-x-1/2 -translate-y-1/2"
          style={{
            animationDelay: '0.3s',
            boxShadow: 'inset 0 0 16px hsl(38 92% 55% / 0.3)'
          }}
        />
        {/* Error particles (orange — "danger" coming in, absorbed by amber core) */}
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute left-1/2 top-1/2 w-20 h-20 sm:w-24 sm:h-24 -translate-x-1/2 -translate-y-1/2"
            style={{
              transform: 'translate(-50%, -50%) rotate(' + p.angle + 'deg)',
              transformOrigin: 'center center'
            }}
          >
            <div
              className="absolute left-1/2 top-1/2 w-2.5 h-2.5 rounded-full bg-orange-400/90 border border-orange-300/60 motion-safe:animate-error-absorbed -translate-x-1/2 -translate-y-1/2"
              style={{
                transformOrigin: 'center center',
                animationDelay: `${p.delay}s`,
                boxShadow: '0 0 10px hsl(25 95% 53% / 0.6)'
              }}
            />
          </div>
        ))}
        {/* Response rays (warm gold — clean response going out) */}
        {responseRays.map((r) => (
          <div
            key={r.id}
            className="absolute left-1/2 top-1/2 w-1 h-8 sm:h-10 -translate-x-1/2 -translate-y-1/2 origin-center motion-safe:animate-response-ray"
            style={{
              transform: 'translate(-50%, -50%) rotate(' + r.angle + 'deg)',
              transformOrigin: 'center center',
              animationDelay: `${r.id * 0.4}s`
            }}
          >
            <div
              className="w-full h-full rounded-full bg-amber-300/75"
              style={{ boxShadow: '0 0 12px hsl(45 93% 58% / 0.4)' }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ZeroConfigErrorVisual
