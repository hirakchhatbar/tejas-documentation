const createProjectTermynal = (
  <div className={'flex flex-col gap-3'}>
    <p>
      Assuming you’ve already installed
      <a href={'https://nodejs.org/'}> Node.js</a>, create a directory to hold
      your application, and make that your working directory.
    </p>

    <div
      className={'flex flex-col w-full bg-background border gap-3'}
      id='termynal'
      data-termynal
    >
      <span data-ty='input'>mkdir my-app</span>
      <span data-ty='input'>cd my-app</span>
    </div>
  </div>
)

export default createProjectTermynal