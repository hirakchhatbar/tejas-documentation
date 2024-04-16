'use client'
import './Navbar.css'
import { Separator } from '@/components/ui/separator.jsx'
import NavbarLogo from '@/components/layouts/Navbar/NavbarLogo.jsx'
import NavbarOptions from '@/components/layouts/Navbar/NavbarOptions.jsx'
import NavbarMenu from "@/components/layouts/Navbar/NavbarMenu.jsx";

const NavigationLayout = () => {
  return (
    <div className='navbar-container flex flex-col'>
      <div className='flex flex-row h-[70px] justify-between items-center pl-5 pr-5'>
        <NavbarLogo />
          <NavbarMenu />
        <NavbarOptions />
      </div>

      <Separator
        orientation='horizontal'
        className='w-[100vw] ml-[-20px] border-table'
      />
    </div>
  )
}

export default NavigationLayout
