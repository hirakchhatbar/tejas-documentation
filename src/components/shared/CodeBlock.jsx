import { cn } from '@/lib/utils.js'
import { Highlight, themes } from 'prism-react-renderer'

const CodeBlock = ({
                     className = '',
                     code = '',
                     language = 'JavaScript',
                     theme = themes.dracula
                   }) => {
  return (
    <div className={className}>
      <Highlight language={language} code={code} theme={theme}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={cn(className, 'p-4')} style={style}>
            {tokens.map((line, i) => {
              return (
                <div key={`${i}-code`} {...getLineProps({ line, key: i })}
                     className={'flex flex-row gap-5 whitespace-pre-wrap break-words'}>
                  <p className={'!text-gray-600'}>{i + 1}</p>
                  <div>
                       {line.map((token, key) => {
                         return <span key={`${key}-${token}`} {...getTokenProps({ token, key })} />
                       })}
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
