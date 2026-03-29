import { Link } from 'react-router-dom'
import { sidebarGroups } from '@/data/web-content/documentation/sidebar-menu.js'

const GITHUB_URL = 'https://github.com/hirakchhatbar/te.js'

/** Only these doc pages appear in the footer. Add/remove keys here; rest are in "All documentation". */
const FOOTER_DOC_KEYS = [
  'installation',
  'hello-world',
  'routing',
  'api-reference'
]

const footerDocLinks = sidebarGroups
  .flatMap((g) => g.items)
  .filter(
    (item) =>
      item.componentKey &&
      !item.comingSoon &&
      FOOTER_DOC_KEYS.includes(item.componentKey)
  )

const Footer = () => {
  return (
    <footer className='border-t border-border bg-card'>
      <div className='max-w-6xl mx-auto px-6 py-10'>
        <div className='grid grid-cols-2 gap-6 sm:gap-8 sm:grid-cols-3 lg:grid-cols-4'>
          {/* Documentation — curated short list + link to full docs */}
          <div>
            <h3 className='text-sm font-semibold text-foreground mb-2'>
              Documentation
            </h3>
            <ul className='space-y-1.5'>
              {footerDocLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className='text-sm text-muted-foreground hover:text-foreground transition-colors'
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to='/docs/installation'
                  className='text-sm text-muted-foreground hover:text-foreground transition-colors'
                >
                  All documentation →
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className='text-sm font-semibold text-foreground mb-2'>
              Community
            </h3>
            <ul className='space-y-2'>
              <li>
                <a
                  href={GITHUB_URL}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5'
                >
                  <GitHubIcon className='h-4 w-4' />
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className='text-sm font-semibold text-foreground mb-2'>
              Legal
            </h3>
            <ul className='space-y-1.5'>
              <li>
                <Link
                  to='/privacy/te-js'
                  className='text-sm text-muted-foreground hover:text-foreground transition-colors'
                >
                  Privacy — te.js
                </Link>
              </li>
              <li>
                <Link
                  to='/terms/te-js'
                  className='text-sm text-muted-foreground hover:text-foreground transition-colors'
                >
                  Terms — te.js
                </Link>
              </li>
              <li>
                <Link
                  to='/privacy/radar'
                  className='text-sm text-muted-foreground hover:text-foreground transition-colors'
                >
                  Privacy — Radar
                </Link>
              </li>
              <li>
                <Link
                  to='/terms/radar'
                  className='text-sm text-muted-foreground hover:text-foreground transition-colors'
                >
                  Terms — Radar
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div className='col-span-2 sm:col-span-1'>
            <h3 className='text-sm font-semibold text-foreground mb-2'>
              About
            </h3>
            <p className='text-sm text-muted-foreground'>
              Tejas is a fast, minimal backend framework for Node.js — built for
              speed and precision.
            </p>
          </div>
        </div>

        {/* Logo + copyright */}
        <div className='mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4'>
          <Link to='/' className='flex shrink-0' aria-label='Tejas home'>
            <img
              src='/logotype.svg'
              className='h-7 w-[72px] object-contain opacity-80'
              alt='Tejas'
            />
          </Link>
          <p className='text-sm text-muted-foreground'>
            ©{new Date().getFullYear()} Tejas. Source code on{' '}
            <a
              href={GITHUB_URL}
              target='_blank'
              rel='noopener noreferrer'
              className='text-foreground/80 hover:text-foreground underline underline-offset-2'
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}

function GitHubIcon({ className }) {
  return (
    <svg
      className={className}
      fill='currentColor'
      viewBox='0 0 24 24'
      aria-hidden
    >
      <path
        fillRule='evenodd'
        d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
        clipRule='evenodd'
      />
    </svg>
  )
}

export default Footer
