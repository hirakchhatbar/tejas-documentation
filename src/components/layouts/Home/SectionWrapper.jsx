import { cn } from '@/lib/utils.js'

const SectionWrapper = ({className='', children}) => {
  return (
    <div
      className={cn(
        'flex flex-col w-full justify-center gap-10 px-10 py-20',
        className
      )}
    >
      {children}
    </div>
  );
}

export default SectionWrapper;
