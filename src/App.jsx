import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './assets/index.css'
import routes from '@/routes.js'
import { useMemo } from 'react'
import Navbar from '@/pages/Navbar/Navbar.jsx'

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
        <div className={"w-full items-center px-8 py-4"}>
          <Routes>
            {useRoutes}
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
