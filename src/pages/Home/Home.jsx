import AINativeSection from '@/components/layouts/Home/AINativeSection.jsx'
import BentoFeatures from '@/components/layouts/Home/BentoFeatures.jsx'
import BottomCTA from '@/components/layouts/Home/BottomCTA.jsx'
import HeroSection from '@/components/layouts/Home/HeroSection.jsx'
import InstallSnippet from '@/components/layouts/Home/InstallSnippet.jsx'
const ALTITUDE_TICKS = [50, 45, 40, 35, 30, 25, 20, 15, 10]

const Home = () => {
  return (
    <div className="relative flex flex-col w-full min-h-full">
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-500/[0.06] via-transparent to-muted/20"
        aria-hidden
      />

      {/* Page-spanning contrail traces */}
      <svg
        className="absolute inset-0 w-full h-full -z-10 pointer-events-none opacity-[0.04] dark:opacity-[0.03]"
        preserveAspectRatio="none"
        aria-hidden
      >
        <line x1="0" y1="15%" x2="100%" y2="85%" stroke="hsl(199 89% 58%)" strokeWidth="0.5" strokeDasharray="8 28" />
        <line x1="100%" y1="10%" x2="0" y2="90%" stroke="hsl(199 89% 58%)" strokeWidth="0.3" strokeDasharray="6 32" />
        <line x1="10%" y1="0" x2="85%" y2="100%" stroke="hsl(199 89% 58%)" strokeWidth="0.3" strokeDasharray="4 36" />
      </svg>

      {/* Side altitude ticks — desktop only */}
      <div className="absolute left-3 top-0 bottom-0 hidden lg:flex flex-col justify-evenly items-end pointer-events-none select-none -z-10" aria-hidden>
        {ALTITUDE_TICKS.map(alt => (
          <div key={alt} className="flex items-center gap-1.5">
            <span className="font-mono text-[7px] tracking-wider text-sky-500/[0.12] tabular-nums">
              {String(alt).padStart(2, '0')}
            </span>
            <span className="w-2.5 h-px bg-sky-500/[0.10]" />
          </div>
        ))}
      </div>
      <div className="absolute right-3 top-0 bottom-0 hidden lg:flex flex-col justify-evenly items-start pointer-events-none select-none -z-10" aria-hidden>
        {ALTITUDE_TICKS.map(alt => (
          <div key={alt} className="flex items-center gap-1.5">
            <span className="w-2.5 h-px bg-sky-500/[0.10]" />
            <span className="font-mono text-[7px] tracking-wider text-sky-500/[0.12] tabular-nums">
              {String(alt).padStart(2, '0')}
            </span>
          </div>
        ))}
      </div>

      <div className="flex flex-col w-full max-w-[1440px] mx-auto items-center">
        <HeroSection />
        <InstallSnippet />
        <BentoFeatures />
        <AINativeSection />
        <BottomCTA />
      </div>
    </div>
  )
}

export default Home
