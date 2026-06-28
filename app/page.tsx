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
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium bg-neutral-100 text-neutral-800 border border-neutral-200 animate-pulse font-mono">
              ● Building Stealth Startup
            </span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl font-medium tracking-tight leading-tight text-neutral-900">
            I’m obsessed with the gap between computation and cognition.
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-neutral-600">
            I study how intelligent systems build internal models of the world, manage state spaces, and minimize prediction error. Currently translating foundational representation paradigms into a novel stealth layer.
          </p>
          <div className="pt-2 text-sm font-medium flex gap-4">
            <Link href="/resume" className="underline underline-offset-4 hover:text-neutral-600">
              View Resume
            </Link>
            <a 
              href="mailto:navien.pr@gmail.com?subject=Scheduling%20Session" 
              className="underline underline-offset-4 hover:text-neutral-600"
            >
              📅 Schedule Session
            </a>
          </div>
        </div>

        {/* Right Side: Profile Headshot */}
        <div className="flex-shrink-0 mx-auto md:mx-0">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden border border-neutral-200 shadow-sm bg-neutral-50">
            <Image 
              src={profilePhoto} 
              alt="Navien Potheri"
              className="object-cover"
              priority
            />
          </div>
        </div>

      </div>

      {/* 2. THREE-COLUMN SYSTEM MATRIX */}
      {/* ROW 1: Headers and First Set of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10 border-t border-neutral-200 pt-12">
        
        {/* Column 1: Research Interests - Item 1 */}
        <div className="space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-mono">Research Interests</h2>
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-transparent block select-none hidden md:block">Spacer</span>
            <h3 className="font-medium text-base text-neutral-900">Bayesian Inference & Active Inference</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">Exploring state-space models and how self-modeling systems generate robust internal state vectors to navigate open-world complexity.</p>
          </div>
        </div>

        {/* Column 2: Selected Code - Item 1 */}
        <div className="space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-mono">Selected Code</h2>
          <div className="space-y-2 group">
            <span className="text-[10px] font-mono text-neutral-400 block">GitHub / Repository</span>
            <h3 className="font-medium text-base text-neutral-900 underline decoration-neutral-300 group-hover:decoration-neutral-900 transition-colors">
              <a href="https://github.com/navienpotheri/Gbrain" target="_blank" rel="noreferrer">Gbrain</a>
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">Core repository focused on advanced cognitive architectures, state-space representations, and system modeling formalisms.</p>
          </div>
        </div>

        {/* Column 3: Experience - Item 1 */}
        <div className="space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-mono">Experience</h2>
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-neutral-400 block">Meta / Trust & Safety</span>
            <h3 className="font-medium text-base text-neutral-900">ML Classifier Evaluation</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">Trained and validated neural classifiers handling high-dimensional, sensitive user-generated data under heavily non-stationary data distributions.</p>
          </div>
        </div>
      </div>

      {/* ROW 2: Horizontal Line Alignment */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10 pt-2 md:pt-4">
        
        {/* Column 1: Research Interests - Item 2 */}
        <div className="space-y-2">
          <span className="text-[10px] font-mono text-transparent block select-none hidden md:block">Spacer</span>
          <h3 className="font-medium text-base text-neutral-900">Weak Supervision & Noisy Data</h3>
          <p className="text-xs text-neutral-600 leading-relaxed">Extracting stable mathematical representations from imperfect labels, ambiguous targets, and non-stationary distribution shifts.</p>
        </div>

        {/* Column 2: Selected Code - Item 2 */}
        <div className="space-y-2 group">
          <span className="text-[10px] font-mono text-neutral-400 block">GitHub / Repository</span>
          <h3 className="font-medium text-base text-neutral-900 underline decoration-neutral-300 group-hover:decoration-neutral-900 transition-colors">
            <a href="https://github.com/navienpotheri/multimodal-audio-suite" target="_blank" rel="noreferrer">multimodal-audio-suite</a>
          </h3>
          <p className="text-xs text-neutral-600 leading-relaxed">Audio processing and feature extraction pipelines engineered for cross-modal signal representation and ingestion layers.</p>
        </div>

        {/* Column 3: Experience - Item 2 */}
        <div className="space-y-2">
          <span className="text-[10px] font-mono text-neutral-400 block">Mphasis / Systems</span>
          <h3 className="font-medium text-base text-neutral-900">Rule-Based Automation</h3>
          <p className="text-xs text-neutral-600 leading-relaxed">Formalized implicit system parameters into deterministic Sigma rules to reduce workflow handling uncertainty at scale.</p>
        </div>

      </div>

      {/* 3. FOOTER */}
      <div className="border-t border-neutral-200 pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-neutral-400 font-mono">
        <div>
          <p>Navien Potheri — Chennai, India | +91 9344821267</p>
        </div>
        <div className="flex gap-4">
          <a href="mailto:navien.pr@gmail.com" className="hover:text-neutral-900">Email</a>
          <a href="https://github.com/navienpotheri" target="_blank" rel="noreferrer" className="hover:text-neutral-900">GitHub</a>
          <a href="https://www.linkedin.com/in/navienpr/" target="_blank" rel="noreferrer" className="hover:text-neutral-900">LinkedIn</a>
        </div>
      </div>

    </div>
  )
}