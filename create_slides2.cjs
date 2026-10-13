const fs = require('fs');
const path = require('path');

const slidesDir = path.join(__dirname, 'src', 'components', 'slides');

function getHeader(problemTag, slideNum, titleSub) {
  return `
      {/* TOP HEADER */}
      <motion.div 
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex items-center justify-between border-b border-slate-800/80 pb-2.5 sm:pb-3 flex-shrink-0"
      >
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-brand-500 to-indigo-600 shadow-md shadow-brand-500/25 border border-white/20">
            <Brain className="w-5 h-5 text-white animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold tracking-tight text-white text-sm sm:text-base md:text-lg">
                HUMAN <span className="text-brand-400">OS</span>
              </span>
              <span className="text-[10px] sm:text-xs uppercase font-mono px-2 py-0.5 rounded-full bg-brand-500/15 border border-brand-500/30 text-brand-300 font-bold tracking-wider">
                ${problemTag}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-tight">${titleSub}</p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-brand-500/40 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-500"></span>
            </span>
            <span className="font-mono text-xs sm:text-sm font-bold tracking-wider text-brand-300">
              SLIDE {String(currentIndex + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-slate-300 font-medium">
            <Lock className="w-3.5 h-3.5 text-rose-400" />
            <span>Confidential · Seed Deck</span>
          </div>
        </div>
      </motion.div>
  `;
}

// Slide 7: The Knowledge Graph
const slide7 = `import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Lock, Network, Share2, Database, ShieldCheck, ArrowRight } from 'lucide-react';

export function Slide7KnowledgeGraph({ slide, currentIndex = 6, totalSlides = 16 }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.02 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-3.5 sm:p-5 md:p-6 lg:p-7 overflow-hidden select-none bg-navy-950">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[10%] w-[550px] h-[280px] bg-gradient-to-b from-indigo-500/15 via-brand-500/10 to-transparent blur-3xl rounded-full opacity-60" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      </div>

      ${getHeader('Data Moat', 7, 'Directed Acyclic Knowledge Graph')}

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 my-auto max-w-6xl mx-auto w-full flex-1 flex flex-col justify-between py-1 gap-2.5 sm:gap-3">
        <div className="text-center space-y-0.5">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-slate-900/90 border border-brand-500/30 text-xs sm:text-sm font-bold text-brand-300 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-brand-400" />
            <span>WHY WE'RE NOT A PLAYLIST</span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-white">
            The Knowledge Graph: <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-indigo-200 to-sky-300">Non-Linear Mastery</span>
          </motion.h1>
        </div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-3 items-stretch">
          <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/90 border border-slate-800 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-lg bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-2">
                <Network className="w-5 h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white mb-1">Directed Acyclic Graph (DAG)</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Knowledge is not a linear list of video timestamps. Concepts exist in a deep multi-dimensional graph of dependencies and prerequisites.
              </p>
            </div>
            <div className="mt-3 py-1 px-2 rounded bg-slate-950 text-[11px] font-mono text-indigo-300 border border-indigo-500/20">
              Topological Learning Traversal
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-brand-950/30 border border-brand-500/40 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-lg bg-brand-500/20 border border-brand-500/40 flex items-center justify-center text-brand-300 mb-2">
                <Share2 className="w-5 h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white mb-1">Pedagogical Semantic Edges</h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Graph edges encode strict pedagogy: <code className="text-brand-300 bg-slate-950 px-1 py-0.5 rounded">Requires</code> (strict prerequisite) and <code className="text-brand-300 bg-slate-950 px-1 py-0.5 rounded">BuildsOn</code> (schema expansion).
              </p>
            </div>
            <div className="mt-3 py-1 px-2 rounded bg-brand-950 text-[11px] font-mono text-brand-300 border border-brand-500/30">
              No Cognitive Bottlenecks
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/90 border border-slate-800 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-2">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white mb-1">Global Entity Master Catalog</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                <em>"Ohm's Law"</em> or <em>"Article 1 VAT Law"</em> resolves to one canonical, cross-curriculum entity. Every document ingested enhances every learner's graph.
              </p>
            </div>
            <div className="mt-3 py-1 px-2 rounded bg-slate-950 text-[11px] font-mono text-emerald-300 border border-emerald-500/20">
              Cross-Domain Graph Synergy
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="rounded-xl sm:rounded-2xl bg-gradient-to-r from-brand-950/95 via-indigo-950/90 to-slate-900/95 border border-brand-500/50 p-2.5 sm:p-3 flex items-center justify-between shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-brand-500/20 border border-brand-400/40 flex items-center justify-center text-brand-300 flex-shrink-0">
              <ShieldCheck className="w-5 h-5 text-brand-400" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold text-brand-400 uppercase tracking-widest block">Investor Framing</span>
              <p className="text-xs sm:text-sm md:text-base font-bold text-white leading-tight">
                The graph is a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-emerald-300">compounding data asset</span> — every ingested document makes the whole ecosystem exponentially smarter.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
`;

