import { cn } from '@/lib/utils.js'

const SectionWrapper = ({ className = '', variant, children }) => {
  return (
    <div
      className={cn(
        'flex flex-col w-full justify-center gap-10 max-w-6xl mx-auto px-6 py-24',
        variant === 'muted' && 'bg-muted/20 rounded-lg',
        variant === 'hero' && 'pt-20 pb-28 sm:pt-24 sm:pb-32 gap-12',
        className
      )}
    >
      {children}
    </div>
  )
}

export default SectionWrapper;
