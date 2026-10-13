import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Lock, Target } from 'lucide-react';

export function Slide15BusinessModel({ slide, currentIndex = 14, totalSlides = 16 }) {
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
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-emerald-500/15 via-indigo-600/10 to-transparent blur-3xl rounded-full opacity-60" />
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
                Market Opportunity
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">TAM & Monetization Mechanics</p>
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
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-sm sm:text-base font-bold text-emerald-300 shadow-md">
            <Sparkles className="w-5 h-5 text-emerald-400" />
            <span>MARKET & BUSINESS MODEL</span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-display text-white">
            Capturing a <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-brand-200 to-sky-300">$360B+ Enterprise L&D Market</span>
          </motion.h1>
        </div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-4 gap-3.5 items-stretch">
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-lg flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-indigo-500/20 text-indigo-300 font-bold block w-fit mb-2">B2C ACADEMY</span>
              <h4 className="text-base sm:text-lg font-bold text-white mb-1">Prosumer Subscriptions</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">Monthly & annual subscriptions for individual career mastery.</p>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-brand-950/30 border border-brand-500/40 shadow-xl flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-brand-500/20 text-brand-300 font-bold block w-fit mb-2">B2B ENTERPRISE</span>
              <h4 className="text-base sm:text-lg font-bold text-white mb-1">Per-Seat SaaS Licenses</h4>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">Highest-value wedge: corporate seats tied directly to the HR Performance Loop.</p>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-lg flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-purple-500/20 text-purple-300 font-bold block w-fit mb-2">CAPABILITY STUDIO</span>
              <h4 className="text-base sm:text-lg font-bold text-white mb-1">Course Factory API</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">Enterprise volume pricing for turning internal PDF repositories into courses.</p>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-lg flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 font-bold block w-fit mb-2">PUBLIC / NGO</span>
              <h4 className="text-base sm:text-lg font-bold text-white mb-1">Institutional Licensing</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">Workforce development grants & government reskilling initiatives.</p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="p-4 sm:p-5 rounded-2xl bg-slate-950/90 border border-slate-800 flex items-center justify-between gap-3.5">
          <div className="flex items-center gap-3">
            <Target className="w-5 h-5 text-brand-400 flex-shrink-0" />
            <span className="text-sm sm:text-base text-slate-200 font-medium">
              <strong className="text-white">Beachhead Wedge:</strong> High-stakes compliance, legal, financial, and mission-critical technical certifications where error costs are catastrophic.
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
