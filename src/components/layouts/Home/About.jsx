import SectionWrapper from '@/components/layouts/Home/SectionWrapper.jsx'
import { Button } from '@/components/ui/button.jsx'
import { data, cardData } from '@/data/web-content/home/about-us.js'
import { ExternalLink } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()
  return (
    <SectionWrapper className="items-center max-w-6xl">
      <h2 className="text-2xl font-semibold tracking-tight text-foreground text-center mb-8">
        About
      </h2>
      <div className="w-full max-w-3xl mx-auto">
        <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
          {data}
        </p>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
        {cardData.map((card, index) => (
          <div
            key={`about-card-${index}`}
            className="flex flex-col gap-2 p-4 rounded-lg border border-border bg-card/50"
          >
            <h3 className="text-sm font-medium text-foreground">{card.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center gap-4 mt-12 pt-8 border-t border-border">
        <p className="text-lg font-medium text-foreground">Ready to build?</p>
        <Button
          size="lg"
          className="bg-sky-500 hover:bg-sky-600 text-white border-0"
          onClick={() => navigate('/docs')}
        >
          Get Started
          <ExternalLink className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </SectionWrapper>
  )
}

export default About
