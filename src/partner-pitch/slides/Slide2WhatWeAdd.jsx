import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Mic, Target, TrendingUp, Puzzle } from 'lucide-react';

export function Slide2WhatWeAdd({ currentIndex = 1, totalSlides = 3 }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
  };

  const additions = [
    { icon: Mic, title: "A voice guide, not just a chat", desc: "People talk it through out loud, like coaching a colleague — easier and faster than typing prompts." },
    { icon: Target, title: "Tied to their real job", desc: "It teaches what actually matters for someone's role, KPIs, and goals — not generic content." },
    { icon: TrendingUp, title: "Makes it stick, for good", desc: "It checks real understanding and reminds people before they forget — so the knowledge stays sharp." },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-9 md:p-12 overflow-hidden select-none bg-gradient-to-br from-[#f8fafc] via-[#f0f7ff] to-[#e6f2fe] text-slate-800">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-b from-sky-400/25 via-blue-500/15 to-transparent blur-3xl rounded-full opacity-70" />
      </div>

      <motion.div initial="hidden" animate="visible" variants={itemVariants} className="relative z-10 flex items-center gap-3">
        <div className="flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-700 shadow-md border border-white">
          <Brain className="w-6 h-6 text-white" />
        </div>
        <span className="font-display font-bold tracking-tight text-slate-900 text-xl">
          HUMAN <span className="text-sky-600">OS</span>
        </span>
        <span className="text-xs uppercase font-mono px-2.5 py-0.5 rounded-full bg-sky-100 border border-sky-300 text-sky-800 font-bold tracking-wider ml-2">
          Slide {currentIndex + 1} of {totalSlides}
        </span>
      </motion.div>

      <div className="relative z-10 my-auto max-w-5xl mx-auto w-full flex flex-col items-center text-center gap-6">
        <motion.div initial="hidden" animate="visible" variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 border border-sky-300/80 text-sm font-bold text-sky-900 shadow-sm">
          <Puzzle className="w-4 h-4 text-sky-600" />
          <span>THE INCREMENT WE BRING TO YOUR PLATFORM</span>
        </motion.div>

        <motion.h1 initial="hidden" animate="visible" variants={itemVariants} className="text-2xl sm:text-4xl font-extrabold tracking-tight font-display text-slate-900 leading-tight max-w-3xl">
          You Make People Better at Talking to AI. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-indigo-700">
            We Make Them Better, Period.
          </span>
        </motion.h1>

        <motion.div initial="hidden" animate="visible" variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          {additions.map((a, idx) => (
            <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-white/90 border border-sky-200/90 shadow-md text-left flex flex-col gap-2">
              <div className="p-2 rounded-xl bg-sky-50 text-sky-600 border border-sky-100 w-fit">
                <a.icon className="w-5 h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900">{a.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </motion.div>

        <motion.p initial="hidden" animate="visible" variants={itemVariants} className="text-base sm:text-lg font-bold text-sky-800 max-w-3xl leading-relaxed">
          Together: your platform makes the AI conversation smoother. We make sure the person on the other end of
          that conversation actually knows what they're talking about — and keeps growing.
        </motion.p>
      </div>

      <div className="relative z-10 h-2" />
    </div>
  );
}
