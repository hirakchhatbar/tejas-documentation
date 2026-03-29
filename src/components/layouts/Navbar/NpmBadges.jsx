import { useEffect, useState } from 'react'

const PACKAGE_NAME = 'te.js'
const CACHE_KEY = 'npm-badge-data'
const CACHE_TTL = 1000 * 60 * 60

function formatDownloads(count) {
  if (count >= 1_000_000) return `${(count / 1_000_000).toFixed(1)}M`
  if (count >= 1_000) return `${(count / 1_000).toFixed(1)}k`
  return String(count)
}

function useBadgeData() {
  const [data, setData] = useState(() => {
    try {
      const cached = JSON.parse(sessionStorage.getItem(CACHE_KEY))
      if (cached && Date.now() - cached.ts < CACHE_TTL) return cached
    } catch {}
    return null
  })

  useEffect(() => {
    if (data) return

    const ac = new AbortController()

    Promise.all([
      fetch(`https://registry.npmjs.org/${PACKAGE_NAME}/latest`, {
        signal: ac.signal
      }).then((r) => r.json()),
      fetch(
        `https://api.npmjs.org/downloads/point/last-month/${PACKAGE_NAME}`,
        { signal: ac.signal }
      ).then((r) => r.json())
    ])
      .then(([pkg, dl]) => {
        const next = {
          version: pkg.version,
          downloads: dl.downloads,
          ts: Date.now()
        }
        sessionStorage.setItem(CACHE_KEY, JSON.stringify(next))
        setData(next)
      })
      .catch(() => {})

    return () => ac.abort()
  }, [data])

  return data
}

function Badge({ left, right, leftBg, rightBg, href }) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='inline-flex h-5 overflow-hidden rounded text-[11px] font-medium leading-5 no-underline shadow-sm transition-opacity hover:opacity-80'
    >
      <span className='px-[6px] text-white' style={{ backgroundColor: leftBg }}>
        {left}
      </span>
      <span
        className='px-[6px] text-white'
        style={{ backgroundColor: rightBg }}
      >
        {right}
      </span>
    </a>
  )
}

export default function NpmBadges() {
  const data = useBadgeData()

  if (!data) return null

  return (
    <div className='hidden items-center gap-2 md:flex'>
      <Badge
        left='npm'
        right={`v${data.version}`}
        leftBg='#555'
        rightBg='#2b7dc9'
        href={`https://www.npmjs.com/package/${PACKAGE_NAME}`}
      />
      <Badge
        left='downloads'
        right={`${formatDownloads(data.downloads)}/month`}
        leftBg='#555'
        rightBg='#4dc71f'
        href={`https://www.npmjs.com/package/${PACKAGE_NAME}`}
      />
    </div>
  )
}