// Slide 8: Factuals
const slide8 = `import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Lock, ShieldCheck, CheckCircle2, LockKeyhole, Cpu } from 'lucide-react';

export function Slide8Factuals({ slide, currentIndex = 7, totalSlides = 16 }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.02 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-3.5 sm:p-5 md:p-6 lg:p-7 overflow-hidden select-none bg-navy-950">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[280px] bg-gradient-to-b from-emerald-500/15 via-indigo-600/10 to-transparent blur-3xl rounded-full opacity-60" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      </div>

      ${getHeader('Trust & Accuracy', 8, 'Zero-Hallucination Guardrails')}

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 my-auto max-w-6xl mx-auto w-full flex-1 flex flex-col justify-between py-1 gap-2.5 sm:gap-3">
        <div className="text-center space-y-0.5">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-xs sm:text-sm font-bold text-emerald-300 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>GROUNDED TRUTH ENGINE</span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-white">
            Factuals: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-brand-200 to-sky-300">Zero-Hallucination Guardrails</span>
          </motion.h1>
        </div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-3 items-stretch">
          <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/90 border border-slate-800 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-2">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white mb-1">Verifiable Truth Units</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Knowledge Facts are extracted directly from verified source material, cryptographically anchored, and bound to specific graph nodes.
              </p>
            </div>
            <div className="mt-3 py-1 px-2 rounded bg-slate-950 text-[11px] font-mono text-emerald-400 border border-emerald-500/20">
              Single-Hop & Multi-Hop Grounding
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-brand-950/30 border border-brand-500/40 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-lg bg-brand-500/20 border border-brand-500/40 flex items-center justify-center text-brand-300 mb-2">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white mb-1">Taxonomic Fact Classification</h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Every fact is tagged into exact semantic schemas: <strong className="text-white">Definition · Principle · Process · Outcome</strong> to enforce strict reasoning.
              </p>
            </div>
            <div className="mt-3 py-1 px-2 rounded bg-brand-950 text-[11px] font-mono text-brand-300 border border-brand-500/30">
              Structured Epistemic Units
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/90 border border-slate-800 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-lg bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-2">
                <LockKeyhole className="w-5 h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white mb-1">Deterministic AI Boundaries</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                The Tutor Agent is strictly bounded by validated Factuals. It <strong className="text-rose-300">cannot invent answers</strong> or mislead the user.
              </p>
            </div>
            <div className="mt-3 py-1 px-2 rounded bg-slate-950 text-[11px] font-mono text-rose-300 border border-rose-500/20">
              Provable Zero-Hallucination
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="rounded-xl sm:rounded-2xl bg-gradient-to-r from-emerald-950/90 via-slate-900 to-brand-950/90 border border-emerald-500/50 p-2.5 sm:p-3 flex items-center justify-between shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 flex-shrink-0">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest block">Takeaway</span>
              <p className="text-xs sm:text-sm md:text-base font-bold text-white leading-tight">
                This is how we deliver truly trustworthy learning — accurate, relevant, and worth the learner's time.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
`;

