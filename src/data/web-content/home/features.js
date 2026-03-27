import {
  BotIcon,
  FileCodeIcon,
  RouteIcon,
  ShieldCheckIcon,
  ZapIcon
} from 'lucide-react'

/**
 * Bento grid: 6 features in a 4-column layout.
 * Row 1: 1 wide (col-span-2) + 2 small.
 * Row 2: 2 small + 1 wide (col-span-2).
 * AI-native features are prioritised.
 */
const features = [
  {
    Icon: ZapIcon,
    title: 'Zero-Config Error Handling',
    description:
      'ammo.throw() sends the response — no separate log-and-send. Optional LLM infers status and message from code context.',
    span: 2,
    accent: 'amber'
  },
  {
    Icon: BotIcon,
    title: 'AI-Native (MCP)',
    description:
      'Ships with an MCP server so AI assistants like Cursor and Claude can scaffold projects, generate routes, and write correct te.js code with full framework knowledge.',
    accent: 'sky'
  },
  {
    Icon: ShieldCheckIcon,
    title: 'Built-in Rate Limiting',
    description:
      'Token Bucket, Sliding Window, and Fixed Window algorithms with memory or Redis storage. Protect your API out of the box.',
    accent: 'rose'
  },
  {
    Icon: RouteIcon,
    title: 'Simple Routing',
    description:
      'Clean, method-agnostic URL structures with parameterized routes for expressive and flexible APIs.',
    accent: 'emerald'
  },
  {
    Icon: FileCodeIcon,
    title: 'Auto-Documentation',
    description:
      'Generate OpenAPI specs from your code with LLM-powered analysis via tejas generate:docs.',
    span: 2,
    accent: 'violet'
  }
]

export default features
