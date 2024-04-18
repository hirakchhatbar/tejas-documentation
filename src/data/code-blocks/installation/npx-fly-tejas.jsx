const npxFlyTejas = (
  <div className={'flex flex-col gap-3'}>
    <div
      className={'flex flex-col w-full bg-card border gap-3'}
      id='termynal'
      data-termynal
    >
      <span data-ty='input' data-ty-prompt={'>'}>
        <span className={'command font-bold'}>npx</span> fly-tejas
      </span>
      <div className={'flex flex-col gap-1'}>
        <span data-ty className={'data-ty-message'}>
          Need to install the following packages:
        </span>
        <span data-ty className={'data-ty-message'}>
          fly-tejas@4.1.18
        </span>
        <span data-ty className={'data-ty-message'}>
          Ok to proceed? (y)
        </span>
      </div>
      <div className={'flex flex-col gap-1'}>
        <span data-ty='input' data-ty-prompt={'>'}>
          Enter project name:
        </span>
        <span data-ty='input' data-ty-prompt={'>'}>
          Enter project description:
        </span>
        <span data-ty='input' data-ty-prompt={'>'}>
          Port to run app on: <span className={'text-muted'}>(1403)</span>
        </span>
        <span data-ty='input' data-ty-prompt={'>'}>
          Log all incoming requests:{' '}
          <span className={'text-muted'}>(yes/no) [can be changed later]</span>
        </span>
        <span data-ty='input' data-ty-prompt={'>'}>
          Log uncaught exceptions:{' '}
          <span className={'text-muted'}>(yes/no) [can be changed later]</span>
        </span>
      </div>
    </div>
  </div>
)

export default npxFlyTejas
