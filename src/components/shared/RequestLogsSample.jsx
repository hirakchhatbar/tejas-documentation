import { Card } from '@/components/ui/card.jsx'

const RequestLogsSample = () => {
  return (
    <Card className={'flex flex-col gap-1 p-4'}>
      <p>⏰ 4:26:37 pm
        <span className={'text-green-600'}> [LOG] </span>
        <span className={'text-sky-600'}>Tejas.Request =&gt; </span>
        <span className={'text-green-600'}>Incoming request from ::ffff:127.0.0.1</span>
      </p>
      <p>
        <span className={'ml-3 italic'}>GET</span>
        <span className={'ml-3 font-bold text-green-600'}>/hello</span>
        <span className={'ml-3 bg-green-900 text-white font-bold'}>✔ 200</span>
        <span className={'ml-3'}>3ms</span>
      </p>
      <p>
        <span className={'ml-3 text-sky-600'}>Request:</span>
        <span className={'ml-3 font-light'}>{"{\"paramA\" : \"hello\"}"}</span>
      </p>
      <p>
        <span className={'ml-3 text-sky-600'}>Response:</span>
        <span className={'ml-3 font-light'}>Hello, World!</span>
      </p>
    </Card>
  )
}

export default RequestLogsSample
