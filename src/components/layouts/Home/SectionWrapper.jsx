import { cn } from '@/lib/utils.js'

const SectionWrapper = ({className='', children}) => {
  return (
    <div
      className={cn(
        'flex flex-col w-full min-h-[70vh] justify-center gap-10',
        className
      )}
    >
      {children}
    </div>
  );
}

export default SectionWrapper;
