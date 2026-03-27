/** Section groups for the docs sidebar. Items use componentKey to resolve the page component elsewhere. */
export const sidebarGroups = [
  {
    label: 'Getting Started',
    items: [
      {
        componentKey: 'installation',
        title: 'Installation',
        path: '/docs/installation',
        tocKey: 'installation'
      },
      {
        componentKey: 'hello-world',
        title: 'Hello, World!',
        path: '/docs/hello-world',
        tocKey: 'hello-world'
      },
      {
        componentKey: 'configuration',
        title: 'Configuration',
        path: '/docs/configuration',
        tocKey: 'configuration'
      }
    ]
  },
  {
    label: 'Core Concepts',
    items: [
      {
        componentKey: 'routing',
        title: 'Routing (Targets)',
        path: '/docs/routing',
        tocKey: 'routing'
      },
      {
        componentKey: 'ammo',
        title: 'Ammo',
        path: '/docs/ammo',
        tocKey: 'ammo'
      },
      {
        componentKey: 'middleware',
        title: 'Middlewares',
        path: '/docs/middlewares',
        tocKey: 'middleware'
      },
      {
        componentKey: 'error-handling',
        title: 'Error Handling',
        path: '/docs/error-handling',
        tocKey: 'error-handling'
      }
    ]
  },
  {
    label: 'More',
    items: [
      {
        componentKey: 'file-uploads',
        title: 'File Uploader',
        path: '/docs/file-uploader',
        tocKey: 'file-uploads'
      },
      {
        componentKey: 'rate-limiting',
        title: 'Rate Limiting',
        path: '/docs/rate-limiting',
        tocKey: 'rate-limiting'
      },
      {
        componentKey: 'cli',
        title: 'CLI',
        path: '/docs/cli',
        tocKey: 'cli'
      },
      {
        componentKey: 'api-reference',
        title: 'API Reference',
        path: '/docs/api-reference',
        tocKey: 'api-reference'
      },
      { title: 'Logger', path: '/docs/logger', comingSoon: true }
    ]
  },
  {
    label: 'Observability',
    items: [
      {
        componentKey: 'radar',
        title: 'Radar',
        path: '/docs/radar',
        tocKey: 'radar'
      }
    ]
  },
  {
    label: 'AI Native',
    items: [
      {
        componentKey: 'llm-error-handling',
        title: 'LLM Error Handling',
        path: '/docs/llm-error-handling',
        tocKey: 'llm-error-handling'
      },
      {
        componentKey: 'auto-docs',
        title: 'Auto-Documentation',
        path: '/docs/auto-docs',
        tocKey: 'auto-docs'
      },
      {
        title: 'AI Test Generation',
        path: '/docs/ai-test-generation',
        comingSoon: true
      }
    ]
  }
]

/** Flat list of all doc pages (for routing and prev/next). */
const flatItems = sidebarGroups.flatMap((g) => g.items)

/** Find menu item by path. */
export function getMenuItemByPath(path) {
  return flatItems.find((item) => item.path === path) ?? flatItems[0]
}

/** Get prev/next menu items (only pages with componentKey, excluding comingSoon). */
export function getPrevNext(path) {
  const withComponent = flatItems.filter(
    (item) => item.componentKey && !item.comingSoon
  )
  const idx = withComponent.findIndex((item) => item.path === path)
  if (idx < 0) return { prev: null, next: null }
  return {
    prev: idx > 0 ? withComponent[idx - 1] : null,
    next:
      idx < withComponent.length - 1 && idx >= 0 ? withComponent[idx + 1] : null
  }
}

/** Flat array for path matching and store (DocumentationStore). */
export default flatItems
