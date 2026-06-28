const essays = [
  {
    title: 'The Gap Between Computation and Cognition',
    description: 'Why intelligence is not just prediction, but persistent model-building under uncertainty.',
    status: 'Draft',
  },
  {
    title: 'Why Intelligence Should Be Continuous',
    description: 'Human life unfolds continuously. Our interaction with intelligence should too.',
    status: 'Draft',
  },
  {
    title: 'World Models and Personal Computing',
    description: 'A note on context, memory, embodiment, and the next interface after the smartphone.',
    status: 'Draft',
  },
]

export default function Writing() {
  return (
    <section className="space-y-10">
      <h1 className="font-serif text-5xl">Writing</h1>
      <div className="space-y-6">
        {essays.map((essay) => (
          <article key={essay.title} className="border-t border-neutral-200 pt-6">
            <div className="mb-2 flex items-center justify-between gap-4">
              <h2 className="text-xl font-medium">{essay.title}</h2>
              <span className="text-xs uppercase tracking-widest text-neutral-500">{essay.status}</span>
            </div>
            <p className="leading-7 text-neutral-600">{essay.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
