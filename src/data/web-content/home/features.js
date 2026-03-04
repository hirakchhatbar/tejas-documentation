import {
  ActivityIcon, BotIcon, BugIcon,
  DatabaseZapIcon, LayoutDashboardIcon,
  RouteIcon,
  ShieldCheckIcon,
  SirenIcon, SplitIcon,
  ZapIcon
} from 'lucide-react'

const features = [
  {
    Icon: ZapIcon,
    title: 'Never Crashes',
    description:
      'Forgot try-catch blocks? No worries, te.js application will never crash and will always return a response.',
    size: 'large'
  },
  {
    Icon: RouteIcon,
    title: 'Method-free Routing',
    description:
      'Offers a powerful and flexible routing system that enables method-free and clean URL structures.',
    size: 'large'
  },
  {
    Icon: SplitIcon,
    title: 'Express Middlewares',
    description:
      'Fully compatible with Express middlewares, as well as the ability to build te.js middlewares.'
  },
  {
    Icon: BugIcon,
    title: 'Built-in Logger',
    description:
      'Built-in logger to log all the requests, responses, and errors to help you debug your application.'
  },
  {
    Icon: LayoutDashboardIcon,
    title: 'GUI',
    description:
      'Built-in GUI to manage your application, environment variables, view logs and run schedulers.'
  },
  {
    Icon: BotIcon,
    title: 'AI-Native (MCP)',
    description:
      'Ship with an MCP server so AI assistants like Cursor and Claude can scaffold projects, generate routes, and write correct te.js code with full framework knowledge.',
    size: 'large'
  },
  {
    Icon: ActivityIcon,
    title: 'Built-in Monitoring',
    description:
      'Real-time insights into the performance, health, and usage of your application with built-in monitoring.'
  },
  {
    Icon: SirenIcon,
    title: 'Alerts & Notifications',
    description:
      'Built-in alerts via Email, SMS, or Slack to notify you of any exceptions and malformed requests.'
  },
  {
    Icon: DatabaseZapIcon,
    title: 'Customizable Caching',
    description:
      'Highly configurable caching options to cache responses at different levels to improve performance.'
  },
  {
    Icon: ShieldCheckIcon,
    title: 'API Rate Limiting',
    description:
      'Protect your API from abuse and control the rate of requests that clients can make to your API.'
  }
]

export default features
