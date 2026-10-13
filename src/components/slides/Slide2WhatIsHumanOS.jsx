import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Lock, MessageCircle, Target, TrendingUp, Zap } from 'lucide-react';

export function Slide2WhatIsHumanOS({ slide, currentIndex = 2, totalSlides = 21 }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.02 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 6 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
  };

  const steps = [
    { icon: MessageCircle, title: "Talks to you like a real person", desc: "A patient voice guide who explains things in plain language, one-on-one, whenever you need it." },
    { icon: Target, title: "Focused on your actual job", desc: "It knows your role and your goals, so what you learn connects directly to your work — not generic lessons." },
    { icon: Zap, title: "Learn faster, get smarter", desc: "You pick up new skills quicker and understand them more deeply than passive videos or reading ever could." },
    { icon: TrendingUp, title: "Makes sure it actually sticks", desc: "It checks that you really understood, and reminds you of what you might forget, so the learning lasts." },
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
                In Plain Words
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">What Is Human OS?</p>
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
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 my-auto max-w-6xl mx-auto w-full flex-1 flex flex-col justify-between py-1 gap-4">

        <div className="text-center space-y-1.5">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-300/80 text-xs sm:text-sm font-bold text-sky-900 shadow-sm">
            <Sparkles className="w-4 h-4 text-sky-600" />
            <span>MAXIMIZING HUMAN POTENTIAL. NO JARGON. JUST WHAT IT DOES.</span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-base sm:text-xl md:text-2xl font-extrabold tracking-tight font-display text-slate-900 leading-tight">
            Human OS Is Your Personal Growth Partner <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-indigo-700">
              Better at Your Job. Smarter. Faster to Learn. Built to Last.
            </span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wide">
            Humans First. AI Agents Second.
          </motion.p>
        </div>

        {/* 4 Simple Advantages */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-3 items-stretch">
          {steps.map((s, idx) => (
            <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-white/90 border border-sky-200/90 shadow-md shadow-sky-900/5 flex flex-col gap-2">
              <div className="p-2 rounded-xl bg-sky-50 text-sky-600 border border-sky-100 w-fit">
                <s.icon className="w-5 h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900">{s.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* One-Sentence Takeaway */}
        <motion.div variants={itemVariants} className="rounded-2xl bg-gradient-to-r from-sky-800 via-blue-900 to-indigo-900 border border-sky-400/30 p-3.5 sm:p-4 flex items-center justify-center shadow-xl text-white text-center">
          <p className="text-sm sm:text-base md:text-lg font-bold leading-snug max-w-4xl">
            In one sentence: <span className="text-sky-200">we don't build an AI agent to replace you — we make you smarter, so you grow in your career, hit your goals, and work best with your AI tools, with real impact for you and your company.</span>
          </p>
        </motion.div>

      </motion.div>
    </div>
  );
}
