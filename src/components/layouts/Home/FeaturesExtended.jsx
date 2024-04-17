import CodeBlock from '@/components/shared/CodeBlock.jsx'
import { Card } from '@/components/ui/card.jsx'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel.jsx'
import data from '@/data/web-content/home/features-extended.js'
import Autoplay from 'embla-carousel-autoplay'
import { themes } from 'prism-react-renderer'

const ItemImage = ({ image }) => {
  return (
    <img
      className={'rounded-md'}
      src={image}
      alt="Robust error handling"
    />
  )
}

const ItemCodeBlock = ({ code }) => {
  return (
    <div className={'flex w-full h-full bg-dracula rounded-md'}>
      <CodeBlock
        language={'javascript'}
        theme={themes.dracula}
        code={code}
        className={'rounded-md overflow-hidden'}
      />
    </div>
  )
}

const FeaturesExtended = () => {
  return (
    <div className={'w-full flex flex-col gap-10 items-center px-16'}>
      <h1>Why te.js?</h1>
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: true
          })

        ]} className="w-full">
        <CarouselContent>
          {data.map((item, index) => (
              <CarouselItem key={`extended-feature-${index}`}>
                <div className={'grid grid-cols-2 gap-3'}>
                  {item.image && <ItemImage image={item.image} />}
                  {item.code && <ItemCodeBlock code={item.code} />}

                  <Card
                    className={'flex flex-col gap-5 text-center justify-center p-16 rounded-md'}>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                  </Card>
                </div>
              </CarouselItem>
            )
          )}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>


    </div>
  )
}

export default FeaturesExtended
