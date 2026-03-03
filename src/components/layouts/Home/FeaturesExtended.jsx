import SectionWrapper from '@/components/layouts/Home/SectionWrapper.jsx'
import CodeBlock from '@/components/shared/CodeBlock.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import data from '@/data/web-content/home/features-extended.js'
import { tejasTheme } from '@/lib/code-block-themes.js'

const ItemImage = ({ image }) => (
  <div className="w-full bg-background border border-border rounded-t-lg p-4 flex items-center justify-center min-h-[200px]">
    <img src={image} alt="" className="max-h-48 object-contain" />
  </div>
)

const ItemCodeBlock = ({ code }) => (
  <div className="w-full rounded-t-lg overflow-hidden">
    <CodeBlock
      language="javascript"
      theme={tejasTheme}
      code={code}
      className="rounded-t-lg border border-border overflow-hidden"
    />
  </div>
)

const FeaturesExtended = () => {
  return (
    <SectionWrapper className="items-center max-w-6xl">
      <h2 className="text-2xl font-semibold tracking-tight text-foreground text-center mb-8">
        Don&apos;t believe us? Take a look yourself
      </h2>
      <Tabs defaultValue={data[0]?.title ?? ''} className="w-full max-w-3xl mx-auto">
        <TabsList className="w-full flex flex-wrap h-auto gap-1 p-1 bg-muted/50">
          {data.map((item, index) => (
            <TabsTrigger
              key={`tab-${index}`}
              value={item.title}
              className="flex-1 min-w-0 sm:flex-none data-[state=active]:bg-sky-500/20 data-[state=active]:text-sky-600 dark:data-[state=active]:text-sky-400"
            >
              {item.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {data.map((item, index) => (
          <TabsContent
            key={`content-${index}`}
            value={item.title}
            className="mt-4 focus-visible:outline-none"
          >
            <div className="flex flex-col rounded-lg border border-border bg-card/50 overflow-hidden">
              {item.image && <ItemImage image={item.image} />}
              {item.code && <ItemCodeBlock code={item.code} />}
              <div className="flex flex-col gap-3 p-6 text-center border-t border-border">
                <h3 className="text-lg font-medium text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </SectionWrapper>
  )
}

export default FeaturesExtended
