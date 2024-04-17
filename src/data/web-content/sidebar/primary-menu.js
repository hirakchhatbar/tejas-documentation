import Installation
  from '@/components/layouts/Documentation/Content/Installation.jsx'
import {
  CircleDotIcon,
  CrosshairIcon,
  DownloadIcon,
  FilesIcon,
  PlaneIcon,
  RouteIcon,
  SplitIcon,
  SquareTerminalIcon
} from 'lucide-react'

const primaryMenu = [
  {
    Icon: DownloadIcon,
    Component: Installation,
    title: 'Installation',
    path: '/docs/installation'
  },
  {
    Icon: PlaneIcon,
    title: 'Getting Started',
    path: '/docs/getting-started'
  },
  {
    Icon: RouteIcon,
    title: 'Routing',
    path: '/docs/routing'
  },
  {
    Icon: SplitIcon,
    title: 'Middlewares',
    path: '/docs/middlewares'
  },
  {
    Icon: CrosshairIcon,
    title: 'Targets',
    path: '/docs/targets'
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

export default primaryMenu
