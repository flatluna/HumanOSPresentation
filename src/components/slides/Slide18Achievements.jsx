import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Lock, Trophy, Flame, Target, ShieldCheck, Repeat2, Dices } from 'lucide-react';

export function Slide18Achievements({ slide, currentIndex = 17, totalSlides = 19 }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.02 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
  };

  const pillars = [
    { name: "Goals That Fit You", desc: "Milestones are set from your own learning plan, so every goal feels within reach — never too easy, never impossible.", icon: Target, color: "text-brand-400" },
    { name: "Surprise Bonuses", desc: "Random bonus rounds (up to 3x points) keep learning exciting instead of predictable.", icon: Dices, color: "text-purple-400" },
    { name: "Remembers What You Forget", desc: "The system notices when a skill is slipping from memory and rewards you for reviewing it before you lose it.", icon: Repeat2, color: "text-emerald-400" },
    { name: "Fair & Trustworthy", desc: "Every badge is earned once, tracked honestly, and never duplicated or gamed.", icon: ShieldCheck, color: "text-cyan-400" },
  ];

  const categories = [
    { name: "Effort", example: "First Lesson → Legend" },
    { name: "Progress", example: "Celebrates 25%, 50%, 75%, and 100% of any course you start" },
    { name: "Skills", example: "First Skill → Skill Master" },
    { name: "Quality", example: "Rewards for getting it right the first time, not just finishing" },
    { name: "Challenge", example: "Extra recognition for mastering the hardest, highest-stakes topics" },
    { name: "Habit", example: "Visible daily progress + a safety net if you miss a day" },
    { name: "Luck", example: "Land a random bonus round" },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-5 sm:p-7 md:p-9 lg:p-11 overflow-hidden select-none bg-navy-950">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[10%] w-[600px] h-[300px] bg-gradient-to-b from-indigo-500/20 via-brand-500/10 to-transparent blur-3xl rounded-full opacity-60" />
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
                Engagement Engine
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">Badges &amp; Rewards That Keep People Learning</p>
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

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 my-auto max-w-6xl mx-auto w-full flex-1 flex flex-col justify-between py-2 gap-3.5">
        <div className="text-center space-y-1.5">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-brand-500/30 text-sm sm:text-base font-bold text-brand-300 shadow-md">
            <Trophy className="w-5 h-5 text-amber-400" />
            <span>MY ACHIEVEMENTS: 24 BADGES, 7 CATEGORIES</span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-white">
            Learning That Feels Like <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-indigo-200 to-sky-300">Winning, Not Homework</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-sm sm:text-base text-slate-300 max-w-4xl mx-auto">
            24 badges that build real habits, real recall, and real motivation — tailored to each person's own goals.
          </motion.p>
        </div>

        {/* 4 Neuroscience Pillars */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {pillars.map((p, idx) => (
            <div key={idx} className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-md hover:border-brand-500/40 transition-all">
              <div className="flex items-center gap-2 mb-1.5">
                <p.icon className={"w-4 h-4 " + p.color} />
                <span className="text-xs font-bold text-white">{p.name}</span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* 7 Categories Strip */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
          {categories.map((c, idx) => (
            <div key={idx} className="px-2.5 py-2 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
              <div className="text-[10px] sm:text-xs font-mono font-bold text-brand-300 uppercase tracking-wide">{c.name}</div>
              <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-tight">{c.example}</div>
            </div>
          ))}
        </motion.div>

        {/* Takeaway Banner */}
        <motion.div variants={itemVariants} className="rounded-2xl bg-gradient-to-r from-brand-900 via-indigo-900 to-slate-900 border border-brand-500/30 p-3.5 sm:p-4 flex items-center gap-3.5 shadow-xl text-white">
          <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
            <Flame className="w-5 h-5 text-amber-300" />
          </div>
          <p className="text-xs sm:text-sm md:text-base font-bold leading-snug">
            Every badge is tuned to your own learning plan — <span className="text-brand-200">so it always feels achievable, never out of reach.</span>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
