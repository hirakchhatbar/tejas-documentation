import npxFlyTejas from '@/data/code-blocks/installation/npx-fly-tejas.jsx'
import { Link } from 'react-router-dom'
import { Card } from '@/components/ui/card.jsx'

const NPXInstallation = () => {
  return (
    <div className={'flex flex-col gap-5'}>
      <p>
        Best and quickest way to start using te.js is by using our npx utility
      </p>
      {npxFlyTejas}
      <p>
        The command will ask some common questions to setup a new te.js project.
        Once completed successfully, it will create a project whose folder
        structure looks like this:
      </p>

        <img
          className={'rounded-md border p-4'}
          width={'40%'}
          src={'/images/project-structure.png'}
          alt={'Project Structure'}
        />

      <h3>
        Congratulations! You&apos;re now ready to{' '}
        <Link to={'/docs/hello-world'} className={'bold'}>
          Get Started!
        </Link>
      </h3>
    </div>
  )
}

export default NPXInstallation
