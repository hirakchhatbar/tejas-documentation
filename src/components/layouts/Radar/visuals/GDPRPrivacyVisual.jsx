import { cn } from '@/lib/utils.js'

const FIELDS = [
  { label: 'password', masked: true },
  { label: 'email', masked: false },
  { label: 'token', masked: true },
  { label: 'name', masked: false },
  { label: 'ssn', masked: true },
  { label: 'secret', masked: true }
]

const GDPRPrivacyVisual = () => {
  return (
    <div
      className='w-full h-full overflow-hidden flex items-center justify-center relative'
      aria-hidden
    >
      <div className='absolute inset-0 bg-gradient-to-br from-neutral-950/95 via-rose-950/50 to-neutral-950/95' />

      <div
        className='absolute inset-0 opacity-[0.08]'
        style={{
          backgroundImage:
            'radial-gradient(circle, hsl(347 77% 50% / 0.35) 1px, transparent 1px)',
          backgroundSize: '1rem 1rem'
        }}
      />

      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-2/3 rounded-2xl bg-rose-500/5 blur-2xl' />

      <div className='relative z-10 w-full max-w-[16rem] mx-auto px-3'>
        <div className='rounded-lg border border-rose-500/20 bg-black/50 overflow-hidden'>
          <div className='px-3 py-1.5 border-b border-rose-500/10 flex items-center gap-1.5'>
            <span className='w-1.5 h-1.5 rounded-full bg-rose-400/50' />
            <span className='font-mono text-[8px] sm:text-[9px] uppercase tracking-wider text-rose-300/40'>
              Privacy Scrubber
            </span>
          </div>

          <div className='px-3 py-2.5 space-y-1.5'>
            {FIELDS.map((field, i) => (
              <div
                key={i}
                className={cn(
                  'flex items-center gap-2 py-0.5 rounded px-1.5 -mx-1.5',
                  field.masked && 'bg-rose-500/8'
                )}
              >
                <span
                  className={cn(
                    'font-mono text-[9px] sm:text-[10px] w-16 shrink-0',
                    field.masked
                      ? 'text-rose-200/60'
                      : 'text-rose-200/35'
                  )}
                >
                  {field.label}
                </span>
                <span className='font-mono text-[9px] text-rose-300/20'>
                  :
                </span>
                {field.masked ? (
                  <span className='font-mono text-[10px] sm:text-[11px] text-rose-400/80 font-bold tracking-widest'>
                    &quot;*&quot;
                  </span>
                ) : (
                  <span className='font-mono text-[9px] sm:text-[10px] text-emerald-400/40'>
                    ✓ pass
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className='px-3 py-1.5 border-t border-rose-500/10 flex items-center justify-between'>
            <span className='font-mono text-[7px] sm:text-[8px] text-rose-300/35 tracking-wider uppercase'>
              server-side
            </span>
            <span className='font-mono text-[7px] sm:text-[8px] text-rose-400/50'>
              GDPR enforced
            </span>
          </div>
        </div>

        <div className='absolute -bottom-2 left-1/4 right-1/4 h-4 bg-rose-500/15 blur-xl rounded-full' />
      </div>
    </div>
  )
}

export default GDPRPrivacyVisual
