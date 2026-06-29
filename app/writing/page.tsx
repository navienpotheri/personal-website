import React from 'react';
import Link from 'next/link';

interface Article {
  title: string;
  date: string;
  slug: string;
  category: string;
  rank: string;
  summary: string;
}

const articles: Article[] = [
  // LAYER 1: SYSTEMS ARCHITECTURE & ALIGNMENT THEORY (Macro Layer)
  {
    title: "The Open-World Gap: Why Closed-Loop AI Fails in Open-World Complexity",
    date: "June 2026",
    slug: "open-world-gap",
    category: "Systems & Alignment Theory",
    rank: "Rank 1: Macro Systems Architecture",
    summary: "An exploration of why traditional reinforcement learning frameworks experience catastrophic alignment drift when exposed to the non-linear, unpredictable feedback loops of real-world environments."
  },
  {
    title: "Dynamic Objective Landscapes: Escaping the Traps of Static Utility Functions",
    date: "June 2026",
    slug: "dynamic-objective-landscapes",
    category: "Systems & Alignment Theory",
    rank: "Rank 2: Advanced Optimization Theory",
    summary: "A deep theoretical paper detailing why optimizing for a fixed target inevitably creates exploitative failure modes, and offering a conceptual model where utility maps function as self-correcting vector fields."
  },
  {
    title: "Radical Agency: Epistemic Horizon Limitations in Open-Loop Infrastructures",
    date: "June 2026",
    slug: "radical-agency",
    category: "Systems & Alignment Theory",
    rank: "Rank 3: Agentic Safety Boundaries",
    summary: "Explores the 'epistemic horizon'—the structural boundary where an autonomous system's predictive model breaks down due to unmodeled open-world variables—and how to construct negative space bounds."
  },
  {
    title: "Ergodic Realities: Why Non-Ergodicity Shatters Steady-State Multi-Agent Models",
    date: "June 2026",
    slug: "ergodic-realities",
    category: "Systems & Alignment Theory",
    rank: "Rank 4: Multi-Agent Game Theory",
    summary: "An analysis of the fragile assumption of ergodicity in multi-agent optimization models, explaining why time averages of path-dependent individual agents do not match ensemble expectations."
  },

  // LAYER 2: COGNITIVE FORMALISMS & PHENOMENOLOGY (Conceptual Layer)
  {
    title: "The Gap Between Computation and Cognition: Structural Divergence in Closed-Loop Architecture",
    date: "June 2026",
    slug: "computation-vs-cognition",
    category: "Cognitive Formalisms",
    rank: "Rank 5: Foundational Cognitive Theory",
    summary: "An investigation into why the historical chasm between raw calculation and true understanding cannot be bridged by scale alone, necessitating a transition toward persistent, unpausing state-space dynamics[cite: 9]."
  },
  {
    title: "The Postulate of Continuity: Overcoming the Inefficiencies of Episodic Optimization",
    date: "June 2026",
    slug: "why-intelligence-continuous",
    category: "Cognitive Formalisms",
    rank: "Rank 6: Continuous Epistemology",
    summary: "Analyzing the systemic inefficiencies and structural limits of ephemeral interaction sessions, and mapping the theoretical requirement for continuous, persistent world-model states[cite: 10]."
  },
  {
    title: "Geometry of Mind: Mapping Self-Models Through State-Space Manifolds",
    date: "June 2026",
    slug: "geometry-of-mind",
    category: "Cognitive Formalisms",
    rank: "Rank 7: Mathematical Metaphysics",
    summary: "A rigorous mathematical exploration formalizing internal cognitive self-models as predictive internal state vectors moving continuously across deep Lie group manifolds."
  },

  // LAYER 3: INFRASTRUCTURE & DATA DYNAMICS (Foundational Compute Layer)
  {
    title: "World Models: Formalizing Dynamical Representation as Computational Infrastructure",
    date: "June 2026",
    slug: "world-models-infrastructure",
    category: "Computing Infrastructure",
    rank: "Rank 8: Informational Primitives",
    summary: "Moving computer science beyond the paradigm of static database archives and toward active reality systems capable of computing directly over the dynamic possibilities of the physical universe[cite: 11]."
  },
  {
    title: "Sub-Symbolic Alignment: Anchoring Safe Computing in the Physical Matrix of Compute",
    date: "June 2026",
    slug: "sub-symbolic-alignment",
    category: "Computing Infrastructure",
    rank: "Rank 9: Hardware Matrix Synthesis",
    summary: "Moving alignment guardrails completely out of fluid software abstraction layers and encoding safety parameters directly inside custom semiconductor logic gates and neuromorphic physical circuit breakers."
  },
  {
    title: "The Syntactic Singularity: Information Entropy and Conceptual Decay in Recursive Data Loops",
    date: "June 2026",
    slug: "syntactic-singularity",
    category: "Computing Infrastructure",
    rank: "Rank 10: Information Dynamics",
    summary: "Modeling the long-term informational entropy, lossy degradation, and final model collapse that triggers when architectures are recursively trained on synthetic data streams."
  },
  {
    title: "The Phenomenology of Code: Semantic Compression and the Crisis of Machine Intent",
    date: "June 2026",
    slug: "phenomenology-of-code",
    category: "Computing Infrastructure",
    rank: "Rank 11: Semantics & Code Systems",
    summary: "An investigation into how transformer architectures compress high-dimensional language into spatial matrices, and the deep philosophical crisis that arises from lacking physical grounding loops."
  }
];

export default function WritingPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 font-sans antialiased text-neutral-900 bg-white selection:bg-neutral-100">
      {/* Header */}
      <header className="mb-14">
        <Link href="/" className="text-sm font-medium text-neutral-400 hover:text-neutral-900 transition-colors duration-200">
          ← Back Home
        </Link>
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 mt-4">Research & Writings</h1>
        <p className="text-neutral-500 mt-2 text-sm">
          A ranked index exploring information dynamics, cognitive formalisms, and multi-agent alignment frameworks.
        </p>
      </header>

      {/* Divider */}
      <hr className="border-neutral-100 my-8" />

      {/* Articles Feed */}
      <div className="space-y-12">
        {articles.map((article) => (
          <article key={article.slug} className="group relative flex flex-col items-start">
            <div className="flex flex-wrap items-center gap-2 text-xs mb-2 font-mono">
              <span className="text-neutral-400">{article.date}</span>
              <span className="text-neutral-200">•</span>
              <span className="px-2 py-0.5 rounded bg-neutral-50 text-neutral-500 border border-neutral-100">
                {article.category}
              </span>
              <span className="text-neutral-200">•</span>
              <span className="text-indigo-600 font-medium">{article.rank}</span>
            </div>
            
            <h2 className="text-xl font-medium tracking-tight text-neutral-900 group-hover:text-neutral-600 transition-colors duration-200">
              <Link href={`/writing/${article.slug}`}>
                <span className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-neutral-50/0 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl" />
                <span className="relative z-10">{article.title}</span>
              </Link>
            </h2>
            
            <p className="relative z-10 text-sm text-neutral-500 mt-3 leading-relaxed text-justify">
              {article.summary}
            </p>
            
            <div className="relative z-10 mt-4 flex items-center text-sm font-medium text-neutral-400 group-hover:text-neutral-900 transition-colors duration-200">
              Read Essay
              <svg className="ml-1 h-3 w-3 stroke-current" viewBox="0 0 16 16" fill="none">
                <path d="M6.75 5.75l3.25 3.25-3.25 3.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}