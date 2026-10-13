import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Lock, Layers, Network, Database, Mic, Video, Users, ArrowRight } from 'lucide-react';

export function Slide5ProductDetails({ slide, currentIndex = 4, totalSlides = 18 }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.02 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 6 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
  };

  const upcoming = [
    { icon: Users, title: "What We're Building", desc: "The 1:1 guide, product pillars & foundation" },
    { icon: Layers, title: "The Engram", desc: "The atomic unit of mastery & 5-step contract" },
    { icon: Network, title: "The Knowledge Graph", desc: "Non-linear mastery, not a video playlist" },
    { icon: Database, title: "Factuals", desc: "Zero-hallucination grounded truth units" },
    { icon: Mic, title: "The Voice Agent", desc: "Real-time 360° Guided Discovery tutoring" },
    { icon: Video, title: "Capability Studio", desc: "The autonomous AI course factory" },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-9 overflow-hidden select-none bg-gradient-to-br from-[#f8fafc] via-[#f0f7ff] to-[#e6f2fe] text-slate-800">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[750px] h-[340px] bg-gradient-to-b from-sky-400/25 via-blue-500/15 to-transparent blur-3xl rounded-full opacity-70" />
        <div className="absolute bottom-[-15%] right-[5%] w-[500px] h-[300px] bg-cyan-400/20 blur-3xl rounded-full opacity-60" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: 'linear-gradient(to right, #0284c7 1px, transparent 1px), linear-gradient(to bottom, #0284c7 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* TOP HEADER */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex items-center justify-between border-b border-sky-200/80 pb-2.5 sm:pb-3 flex-shrink-0"
      >
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-700 shadow-md shadow-sky-500/30 border border-white">
            <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-white animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2.5">
              <span className="font-display font-bold tracking-tight text-slate-900 text-base sm:text-xl">
                HUMAN <span className="text-sky-600">OS</span>
              </span>
              <span className="text-xs sm:text-sm uppercase font-mono px-2.5 py-0.5 rounded-full bg-sky-100 border border-sky-300 text-sky-800 font-bold tracking-wider">
                Section Break
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">Product Details</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/90 border border-sky-200 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500"></span>
            </span>
            <span className="font-mono text-xs sm:text-base font-bold tracking-wider text-sky-900">
              SLIDE {String(currentIndex + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-slate-200 text-xs sm:text-sm text-slate-700 font-medium shadow-sm">
            <Lock className="w-4 h-4 text-sky-600" />
            <span>Executive Briefing</span>
          </div>
        </div>
      </motion.div>

      {/* MAIN STAGE */}
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 my-auto max-w-6xl mx-auto w-full flex-1 flex flex-col justify-center items-center text-center gap-5">

        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-300/80 text-xs sm:text-sm font-bold text-sky-900 shadow-sm">
          <Sparkles className="w-4 h-4 text-sky-600" />
          <span>THE EXECUTIVE SUMMARY IS COMPLETE</span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-display text-slate-900 leading-tight max-w-4xl">
          Now, Let's Go <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-indigo-700">
            Under the Hood
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl leading-relaxed">
          The following slides walk through exactly how Human OS is built — the product, the pedagogy, and the technology that make the Impact on Slide 4 real.
        </motion.p>

        {/* Upcoming Topics Preview Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-4xl">
          {upcoming.map((u, idx) => {
            const Icon = u.icon;
            return (
              <div key={idx} className="p-3 sm:p-3.5 rounded-2xl bg-white/90 border border-sky-200/90 shadow-md shadow-sky-900/5 flex flex-col items-start text-left gap-1.5">
                <div className="p-1.5 rounded-lg bg-sky-50 text-sky-600 border border-sky-100">
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">{u.title}</h4>
                <p className="text-[10px] sm:text-[11px] text-slate-600 leading-snug">{u.desc}</p>
              </div>
            );
          })}
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-center gap-2 text-sm sm:text-base font-bold text-sky-800">
          <span>Let's dive in</span>
          <ArrowRight className="w-4 h-4" />
        </motion.div>

      </motion.div>
    </div>
  );
}
