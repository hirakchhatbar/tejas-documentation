import Installation from '@/components/layouts/Documentation/Content/Installation.jsx'
import {
  CircleDotIcon,
  CrosshairIcon,
  DownloadIcon,
  FilesIcon,
  HandIcon,
  RouteIcon,
  SplitIcon,
  SquareTerminalIcon
} from 'lucide-react'
import HelloWorld from '@/components/layouts/Documentation/Content/HelloWorld.jsx'

const sidebarMenu = [
  {
    Icon: DownloadIcon,
    Component: Installation,
    title: 'Installation',
    path: '/docs/installation'
  },
  {
    Icon: HandIcon,
    Component: HelloWorld,
    title: 'Hello, World!',
    path: '/docs/hello-world'
  },
  {
    Icon: RouteIcon,
    title: 'Routing (Targets)',
    path: '/docs/routing'
  },
  {
    Icon: SplitIcon,
    title: 'Middlewares',
    path: '/docs/middlewares'
  },
  {
    Icon: CircleDotIcon,
    title: 'Ammo',
    path: '/docs/ammo'
  },
  {
    Icon: FilesIcon,
    title: 'File Uploader',
    path: '/docs/file-uploader'
  },
  {
    Icon: SquareTerminalIcon,
    title: 'Logger',
    path: '/docs/logger'
  }
]

export default sidebarMenu
