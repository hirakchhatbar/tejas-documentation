/**
 * Animated visual for the Auto-Documentation feature card.
 * Left: code snippet with a scanning glow line. Right: generated OpenAPI doc.
 * Connected by animated dashed flow arrow. Respects prefers-reduced-motion.
 */

const CODE_LINES = [
  'app.get("/users/:id")',
  '  const user = db.find(id)',
  '  ammo.fire({ user })'
]

const DOC_LINES = [
  { text: 'paths:', color: 'text-emerald-300/70' },
  { text: '  /users/{id}:', color: 'text-emerald-200/60' },
  { text: '    get:', color: 'text-sky-300/60' },
  { text: '      summary: Get user by ID', color: 'text-emerald-200/50' },
  { text: '      parameters:', color: 'text-emerald-300/60' },
  { text: '        - name: id', color: 'text-emerald-200/50' },
  { text: '          in: path', color: 'text-emerald-200/40' },
  { text: '          required: true', color: 'text-amber-300/50' },
  { text: '          schema:', color: 'text-emerald-200/40' },
  { text: '            type: string', color: 'text-violet-300/50' },
  { text: '      responses:', color: 'text-emerald-300/60' },
  { text: '        200:', color: 'text-sky-300/60' },
  { text: '          description: OK', color: 'text-emerald-200/50' },
  { text: '          content:', color: 'text-emerald-200/40' },
  { text: '            schema:', color: 'text-emerald-200/40' },
  { text: '              $ref: "#/User"', color: 'text-violet-300/50' }
]

const AutoDocVisual = () => {
  return (
    <div
      className='autodoc-visual w-full h-full overflow-hidden flex items-center justify-center relative'
      aria-hidden
    >
      {/* Base gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-violet-950/95 via-slate-900/85 to-violet-950/95' />

      {/* Subtle dot grid */}
      <div
        className='absolute inset-0 opacity-[0.1]'
        style={{
          backgroundImage:
            'radial-gradient(circle, hsl(263 70% 58% / 0.3) 1px, transparent 1px)',
          backgroundSize: '1rem 1rem'
        }}
      />

      {/* Content: code → flow → docs */}
      <div className='relative z-10 flex items-center gap-3 sm:gap-5 px-4 sm:px-8 w-full max-w-md'>
        {/* Code block (left) */}
        <div className='relative flex-1 min-w-0'>
          <div className='rounded-lg border border-violet-500/30 bg-black/40 px-3 py-2.5 font-mono text-[10px] sm:text-xs leading-relaxed overflow-hidden'>
            {CODE_LINES.map((line, i) => (
              <div
                key={i}
                className='text-violet-200/60 whitespace-pre truncate'
              >
                {line}
              </div>
            ))}
            {/* Scanning line */}
            <div className='autodoc-scan-line absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-violet-400/90 to-transparent' />
          </div>
          {/* Glow under code block */}
          <div className='absolute -bottom-2 left-1/4 right-1/4 h-4 bg-violet-500/15 blur-xl rounded-full' />
        </div>

        {/* Flow arrow (center) */}
        <div className='flex flex-col items-center gap-1 shrink-0'>
          <svg
            width='36'
            height='12'
            viewBox='0 0 36 12'
            fill='none'
            className='overflow-visible'
          >
            <path
              d='M 0 6 L 28 6'
              stroke='hsl(263 70% 58% / 0.5)'
              strokeWidth='1.5'
              strokeDasharray='4 3'
              className='motion-safe:animate-flow-dash'
            />
            <path
              d='M 26 2 L 32 6 L 26 10'
              stroke='hsl(263 70% 58% / 0.7)'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
              fill='none'
            />
          </svg>
          <span className='text-[8px] sm:text-[9px] tracking-wider uppercase text-violet-300/60 font-mono'>
            LLM
          </span>
        </div>

        {/* Doc block (right) */}
        <div className='relative flex-1 min-w-0'>
          <div className='autodoc-doc-block rounded-lg border border-emerald-500/30 bg-black/40 px-3 py-2 font-mono text-[9px] sm:text-[10px] leading-[1.6] overflow-hidden max-h-[180px]'>
            <div className='text-emerald-300/50 text-[8px] sm:text-[9px] uppercase tracking-wider mb-1 flex items-center gap-1.5'>
              <span className='inline-block w-1.5 h-1.5 rounded-full bg-emerald-400/60' />
              OpenAPI 3.0
            </div>
            {DOC_LINES.map((line, i) => (
              <div key={i} className={`whitespace-pre truncate ${line.color}`}>
                {line.text}
              </div>
            ))}
          </div>
          <div className='absolute -bottom-2 left-1/4 right-1/4 h-4 bg-emerald-500/15 blur-xl rounded-full' />
        </div>
      </div>
    </div>
  )
}

export default AutoDocVisual
