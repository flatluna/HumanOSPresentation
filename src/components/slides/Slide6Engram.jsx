import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Lock, HelpCircle, BookOpen, Repeat, PlayCircle, Award, ShieldCheck } from 'lucide-react';

export function Slide6Engram({ slide, currentIndex = 5, totalSlides = 16 }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.02 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
  };

  const steps = [
    { num: "01", title: "Hypothesis", desc: "Predict first; prediction errors prime neural plasticity.", icon: HelpCircle, color: "text-amber-400", bg: "bg-amber-500/15", border: "border-amber-500/30" },
    { num: "02", title: "Teaching", desc: "Deep conceptual breakdown & multi-modal analogies.", icon: BookOpen, color: "text-indigo-400", bg: "bg-indigo-500/15", border: "border-indigo-500/30" },
    { num: "03", title: "Recall", desc: "Retrieve unassisted from memory (active neural firing).", icon: Repeat, color: "text-brand-400", bg: "bg-brand-500/15", border: "border-brand-500/30" },
    { num: "04", title: "Production", desc: "Apply directly to a high-stakes real-world scenario.", icon: PlayCircle, color: "text-purple-400", bg: "bg-purple-500/15", border: "border-purple-500/30" },
    { num: "05", title: "Assessment", desc: "Autonomous AI-scored diagnostic mastery evaluation.", icon: Award, color: "text-emerald-400", bg: "bg-emerald-500/15", border: "border-emerald-500/30" },
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
                Pedagogical Core
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">The Atomic Unit of Learning</p>
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
            <span>NEUROSCIENCE-GROUNDED ATOMIC ARCHITECTURE</span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-display text-white">
            The Engram: <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-indigo-200 to-sky-300">Our Atomic Unit</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-sm sm:text-base md:text-lg text-slate-200 max-w-4xl mx-auto leading-relaxed">
            In neuroscience, an <em>engram</em> is the physical trace memory leaves in the brain. In Human OS, an <strong className="text-white">Engram is one concept actively retrieved, practiced, and consolidated</strong> — not a video watched or a checkbox ticked.
          </motion.p>
        </div>

        <motion.div variants={itemVariants} className="space-y-2">
          <div className="flex items-center justify-between px-2">
            <span className="text-sm sm:text-base font-mono font-bold text-brand-300 uppercase tracking-wider">
              The 5-Step Cognitive Contract
            </span>
            <span className="text-xs sm:text-sm font-mono text-slate-400">Deterministic Pedagogical State Machine</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className={`p-4 sm:p-5 rounded-2xl bg-slate-900/90 border ${step.border} flex flex-col justify-between relative shadow-lg`}>
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`w-8 h-8 rounded-lg ${step.bg} ${step.color} flex items-center justify-center font-mono text-sm font-bold`}>
                        {step.num}
                      </span>
                      <Icon className={`w-5 h-5 ${step.color}`} />
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white mb-1.5">{step.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-snug">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="rounded-2xl bg-gradient-to-r from-brand-950/95 via-indigo-950/90 to-slate-900/95 border border-brand-500/50 p-3.5 sm:p-4 flex items-center justify-between shadow-xl">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-brand-500/20 border border-brand-400/40 flex items-center justify-center text-brand-300 flex-shrink-0">
              <ShieldCheck className="w-6 h-6 text-brand-400" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-brand-400 uppercase tracking-widest block">Core Takeaway</span>
              <p className="text-sm sm:text-base md:text-lg font-bold text-white leading-tight">
                Every unit of learning is engineered around memory science, not content delivery.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
