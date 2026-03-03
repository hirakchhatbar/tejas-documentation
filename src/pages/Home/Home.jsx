import Header from '@/components/layouts/Home/Header.jsx'
import WhatsInTejs from '@/components/layouts/Home/WhatsInTejs.jsx'
import { Button } from '@/components/ui/button.jsx'
import { ExternalLink } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="relative flex flex-col w-full min-h-full">
      {/* Full-bleed sky gradient background */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-500/[0.06] via-transparent to-muted/20"
        aria-hidden
      />
      <div className="flex flex-col w-full max-w-[1440px] mx-auto items-center">
        <Header />
        <WhatsInTejs />
        <section className="w-full border-t border-border/80">
          <div className="flex flex-col items-center justify-center gap-4 py-16 px-6 max-w-6xl mx-auto">
            <div className="horizon-line mb-6" aria-hidden />
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
        </section>
      </div>
    </div>
  )
}

export default Home
