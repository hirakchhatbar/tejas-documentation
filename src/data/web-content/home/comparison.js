import {
  AlertCircleIcon,
  BotIcon,
  GaugeIcon,
  RouteIcon,
  ShieldCheckIcon
} from 'lucide-react'

const comparison = [
  {
    Icon: AlertCircleIcon,
    topic: 'Error handling',
    tejas: 'Automatic — no try-catch needed',
    express: 'Manual try-catch or error middleware'
  },
  {
    Icon: RouteIcon,
    topic: 'Routing',
    tejas: 'Method-free — one route, multiple methods',
    express: 'Separate route per HTTP method'
  },
  {
    Icon: ShieldCheckIcon,
    topic: 'Rate limiting',
    tejas: 'Built-in (Token Bucket, Sliding Window, Fixed Window)',
    express: 'Third-party (e.g. express-rate-limit)'
  },
  {
    Icon: GaugeIcon,
    topic: 'Monitoring',
    tejas: 'Built-in monitoring and GUI',
    express: 'Third-party or custom'
  },
  {
    Icon: BotIcon,
    topic: 'AI support',
    tejas: 'MCP server — AI assistants know the framework',
    express: 'None'
  }
]

export default comparison
