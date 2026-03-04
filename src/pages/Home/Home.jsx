import AINativeSection from '@/components/layouts/Home/AINativeSection.jsx'
import BentoFeatures from '@/components/layouts/Home/BentoFeatures.jsx'
import BottomCTA from '@/components/layouts/Home/BottomCTA.jsx'
import CodeDemos from '@/components/layouts/Home/CodeDemos.jsx'
import HeroSection from '@/components/layouts/Home/HeroSection.jsx'
import InstallSnippet from '@/components/layouts/Home/InstallSnippet.jsx'
import WhyTejas from '@/components/layouts/Home/WhyTejas.jsx'

const Home = () => {
  return (
    <div className="relative flex flex-col w-full min-h-full">
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-500/[0.06] via-transparent to-muted/20"
        aria-hidden
      />
      <div className="flex flex-col w-full max-w-[1440px] mx-auto items-center">
        <HeroSection />
        <InstallSnippet />
        <BentoFeatures />
        <CodeDemos />
        <AINativeSection />
        <WhyTejas />
        <BottomCTA />
      </div>
    </div>
  )
}

export default Home
