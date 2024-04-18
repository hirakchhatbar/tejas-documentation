const npmInit =  (
  <div className={'flex flex-col gap-3'}>
    <p>Create a Node.js project using npm</p>
    <div
      className={'flex flex-col w-full bg-background border gap-3'}
      id='termynal'
      data-termynal
    >
        <span data-ty='input' data-ty-prompt={'...\\my-app>'}>
          <span className={'command'}>npm</span> init
        </span>
      <span data-ty className={'data-ty-message'}>
          This utility will walk you through creating a package.json file. It
          only covers the most common items, and tries to guess sensible
          defaults.
        </span>
      <div className={'flex flex-col gap-1'}>
          <span data-ty='input' data-ty-prompt={'...\\my-app>'}>
            package name: <span className={'text-muted'}>(my-app)</span>
          </span>
        <span data-ty='input' data-ty-prompt={'...\\my-app>'}>
            version: <span className={'text-muted'}>(1.0.0)</span>
          </span>
        <span data-ty='input' data-ty-prompt={'...\\my-app>'}>
            description: My Node.js application
          </span>
        <span data-ty='input' data-ty-prompt={'...\\my-app>'}>
            entry point: <span className={'text-muted'}>(index.js)</span> app.js
          </span>
        <span data-ty='input' data-ty-prompt={'...\\my-app>'}>
            test command:
          </span>
        <span data-ty='input' data-ty-prompt={'...\\my-app>'}>
            git repository:
          </span>
        <span data-ty='input' data-ty-prompt={'...\\my-app>'}>
            keywords:
          </span>
        <span data-ty='input' data-ty-prompt={'...\\my-app>'}>
            author: Your Name
          </span>
        <span data-ty='input' data-ty-prompt={'...\\my-app>'}>
            license: <span className={'text-muted'}>(ISC)</span>
          </span>
      </div>
    </div>
  </div>
)

export default npmInit
