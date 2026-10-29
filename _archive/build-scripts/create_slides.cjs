const fs = require('fs');
const path = require('path');

const slidesDir = path.join(__dirname, 'src', 'components', 'slides');

// Helper for slide header
function getHeader(problemTag, slideNum, titleSub) {
  return `
      {/* TOP HEADER */}
      <motion.div 
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex items-center justify-between border-b border-slate-800/80 pb-2.5 sm:pb-3 flex-shrink-0"
      >
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-brand-500 to-indigo-600 shadow-md shadow-brand-500/25 border border-white/20">
            <Brain className="w-5 h-5 text-white animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold tracking-tight text-white text-sm sm:text-base md:text-lg">
                HUMAN <span className="text-brand-400">OS</span>
              </span>
              <span className="text-[10px] sm:text-xs uppercase font-mono px-2 py-0.5 rounded-full bg-brand-500/15 border border-brand-500/30 text-brand-300 font-bold tracking-wider">
                ${problemTag}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-tight">${titleSub}</p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-brand-500/40 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-500"></span>
            </span>
            <span className="font-mono text-xs sm:text-sm font-bold tracking-wider text-brand-300">
              SLIDE {String(currentIndex + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-slate-300 font-medium">
            <Lock className="w-3.5 h-3.5 text-rose-400" />
            <span>Confidential · Seed Deck</span>
          </div>
        </div>
      </motion.div>
  `;
}

