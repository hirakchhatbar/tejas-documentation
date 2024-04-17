import Footer from '@/pages/Footer/Footer.jsx'
import Navbar from '@/pages/Navbar/Navbar.jsx'
import routes from '@/routes.js'
import { useMemo } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './assets/index.css'

function App() {
  const useRoutes = useMemo(
    () =>
      routes.map(({ component: Component, path }, key) => {
        return <Route path={path} key={key} element={<Component />} />
      }),
    []
  )

  return (
    <BrowserRouter>
      <div className={'flex flex-col w-full h-full'}>
        <Navbar />
        <div
          className={'flex w-full place-content-center items-center p-8'}>
          <Routes>
            {useRoutes}
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
