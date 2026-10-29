const fs = require('fs');
const path = require('path');

const slidesDir = path.join(__dirname, 'src', 'components', 'slides');

function getHeader(problemTag, titleSub) {
  return `
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
                ${problemTag}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">${titleSub}</p>
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
            <span>Confidential · Seed Deck</span>
          </div>
        </div>
      </motion.div>
  `;
}

// Slide 1
const s1 = `import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, ShieldCheck, Cpu, Network, Zap, Activity, Lock, TrendingUp } from 'lucide-react';

export function Slide1Title({ slide, currentIndex = 0, totalSlides = 16 }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.03 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-5 sm:p-7 md:p-9 lg:p-11 overflow-hidden select-none bg-navy-950">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-brand-500/20 via-indigo-600/10 to-transparent blur-3xl rounded-full opacity-70" />
        <div className="absolute bottom-[-15%] right-[5%] w-[500px] h-[300px] bg-cyan-500/15 blur-3xl rounded-full opacity-50" />
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      </div>

      ${getHeader('System 1.0', 'The Cognitive Acceleration Platform')}

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 my-auto max-w-6xl mx-auto w-full flex-1 flex flex-col items-center justify-center text-center gap-5 lg:gap-6 py-2">
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-brand-500/30 text-sm sm:text-base font-bold text-brand-300 shadow-md">
          <Sparkles className="w-5 h-5 text-brand-400" />
          <span className="tracking-wide">INVESTOR MEMO · THE NEXT TRILLION-DOLLAR COGNITIVE PLATFORM</span>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-3 max-w-5xl">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-display text-white leading-tight">
            Human OS <span className="text-slate-500 font-light">—</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-brand-300">
              Turning Knowledge into Durable Mastery
            </span>
          </h1>

          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide italic text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-indigo-300 to-cyan-300">
              “Humans First. AI Agents Second.”
            </h2>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full max-w-4xl rounded-2xl glass-panel-glow p-5 sm:p-7 relative overflow-hidden text-left sm:text-center shadow-xl">
          <div className="flex items-center justify-center gap-2 mb-2 text-brand-400 text-xs sm:text-sm uppercase font-mono tracking-widest font-bold">
            <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
            Executive Value Proposition
          </div>

          <p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold text-slate-100 leading-snug">
            {slide.oneLiner}
          </p>

          <div className="mt-4 pt-4 border-t border-slate-700/60 flex flex-wrap items-center justify-center gap-3 text-sm sm:text-base text-slate-200">
            <span className="px-3.5 py-1.5 rounded-xl bg-slate-800/90 border border-slate-700 flex items-center gap-2 font-semibold">
              <Brain className="w-5 h-5 text-brand-400" />
              Active Synaptic Recall
            </span>
            <span className="px-3.5 py-1.5 rounded-xl bg-slate-800/90 border border-slate-700 flex items-center gap-2 font-semibold">
              <Cpu className="w-5 h-5 text-indigo-400" />
              1:1 Autonomous Agent Scaffolding
            </span>
            <span className="px-3.5 py-1.5 rounded-xl bg-slate-800/90 border border-slate-700 flex items-center gap-2 font-semibold">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              Anti-Atrophy Knowledge Encoding
            </span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl text-left">
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-brand-500/50 transition duration-300">
            <div className="flex items-center justify-between mb-2">
              <span className="p-2 rounded-xl bg-brand-500/15 text-brand-400 font-bold">
                <Brain className="w-5 h-5" />
              </span>
              <span className="text-xs font-mono text-slate-400 uppercase font-bold">Pillar 01</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-1">Human-Centric Retention</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Eliminates the illusion of learning. Spaced neuro-reinforcement ensures skills remain permanent.
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 transition duration-300">
            <div className="flex items-center justify-between mb-2">
              <span className="p-2 rounded-xl bg-indigo-500/15 text-indigo-400 font-bold">
                <Network className="w-5 h-5" />
              </span>
              <span className="text-xs font-mono text-slate-400 uppercase font-bold">Pillar 02</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-1">Agentic Scaffolding</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              AI acts as an intelligent sparring partner, adaptive Socratic coach, and diagnostic evaluator.
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 transition duration-300">
            <div className="flex items-center justify-between mb-2">
              <span className="p-2 rounded-xl bg-emerald-500/15 text-emerald-400 font-bold">
                <TrendingUp className="w-5 h-5" />
              </span>
              <span className="text-xs font-mono text-slate-400 uppercase font-bold">Pillar 03</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-1">Lifelong Mastery Graph</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Creates defensible, compounding personal cognitive capital for every enterprise and student.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
`;

