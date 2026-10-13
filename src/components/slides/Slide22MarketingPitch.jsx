import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Lock, AlertTriangle, MessageCircle, Cpu } from 'lucide-react';

export function Slide22MarketingPitch({ slide, currentIndex = 21, totalSlides = 23 }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.02 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 6 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
  };

  const howWeDoIt = [
    "A voice guide that talks with you, one-on-one, whenever you need it",
    "Grounded in verified facts, so it never makes things up",
    "Tied to your real role and goals, not generic lessons",
    "Built-in habits and rewards so the learning actually sticks",
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
                Marketing Summary 1/2
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">The Problem, Our Pitch, How We Do It</p>
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

        {/* Problem */}
        <motion.div variants={itemVariants} className="rounded-2xl bg-white/90 border border-rose-200 shadow-md shadow-rose-900/5 p-3.5 sm:p-4">
          <div className="flex items-center gap-2 mb-1.5">
            <div className="p-1.5 rounded-lg bg-rose-50 text-rose-600 border border-rose-100"><AlertTriangle className="w-4 h-4" /></div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900">The Problem We Solve</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            AI is making people mentally lazier, not smarter — and old-school classrooms and video courses were never built to make knowledge truly stick. Employees end up less capable, not more, while companies can't prove their training budget actually moves the business.
          </p>
        </motion.div>

        {/* Our Pitch */}
        <motion.div variants={itemVariants} className="rounded-2xl bg-gradient-to-r from-sky-800 via-blue-900 to-indigo-900 border border-sky-400/30 p-3.5 sm:p-4 shadow-xl text-white">
          <div className="flex items-center gap-2 mb-1.5">
            <div className="p-1.5 rounded-lg bg-white/15 text-sky-200 border border-white/20"><MessageCircle className="w-4 h-4" /></div>
            <span className="text-xs font-mono font-bold text-sky-300 uppercase tracking-widest">Our Pitch</span>
          </div>
          <p className="text-sm sm:text-base md:text-lg font-bold leading-snug">
            Human OS is a personal growth partner that makes people genuinely smarter and better at their jobs — <span className="text-sky-200">not an AI agent that thinks for them, but one that grows them.</span>
          </p>
        </motion.div>

        {/* How We Do It */}
        <motion.div variants={itemVariants} className="rounded-2xl bg-white/90 border border-sky-200/90 shadow-md shadow-sky-900/5 p-3.5 sm:p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 rounded-lg bg-sky-50 text-sky-600 border border-sky-100"><Cpu className="w-4 h-4" /></div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900">How We Do It</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {howWeDoIt.map((h, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                <Sparkles className="w-3.5 h-3.5 text-sky-500 mt-0.5 flex-shrink-0" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
