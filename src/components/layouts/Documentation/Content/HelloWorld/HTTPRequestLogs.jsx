import RequestLogsSample from '@/components/shared/RequestLogsSample.jsx'

const HTTPRequestLogs = () => {
  return (
    <div id={'http-requests-logs'} className={'flex flex-col gap-5'}>
      <h3>HTTP Request Logs</h3>
      <p>If http_requests is set to true in configuration, te.js will log all
        the incoming HTTP requests in the console.</p>

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
        <span className={"text-muted"}>Example:</span>
        <RequestLogsSample />
      </div>
    </div>
  )
}

export default HTTPRequestLogs
