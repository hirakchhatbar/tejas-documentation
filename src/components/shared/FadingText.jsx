import { cn } from '@/lib/utils.js'

const FadingText = ({
  className,
  text,
  startingOpacity = 60,
  increment = 2
}) => {
  return (
    <p className={cn('text-3xl', className)}>
      {text.split('').map((letter, index) => {
        const opacity = startingOpacity + index * increment
        return (
          <span
            key={`${letter}-${index}`}
            style={{
              opacity: `${opacity}%`
            }}
          >
            {letter}
          </span>
        )
      })}
    </p>
  )
}

export default FadingText
