import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Lock, Trophy, Building2, DollarSign } from 'lucide-react';

export function Slide23MarketingValue({ slide, currentIndex = 22, totalSlides = 23 }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.02 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 6 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
  };

  const advantages = [
    "The only one with the graph, the facts, and real-time voice already built — not promised",
    "Learning is proven to work: research-backed methods that move people into the top tier of performance",
    "Content creation cost is near zero, so we can grow fast without growing expenses",
  ];

  const businessValue = [
    { metric: "$360B+", label: "Market we can capture", desc: "Corporate training spend redirected into a measurable business driver." },
    { metric: "1 Loop", label: "Training tied to KPIs", desc: "Every learning hour maps to real objectives, coaching, and performance reviews." },
    { metric: "~1,000x", label: "Cheaper content", desc: "New courses generated automatically, instead of costly video production." },
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
                Marketing Summary 2/2
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">Our Advantage & The Value to Businesses</p>
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
            <span>Marketing Deck</span>
          </div>
        </div>
      </motion.div>

      {/* MAIN STAGE */}
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 my-auto max-w-6xl mx-auto w-full flex-1 flex flex-col justify-between py-1 gap-3">

        {/* Our Advantage */}
        <motion.div variants={itemVariants} className="rounded-2xl bg-white/90 border border-sky-200/90 shadow-md shadow-sky-900/5 p-3.5 sm:p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 rounded-lg bg-sky-50 text-sky-600 border border-sky-100"><Trophy className="w-4 h-4" /></div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900">Our Advantage</h3>
          </div>
          <div className="space-y-1.5">
            {advantages.map((a, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                <Sparkles className="w-3.5 h-3.5 text-sky-500 mt-0.5 flex-shrink-0" />
                <span>{a}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Value to Businesses */}
        <motion.div variants={itemVariants} className="rounded-2xl bg-white/90 border border-sky-300 shadow-md shadow-sky-900/5 p-3.5 sm:p-4 ring-1 ring-sky-400/20">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-100"><Building2 className="w-4 h-4" /></div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900">The Value to Businesses</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {businessValue.map((b, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <span className="text-lg sm:text-xl font-extrabold text-indigo-700 font-mono flex-shrink-0 leading-none pt-0.5">{b.metric}</span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">{b.label}</h4>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-snug">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Closing Banner */}
        <motion.div variants={itemVariants} className="rounded-2xl bg-gradient-to-r from-sky-800 via-blue-900 to-indigo-900 border border-sky-400/30 p-3 sm:p-4 flex items-center justify-center shadow-xl text-white text-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center text-white flex-shrink-0 shadow-inner">
              <DollarSign className="w-5 h-5 text-sky-200" />
            </div>
            <p className="text-sm sm:text-base font-bold text-white leading-tight">
              Stronger humans build stronger businesses — <span className="text-sky-200">one compounding loop, proven and ready to scale.</span>
            </p>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
