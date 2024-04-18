import SectionWrapper from '@/components/layouts/Home/SectionWrapper.jsx'
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
import { tejasTheme } from '@/lib/code-block-themes.js'

const ItemImage = ({ image }) => {
  return (
    <div
      className={
        'flex w-full h-full bg-background border rounded-none rounded-t-md p-4'
      }
    >
      <img
        src={image}
        alt='Robust error handling'
      />
    </div>
  )
}

const ItemCodeBlock = ({ code }) => {
  return (
    <div
      className={
        'flex w-full h-full bg-background border rounded-none rounded-t-md'
      }
    >
      <CodeBlock
        language={'javascript'}
        theme={tejasTheme}
        code={code}
        className={' overflow-hidden'}
      />
    </div>
  )
}

const FeaturesExtended = () => {
  return (
    <SectionWrapper className={'items-center justify-center'}>
      <h1>{"Don't believe us? Take a look yourself"}</h1>
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: true
          })

        ]} className="w-[60%] h-full">
        <CarouselContent className={"h-full"}>
          {data.map((item, index) => (
              <CarouselItem key={`extended-feature-${index}`}>
                <div className={'flex flex-col'}>
                  {item.image && <ItemImage image={item.image} />}
                  {item.code && <ItemCodeBlock code={item.code} />}

                  <Card
                    className={'flex flex-col gap-5 text-center justify-center p-16 rounded-none rounded-b-md !border-t-0'}>
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


    </SectionWrapper>
  )
}

export default FeaturesExtended
