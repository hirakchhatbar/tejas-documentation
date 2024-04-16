import Header from '@/components/layouts/Home/Header.jsx'
import Features from '@/components/layouts/Home/Features.jsx'

const Home = () => {
  return (
    <div className={"flex flex-col items-center"}>
      <Header />
      <Features />
    </div>
  )
}

export default Home
