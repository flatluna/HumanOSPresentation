import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, MessageSquareWarning } from 'lucide-react';

export function Slide1TheGap({ currentIndex = 0, totalSlides = 3 }) {
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
          <MessageSquareWarning className="w-4 h-4 text-sky-600" />
          <span>YOU'VE SOLVED HOW TO TALK TO AI</span>
        </motion.div>

        <motion.h1 initial="hidden" animate="visible" variants={itemVariants} className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display text-slate-900 leading-tight">
          But What Happens Before Someone Even Opens the Prompt Box?
        </motion.h1>

        <motion.p initial="hidden" animate="visible" variants={itemVariants} className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
          Your platform teaches people how to communicate with AI — great prompts, safe guardrails, better outputs.
          But a great prompt is only as good as the knowledge behind it. If someone doesn't truly understand their
          own job, their numbers, or their craft, no amount of coaching on "how to talk to AI" will fix that gap.
        </motion.p>

        <motion.p initial="hidden" animate="visible" variants={itemVariants} className="text-base sm:text-lg font-bold text-sky-800 max-w-3xl leading-relaxed">
          You've built the translator between humans and AI. We build the human side of that equation —
          making sure the knowledge people bring to the conversation is real, current, and sticks.
        </motion.p>
      </div>

      <div className="relative z-10 h-2" />
    </div>
  );
}
