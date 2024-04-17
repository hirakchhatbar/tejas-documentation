'use client'
import './Navbar.css'
import NavbarLogo from '@/components/layouts/Navbar/NavbarLogo.jsx'
import NavbarMenu from '@/components/layouts/Navbar/NavbarMenu.jsx'
import NavbarOptions from '@/components/layouts/Navbar/NavbarOptions.jsx'
import { Separator } from '@/components/ui/separator.jsx'

const NavigationLayout = () => {
  return (
    <div className="navbar-container flex flex-col">
      <div
        className="flex flex-row h-[70px] justify-between items-center px-5">
        <NavbarLogo />
        <NavbarMenu />
        <NavbarOptions />
      </div>

      <Separator
        orientation="horizontal"
        className="w-[100vw] ml-[-20px] border-border-muted"
      />
    </div>
  )
}

export default NavigationLayout
