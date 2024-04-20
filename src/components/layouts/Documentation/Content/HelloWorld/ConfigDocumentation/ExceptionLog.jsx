const ExceptionLogs = () => {
  return (
    <div id={'exception-logs'} className={'flex flex-col gap-5'}>
      <h3>Exception Logs</h3>
      <p>
        A te.js application never dies. If there is an error, or you forgot to
        catch an exception, it will be logged in the console and appropriate
        response will be sent to the client
      </p>

      <div className={'flex flex-col gap-1'}>
        <p>Request log will have following components:</p>
        <p>
          <span className={'text-heading'}>Line 1: </span>
          Timestamp and IP address of the incoming request
        </p>
        <p>
          <span className={'text-heading'}>Line 2: </span>
          Method, endpoint, status code and duration of the request
        </p>
        <p>
          <span className={'text-heading'}>Line 3: </span>
          Regardless of method, it will have all parameters from query and body
          from request
        </p>
        <p>
          <span className={'text-heading'}>Line 4: </span>
          Response sent back to the client
        </p>
      </div>

      <div className={'flex flex-col gap-2'}>
        <span className={'text-muted'}>Example:</span>
        <img
          className={'rounded-md border p-4'}
          src={'/images/robus-error-handling.png'}
          width={'80%'}
          alt={'Exception Logs'}
        />
      </div>
    </div>
  )
}

export default ExceptionLogs
