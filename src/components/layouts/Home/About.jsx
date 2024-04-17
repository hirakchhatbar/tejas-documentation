import aboutUs from '@/data/web-content/home/about-us.js'

const About = () => {
    return (
      <div className={'w-full flex flex-col gap-10 items-center px-16'}>
        <h1>About</h1>
        <p className={"whitespace-break-spaces"}>{aboutUs}</p>
      </div>
    )
}

export default About
