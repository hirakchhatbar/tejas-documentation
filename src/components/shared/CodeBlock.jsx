import { tejasTheme } from '@/lib/code-block-themes.js'
import { cn } from '@/lib/utils.js'
import copy from 'copy-to-clipboard'
import { CheckCheckIcon, CopyIcon } from 'lucide-react'
import { Highlight, Prism } from 'prism-react-renderer'
import { useState } from 'react'
import bashLang from 'refractor/lang/bash'
import jsonLang from 'refractor/lang/json'

bashLang(Prism)
jsonLang(Prism)

const languageLabel = (lang) => {
  const l = (lang || '').toLowerCase()
  const map = {
    javascript: 'JavaScript',
    js: 'JavaScript',
    json: 'JSON',
    shell: 'Shell',
    sh: 'Shell',
    bash: 'Bash'
  }
  return map[l] || (lang ? lang.charAt(0).toUpperCase() + lang.slice(1) : '')
}

const CodeBlock = ({
  className = '',
  code = '',
  language = 'JavaScript',
  theme = tejasTheme,
  withLineNumbers = true,
  withCopy = true,
  filename
}) => {
  const [copied, setCopied] = useState(false)

  const label = languageLabel(language)
  const headerLabel = filename ?? label

  return (
    <div
      className={cn(
        className,
        'w-full rounded-lg border border-border overflow-hidden',
        'border-l-2 border-l-sky-500/30 bg-card text-card-foreground text-sm font-mono'
      )}
    >
      <div className="flex items-center justify-between gap-2 px-3 py-2 border-b border-border bg-muted/80">
        <span className="text-xs text-muted-foreground truncate">
          {headerLabel}
        </span>
        {withCopy && (
          <button
            type="button"
            onClick={() => {
              copy(code)
              setCopied(true)
              setTimeout(() => setCopied(false), 2000)
            }}
            className="shrink-0 p-1 rounded text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors"
            aria-label="Copy code"
          >
            {copied ? (
              <CheckCheckIcon className="h-4 w-4 text-green-500" strokeWidth={2} />
            ) : (
              <CopyIcon className="h-4 w-4" />
            )}
          </button>
        )}
      </div>
      <Highlight language={language} code={code} theme={theme} prism={Prism}>
        {({ className: preClassName, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={cn(preClassName, 'p-4 overflow-x-auto')}
            style={style}
          >
            {tokens.map((line, i) => {
              const { key: lineKey, ...lineProps } = getLineProps({
                line,
                key: i
              })
              return (
                <div key={lineKey} className="table-row">
                  <div
                    {...lineProps}
                    className="flex flex-row whitespace-pre break-normal items-center gap-4"
                  >
                    {withLineNumbers && (
                      <span
                        className="shrink-0 w-5 text-right select-none text-muted-foreground"
                        aria-hidden
                      >
                        {i + 1}
                      </span>
                    )}
                    <span className="flex-1 min-w-0">
                      {line.map((token, idx) => {
                        const { key: tokenKey, ...tokenProps } =
                          getTokenProps({ token, key: idx })
                        return <span key={tokenKey} {...tokenProps} />
                      })}
                    </span>
                  </div>
                </div>
              )
            })}
          </pre>
        )}
      </Highlight>
    </div>
  )
}

export default CodeBlock
