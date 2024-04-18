import { Card } from '@/components/ui/card.jsx'
import { Link } from 'react-router-dom'

const PortSpan = () => {
  return (
    <p className={'text-body'}>
      <span className={'command'}>port:</span> Port to run your
      project on. Default is 1403
    </p>
  )
}

const LogHttpRequestsSpan = () => {
  return (
    <p className={'text-body'}>
      <span className={'command'}>log.http_requests:</span> If
      true, logs all incoming http requests to console. Log will include
      endpoint, method, time taken to finish the request,
      body/parameters and response.
    </p>
  )
}

const LogExceptionsSpan = () => {
  return (
    <p className={'text-body'}>
      <span className={'command'}>log.exceptions:</span> If
      true, logs all uncaught exceptions to console. te.js will never die,
      instead, it will log the exception and send a 500 response to the
      client.
    </p>
  )
}

const DirTargetsSpan = () => {
  return (
    <p className={'text-body'}>
      <span className={'command'}>dir.targets:</span> Directory
      where you will put all your <Link className={'underline'}
                                        to={'/docs/routing'}>target</Link> files.
      A target file should end with .target.js extension.
    </p>
  )
}

const DBTypeSpan = () => {
  return (
    <p className={'text-body'}>
      <span className={'command'}>db.type:</span> Database type. Currently
      supported database type is &quot;mongodb&quot;. More databases will be
      supported in the future and documentation will be updated accordingly.
    </p>
  )
}

const DBUriSpan = () => {
  return (
    <p className={'text-body'}>
      <span className={'command'}>db.uri:</span> Connection URI string for the
      database. You can get this from your database provider.
      Eg: &quot;mongodb://localhost:27017&quot;
    </p>
  )
}
const ConfigVariables = () => {
  return (
    <Card className={'flex flex-col gap-3 p-4'}>
      <PortSpan />
      <LogHttpRequestsSpan />
      <LogExceptionsSpan />
      <DirTargetsSpan />
      <DBTypeSpan />
      <DBUriSpan />
    </Card>
  )
}

export default ConfigVariables
