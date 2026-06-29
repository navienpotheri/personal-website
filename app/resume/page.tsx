import React from 'react';
import Link from 'next/link';

export default function ResumePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 font-sans antialiased text-neutral-900 bg-white selection:bg-neutral-100 print:py-0 print:px-0">
      {/* Navigation - Hidden on Print */}
      <header className="mb-14 print:hidden">
        <Link href="/" className="text-sm font-medium text-neutral-400 hover:text-neutral-900 transition-colors duration-200">
          ← Back Home
        </Link>
      </header>

      {/* Resume Layout Split */}
      <div className="flex flex-col md:flex-row gap-8 items-start mb-10 pb-8 border-b border-neutral-100">
        {/* Headshot Frame linked to 4624a21e-b583-4dc5-a2fa-749caa73ff0b.png */}
        <div className="w-32 h-32 md:w-36 md:h-36 flex-shrink-0 rounded-xl overflow-hidden border border-neutral-200 shadow-sm relative">
          <img 
            src="/images/profile.png" 
            alt="Navien Potheri" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Identity & Metadata */}
        <div className="flex-1">
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-900">Navien Potheri</h1>
          <p className="text-neutral-500 text-sm mt-1 font-medium font-mono">Chennai, India</p>
          
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-neutral-500 mt-4 font-mono">
            <a href="mailto:Navien.pr@gmail.com" className="hover:text-neutral-900 transition-colors">✉ Navien.pr@gmail.com</a>
            <span>•</span>
            <span>📞 +91 9344821267</span>
            <span>•</span>
            <a href="https://github.com/navienpotheri" target="_blank" rel="noreferrer" className="hover:text-neutral-900 transition-colors">github.com/navienpotheri</a>
          </div>
        </div>
      </div>

      {/* Profile */}
      <section className="mb-10">
        <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase font-mono mb-3">Research Profile</h2>
        <p className="text-sm text-neutral-600 leading-relaxed text-justify">
          Works on structural alignment, computation, and representation learning to understand large-scale systems with weak supervision, particularly in settings with noisy labels, ambiguous targets, and distribution shift. Experience includes training and evaluating classifiers on image and social media engagement datasets, applying regression to ambiguous targets, and building pipelines for scalable model development and validation. Interested in probabilistic modeling, active inference, and hierarchical representation learning, with a focus on bridging theory (uncertainty, structure, invariance) and applied ML systems.
        </p>
      </section>

      {/* Interests */}
      <section className="mb-10">
        <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase font-mono mb-4">Research Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-medium text-neutral-900">Representation learning under weak and noisy supervision</h3>
            <p className="text-xs text-neutral-500 mt-1 leading-relaxed">Studying how models learn meaningful representations from imperfect labels and high-dimensional inputs, with an emphasis on extracting stable signals from noisy visual and user-generated data.</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-neutral-900">Learning under distribution shift and non-stationarity</h3>
            <p className="text-xs text-neutral-500 mt-1 leading-relaxed">Understanding how model performance evolves when data distributions change over time, and developing approaches that maintain reliability in dynamic environments.</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-neutral-900">Open-World Alignment & Non-Ergodic Dynamics</h3>
            <p className="text-xs text-neutral-500 mt-1 leading-relaxed">Formalizing structural boundaries where autonomous agents experience critical drift due to unmodeled environmental variables and path-dependent, non-linear feedback loops.</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-neutral-900">Continuous Belief-State Architectures</h3>
            <p className="text-xs text-neutral-500 mt-1 leading-relaxed">Moving past episodic calculation layers toward persistent tracking paradigms optimized for continuous, real-time prediction error minimization fields.</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-10">
        <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase font-mono mb-3">Technical Skills</h2>
        <div className="space-y-2 text-xs font-mono">
          <p><span className="text-neutral-900 font-medium">Programming:</span> Python, TypeScript, React</p>
          <p><span className="text-neutral-900 font-medium">ML Methods:</span> Supervised Learning, Regression, Classification, Feature Extraction</p>
          <p><span className="text-neutral-900 font-medium">Systems Architecture:</span> Structural Alignment & Computation, ML pipelines, workflow automation, rule-based systems, model evaluation & validation</p>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-10">
        <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase font-mono mb-6">Experience</h2>
        <div className="space-y-8">
          <div>
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-base font-medium text-neutral-900">Associate, Trust & Safety — Meta</h3>
              <span className="text-xs font-mono text-neutral-400">Hyderabad, India</span>
            </div>
            <ul className="list-disc list-outside pl-4 text-xs text-neutral-600 space-y-1.5 leading-relaxed">
              <li>Worked on training and evaluation of machine learning classifiers for detecting harmful and adversarial content in large-scale social systems.</li>
              <li>Integrated image-based detection pipelines, dealing with high-dimensional, sensitive visual data under noisy labeling conditions and weak supervision.</li>
              <li>Addressed ambiguity by designing verification processes to improve the statistical consistency of model-assisted decisions.</li>
              <li>Participated in infrastructure efforts to mitigate misinformation and coordinated adversarial behavior, requiring real-time adaptation to highly non-stationary data distributions.</li>
              <li>Operated at the intersection of human-in-the-loop validation matrices and probabilistic ML models, refining feedback loops for improved performance.</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-base font-medium text-neutral-900">Delivery Associate Engineer — Mphasis</h3>
              <span className="text-xs font-mono text-neutral-400">Bangalore, India</span>
            </div>
            <ul className="list-disc list-outside pl-4 text-xs text-neutral-600 space-y-1.5 leading-relaxed">
              <li>Designed rule-based decision systems (Sigma rules) that formalized implicit system knowledge into highly structured automated workflows.</li>
              <li>Built early-stage automation pipelines, bridging deterministic logic with scalable system behavior to stabilize open-world inputs.</li>
              <li>Improved system efficiency by reducing operational uncertainty in escalation handling through structured prioritization matrices.</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-base font-medium text-neutral-900">Director & Systems Operator — Artisanal Furniture Boutique</h3>
              <span className="text-xs font-mono text-neutral-400">Chennai, India</span>
            </div>
            <ul className="list-disc list-outside pl-4 text-xs text-neutral-600 space-y-1.5 leading-relaxed">
              <li>Managed end-to-end supply chain logistics, inventory architectures, and specialized structural configurations for high-value physical assets.</li>
              <li>Coordinated multi-tier client deployments and precise physical product installations under variable, real-world environmental constraints.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-10">
        <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase font-mono mb-6">Selected Projects & Manuscripts</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-neutral-900">Representation Learning for Image Classification</h3>
            <p className="text-xs text-neutral-600 mt-1 leading-relaxed">Developed supervised learning models to learn representations from image data. Implemented preprocessing and feature extraction pipelines for high-dimensional visual inputs and evaluated model performance under noisy or weak labeling conditions with a focus on robust signal extraction.</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-neutral-900">Scalable ML Pipeline Design</h3>
            <p className="text-xs text-neutral-600 mt-1 leading-relaxed">Built end-to-end pipelines for data ingestion, transformation, model training, and evaluation. Structured workflows to support iterative experimentation, reproducibility, and modular integration of models into larger decision systems.</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-neutral-900">Continuous Cognitive Architecture Portfolio (Manuscripts)</h3>
            <p className="text-xs text-neutral-500 mt-1 font-mono leading-relaxed">
              • "The Gap Between Computation and Cognition" — Structuring unpausing state-space systems.<br/>
              • "The Postulate of Continuity" — Modeling continuous world-model persistence metrics.<br/>
              • "World Models: The Next Representation" — Shifting primitives to simulation fields.
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-0">
        <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase font-mono mb-3">Education</h2>
        <div className="text-xs text-neutral-600 space-y-1">
          <p><span className="text-neutral-900 font-medium">Post Graduate Diploma in Management</span> — Xavier Institute of Management & Entrepreneurship, Bangalore</p>
          <p><span className="text-neutral-900 font-medium">B.Tech in Information Technology</span> — Meenakshi Sundararajan Engineering College, Chennai</p>
        </div>
      </section>
    </main>
  );
}