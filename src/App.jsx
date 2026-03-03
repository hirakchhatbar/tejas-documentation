import ScrollAnchor from '@/components/shared/ScrollAnchor.jsx'
import Footer from '@/pages/Footer/Footer.jsx'
import Navbar from '@/pages/Navbar/Navbar.jsx'
import routes from '@/routes.js'
import { TooltipProvider } from '@/components/ui/tooltip.jsx'
import { useMemo } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
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
      <TooltipProvider>
        <ScrollAnchor />
        <div className="flex flex-col min-h-screen w-full">
          <Navbar />
          <main className="flex-1">
            <Routes>{useRoutes}</Routes>
          </main>
          <Footer />
        </div>
      </TooltipProvider>
    </BrowserRouter>
  )
}

export default App
