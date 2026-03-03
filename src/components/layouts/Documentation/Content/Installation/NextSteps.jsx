import { Card, CardContent } from '@/components/ui/card.jsx'
import { Link } from 'react-router-dom'

const NextSteps = () => {
  return (
    <section id="next-steps" className="flex flex-col gap-5">
      <h2 className="text-xl font-semibold tracking-tight">Next steps</h2>
      <Card className="border-sky-500/30 bg-sky-500/5">
        <CardContent className="pt-6">
          <p className="font-medium mb-1">Hello, World!</p>
          <p className="text-sm text-muted-foreground mb-3">
            Run your app and follow the Hello World guide to create your first target and respond to requests.
          </p>
          <Link
            to="/docs/hello-world"
            className="inline-flex font-medium text-sky-600 dark:text-sky-400 hover:underline"
          >
            Hello, World! →
          </Link>
        </CardContent>
      </Card>
    </section>
  )
}

export default NextSteps
