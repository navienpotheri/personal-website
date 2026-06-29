import Image from 'next/image'

export default function BooksPage() {
  const books = [
    {
      title: 'Project Hail Mary',
      author: 'Andy Weir',
      coverSrc: '/hail-mary.png',
      description: 'A solitary astronaut wakes up with amnesia and must use scientific problem-solving, mathematical deductions, and an unexpected alliance to save humanity from an extinction-level solar threat.',
    },
    {
      title: 'The Beginning of Infinity',
      author: 'David Deutsch',
      coverSrc: '/beginning-of-infinity.png',
      description: 'An exploration of the infinite potential of human explanation and progress, arguing that all progress stems from the creation of good explanations through fallible error-correction.',
    },
    {
      title: 'The Alignment Problem',
      author: 'Brian Christian',
      coverSrc: '/alignment-problem.png',
      description: 'A rigorous dive into the engineering and ethical challenges of machine learning systems, mapping the precarious gap between intended human utility models and objective machine actuation.',
    },
    {
      title: 'Why We Die',
      author: 'Venki Ramakrishnan',
      coverSrc: '/why-we-die.png',
      description: 'A Nobel laureate’s journey to the frontiers of biology, dissecting the cellular mechanisms of aging, metabolic decline, and the intricate evolutionary trade-offs governing mortality.',
    },
    {
      title: 'The Vegetarian',
      author: 'Han Kang',
      coverSrc: '/vegetarian.png',
      description: 'A haunting allegory of a woman who completely subverts societal conformity by giving up meat, opting to strip away her human constraints in pursuit of a pure, plant-like existence.',
    },
    {
      title: 'Superintelligence',
      author: 'Nick Bostrom',
      coverSrc: '/superintelligence.png',
      description: 'A foundational analysis of the control problem, examining the profound strategic risks that arise if an artificial intellect reaches a recursive self-improvement explosion.',
    },
  ]

  return (
    <div className="space-y-10 py-4 text-neutral-900 selection:bg-neutral-200">
      
      {/* Header Context */}
      <div className="space-y-2">
        <h1 className="font-serif text-3xl font-medium tracking-tight">Reading List</h1>
        <p className="text-sm text-neutral-500 max-w-xl">
          A collection of books shaping perspectives on computation, cognition, biology, and alignment frameworks.
        </p>
      </div>
      
      {/* 2x2 Structured Matrix Grid Layout with Cover Art */}
      <div className="border-t border-neutral-200 pt-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        {books.map((book) => (
          <div key={book.title} className="flex gap-4 items-start">
            
            {/* Book Cover Container */}
            <div className="flex-shrink-0 w-20 h-28 relative bg-neutral-100 rounded border border-neutral-200 overflow-hidden shadow-sm">
              <Image 
                src={book.coverSrc} 
                alt="Book Cover"
                fill
                className="object-cover"
                sizes="80px"
                unoptimized 
              />
            </div>

            {/* Book Details */}
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-neutral-400 block">{book.author}</span>
              <h3 className="font-medium text-base text-neutral-900 leading-tight">{book.title}</h3>
              <p className="text-xs text-neutral-600 leading-relaxed pt-1">{book.description}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}