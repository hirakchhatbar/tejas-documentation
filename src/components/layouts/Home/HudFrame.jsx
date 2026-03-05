import { cn } from '@/lib/utils.js'

/**
 * Aviation HUD-style decorative frame.
 * Renders targeting brackets at corners + optional callsign label + optional crosshair.
 * Parent must be `position: relative`.
 */
const HudFrame = ({ callsign, showCrosshair = false, className, size = 'md' }) => {
  const sizeClass = size === 'lg'
    ? 'w-6 h-6 sm:w-8 sm:h-8'
    : 'w-4 h-4 sm:w-5 sm:h-5'

  return (
    <div className={cn('absolute inset-0 pointer-events-none select-none z-0', className)} aria-hidden>
      <div className={cn('absolute top-0 left-0 border-l border-t border-sky-500/20 dark:border-sky-400/15', sizeClass)} />
      <div className={cn('absolute top-0 right-0 border-r border-t border-sky-500/20 dark:border-sky-400/15', sizeClass)} />
      <div className={cn('absolute bottom-0 left-0 border-l border-b border-sky-500/20 dark:border-sky-400/15', sizeClass)} />
      <div className={cn('absolute bottom-0 right-0 border-r border-b border-sky-500/20 dark:border-sky-400/15', sizeClass)} />

      {callsign && (
        <span className="absolute -top-2.5 left-5 sm:left-6 font-mono text-[9px] sm:text-[10px] tracking-[0.2em] text-sky-500/30 dark:text-sky-400/20 uppercase">
          {callsign}
        </span>
      )}

      {showCrosshair && (
        <>
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/[0.07] to-transparent" />
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-sky-500/[0.07] to-transparent" />
        </>
      )}
    </div>
  )
}

export default HudFrame