// Slide 4: The Solution Bridge
const slide4Content = `import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Lock, ArrowRight, ShieldCheck, Cpu, Compass, CheckCircle2 } from 'lucide-react';

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
    <div className="relative w-full h-full flex flex-col justify-between p-3.5 sm:p-5 md:p-6 lg:p-7 overflow-hidden select-none bg-navy-950">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[280px] bg-gradient-to-b from-brand-500/20 via-indigo-600/10 to-transparent blur-3xl rounded-full opacity-60" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      </div>

      ${getHeader('The Paradigm Shift', 4, 'Sovereign Cognitive Mastery')}

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 my-auto max-w-6xl mx-auto w-full flex-1 flex flex-col justify-between py-1 gap-3">
        <div className="text-center space-y-1">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-slate-900/90 border border-brand-500/30 text-xs sm:text-sm font-bold text-brand-300 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-brand-400" />
            <span>THE COGNITIVE ACCELERATION PLATFORM</span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-white">
            Human OS: <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-indigo-200 to-sky-300">Humans First. AI Agents Second.</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto">
            We don't replace human cognition. We use autonomous AI agent swarms to train, test, and encode durable biological memory that compounds for life.
          </motion.p>
        </div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 shadow-lg flex flex-col justify-between">
            <div>
              <span className="p-2 rounded-lg bg-indigo-500/20 text-indigo-300 inline-block mb-2 font-mono text-xs font-bold">01 · AUTONOMY</span>
              <h3 className="text-base font-bold text-white mb-1">Sovereign Judgment</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Empowering humans to direct, audit, and command AI instead of passively trusting unverified outputs.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-slate-800 text-xs font-semibold text-brand-400 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Zero Atrophy
            </div>
          </div>

          <div className="p-4 rounded-xl bg-brand-950/40 border border-brand-500/40 shadow-xl flex flex-col justify-between">
            <div>
              <span className="p-2 rounded-lg bg-brand-500/20 text-brand-300 inline-block mb-2 font-mono text-xs font-bold">02 · SCAFFOLDING</span>
              <h3 className="text-base font-bold text-white mb-1">Socratic AI Sparring</h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Adaptive agent tutors that guide through targeted inquiry, refusal to spoon-feed, and personalized calibration.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-brand-500/30 text-xs font-semibold text-brand-300 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> 1:1 Mastery at Scale
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 shadow-lg flex flex-col justify-between">
            <div>
              <span className="p-2 rounded-lg bg-emerald-500/20 text-emerald-300 inline-block mb-2 font-mono text-xs font-bold">03 · COMPOUNDING</span>
              <h3 className="text-base font-bold text-white mb-1">Lifelong Knowledge Graph</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Every concept connects to a personal, persistent neural map that predicts forgetting and preserves memory forever.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-slate-800 text-xs font-semibold text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Verified Competence
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="rounded-xl sm:rounded-2xl bg-gradient-to-r from-brand-950/95 via-indigo-950/90 to-slate-900/95 border border-brand-500/50 p-2.5 sm:p-3 flex items-center justify-between shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-brand-500/20 border border-brand-400/40 flex items-center justify-center text-brand-300 flex-shrink-0">
              <ShieldCheck className="w-5 h-5 text-brand-400" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold text-brand-400 uppercase tracking-widest block">Executive Thesis</span>
              <p className="text-xs sm:text-sm md:text-base font-bold text-white leading-tight">
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

// Slide 5: What We're Building
const slide5Content = `import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Lock, ArrowRight, Compass, Sliders, Hourglass, ShieldCheck, Layers } from 'lucide-react';

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
    <div className="relative w-full h-full flex flex-col justify-between p-3.5 sm:p-5 md:p-6 lg:p-7 overflow-hidden select-none bg-navy-950">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[10%] w-[550px] h-[280px] bg-gradient-to-b from-brand-500/15 via-indigo-600/10 to-transparent blur-3xl rounded-full opacity-60" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      </div>

      ${getHeader('Product Architecture', 5, 'Validated 1:1 Mastery Guide')}

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 my-auto max-w-6xl mx-auto w-full flex-1 flex flex-col justify-between py-1 gap-2.5 sm:gap-3">
        <div className="text-center space-y-0.5">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-slate-900/90 border border-brand-500/30 text-xs sm:text-sm font-bold text-brand-300 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-brand-400" />
            <span>WHAT WE'RE BUILDING</span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-white">
            A Trustworthy 1:1 Guide that Produces <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-indigo-200 to-emerald-300">Validated Mastery</span>
          </motion.h1>
        </div>

        {/* 3 Pillars */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-3 items-stretch">
          <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/90 border border-slate-800 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-lg bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-2">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white mb-1">1. Plans a Path With You</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                From your personal goal <em>and</em>, in enterprise, from your job description, KPIs, and performance review weaknesses. <strong className="text-white">The path is your career, not a catalog.</strong>
              </p>
            </div>
            <div className="mt-3 py-1 px-2.5 rounded bg-slate-950 border border-slate-800 text-[11px] text-slate-400 font-mono">
              Role & KPI-Aligned Roadmaps
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-brand-950/30 border border-brand-500/40 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-lg bg-brand-500/20 border border-brand-500/40 flex items-center justify-center text-brand-300 mb-2">
                <Sliders className="w-5 h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white mb-1">2. Adapts to How You Learn</h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Dynamically tunes pace, analogies, real-world scenario difficulty, and depth. Generates tailored Socratic cues based on real-time comprehension.
              </p>
            </div>
            <div className="mt-3 py-1 px-2.5 rounded bg-brand-950/80 border border-brand-500/30 text-[11px] text-brand-300 font-mono">
              Hyper-Personalized Pedagogy
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/90 border border-slate-800 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-2">
                <Hourglass className="w-5 h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white mb-1">3. Stays With You</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Patiently, until you've actually <em>mastered</em> the skill, not just finished a video or ticked a checkbox. Continuous spaced retention reviews forever.
              </p>
            </div>
            <div className="mt-3 py-1 px-2.5 rounded bg-slate-950 border border-slate-800 text-[11px] text-slate-400 font-mono">
              Guaranteed Durable Memory
            </div>
          </div>
        </motion.div>

        {/* Unique Foundation Banner */}
        <motion.div variants={itemVariants} className="rounded-xl sm:rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/80 to-brand-950/90 border border-brand-500/40 p-3 sm:p-3.5 flex items-center justify-between shadow-xl">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 flex-shrink-0">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider block">
                OUR UNIQUE FOUNDATION
              </span>
              <p className="text-xs sm:text-sm md:text-base font-semibold text-white leading-snug">
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

// Slide 6: The Engram
const slide6Content = `import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Lock, ArrowRight, HelpCircle, BookOpen, Repeat, PlayCircle, Award, ShieldCheck } from 'lucide-react';

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
    <div className="relative w-full h-full flex flex-col justify-between p-3.5 sm:p-5 md:p-6 lg:p-7 overflow-hidden select-none bg-navy-950">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[280px] bg-gradient-to-b from-brand-500/15 via-indigo-600/10 to-transparent blur-3xl rounded-full opacity-60" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      </div>

      ${getHeader('Pedagogical Core', 6, 'The Atomic Unit of Learning')}

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 my-auto max-w-6xl mx-auto w-full flex-1 flex flex-col justify-between py-1 gap-2.5 sm:gap-3">
        <div className="text-center space-y-0.5">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-slate-900/90 border border-brand-500/30 text-xs sm:text-sm font-bold text-brand-300 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-brand-400" />
            <span>NEUROSCIENCE-GROUNDED ATOMIC ARCHITECTURE</span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-white">
            The Engram: <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-indigo-200 to-sky-300">Our Atomic Unit</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xs sm:text-sm md:text-base text-slate-300 max-w-4xl mx-auto">
            In neuroscience, an <em>engram</em> is the physical physical trace memory leaves in the brain. In Human OS, an <strong className="text-white">Engram is one concept actively retrieved, practiced, and consolidated</strong> — not a video watched or a checkbox ticked.
          </motion.p>
        </div>

        {/* 5-Step Cognitive Contract Visual Flow */}
        <motion.div variants={itemVariants} className="space-y-1.5">
          <div className="flex items-center justify-between px-2">
            <span className="text-xs font-mono font-bold text-brand-300 uppercase tracking-wider">
              The 5-Step Cognitive Contract
            </span>
            <span className="text-[11px] font-mono text-slate-400">Deterministic Pedagogical State Machine</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className={\`p-3 rounded-xl bg-slate-900/90 border \${step.border} flex flex-col justify-between relative shadow-lg\`}>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className={\`w-6 h-6 rounded-md \${step.bg} \${step.color} flex items-center justify-center font-mono text-xs font-bold\`}>
                        {step.num}
                      </span>
                      <Icon className={\`w-4 h-4 \${step.color}\`} />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1">{step.title}</h4>
                    <p className="text-[11px] text-slate-300 leading-snug">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Takeaway Banner */}
        <motion.div variants={itemVariants} className="rounded-xl sm:rounded-2xl bg-gradient-to-r from-brand-950/95 via-indigo-950/90 to-slate-900/95 border border-brand-500/50 p-2.5 sm:p-3 flex items-center justify-between shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-brand-500/20 border border-brand-400/40 flex items-center justify-center text-brand-300 flex-shrink-0">
              <ShieldCheck className="w-5 h-5 text-brand-400" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold text-brand-400 uppercase tracking-widest block">Core Takeaway</span>
              <p className="text-xs sm:text-sm md:text-base font-bold text-white leading-tight">
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

fs.writeFileSync(path.join(slidesDir, 'Slide4Solution.jsx'), slide4Content);
fs.writeFileSync(path.join(slidesDir, 'Slide5WhatWeAreBuilding.jsx'), slide5Content);
fs.writeFileSync(path.join(slidesDir, 'Slide6Engram.jsx'), slide6Content);
console.log('Created slides 4-6');
