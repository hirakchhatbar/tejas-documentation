const ErrorTrackingVisual = () => {
  const particleCount = 6
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    angle: (360 / particleCount) * i + 20,
    delay: i * 0.4
  }))

  return (
    <div
      className='w-full h-full overflow-hidden flex items-center justify-center relative'
      aria-hidden
    >
      <div className='absolute inset-0 bg-gradient-to-br from-neutral-950/95 via-amber-950/50 to-neutral-950/95' />

      <div className='absolute top-1/3 left-1/4 w-24 h-24 rounded-full bg-amber-500/10 blur-3xl motion-safe:animate-pulse-slow' />
      <div
        className='absolute bottom-1/4 right-1/3 w-20 h-20 rounded-full bg-orange-500/8 blur-2xl motion-safe:animate-pulse-slow'
        style={{ animationDelay: '1.2s' }}
      />

      <div
        className='absolute inset-0 opacity-[0.08]'
        style={{
          backgroundImage:
            'radial-gradient(circle, hsl(38 92% 55% / 0.4) 1px, transparent 1px)',
          backgroundSize: '1rem 1rem'
        }}
      />

      <div className='relative w-32 h-32 sm:w-36 sm:h-36'>
        {/* Outer ring */}
        <div
          className='absolute left-1/2 top-1/2 w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-amber-400/50 bg-amber-500/20 motion-safe:animate-server-pulse -translate-x-1/2 -translate-y-1/2'
          style={{
            boxShadow:
              '0 0 36px hsl(38 92% 55% / 0.25), inset 0 0 20px hsl(38 92% 55% / 0.1)'
          }}
        />
        {/* Inner core */}
        <div
          className='absolute left-1/2 top-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-400/35 motion-safe:animate-server-pulse -translate-x-1/2 -translate-y-1/2'
          style={{
            animationDelay: '0.3s',
            boxShadow: 'inset 0 0 16px hsl(38 92% 55% / 0.3)'
          }}
        />
        {/* Fingerprint hash */}
        <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-[9px] text-amber-200/60 tracking-wider select-none'>
          ERR
        </span>

        {/* Error particles */}
        {particles.map((p) => (
          <div
            key={p.id}
            className='absolute left-1/2 top-1/2 w-24 h-24 sm:w-28 sm:h-28 -translate-x-1/2 -translate-y-1/2'
            style={{
              transform: `translate(-50%, -50%) rotate(${p.angle}deg)`,
              transformOrigin: 'center center'
            }}
          >
            <div
              className='absolute left-1/2 top-1/2 w-2 h-2 rounded-full bg-orange-400/90 border border-orange-300/60 motion-safe:animate-error-absorbed -translate-x-1/2 -translate-y-1/2'
              style={{
                transformOrigin: 'center center',
                animationDelay: `${p.delay}s`,
                boxShadow: '0 0 10px hsl(25 95% 53% / 0.6)'
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ErrorTrackingVisual
