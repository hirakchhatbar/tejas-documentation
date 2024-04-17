import SectionWrapper from '@/components/layouts/Home/SectionWrapper.jsx'
import { Card } from '@/components/ui/card.jsx'
import { data, cardData } from '@/data/web-content/home/about-us.js'

const About = () => {
    return (
      <SectionWrapper className={'items-center px-8'}>
        <h1>About</h1>
        <div className={'flex flex-row gap-10'}>
          <div className={'w-[40%] content-center'}>
            <p className={'whitespace-break-spaces'}>{data}</p>
          </div>
          <div className={"w-[60%] grid grid-cols-2 gap-3"}>
            {cardData.map((card, index) => (
              <Card key={`about-card-${index}`} className={'flex flex-col gap-2 center p-8'}>
                <h4>{card.title}</h4>
                <p>{card.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>
    )
}

export default About
