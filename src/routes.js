import Documentation from '@/pages/Docuementation/Documentation.jsx'
import Home from '@/pages/Home/Home.jsx'

const routes = [
  {
    path: '/',
    component: Home
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
