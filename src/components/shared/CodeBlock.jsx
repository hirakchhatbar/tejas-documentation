import { tejasTheme } from '@/lib/code-block-themes.js'
import { cn } from '@/lib/utils.js'
import copy from 'copy-to-clipboard'
import { CheckCheckIcon, CopyIcon } from 'lucide-react'
import { Highlight, Prism } from 'prism-react-renderer'
import { useState } from 'react'
import bashLang from 'refractor/lang/bash'

import jsonLang from 'refractor/lang/json'
import { Card } from '@/components/ui/card.jsx'

bashLang(Prism);
jsonLang(Prism);

const CodeBlock = ({
  className = '',
  code = '',
  language = 'JavaScript',
  theme = tejasTheme,
  withLineNumbers = true,
  withCopy = false
}) => {
  const [copied, setCopied] = useState(false)

  return (
    <Card className={cn(className, 'p-2 w-full')}>
      <Highlight language={language} code={code} theme={theme} prism={Prism}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={cn(className, 'px-4 py-2 rounded-md')} style={style}>
            {tokens.map((line, i) => {
              return (
                <div key={`${i}-code`} className={'w-full relative'}>
                  <div
                    {...getLineProps({ line, key: i })}
                    className={
                      'flex flex-row whitespace-pre-wrap break-words items-center justify-between'
                    }
                  >
                    <div className={'flex flex-row gap-5'}>
                      {withLineNumbers && (
                        <p className={cn(
                          '!text-gray-600',
                          i < 9 ? 'w-4' : 'w-5',
                        )}>{i + 1}</p>
                      )}
                      <div>
                        {line.map((token, key) => {
                          return (
                            <span
                              key={`${key}-${token}`}
                              {...getTokenProps({ token, key })}
                            />
                          )
                        })}
                      </div>
                    </div>
                    {i === 0 && withCopy && (
                      <div>
                        {withCopy && copied ? (
                          <CheckCheckIcon
                            strokeWidth={2}
                            stroke={'var(--success)'}
                            color={'var(--success)'}
                            className={'w-5 h-5'}
                          />
                        ) : (
                          <CopyIcon
                            className={'w-4 h-4 cursor-pointer'}
                            onClick={() => {
                              copy(code)
                              setCopied(true)
                              setTimeout(() => {
                                setCopied(false)
                              }, 2000)
                            }}
                          />
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </pre>
        )}
      </Highlight>
    </Card>
  )
}

export default CodeBlock
