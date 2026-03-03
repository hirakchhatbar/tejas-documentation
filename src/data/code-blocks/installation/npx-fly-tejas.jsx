const npxFlyTejas = (
  <div
    className={
      'w-full rounded-lg border border-border overflow-hidden border-l-2 border-l-sky-500/30 bg-card text-card-foreground text-sm font-mono'
    }
  >
    <div className="flex items-center justify-between gap-2 px-3 py-2 border-b border-border bg-muted/80">
      <span className="text-xs text-muted-foreground truncate">Terminal</span>
    </div>
    <div
      id="termynal-npx"
      data-termynal
      className="termynal-inline flex flex-col w-full gap-3 p-4 pt-4"
    >
      <span data-ty="input" data-ty-prompt=">">
        <span className="command font-bold">npx</span> fly-tejas
      </span>
      <div className="flex flex-col gap-1">
        <span data-ty className="data-ty-message">
          Need to install the following packages:
        </span>
        <span data-ty className="data-ty-message">
          fly-tejas@4.1.18
        </span>
        <span data-ty className="data-ty-message">
          Ok to proceed? (y)
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <span data-ty="input" data-ty-prompt=">">
          Enter project name:
        </span>
        <span data-ty="input" data-ty-prompt=">">
          Enter project description:
        </span>
        <span data-ty="input" data-ty-prompt=">">
          Port to run app on: <span className="text-muted-foreground">(1403)</span>
        </span>
        <span data-ty="input" data-ty-prompt=">">
          Log all incoming requests:{' '}
          <span className="text-muted-foreground">(yes/no) [can be changed later]</span>
        </span>
        <span data-ty="input" data-ty-prompt=">">
          Log uncaught exceptions:{' '}
          <span className="text-muted-foreground">(yes/no) [can be changed later]</span>
        </span>
      </div>
    </div>
  </div>
)

export default npxFlyTejas
