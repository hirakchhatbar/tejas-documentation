import SectionWrapper from '@/components/layouts/Home/SectionWrapper.jsx'
import { Card } from '@/components/ui/card.jsx'
import featuresData from '@/data/web-content/home/features.js'
import { cn } from '@/lib/utils.js'

const Features = () => {

  const layoutVertical = 'flex flex-col gap-4 items-center text-center'
  const layoutHorizontal = 'flex flex-row gap-4'

  return (
    <SectionWrapper className={"items-center"}>
      <h1>Why te.js should be your choice of framework?</h1>
      <div className={'w-full grid grid-cols-3 gap-3'}>
        {featuresData.map((feature, index) => {
          return (
            <Card
              className={cn(
                'w-full p-6',
                layoutVertical
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
    </SectionWrapper>
  )
}

export default Features
