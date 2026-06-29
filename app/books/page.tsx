import React from 'react';
import Link from 'next/link';

interface Book {
  title: string;
  author: string;
  category: string;
  review: string;
  imagePlaceholderColor: string;
}

const books: Book[] = [
  // The New Core Focus Four
  {
    title: "Gödel, Escher, Bach: An Eternal Golden Braid",
    author: "Douglas R. Hofstadter",
    category: "Cognitive Science & Computability",
    review: "A masterpiece formalizing self-referential configurations and strange loops. It serves as the ultimate structural manual for understanding how high-level semantic intelligence emerges out of low-level formal symbol manipulation.",
    imagePlaceholderColor: "bg-neutral-100"
  },
  {
    title: "Behave: The Biology of Humans at Our Best and Worst",
    author: "Robert Sapolsky",
    category: "Neurobiology & Systems Dynamics",
    review: "A monumental multi-scale analysis of continuous neural architectures. Sapolsky traces behavior from milliseconds before action up to evolutionary timelines, perfectly illuminating non-linear biological feedback loops.",
    imagePlaceholderColor: "bg-neutral-100"
  },
  {
    title: "The Beginning of Infinity",
    author: "David Deutsch",
    category: "Philosophy of Science",
    review: "An incredible exploration of explanation, progress, and how open-ended knowledge creation shapes our interaction with reality. Essential reading for understanding open-world complexity.",
    imagePlaceholderColor: "bg-neutral-100"
  },
  {
    title: "The Alignment Problem",
    author: "Brian Christian",
    category: "AI Safety & Society",
    review: "A sharp, narrative-driven breakdown of the structural gap between mathematical optimization objectives and messy human values. It perfectly articulates why closed training setups break in the wild.",
    imagePlaceholderColor: "bg-neutral-100"
  },
  // The Original Six Infrastructure
  {
    title: "Superintelligence: Paths, Dangers, Strategies",
    author: "Nick Bostrom",
    category: "AI Safety & Strategy",
    review: "The foundational mapping of strategic landscapes, takeover scenarios, and orthogonal capability trajectories. Essential for understanding the scale of the optimization challenge.",
    imagePlaceholderColor: "bg-neutral-100"
  },
  {
    title: "Out of Control: The New Biology of Machines",
    author: "Kevin Kelly",
    category: "Emergent Technologies",
    review: "A classic blueprint tracking the convergence of biological logic and technological scaling. It details why true open-world agency must be grown organically rather than assembled purely from top-down scripts.",
    imagePlaceholderColor: "bg-neutral-100"
  },
  {
    title: "Skin in the Game: Hidden Asymmetries in Daily Life",
    author: "Nassim Nicholas Taleb",
    category: "Systems & Risk Management",
    review: "A definitive treatise on real-world path dependency and non-ergodic structural boundaries. Taleb illustrates why optimization decoupled from direct systemic risk leads to catastrophic architectural degradation.",
    imagePlaceholderColor: "bg-neutral-100"
  },
  {
    title: "Why We Die: The New Science of Aging and the Quest for Immortality",
    author: "Venki Ramakrishnan",
    category: "Molecular Biology",
    review: "A pristine structural analysis of biological error-minimization, cellular degradation cascades, and the thermodynamics of finite life. Excellent insight into biological state limits.",
    imagePlaceholderColor: "bg-neutral-100"
  },
  {
    title: "Project Hail Mary",
    author: "Andy Weir",
    category: "Speculative Fiction",
    review: "A phenomenal exploration of high-stakes problem-solving under extreme environmental constraints. A masterclass in applying continuous physical deduction to navigate unmodeled survival horizons.",
    imagePlaceholderColor: "bg-neutral-100"
  },
  {
    title: "The Vegetarian",
    author: "Han Kang",
    category: "Literary Fiction",
    review: "A profound psychological study of radical institutional non-compliance and the collapse of conventional social interfaces. A brilliant subversion of expected environmental norms.",
    imagePlaceholderColor: "bg-neutral-100"
  }
];

export default function BooksPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 font-sans antialiased text-neutral-900 bg-white selection:bg-neutral-100">
      {/* Header */}
      <header className="mb-14">
        <Link href="/" className="text-sm font-medium text-neutral-400 hover:text-neutral-900 transition-colors duration-200">
          ← Back Home
        </Link>
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 mt-4">Reading List</h1>
        <p className="text-neutral-500 mt-2 text-sm">
          A dynamic compilation of 10 texts tracking computational paradigms, continuous biological systems, and risk asymmetries.
        </p>
      </header>

      {/* Divider */}
      <hr className="border-neutral-100 my-8" />

      {/* 5x2 Matrix Grid Layout with Covers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12">
        {books.map((book, index) => (
          <div key={index} className="flex gap-5 items-start bg-neutral-50/30 rounded-xl p-4 border border-neutral-100/50 hover:bg-neutral-50 transition-colors duration-200">
            {/* Book Cover Frame */}
            <div className={`w-24 h-36 flex-shrink-0 ${book.imagePlaceholderColor} rounded border border-neutral-200/60 shadow-sm flex items-center justify-center text-[10px] text-neutral-400 font-mono text-center p-2 relative overflow-hidden`}>
              <span>{book.title.split(':')[0]}</span>
            </div>
            
            {/* Book Metadata & Context */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 text-xs mb-1.5 font-mono">
                <span className="px-2 py-0.5 rounded bg-white text-neutral-500 border border-neutral-200/60 truncate">
                  {book.category}
                </span>
              </div>
              
              <h2 className="text-base font-medium tracking-tight text-neutral-900 leading-snug truncate">
                {book.title}
              </h2>
              <p className="text-neutral-400 text-xs mt-0.5">by {book.author}</p>
              
              <p className="text-xs text-neutral-500 mt-3 leading-relaxed text-justify line-clamp-4">
                {book.review}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}