// Slide 9: My Brain
const slide9 = `import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Lock, Zap, BookOpen, Quote } from 'lucide-react';

export function Slide9MyBrain({ slide, currentIndex = 8, totalSlides = 16 }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.02 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
  };

  const neurons = [
    { label: "Ohm's Law", pct: 98, status: "Automatic", ring: "border-emerald-400 text-emerald-300", badge: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40" },
    { label: "React Fiber Reconciler", pct: 85, status: "Strong", ring: "border-brand-400 text-brand-300", badge: "bg-brand-500/20 text-brand-300 border-brand-500/40" },
    { label: "Transformer Attention", pct: 62, status: "Fading", ring: "border-amber-400 text-amber-300", badge: "bg-amber-500/20 text-amber-300 border-amber-500/40" },
    { label: "Backpropagation Math", pct: 38, status: "Review Due", ring: "border-rose-400 text-rose-300", badge: "bg-rose-500/20 text-rose-300 border-rose-500/40" },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-3.5 sm:p-5 md:p-6 lg:p-7 overflow-hidden select-none bg-navy-950">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[650px] h-[300px] bg-gradient-to-b from-brand-500/20 via-indigo-600/15 to-transparent blur-3xl rounded-full opacity-70" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      </div>

      ${getHeader('Live Telemetry', 9, 'Real-Time Neural Strength Telemetry')}

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 my-auto max-w-6xl mx-auto w-full flex-1 flex flex-col justify-between py-1 gap-2.5 sm:gap-3">
        <div className="text-center space-y-0.5">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-slate-900/90 border border-brand-500/30 text-xs sm:text-sm font-bold text-brand-300 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-brand-400" />
            <span>REAL-TIME COGNITIVE RETENTION TELEMETRY</span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-white">
            “My Brain”: <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-indigo-200 to-sky-300">Mastery You Can See</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xs sm:text-sm md:text-base text-slate-300 max-w-4xl mx-auto">
            We don't track <em>completion</em>. We track <strong className="text-white">memory strength in real time</strong>.
          </motion.p>
        </div>

        {/* Live Neuron Cards Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 items-stretch">
          {neurons.map((n, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 shadow-lg flex flex-col items-center text-center justify-between relative overflow-hidden">
              <div className={\`w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 \${n.ring} flex flex-col items-center justify-center my-1 bg-slate-950/80 shadow-inner\`}>
                <span className="text-sm sm:text-base font-extrabold font-mono text-white leading-none">{n.pct}%</span>
                <span className="text-[9px] font-mono text-slate-400 uppercase mt-0.5">Recall</span>
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-white mt-1 line-clamp-1">{n.label}</h4>
              <span className={\`mt-1.5 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border \${n.badge}\`}>
                {n.pct >= 90 && <Zap className="w-3 h-3 inline mr-1 text-emerald-400" />}
                {n.status}
              </span>
            </div>
          ))}
        </motion.div>

        {/* The Science Grounding Box */}
        <motion.div variants={itemVariants} className="rounded-xl bg-slate-950/95 border border-brand-500/50 p-2.5 sm:p-3 flex items-center justify-between gap-3 shadow-inner">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-brand-500/20 text-brand-300 border border-brand-400/40 flex-shrink-0">
              <BookOpen className="w-5 h-5 text-brand-300" />
            </div>
            <div className="text-left">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-300">
                SCIENTIFIC CREDIBILITY ANCHOR · WIXTED & EBBESEN (1991)
              </span>
              <p className="text-xs sm:text-sm text-slate-200 font-medium">
                Built on mathematically modeled memory decay curves combining <em>days-since-review + review-frequency</em>.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Investor Takeaway Quote */}
        <motion.div variants={itemVariants} className="rounded-xl sm:rounded-2xl bg-gradient-to-r from-brand-950/95 via-indigo-950/90 to-slate-900/95 border border-brand-500/50 p-2.5 sm:p-3 flex items-center justify-between shadow-xl">
          <div className="flex items-center gap-2.5">
            <Quote className="w-5 h-5 text-brand-400 flex-shrink-0" />
            <p className="text-xs sm:text-sm md:text-base font-bold text-white italic">
              “Coursera tells you a course is finished. We tell you exactly what a person will still remember next Tuesday — and when to intervene.”
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
`;

fs.writeFileSync(path.join(slidesDir, 'Slide7KnowledgeGraph.jsx'), slide7);
fs.writeFileSync(path.join(slidesDir, 'Slide8Factuals.jsx'), slide8);
fs.writeFileSync(path.join(slidesDir, 'Slide9MyBrain.jsx'), slide9);
console.log('Created slides 7-9');
