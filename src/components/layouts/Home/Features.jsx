import featuresData from '@/data/web-content/features.js'
import { Card } from '@/components/ui/card.jsx'
import { cn } from '@/lib/utils.js'

const Features = () => {

  const layoutVertical = 'flex flex-col gap-4 items-center text-center';
  const layoutHorizontal = 'flex flex-row gap-4';

  return (
    <div className={'w-full grid grid-cols-3 gap-3 px-16'}>
      {featuresData.map((feature, index) => {
        return (
          <Card
            className={cn(
              'w-full p-6',
              layoutVertical,
            )}
            key={`feature-${index}`}
          >
            {feature.Icon && (
              <feature.Icon className={'w-20 h-12 text-heading'} />
            )}
            <div className={'flex flex-col gap-2'}>
              <h3 className={'text-lg text-heading'}>{feature.title}</h3>
              <p className={'text-base text-body'}>{feature.description}</p>
            </div>
          </Card>
        )
      })}
    </div>
  )
}

export default Features
