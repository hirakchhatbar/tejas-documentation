import { cn } from '@/lib/utils.js'
import copy from 'copy-to-clipboard'
import { CheckCheckIcon, CopyIcon, SquareCheckIcon } from 'lucide-react'
import { Highlight, themes } from 'prism-react-renderer'
import { useState } from 'react'

const CodeBlock = ({
                     className = '',
                     code = '',
                     language = 'JavaScript',
                     theme = themes.dracula,
                     withLineNumbers = true,
                     withCopy = false
                   }) => {

  const [copied, setCopied] = useState(false)

  return (
    <div className={cn(className, 'rounded-md')}>
      <Highlight language={language} code={code} theme={theme}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={cn(className, 'p-4 rounded-md')} style={style}>
            {tokens.map((line, i) => {
              return (
                <div key={`${i}-code`} className={'w-full relative'}>
                  {withCopy &&
                  copied ? <CheckCheckIcon
                      strokeWidth={1}
                      stroke={'#fff'}
                      className={'w-5 h-5 absolute right-0'} /> :
                    <CopyIcon
                      className={'w-4 h-4 absolute right-0 cursor-pointer'}
                      onClick={() => {
                        copy(code)
                        setCopied(true)
                        setTimeout(() => {
                          setCopied(false)
                        }, 2000)
                      }} />
                  }
                  <div{...getLineProps({ line, key: i })}
                      className={'flex flex-row gap-5 whitespace-pre-wrap break-words'}>
                    {withLineNumbers &&
                      <p className={'!text-gray-600'}>{i + 1}</p>}
                    <div>
                      {line.map((token, key) => {
                        return <span key={`${key}-${token}`} {...getTokenProps(
                          { token, key })} />
                      })}
                    </div>
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