// Slide 4
const s4 = `import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Lock, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export function Slide4Solution({ slide, currentIndex = 3, totalSlides = 16 }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.02 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-5 sm:p-7 md:p-9 lg:p-11 overflow-hidden select-none bg-navy-950">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-brand-500/20 via-indigo-600/10 to-transparent blur-3xl rounded-full opacity-60" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      </div>

      ${getHeader('The Paradigm Shift', 'Sovereign Cognitive Mastery')}

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 my-auto max-w-6xl mx-auto w-full flex-1 flex flex-col justify-between py-2 gap-4">
        <div className="text-center space-y-2">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-brand-500/30 text-sm sm:text-base font-bold text-brand-300 shadow-md">
            <Sparkles className="w-5 h-5 text-brand-400" />
            <span>THE COGNITIVE ACCELERATION PLATFORM</span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-display text-white">
            Human OS: <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-indigo-200 to-sky-300">Humans First. AI Agents Second.</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl text-slate-200 max-w-4xl mx-auto">
            We don't replace human cognition. We use autonomous AI agent swarms to train, test, and encode durable biological memory that compounds for life.
          </motion.p>
        </div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-lg flex flex-col justify-between">
            <div>
              <span className="px-3 py-1 rounded-lg bg-indigo-500/20 text-indigo-300 inline-block mb-3 font-mono text-xs sm:text-sm font-bold">01 · AUTONOMY</span>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Sovereign Judgment</h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Empowering humans to direct, audit, and command AI instead of passively trusting unverified outputs.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 text-sm sm:text-base font-semibold text-brand-400 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" /> Zero Atrophy
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-brand-950/40 border border-brand-500/40 shadow-xl flex flex-col justify-between">
            <div>
              <span className="px-3 py-1 rounded-lg bg-brand-500/20 text-brand-300 inline-block mb-3 font-mono text-xs sm:text-sm font-bold">02 · SCAFFOLDING</span>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Socratic AI Sparring</h3>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                Adaptive agent tutors that guide through targeted inquiry, refusal to spoon-feed, and personalized calibration.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-brand-500/30 text-sm sm:text-base font-semibold text-brand-300 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" /> 1:1 Mastery at Scale
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-lg flex flex-col justify-between">
            <div>
              <span className="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 inline-block mb-3 font-mono text-xs sm:text-sm font-bold">03 · COMPOUNDING</span>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Lifelong Knowledge Graph</h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Every concept connects to a personal, persistent neural map that predicts forgetting and preserves memory forever.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 text-sm sm:text-base font-semibold text-emerald-400 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" /> Verified Competence
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="rounded-2xl bg-gradient-to-r from-brand-950/95 via-indigo-950/90 to-slate-900/95 border border-brand-500/50 p-4 sm:p-5 flex items-center justify-between shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-2xl bg-brand-500/20 border border-brand-400/40 flex items-center justify-center text-brand-300 flex-shrink-0">
              <ShieldCheck className="w-6 h-6 text-brand-400" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-brand-400 uppercase tracking-widest block">Executive Thesis</span>
              <p className="text-base sm:text-lg md:text-xl font-bold text-white leading-tight">
                AI creates an abundance of intelligence. Human OS turns it into durable human capability.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
`;

