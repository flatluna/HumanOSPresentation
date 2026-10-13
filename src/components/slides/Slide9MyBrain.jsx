import React from 'react';
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
    <div className="relative w-full h-full flex flex-col justify-between p-5 sm:p-7 md:p-9 lg:p-11 overflow-hidden select-none bg-navy-950">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-brand-500/20 via-indigo-600/15 to-transparent blur-3xl rounded-full opacity-70" />
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
                Live Telemetry
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">Real-Time Neural Strength Telemetry</p>
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
            <span>REAL-TIME COGNITIVE RETENTION TELEMETRY</span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-display text-white">
            “My Brain”: <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-indigo-200 to-sky-300">Mastery You Can See</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-sm sm:text-base md:text-lg text-slate-200 max-w-4xl mx-auto">
            We don't track <em>completion</em>. We track <strong className="text-white">memory strength in real time</strong>.
          </motion.p>
        </div>

        <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 items-stretch">
          {neurons.map((n, idx) => (
            <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-lg flex flex-col items-center text-center justify-between relative overflow-hidden">
              <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 ${n.ring} flex flex-col items-center justify-center my-2 bg-slate-950/80 shadow-inner`}>
                <span className="text-xl sm:text-2xl font-extrabold font-mono text-white leading-none">{n.pct}%</span>
                <span className="text-xs font-mono text-slate-400 uppercase mt-1">Recall</span>
              </div>
              <h4 className="text-sm sm:text-base font-bold text-white mt-1 line-clamp-1">{n.label}</h4>
              <span className={`mt-2 text-xs font-mono font-bold px-3 py-1 rounded-full border ${n.badge}`}>
                {n.pct >= 90 && <Zap className="w-3.5 h-3.5 inline mr-1 text-emerald-400" />}
                {n.status}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="rounded-2xl bg-slate-950/95 border border-brand-500/50 p-4 sm:p-5 flex items-center justify-between gap-4 shadow-inner">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-brand-500/20 text-brand-300 border border-brand-400/40 flex-shrink-0">
              <BookOpen className="w-6 h-6 text-brand-300" />
            </div>
            <div className="text-left">
              <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-brand-300">
                SCIENTIFIC CREDIBILITY ANCHOR · WIXTED & EBBESEN (1991)
              </span>
              <p className="text-sm sm:text-base text-slate-200 font-medium mt-0.5">
                Built on mathematically modeled memory decay curves combining <em>days-since-review + review-frequency</em>.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="rounded-2xl bg-gradient-to-r from-brand-950/95 via-indigo-950/90 to-slate-900/95 border border-brand-500/50 p-4 sm:p-5 flex items-center justify-between shadow-xl">
          <div className="flex items-center gap-3">
            <Quote className="w-6 h-6 text-brand-400 flex-shrink-0" />
            <p className="text-sm sm:text-base md:text-lg font-bold text-white italic">
              “Coursera tells you a course is finished. We tell you exactly what a person will still remember next Tuesday — and when to intervene.”
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
