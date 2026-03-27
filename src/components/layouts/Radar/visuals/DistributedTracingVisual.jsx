const DistributedTracingVisual = () => {
  return (
    <div
      className='w-full h-full overflow-hidden flex items-center justify-center relative'
      aria-hidden
    >
      <div className='absolute inset-0 bg-gradient-to-br from-neutral-950/95 via-violet-950/50 to-neutral-950/95' />

      <div
        className='absolute inset-0 opacity-[0.12]'
        style={{
          backgroundImage:
            'linear-gradient(hsl(263 70% 58% / 0.12) 1px, transparent 1px), linear-gradient(90deg, hsl(263 70% 58% / 0.12) 1px, transparent 1px)',
          backgroundSize: '1.25rem 1.25rem'
        }}
      />

      <svg
        className='absolute inset-0 w-full h-full pointer-events-none'
        viewBox='0 0 200 120'
        preserveAspectRatio='xMidYMid slice'
      >
        <defs>
          <linearGradient
            id='trace-grad'
            x1='0%'
            y1='0%'
            x2='100%'
            y2='0%'
          >
            <stop
              offset='0%'
              stopColor='hsl(263 70% 58%)'
              stopOpacity='0.2'
            />
            <stop
              offset='50%'
              stopColor='hsl(263 70% 58%)'
              stopOpacity='0.7'
            />
            <stop
              offset='100%'
              stopColor='hsl(263 70% 58%)'
              stopOpacity='0.2'
            />
          </linearGradient>
        </defs>

        {/* Timeline vertical line */}
        <line
          x1='30'
          y1='15'
          x2='30'
          y2='105'
          stroke='hsl(263 70% 58% / 0.25)'
          strokeWidth='1'
          strokeDasharray='3 3'
        />

        {/* Trace ID label */}
        <text
          x='30'
          y='12'
          textAnchor='middle'
          className='fill-violet-300/40'
          fontSize='6'
          fontFamily='monospace'
        >
          trace-a7f3
        </text>

        {/* Span 1: full request (widest) */}
        <rect
          x='35'
          y='22'
          width='140'
          height='12'
          rx='3'
          fill='hsl(263 70% 58% / 0.15)'
          stroke='hsl(263 70% 58% / 0.35)'
          strokeWidth='0.8'
        />
        <rect
          x='35'
          y='22'
          width='140'
          height='12'
          rx='3'
          fill='url(#trace-grad)'
          opacity='0.3'
          className='motion-safe:animate-line-pulse'
        />
        <circle
          cx='35'
          cy='28'
          r='2'
          fill='hsl(263 70% 58% / 0.8)'
          className='motion-safe:animate-pulse-slow'
        />
        <text
          x='42'
          y='30'
          className='fill-violet-200/50'
          fontSize='6'
          fontFamily='monospace'
        >
          HTTP GET /api/users
        </text>

        {/* Span 2: middleware (medium) */}
        <rect
          x='45'
          y='42'
          width='90'
          height='12'
          rx='3'
          fill='hsl(263 70% 58% / 0.1)'
          stroke='hsl(263 70% 58% / 0.25)'
          strokeWidth='0.8'
        />
        <rect
          x='45'
          y='42'
          width='90'
          height='12'
          rx='3'
          fill='url(#trace-grad)'
          opacity='0.2'
          className='motion-safe:animate-line-pulse'
          style={{ animationDelay: '0.5s' }}
        />
        <circle
          cx='45'
          cy='48'
          r='2'
          fill='hsl(263 70% 58% / 0.6)'
          className='motion-safe:animate-pulse-slow'
          style={{ animationDelay: '0.3s' }}
        />
        <text
          x='52'
          y='50'
          className='fill-violet-200/40'
          fontSize='5.5'
          fontFamily='monospace'
        >
          auth middleware
        </text>

        {/* Span 3: handler (short) */}
        <rect
          x='55'
          y='62'
          width='60'
          height='12'
          rx='3'
          fill='hsl(263 70% 58% / 0.1)'
          stroke='hsl(263 70% 58% / 0.25)'
          strokeWidth='0.8'
        />
        <rect
          x='55'
          y='62'
          width='60'
          height='12'
          rx='3'
          fill='url(#trace-grad)'
          opacity='0.2'
          className='motion-safe:animate-line-pulse'
          style={{ animationDelay: '1s' }}
        />
        <circle
          cx='55'
          cy='68'
          r='2'
          fill='hsl(263 70% 58% / 0.6)'
          className='motion-safe:animate-pulse-slow'
          style={{ animationDelay: '0.6s' }}
        />
        <text
          x='62'
          y='70'
          className='fill-violet-200/40'
          fontSize='5.5'
          fontFamily='monospace'
        >
          handler
        </text>

        {/* Span 4: DB query (short) */}
        <rect
          x='65'
          y='82'
          width='40'
          height='12'
          rx='3'
          fill='hsl(263 70% 58% / 0.08)'
          stroke='hsl(263 70% 58% / 0.2)'
          strokeWidth='0.8'
        />
        <rect
          x='65'
          y='82'
          width='40'
          height='12'
          rx='3'
          fill='url(#trace-grad)'
          opacity='0.15'
          className='motion-safe:animate-line-pulse'
          style={{ animationDelay: '1.5s' }}
        />
        <circle
          cx='65'
          cy='88'
          r='2'
          fill='hsl(263 70% 58% / 0.5)'
          className='motion-safe:animate-pulse-slow'
          style={{ animationDelay: '0.9s' }}
        />
        <text
          x='72'
          y='90'
          className='fill-violet-200/35'
          fontSize='5.5'
          fontFamily='monospace'
        >
          db.query
        </text>

        {/* Duration labels */}
        <text
          x='178'
          y='30'
          textAnchor='end'
          className='fill-violet-300/30'
          fontSize='5'
          fontFamily='monospace'
        >
          45ms
        </text>
        <text
          x='138'
          y='50'
          textAnchor='end'
          className='fill-violet-300/25'
          fontSize='5'
          fontFamily='monospace'
        >
          12ms
        </text>
        <text
          x='118'
          y='70'
          textAnchor='end'
          className='fill-violet-300/25'
          fontSize='5'
          fontFamily='monospace'
        >
          28ms
        </text>
        <text
          x='108'
          y='90'
          textAnchor='end'
          className='fill-violet-300/20'
          fontSize='5'
          fontFamily='monospace'
        >
          8ms
        </text>
      </svg>
    </div>
  )
}

export default DistributedTracingVisual