// Slide 5
const s5 = `import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Lock, Compass, Sliders, Hourglass, ShieldCheck } from 'lucide-react';

export function Slide5WhatWeAreBuilding({ slide, currentIndex = 4, totalSlides = 16 }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.02 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-5 sm:p-7 md:p-9 lg:p-11 overflow-hidden select-none bg-navy-950">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[10%] w-[600px] h-[300px] bg-gradient-to-b from-brand-500/15 via-indigo-600/10 to-transparent blur-3xl rounded-full opacity-60" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      </div>

      ${getHeader('Product Architecture', 'Validated 1:1 Mastery Guide')}

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 my-auto max-w-6xl mx-auto w-full flex-1 flex flex-col justify-between py-2 gap-4">
        <div className="text-center space-y-1.5">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-brand-500/30 text-sm sm:text-base font-bold text-brand-300 shadow-md">
            <Sparkles className="w-5 h-5 text-brand-400" />
            <span>WHAT WE'RE BUILDING</span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-display text-white">
            A Trustworthy 1:1 Guide that Produces <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-indigo-200 to-emerald-300">Validated Mastery</span>
          </motion.h1>
        </div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-3">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">1. Plans a Path With You</h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                From your personal goal <em>and</em>, in enterprise, from your job description, KPIs, and performance review weaknesses. <strong className="text-white">The path is your career, not a catalog.</strong>
              </p>
            </div>
            <div className="mt-4 py-1.5 px-3 rounded-lg bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-400 font-mono font-semibold">
              Role & KPI-Aligned Roadmaps
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-brand-950/30 border border-brand-500/40 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-brand-500/20 border border-brand-500/40 flex items-center justify-center text-brand-300 mb-3">
                <Sliders className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">2. Adapts to How You Learn</h3>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                Dynamically tunes pace, analogies, real-world scenario difficulty, and depth. Generates tailored Socratic cues based on real-time comprehension.
              </p>
            </div>
            <div className="mt-4 py-1.5 px-3 rounded-lg bg-brand-950/80 border border-brand-500/30 text-xs sm:text-sm text-brand-300 font-mono font-semibold">
              Hyper-Personalized Pedagogy
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3">
                <Hourglass className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">3. Stays With You</h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Patiently, until you've actually <em>mastered</em> the skill, not just finished a video or ticked a checkbox. Continuous spaced retention reviews forever.
              </p>
            </div>
            <div className="mt-4 py-1.5 px-3 rounded-lg bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-400 font-mono font-semibold">
              Guaranteed Durable Memory
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/80 to-brand-950/90 border border-brand-500/40 p-4 sm:p-5 flex items-center justify-between shadow-xl">
          <div className="flex items-center gap-4">
            <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 flex-shrink-0">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block">
                OUR UNIQUE FOUNDATION
              </span>
              <p className="text-sm sm:text-base md:text-lg font-semibold text-white leading-snug">
                Built on a <span className="text-brand-300 font-bold">Knowledge Graph + Grounded Facts</span> — the AI tutor can <span className="text-emerald-300 font-bold">never hallucinate</span> and never lets you skip the hard part.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
`;

// Slide 6
const s6 = `import React from 'react';
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

      ${getHeader('Pedagogical Core', 'The Atomic Unit of Learning')}

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
                <div key={idx} className={\`p-4 sm:p-5 rounded-2xl bg-slate-900/90 border \${step.border} flex flex-col justify-between relative shadow-lg\`}>
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={\`w-8 h-8 rounded-lg \${step.bg} \${step.color} flex items-center justify-center font-mono text-sm font-bold\`}>
                        {step.num}
                      </span>
                      <Icon className={\`w-5 h-5 \${step.color}\`} />
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
`;

fs.writeFileSync(path.join(slidesDir, 'Slide1Title.jsx'), s1);
fs.writeFileSync(path.join(slidesDir, 'Slide4Solution.jsx'), s4);
fs.writeFileSync(path.join(slidesDir, 'Slide5WhatWeAreBuilding.jsx'), s5);
fs.writeFileSync(path.join(slidesDir, 'Slide6Engram.jsx'), s6);
console.log('Updated Slide 1, 4, 5, 6 with large fonts');
