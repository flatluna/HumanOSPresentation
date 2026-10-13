import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Handshake, ArrowRight, Mail } from 'lucide-react';

export function Slide3TheAsk({ currentIndex = 2, totalSlides = 3 }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
  };

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

      <div className="relative z-10 my-auto max-w-4xl mx-auto w-full flex flex-col items-center text-center gap-6">
        <motion.div initial="hidden" animate="visible" variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 border border-sky-300/80 text-sm font-bold text-sky-900 shadow-sm">
          <Handshake className="w-4 h-4 text-sky-600" />
          <span>LET'S CLOSE THE LOOP TOGETHER</span>
        </motion.div>

        <motion.h1 initial="hidden" animate="visible" variants={itemVariants} className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-slate-900 leading-tight">
          You Handle "How to Work With AI." <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-indigo-700">
            We Handle "How to Actually Get Better."
          </span>
        </motion.h1>

        <motion.p initial="hidden" animate="visible" variants={itemVariants} className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
          Put together, a workforce goes through your assessment and coaching to use AI well, and grows through Human OS
          to keep getting genuinely smarter at their actual job. One partner, one story: <strong className="text-slate-900">people who know
          their craft, and know how to use AI to do it even better.</strong>
        </motion.p>

        <motion.div initial="hidden" animate="visible" variants={itemVariants} className="flex items-center gap-2 text-lg font-bold text-sky-800">
          <span>Let's run a joint pilot</span>
          <ArrowRight className="w-5 h-5" />
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={itemVariants} className="mt-2 text-sm font-mono text-slate-500 flex items-center gap-2">
          <Mail className="w-4 h-4" />
          <span>Jorge Perez Luna · jorge@humanos.ai</span>
        </motion.div>
      </div>

      <div className="relative z-10 h-2" />
    </div>
  );
}
