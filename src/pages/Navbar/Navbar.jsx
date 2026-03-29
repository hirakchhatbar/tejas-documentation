'use client'

import NavbarLogo from '@/components/layouts/Navbar/NavbarLogo.jsx'
import NavbarMenu from '@/components/layouts/Navbar/NavbarMenu.jsx'
import NavbarOptions from '@/components/layouts/Navbar/NavbarOptions.jsx'
const Navbar = () => {
  return (
    <header
      className='sticky top-0 z-50 h-16 border-b border-border bg-background/80 backdrop-blur-md'
      role='banner'
    >
      <div className='mx-auto flex h-full max-w-screen-2xl flex-row items-center justify-between px-4 sm:px-6'>
        <NavbarLogo />
        <NavbarMenu />
        <NavbarOptions />
      </div>
    </header>
  )
}

export default Navbar
