const installTejas = (
  <div className={'flex flex-col gap-3'}>
    <p>
      It's time to install te.js in your new project. Running this command to
      install te.js
    </p>

    <div
      className={'flex flex-col w-full bg-background border gap-3'}
      id="termynal"
      data-termynal
    >
       <span data-ty="input" data-ty-prompt={'...\\my-app>'}>
         <span className={'command'}>npm</span> install te.js
          </span>
    </div>
  </div>
)

export default installTejas
