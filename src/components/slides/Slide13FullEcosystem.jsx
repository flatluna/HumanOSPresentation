import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Lock, Building2, User, Factory, HeartHandshake, Globe } from 'lucide-react';

export function Slide13FullEcosystem({ slide, currentIndex = 12, totalSlides = 16 }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.02 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
  };

  const products = [
    { title: "Engram Academy", role: "Self-learners & Prosumers (B2C)", icon: User, tag: "B2C Consumer" },
    { title: "Human OS Employee", role: "Corporate training portals & skill paths", icon: Building2, tag: "B2B Workforce" },
    { title: "Human OS Enterprise", role: "HR Org charts, KPIs, AI career roadmaps", icon: Globe, tag: "Enterprise L&D" },
    { title: "Capability Studio", role: "Multi-agent course-generation factory", icon: Factory, tag: "Content Platform" },
    { title: "NGO Automate", role: "Community & non-profit workforce upskilling", icon: HeartHandshake, tag: "Public / NGO" },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-5 sm:p-7 md:p-9 lg:p-11 overflow-hidden select-none bg-navy-950">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-brand-500/15 via-indigo-600/10 to-transparent blur-3xl rounded-full opacity-60" />
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
                Platform Breadth
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">Multi-Market Expansion Engine</p>
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
            <span>THE FULL PLATFORM ECOSYSTEM</span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-display text-white">
            One Core Engine, <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-indigo-200 to-sky-300">Multiple High-Margin Markets</span>
          </motion.h1>
        </div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 items-stretch">
          {products.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-lg flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-brand-300 font-bold uppercase block w-fit mb-3">
                    {p.tag}
                  </span>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-5 h-5 text-brand-400" />
                    <h4 className="text-base sm:text-lg font-bold text-white">{p.title}</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-snug">{p.role}</p>
                </div>
              </div>
            );
          })}
        </motion.div>

        <motion.div variants={itemVariants} className="rounded-2xl bg-gradient-to-r from-brand-950/95 via-indigo-950/90 to-slate-900/95 border border-brand-500/50 p-4 sm:p-5 flex items-center justify-between shadow-xl">
          <p className="text-sm sm:text-base md:text-lg font-bold text-white leading-tight">
            Takeaway: One single cognitive engine powers <span className="text-brand-300">B2C subscriptions</span>, <span className="text-indigo-300">Enterprise seat licenses</span>, and <span className="text-emerald-300">Public-sector workforce reskilling</span>.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
