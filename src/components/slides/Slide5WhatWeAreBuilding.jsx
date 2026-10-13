import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Lock, Compass, Sliders, Hourglass, ShieldCheck } from 'lucide-react';

export function Slide5WhatWeAreBuilding({ slide, currentIndex = 4, totalSlides = 16 }) {
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
        <div className="absolute top-[-10%] right-[10%] w-[600px] h-[300px] bg-gradient-to-b from-brand-500/15 via-indigo-600/10 to-transparent blur-3xl rounded-full opacity-60" />
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
                Product Architecture
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">Validated 1:1 Mastery Guide</p>
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
            <span>WHAT WE'RE BUILDING</span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-display text-white">
            A Trustworthy 1:1 Guide that Produces <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-indigo-200 to-emerald-300">Validated Mastery</span>
          </motion.h1>
        </div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-3">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">1. Plans a Path With You</h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                From your personal goal <em>and</em>, in enterprise, from your job description, KPIs, and performance review weaknesses. <strong className="text-white">The path is your career, not a catalog.</strong>
              </p>
            </div>
            <div className="mt-4 py-1.5 px-3 rounded-lg bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-400 font-mono font-semibold">
              Role & KPI-Aligned Roadmaps
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-brand-950/30 border border-brand-500/40 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-brand-500/20 border border-brand-500/40 flex items-center justify-center text-brand-300 mb-3">
                <Sliders className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">2. Adapts to How You Learn</h3>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                Dynamically tunes pace, analogies, real-world scenario difficulty, and depth. Generates tailored Guided Discovery cues based on real-time comprehension.
              </p>
            </div>
            <div className="mt-4 py-1.5 px-3 rounded-lg bg-brand-950/80 border border-brand-500/30 text-xs sm:text-sm text-brand-300 font-mono font-semibold">
              Hyper-Personalized Pedagogy
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3">
                <Hourglass className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">3. Stays With You</h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Patiently, until you've actually <em>mastered</em> the skill, not just finished a video or ticked a checkbox. Continuous spaced retention reviews forever.
              </p>
            </div>
            <div className="mt-4 py-1.5 px-3 rounded-lg bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-400 font-mono font-semibold">
              Guaranteed Durable Memory
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/80 to-brand-950/90 border border-brand-500/40 p-4 sm:p-5 flex items-center justify-between shadow-xl">
          <div className="flex items-center gap-4">
            <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 flex-shrink-0">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block">
                OUR UNIQUE FOUNDATION
              </span>
              <p className="text-sm sm:text-base md:text-lg font-semibold text-white leading-snug">
                Built on a <span className="text-brand-300 font-bold">Knowledge Graph + Grounded Facts</span> — the AI tutor can <span className="text-emerald-300 font-bold">never hallucinate</span> and never lets you skip the hard part.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
