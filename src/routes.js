import Documentation from '@/pages/Documentation/Documentation.jsx'
import Home from '@/pages/Home/Home.jsx'
import PrivacyRadar from '@/pages/Legal/PrivacyRadar.jsx'
import PrivacyTeJs from '@/pages/Legal/PrivacyTeJs.jsx'
import TermsRadar from '@/pages/Legal/TermsRadar.jsx'
import TermsTeJs from '@/pages/Legal/TermsTeJs.jsx'
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
  },
  {
    path: '/privacy/te-js',
    component: PrivacyTeJs
  },
  {
    path: '/privacy/radar',
    component: PrivacyRadar
  },
  {
    path: '/terms/te-js',
    component: TermsTeJs
  },
  {
    path: '/terms/radar',
    component: TermsRadar
  }
]

export default routes
