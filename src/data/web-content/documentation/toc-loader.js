import ammoToc from '@/data/web-content/documentation/table-of-content/ammo.js'
import configurationToc from '@/data/web-content/documentation/table-of-content/configuration.js'
import helloWorldToc from '@/data/web-content/documentation/table-of-content/hello-world.js'
import installationToc from '@/data/web-content/documentation/table-of-content/installation.js'
import apiReferenceToc from '@/data/web-content/documentation/table-of-content/api-reference.js'
import autoDocsToc from '@/data/web-content/documentation/table-of-content/auto-docs.js'
import cliToc from '@/data/web-content/documentation/table-of-content/cli.js'
import databaseToc from '@/data/web-content/documentation/table-of-content/database.js'
import errorHandlingToc from '@/data/web-content/documentation/table-of-content/error-handling.js'
import fileUploadsToc from '@/data/web-content/documentation/table-of-content/file-uploads.js'
import middlewareToc from '@/data/web-content/documentation/table-of-content/middleware.js'
import rateLimitingToc from '@/data/web-content/documentation/table-of-content/rate-limiting.js'
import routingToc from '@/data/web-content/documentation/table-of-content/routing.js'

const tocByKey = {
  'hello-world': helloWorldToc,
  installation: installationToc,
  configuration: configurationToc,
  routing: routingToc,
  ammo: ammoToc,
  middleware: middlewareToc,
  database: databaseToc,
  'error-handling': errorHandlingToc,
  'file-uploads': fileUploadsToc,
  'rate-limiting': rateLimitingToc,
  cli: cliToc,
  'api-reference': apiReferenceToc,
  'auto-docs': autoDocsToc
}

/**
 * Flatten nested TOC (title, link, subItems) into a list of { title, link } for the right rail.
 * Keeps hierarchy depth for indentation (depth 0 = top-level, 1 = nested, etc.).
 */
function flattenToc(items, depth = 0) {
  const out = []
  for (const item of items) {
    out.push({ title: item.title, link: item.link, depth })
    if (item.subItems?.length) {
      out.push(...flattenToc(item.subItems, depth + 1))
    }
  }
  return out
}

/**
 * Get flattened TOC for a doc page by tocKey (e.g. 'hello-world', 'routing', 'ammo').
 * Returns empty array if no TOC for that page.
 */
export function getTocForPage(tocKey) {
  const raw = tocByKey[tocKey]
  if (!raw?.length) return []
  return flattenToc(raw)
}
