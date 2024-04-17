import About from '@/components/layouts/Home/About.jsx'
import Features from '@/components/layouts/Home/Features.jsx'
import FeaturesExtended from '@/components/layouts/Home/FeaturesExtended.jsx'
import Header from '@/components/layouts/Home/Header.jsx'

const Home = () => {
  return (
    <div className={'flex flex-col max-w-[1440px] content-center items-center gap-20'}>
      <Header />
      <Features />
      <FeaturesExtended />
      <About />
    </div>
  )
}

export default Home
