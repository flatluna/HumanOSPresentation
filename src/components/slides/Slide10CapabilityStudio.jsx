import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Lock, Factory, FileText, Network, CheckCircle, Video, Mic } from 'lucide-react';

export function Slide10CapabilityStudio({ slide, currentIndex = 9, totalSlides = 16 }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.02 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
  };

  const agents = [
    { name: "Curador", desc: "PDF/Doc Ingestion", icon: FileText, color: "text-indigo-400" },
    { name: "Graph Architect", desc: "DAG Synthesis", icon: Network, color: "text-brand-400" },
    { name: "Facts Extractor", desc: "Factuals & Truth", icon: CheckCircle, color: "text-emerald-400" },
    { name: "Experience Designer", desc: "5-Step Blueprint", icon: Sparkles, color: "text-purple-400" },
    { name: "Video / Media", desc: "Visual Clips", icon: Video, color: "text-rose-400" },
    { name: "Tutor Agent", desc: "Voice 1:1 Engine", icon: Mic, color: "text-cyan-400" },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-5 sm:p-7 md:p-9 lg:p-11 overflow-hidden select-none bg-navy-950">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[10%] w-[600px] h-[300px] bg-gradient-to-b from-indigo-500/20 via-brand-500/10 to-transparent blur-3xl rounded-full opacity-60" />
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
                Content Factory
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">Autonomous Multi-Agent Generation</p>
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
            <span>CAPABILITY STUDIO: THE AI COURSE FACTORY</span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-display text-white">
            We Turn a 300-Page PDF into a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-indigo-200 to-sky-300">Full Graph Curriculum</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-sm sm:text-base md:text-lg text-slate-200 max-w-4xl mx-auto">
            Autonomous multi-agent pipeline: from raw unstructured enterprise manuals to production-ready 1:1 Guided Discovery courses.
          </motion.p>
        </div>

        <motion.div variants={itemVariants} className="space-y-2">
          <div className="text-sm sm:text-base font-mono font-bold text-brand-300 uppercase tracking-wider px-2">
            Autonomous Multi-Agent Pipeline
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {agents.map((ag, idx) => {
              const Icon = ag.icon;
              return (
                <div key={idx} className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-slate-500 font-bold">0{idx + 1}</span>
                    <Icon className={`w-5 h-5 ${ag.color}`} />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white">{ag.name}</h4>
                  <p className="text-xs text-slate-400 leading-snug mt-1">{ag.desc}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-lg">
            <h4 className="text-base sm:text-lg font-bold text-white mb-1">Strict Syllabus Mode</h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              Respects the exact index, chapters, and regulatory structure of compliance manuals and legal codes.
            </p>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-brand-950/30 border border-brand-500/40 shadow-xl">
            <h4 className="text-base sm:text-lg font-bold text-brand-200 mb-1">Cognitive Complexity Mode</h4>
            <p className="text-sm text-slate-200 leading-relaxed">
              Reorganizes dense concepts into optimal prerequisite DAG order based on cognitive load theory.
            </p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="rounded-2xl bg-gradient-to-r from-brand-950/95 via-indigo-950/90 to-slate-900/95 border border-brand-500/50 p-4 sm:p-5 flex items-center justify-between shadow-xl">
          <div className="flex items-center gap-4">
            <Factory className="w-6 h-6 text-brand-400 flex-shrink-0" />
            <div>
              <span className="text-xs font-mono font-bold text-brand-400 uppercase tracking-widest block">Strategic Framing</span>
              <p className="text-sm sm:text-base md:text-lg font-bold text-white leading-tight">
                Content supply is our marginal cost — <span className="text-emerald-300">and it is near zero.</span>
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
