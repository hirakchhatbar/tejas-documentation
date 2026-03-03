import { ConstructionIcon } from 'lucide-react'

const ComingSoon = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
      <ConstructionIcon className="h-12 w-12 text-muted-foreground" aria-hidden />
      <div className="space-y-1">
        <h2 className="text-xl font-semibold text-foreground">{title}</h2>
        <p className="text-muted-foreground">
          This section is under development. Check back soon for documentation.
        </p>
      </div>
      <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
        Coming Soon
      </span>
    </div>
  )
}

export default ComingSoon
