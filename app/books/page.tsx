import React from 'react';
import Link from 'next/link';

interface Book {
  title: string;
  author: string;
  category: string;
  review: string;
}

const books: Book[] = [
  {
    title: "Gödel, Escher, Bach: An Eternal Golden Braid",
    author: "Douglas R. Hofstadter",
    category: "Cognitive Science & Computability",
    review: "A masterpiece formalizing self-referential configurations and strange loops. It serves as the ultimate structural manual for understanding how high-level semantic intelligence emerges out of low-level formal symbol manipulation."
  },
  {
    title: "Behave: The Biology of Humans at Our Best and Worst",
    author: "Robert Sapolsky",
    category: "Neurobiology & Systems Dynamics",
    review: "A monumental multi-scale analysis of continuous neural architectures. Sapolsky traces behavior from milliseconds before action up to evolutionary timelines, perfectly illuminating non-linear biological feedback loops."
  },
  {
    title: "The Beginning of Infinity",
    author: "David Deutsch",
    category: "Philosophy of Science",
    review: "An incredible exploration of explanation, progress, and how open-ended knowledge creation shapes our interaction with reality. Essential reading for understanding open-world complexity."
  },
  {
    title: "The Alignment Problem",
    author: "Brian Christian",
    category: "AI Safety & Society",
    review: "A sharp, narrative-driven breakdown of the structural gap between mathematical optimization objectives and messy human values. It perfectly articulates why closed training setups break in the wild."
  }
];

export default function BooksPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 font-sans antialiased text-neutral-900 bg-white selection:bg-neutral-100">
      {/* Header */}
      <header className="mb-14">
        <Link href="/" className="text-sm font-medium text-neutral-400 hover:text-neutral-900 transition-colors duration-200">
          ← Back Home
        </Link>
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 mt-4">Reading List</h1>
        <p className="text-neutral-500 mt-2 text-sm">
          A collection of texts tracking the intersection of computational structures, biological systems, and self-referential networks.
        </p>
      </header>

      {/* Divider */}
      <hr className="border-neutral-100 my-8" />

      {/* 2x2 Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
        {books.map((book, index) => (
          <div key={index} className="flex flex-col items-start bg-neutral-50/30 rounded-xl p-4 border border-neutral-100/50 hover:bg-neutral-50 transition-colors duration-200">
            <div className="flex items-center gap-3 text-xs mb-2 font-mono">
              <span className="px-2 py-0.5 rounded bg-white text-neutral-500 border border-neutral-200/60">
                {book.category}
              </span>
            </div>
            
            <h2 className="text-lg font-medium tracking-tight text-neutral-900 leading-snug">
              {book.title} <span className="text-neutral-400 font-normal text-sm block mt-0.5">by {book.author}</span>
            </h2>
            
            <p className="text-sm text-neutral-500 mt-3 leading-relaxed text-justify">
              {book.review}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}