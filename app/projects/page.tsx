export default function ProjectsPage() {
  const repositories = [
    {
      name: 'Gbrain',
      description: 'Core repository focused on advanced cognitive architectures, state-space representations, and system modeling formalisms.',
      url: 'https://github.com/navienpotheri/Gbrain',
      tag: 'Core Framework',
      commits: 14,
    },
    {
      name: 'multimodal-audio-suite',
      description: 'Audio processing and feature extraction pipelines engineered for cross-modal signal representation and ingestion layers.',
      url: 'https://github.com/navienpotheri/multimodal-audio-suite',
      tag: 'Audio ML',
      commits: 4,
    },
    {
      name: 'sentence-transformers-gpt',
      description: 'Implementations exploring sentence embeddings, dense representation extraction, and transformer-based semantic alignments.',
      url: 'https://github.com/navienpotheri/sentence-transformers-gpt',
      tag: 'NLP / Embeddings',
      commits: 3,
    },
    {
      name: 'ideogram4-lora-study',
      description: 'Experimental study on fine-tuning and parameter-efficient adapters (LoRAs) isolating specific visual and generation constraints.',
      url: 'https://github.com/navienpotheri/ideogram4-lora-study',
      tag: 'Generative ML',
      commits: 2,
    },
  ]

  return (
    <div className="space-y-12 py-4 text-neutral-900 selection:bg-neutral-200">
      
      {/* Header and Live Overview Stats */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6 border-b border-neutral-200">
        <div className="space-y-2">
          <h1 className="font-serif text-3xl font-medium tracking-tight">Selected Projects</h1>
          <p className="text-sm text-neutral-500 max-w-xl">
            Active source code repositories mapping mathematical representation concepts into functional ML engineering modules.
          </p>
        </div>

        {/* Global Contribution Badges */}
        <div className="flex items-center gap-4 bg-neutral-50 border border-neutral-200 rounded-lg p-3 font-mono text-xs">
          <div>
            <span className="block text-neutral-400 text-[10px] uppercase tracking-wider">Yearly Activity</span>
            <span className="text-neutral-900 font-bold text-sm">46 Contributions</span>
          </div>
          <div className="h-6 w-px bg-neutral-200" />
          <div>
            <span className="block text-neutral-400 text-[10px] uppercase tracking-wider">June 2026 Focus</span>
            <span className="text-neutral-900 font-medium">23 Commits / 4 Repos</span>
          </div>
        </div>
      </div>
      
      {/* Grid Index */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {repositories.map((repo) => (
          <div key={repo.name} className="space-y-3 group rounded-lg transition-all">
            <div className="flex items-center justify-between gap-4">
              <span className="text-[10px] font-mono uppercase bg-neutral-100 border border-neutral-200 px-2 py-0.5 rounded text-neutral-500">
                {repo.tag}
              </span>
              <a 
                href={repo.url} 
                target="_blank" 
                rel="noreferrer" 
                className="text-xs font-mono text-neutral-400 hover:text-neutral-900 transition-colors"
              >
                src ↗
              </a>
            </div>
            
            <div className="space-y-1">
              <h2 className="font-medium text-lg text-neutral-900 group-hover:underline">
                <a href={repo.url} target="_blank" rel="noreferrer">
                  {repo.name}
                </a>
              </h2>
              <p className="text-[11px] font-mono text-emerald-600 flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
                {repo.commits} commits
              </p>
            </div>
            
            <p className="text-xs text-neutral-600 leading-relaxed">
              {repo.description}
            </p>
          </div>
        ))}
      </div>

    </div>
  )
}