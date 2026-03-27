import Documentation from '@/pages/Documentation/Documentation.jsx'
import Home from '@/pages/Home/Home.jsx'
import Radar from '@/pages/Radar/Radar.jsx'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/radar',
    component: Radar
  },
  {
    path: '/docs',
    component: Documentation
  },
  {
    path: '/docs/:slug',
    component: Documentation
  }
]

export default routes
