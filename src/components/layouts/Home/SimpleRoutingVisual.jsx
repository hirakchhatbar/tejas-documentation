/**
 * Hi-tech animated visual for the Simple Routing feature card.
 * Clean path-like routes, one with a parameterized segment; respects prefers-reduced-motion.
 */
const SimpleRoutingVisual = () => {
  return (
    <div
      className="simple-routing-visual w-full h-full overflow-hidden flex items-center justify-center relative"
      aria-hidden
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/95 via-slate-900/85 to-emerald-950/95" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: 'linear-gradient(hsl(160 84% 39% / 0.12) 1px, transparent 1px), linear-gradient(90deg, hsl(160 84% 39% / 0.12) 1px, transparent 1px)',
          backgroundSize: '1.25rem 1.25rem'
        }}
      />

      {/* Routes: clean path lines + endpoints */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <defs>
          <linearGradient id="routing-stroke-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(160 84% 39%)" stopOpacity="0.3" />
            <stop offset="50%" stopColor="hsl(160 84% 39%)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="hsl(160 84% 39%)" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        {/* Route 1: top – straight path */}
        <path
          d="M 12 28 L 88 28"
          fill="none"
          stroke="url(#routing-stroke-grad)"
          strokeWidth="1.2"
          strokeLinecap="round"
          className="motion-safe:animate-line-pulse"
        />
        <circle cx="12" cy="28" r="2.2" fill="hsl(160 84% 39% / 0.6)" className="motion-safe:animate-pulse-slow" />
        <circle cx="88" cy="28" r="2.2" fill="hsl(160 84% 39% / 0.6)" className="motion-safe:animate-pulse-slow" style={{ animationDelay: '0.5s' }} />

        {/* Route 2: middle – path with parameter segment (dashed middle) */}
        <path
          d="M 12 50 L 42 50"
          fill="none"
          stroke="url(#routing-stroke-grad)"
          strokeWidth="1.2"
          strokeLinecap="round"
          className="motion-safe:animate-line-pulse"
        />
        <path
          d="M 42 50 L 58 50"
          fill="none"
          stroke="hsl(160 84% 39% / 0.8)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeDasharray="3 3"
          className="motion-safe:animate-route-param"
        />
        <path
          d="M 58 50 L 88 50"
          fill="none"
          stroke="url(#routing-stroke-grad)"
          strokeWidth="1.2"
          strokeLinecap="round"
          className="motion-safe:animate-line-pulse"
          style={{ animationDelay: '0.3s' }}
        />
        <circle cx="12" cy="50" r="2.2" fill="hsl(160 84% 39% / 0.6)" className="motion-safe:animate-pulse-slow" style={{ animationDelay: '0.2s' }} />
        <circle cx="50" cy="50" r="1.8" fill="hsl(160 84% 39% / 0.9)" className="motion-safe:animate-pulse-slow" style={{ animationDelay: '0.8s' }} />
        <circle cx="88" cy="50" r="2.2" fill="hsl(160 84% 39% / 0.6)" className="motion-safe:animate-pulse-slow" style={{ animationDelay: '0.7s' }} />

        {/* Route 3: bottom – straight path */}
        <path
          d="M 12 72 L 88 72"
          fill="none"
          stroke="url(#routing-stroke-grad)"
          strokeWidth="1.2"
          strokeLinecap="round"
          className="motion-safe:animate-line-pulse"
          style={{ animationDelay: '0.6s' }}
        />
        <circle cx="12" cy="72" r="2.2" fill="hsl(160 84% 39% / 0.6)" className="motion-safe:animate-pulse-slow" style={{ animationDelay: '0.4s' }} />
        <circle cx="88" cy="72" r="2.2" fill="hsl(160 84% 39% / 0.6)" className="motion-safe:animate-pulse-slow" style={{ animationDelay: '0.9s' }} />

        {/* Moving dash along top route – request flow */}
        <path
          d="M 12 28 L 88 28"
          fill="none"
          stroke="hsl(160 84% 39% / 0.95)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="3 73"
          className="motion-safe:animate-route-dot"
        />
      </svg>
    </div>
  )
}

export default SimpleRoutingVisual
