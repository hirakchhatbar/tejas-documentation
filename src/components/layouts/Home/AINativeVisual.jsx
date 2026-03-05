/**
 * Hi-tech animated visual for the AI-Native (MCP) feature card.
 * Grid, floating nodes, and subtle data-flow style; respects prefers-reduced-motion.
 */
const AINativeVisual = () => {
  const nodeCount = 12
  const nodes = Array.from({ length: nodeCount }, (_, i) => ({
    id: i,
    x: 15 + (i % 4) * 23 + (i % 3) * 2,
    y: 20 + Math.floor(i / 4) * 28 + (i % 2) * 5,
    delay: i * 0.15,
    size: 4 + (i % 3)
  }))

  return (
    <div
      className="ainative-visual w-full h-full overflow-hidden flex items-center justify-center relative"
      aria-hidden
    >
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-950/95 via-sky-900/70 to-sky-950/95" />

      {/* Animated grid */}
      <div className="ainative-grid absolute inset-0 opacity-[0.2]" />

      {/* Glow orbs */}
      <div className="ainative-orb ainative-orb-1 absolute top-1/4 left-1/4 w-20 h-20 rounded-full bg-sky-400/25 blur-2xl motion-safe:animate-pulse-slow" />
      <div className="ainative-orb ainative-orb-2 absolute bottom-1/3 right-1/4 w-16 h-16 rounded-full bg-cyan-400/20 blur-xl motion-safe:animate-pulse-slow" style={{ animationDelay: '1s' }} />

      {/* Floating nodes */}
      <div className="absolute inset-0">
        {nodes.map((node) => (
          <div
            key={node.id}
            className="ainative-node absolute rounded-full bg-sky-300/80 border border-sky-200/40 shadow-[0_0_12px_hsl(199_89%_58%_/_.4)] motion-safe:animate-float-node"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              width: node.size,
              height: node.size,
              minWidth: node.size,
              minHeight: node.size,
              animationDelay: `${node.delay}s`
            }}
          />
        ))}
      </div>

      {/* Connection lines (SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" aria-hidden>
        <defs>
          <linearGradient id="ainative-line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(199 89% 58%)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(187 85% 53%)" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <line x1="20%" y1="25%" x2="45%" y2="35%" stroke="url(#ainative-line-grad)" strokeWidth="0.5" className="motion-safe:animate-line-pulse" />
        <line x1="55%" y1="40%" x2="78%" y2="30%" stroke="url(#ainative-line-grad)" strokeWidth="0.5" className="motion-safe:animate-line-pulse" style={{ animationDelay: '0.5s' }} />
        <line x1="35%" y1="55%" x2="65%" y2="55%" stroke="url(#ainative-line-grad)" strokeWidth="0.5" className="motion-safe:animate-line-pulse" style={{ animationDelay: '1s' }} />
        <line x1="25%" y1="70%" x2="50%" y2="75%" stroke="url(#ainative-line-grad)" strokeWidth="0.5" className="motion-safe:animate-line-pulse" style={{ animationDelay: '0.3s' }} />
        <line x1="70%" y1="65%" x2="82%" y2="72%" stroke="url(#ainative-line-grad)" strokeWidth="0.5" className="motion-safe:animate-line-pulse" style={{ animationDelay: '0.8s' }} />
      </svg>

      {/* Center label */}
      <div className="ainative-label relative z-10 flex flex-col items-center gap-1 px-4">
        <span className="font-mono text-[10px] sm:text-xs tracking-[0.35em] text-sky-200/95 uppercase">
          MCP
        </span>
        <span className="text-[11px] sm:text-xs text-sky-300/90 tracking-wider">
          AI-Native
        </span>
      </div>
    </div>
  )
}

export default AINativeVisual
