import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Lock, Network, Share2, Database, ShieldCheck } from 'lucide-react';

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
    <div className="relative w-full h-full flex flex-col justify-between p-5 sm:p-7 md:p-9 lg:p-11 overflow-hidden select-none bg-navy-950">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[10%] w-[600px] h-[300px] bg-gradient-to-b from-indigo-500/15 via-brand-500/10 to-transparent blur-3xl rounded-full opacity-60" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      </div>

      
      {/* TOP HEADER */}
      <motion.div 
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex items-center justify-between border-b border-slate-800/80 pb-3 flex-shrink-0"
      >
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-br from-brand-500 to-indigo-600 shadow-lg shadow-brand-500/25 border border-white/20">
            <Brain className="w-6 h-6 text-white animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2.5">
              <span className="font-display font-bold tracking-tight text-white text-lg sm:text-xl">
                HUMAN <span className="text-brand-400">OS</span>
              </span>
              <span className="text-xs sm:text-sm uppercase font-mono px-2.5 py-0.5 rounded-full bg-brand-500/15 border border-brand-500/30 text-brand-300 font-bold tracking-wider">
                Strategic Intent
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">Directed Acyclic Knowledge Graph</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-brand-500/40 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-500"></span>
            </span>
            <span className="font-mono text-sm sm:text-base font-bold tracking-wider text-brand-300">
              SLIDE {String(currentIndex + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300 font-medium">
            <Lock className="w-4 h-4 text-rose-400" />
            <span>Confidential · Company Deck</span>
          </div>
        </div>
      </motion.div>
  

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 my-auto max-w-6xl mx-auto w-full flex-1 flex flex-col justify-between py-2 gap-4">
        <div className="text-center space-y-1.5">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-brand-500/30 text-sm sm:text-base font-bold text-brand-300 shadow-md">
            <Sparkles className="w-5 h-5 text-brand-400" />
            <span>WHY WE'RE NOT A PLAYLIST</span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-display text-white">
            The Knowledge Graph: <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-indigo-200 to-sky-300">Non-Linear Mastery</span>
          </motion.h1>
        </div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-3">
                <Network className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Directed Acyclic Graph (DAG)</h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Knowledge is not a linear list of video timestamps. Concepts exist in a deep multi-dimensional graph of dependencies and prerequisites.
              </p>
            </div>
            <div className="mt-4 py-1.5 px-3 rounded-lg bg-slate-950 text-xs sm:text-sm font-mono text-indigo-300 border border-indigo-500/20">
              Topological Learning Traversal
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-brand-950/30 border border-brand-500/40 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-brand-500/20 border border-brand-500/40 flex items-center justify-center text-brand-300 mb-3">
                <Share2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Pedagogical Semantic Edges</h3>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                Graph edges encode strict pedagogy: <code className="text-brand-300 bg-slate-950 px-1.5 py-0.5 rounded">Requires</code> (prerequisite) and <code className="text-brand-300 bg-slate-950 px-1.5 py-0.5 rounded">BuildsOn</code> (expansion).
              </p>
            </div>
            <div className="mt-4 py-1.5 px-3 rounded-lg bg-brand-950 text-xs sm:text-sm font-mono text-brand-300 border border-brand-500/30">
              No Cognitive Bottlenecks
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Global Entity Master Catalog</h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                <em>"Ohm's Law"</em> or <em>"Article 1 VAT Law"</em> resolves to one canonical, cross-curriculum entity. Every ingested doc enriches all learners.
              </p>
            </div>
            <div className="mt-4 py-1.5 px-3 rounded-lg bg-slate-950 text-xs sm:text-sm font-mono text-emerald-300 border border-emerald-500/20">
              Cross-Domain Graph Synergy
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="rounded-2xl bg-gradient-to-r from-brand-950/95 via-indigo-950/90 to-slate-900/95 border border-brand-500/50 p-4 sm:p-5 flex items-center justify-between shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-2xl bg-brand-500/20 border border-brand-400/40 flex items-center justify-center text-brand-300 flex-shrink-0">
              <ShieldCheck className="w-6 h-6 text-brand-400" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-brand-400 uppercase tracking-widest block">Strategic Framing</span>
              <p className="text-sm sm:text-base md:text-lg font-bold text-white leading-tight">
                The graph is a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-emerald-300">compounding data asset</span> — every ingested document makes the whole ecosystem exponentially smarter.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
