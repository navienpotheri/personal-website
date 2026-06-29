import Link from 'next/link'
import Image from 'next/image'
import profilePhoto from './profile.png'

export default function Home() {
  return (
    <div className="space-y-16 text-neutral-900 selection:bg-neutral-200">
      
      {/* 1. HERO SECTION WITH PHOTO */}
      <div className="pt-4 flex flex-col-reverse md:flex-row justify-between items-start gap-8">
        
        {/* Left Side: Copy */}
        <div className="space-y-6 max-w-2xl">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              AI Researcher & Founder
            </p>
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium bg-neutral-100 text-neutral-800">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Building Stealth Startup
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl font-medium tracking-tight leading-tight text-neutral-900">
            I'm obsessed with the gap between computation and cognition.
          </h1>
          
          <p className="text-base md:text-lg leading-relaxed text-neutral-600">
            I study how intelligent systems build internal models of the world, manage state spaces, and minimize prediction errors.
          </p>

          <div className="pt-2 text-sm font-medium flex gap-4">
            <Link href="/resume" className="underline underline-offset-4 hover:text-neutral-600">
              View Resume
            </Link>
            <a 
              href="mailto:navien.pr@gmail.com?subject=Scheduling%20a%20Session" 
              className="underline underline-offset-4 hover:text-neutral-600 flex items-center gap-1.5"
            >
              📅 Schedule Session
            </a>
          </div>
        </div>

        {/* Right Side: Profile Headshot */}
        <div className="flex-shrink-0 mx-auto md:mx-0">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden border border-neutral-200 shadow-sm">
            <Image
              src={profilePhoto}
              alt="Navien Potheri"
              className="object-cover"
              priority
              fill
            />
          </div>
        </div>

      </div>
    </div>
  )
}