'use client'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import { ExternalLinkIcon } from 'lucide-react'

const NavbarMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href={"/"} className={navigationMenuTriggerStyle()}>
            <p className={"!text-heading"}>Home</p>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href={"/docs"} className={navigationMenuTriggerStyle()}>
            <p className={"!text-heading"}>Docs</p>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink target={"_blank"} href={"https://github.com/hirakchhatbar/te.js"} className={navigationMenuTriggerStyle()}>
            <p className={"!text-heading"}>GitHub</p>
            <ExternalLinkIcon className={'!text-body w-4 h-4 ml-2'} />
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default NavbarMenu
