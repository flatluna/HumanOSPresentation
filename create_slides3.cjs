const fs = require('fs');
const path = require('path');

const slidesDir = path.join(__dirname, 'src', 'components', 'slides');

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

// Slide 10: Capability Studio
const slide10 = `import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Lock, Factory, ArrowRight, FileText, Network, CheckCircle, Video, Mic, ShieldCheck } from 'lucide-react';

export function Slide10CapabilityStudio({ slide, currentIndex = 9, totalSlides = 16 }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.02 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
  };

  const agents = [
    { name: "Curador", desc: "PDF/Doc Ingestion", icon: FileText, color: "text-indigo-400" },
    { name: "Graph Architect", desc: "DAG Synthesis", icon: Network, color: "text-brand-400" },
    { name: "Facts Extractor", desc: "Factuals & Truth", icon: CheckCircle, color: "text-emerald-400" },
    { name: "Experience Designer", desc: "5-Step Blueprint", icon: Sparkles, color: "text-purple-400" },
    { name: "Video / Media", desc: "Visual Clips", icon: Video, color: "text-rose-400" },
    { name: "Tutor Agent", desc: "Voice 1:1 Engine", icon: Mic, color: "text-cyan-400" },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-3.5 sm:p-5 md:p-6 lg:p-7 overflow-hidden select-none bg-navy-950">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[10%] w-[550px] h-[280px] bg-gradient-to-b from-indigo-500/20 via-brand-500/10 to-transparent blur-3xl rounded-full opacity-60" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      </div>

      ${getHeader('Content Factory', 10, 'Autonomous Multi-Agent Generation')}

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 my-auto max-w-6xl mx-auto w-full flex-1 flex flex-col justify-between py-1 gap-2.5 sm:gap-3">
        <div className="text-center space-y-0.5">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-slate-900/90 border border-brand-500/30 text-xs sm:text-sm font-bold text-brand-300 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-brand-400" />
            <span>CAPABILITY STUDIO: THE AI COURSE FACTORY</span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-white">
            We Turn a 300-Page PDF into a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-indigo-200 to-sky-300">Full Graph Curriculum</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xs sm:text-sm md:text-base text-slate-300 max-w-4xl mx-auto">
            Autonomous multi-agent pipeline: from raw unstructured enterprise manuals to production-ready 1:1 Socratic courses.
          </motion.p>
        </div>

        {/* Multi-Agent Sequential Flow */}
        <motion.div variants={itemVariants} className="space-y-1">
          <div className="text-xs font-mono font-bold text-brand-300 uppercase tracking-wider px-2">
            Autonomous Multi-Agent Pipeline
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {agents.map((ag, idx) => {
              const Icon = ag.icon;
              return (
                <div key={idx} className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between shadow-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono text-slate-500 font-bold">0{idx + 1}</span>
                    <Icon className={\`w-4 h-4 \${ag.color}\`} />
                  </div>
                  <h4 className="text-xs font-bold text-white">{ag.name}</h4>
                  <p className="text-[10px] text-slate-400 leading-tight mt-0.5">{ag.desc}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* 2 Modes Box */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-3 items-stretch">
          <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 shadow-lg">
            <h4 className="text-xs sm:text-sm font-bold text-white mb-1">Strict Syllabus Mode</h4>
            <p className="text-xs text-slate-300 leading-snug">
              Respects the exact index, chapters, and regulatory structure of compliance manuals and legal codes.
            </p>
          </div>
          <div className="p-3 rounded-xl bg-brand-950/30 border border-brand-500/40 shadow-xl">
            <h4 className="text-xs sm:text-sm font-bold text-brand-200 mb-1">Cognitive Complexity Mode</h4>
            <p className="text-xs text-slate-200 leading-snug">
              Reorganizes dense concepts into optimal prerequisite DAG order based on cognitive load theory.
            </p>
          </div>
        </motion.div>

        {/* Marginal Cost Banner */}
        <motion.div variants={itemVariants} className="rounded-xl sm:rounded-2xl bg-gradient-to-r from-brand-950/95 via-indigo-950/90 to-slate-900/95 border border-brand-500/50 p-2.5 sm:p-3 flex items-center justify-between shadow-xl">
          <div className="flex items-center gap-3">
            <Factory className="w-5 h-5 text-brand-400 flex-shrink-0" />
            <div>
              <span className="text-[10px] font-mono font-bold text-brand-400 uppercase tracking-widest block">Investor Framing</span>
              <p className="text-xs sm:text-sm md:text-base font-bold text-white leading-tight">
                Content supply is our marginal cost — <span className="text-emerald-300">and it is near zero.</span>
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
`;

// Slide 11: Live Demo
const slide11 = `import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Lock, Play, Mic, FileText, CheckCircle2, UserCheck, ShieldAlert } from 'lucide-react';

export function Slide11LiveDemo({ slide, currentIndex = 10, totalSlides = 16 }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.02 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
  };

  const demoSteps = [
    { num: "1", title: "PDF Ingestion", desc: "Drop a 300p manual → auto-generate Graph + Engrams.", icon: FileText },
    { num: "2", title: "5-Step Contract", desc: "Enter Engram → Hypothesis prediction error → Recall.", icon: Play },
    { num: "3", title: "Real-Time Voice Tutor", desc: "Sub-second WebRTC voice → refuses answers, forces recall.", icon: Mic },
    { num: "4", title: "Role/KPI Grounding", desc: "“Your last review flagged X — let's strengthen it today.”", icon: UserCheck },
    { num: "5", title: "Live “My Brain” Map", desc: "Real-time recall probability rings updating dynamically.", icon: Brain },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-3.5 sm:p-5 md:p-6 lg:p-7 overflow-hidden select-none bg-navy-950">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[280px] bg-gradient-to-b from-brand-500/20 via-indigo-600/10 to-transparent blur-3xl rounded-full opacity-60" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      </div>

      ${getHeader('Interactive Proof', 11, 'Interactive Product Walkthrough')}

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 my-auto max-w-6xl mx-auto w-full flex-1 flex flex-col justify-between py-1 gap-2.5 sm:gap-3">
        <div className="text-center space-y-0.5">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-slate-900/90 border border-brand-500/30 text-xs sm:text-sm font-bold text-brand-300 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-brand-400" />
            <span>4-MINUTE INTERACTIVE DEMO</span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-white">
            Live Demo: <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-indigo-200 to-sky-300">The Socratic AI Experience</span>
          </motion.h1>
        </div>

        {/* 5 Demo Steps */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-5 gap-2.5 items-stretch">
          {demoSteps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 shadow-lg flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-6 h-6 rounded-md bg-brand-500/20 text-brand-300 flex items-center justify-center font-mono text-xs font-bold">
                      {s.num}
                    </span>
                    <Icon className="w-4 h-4 text-brand-400" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white mb-1">{s.title}</h4>
                  <p className="text-[11px] text-slate-300 leading-snug">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Backup Callout */}
        <motion.div variants={itemVariants} className="rounded-xl sm:rounded-2xl bg-slate-950/95 border border-slate-800 p-2.5 sm:p-3 flex items-center justify-between shadow-inner">
          <div className="flex items-center gap-2.5">
            <ShieldAlert className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <p className="text-xs text-slate-300 font-medium">
              <strong className="text-white">Presenter Protocol:</strong> End on the glowing neuron map — this provides the strongest emotional and scientific climax for investors.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
`;

// Slide 12: The HR Performance Loop
const slide12 = `import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Lock, RefreshCw, Briefcase, Target, Award, ArrowRight, Quote } from 'lucide-react';

export function Slide12HRPerformanceLoop({ slide, currentIndex = 11, totalSlides = 16 }) {
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
        <div className="absolute top-[-10%] right-[10%] w-[550px] h-[280px] bg-gradient-to-b from-emerald-500/15 via-brand-500/10 to-transparent blur-3xl rounded-full opacity-60" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      </div>

      ${getHeader('Enterprise Wedge', 12, 'The Closed HR Feedback Loop')}

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 my-auto max-w-6xl mx-auto w-full flex-1 flex flex-col justify-between py-1 gap-2.5 sm:gap-3">
        <div className="text-center space-y-0.5">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-xs sm:text-sm font-bold text-emerald-300 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>THE HR PERFORMANCE LOOP</span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-white">
            Learning Tied Directly to the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-brand-200 to-sky-300">Learner's Actual Job</span>
          </motion.h1>
        </div>

        {/* 4-Step Closed Feedback Loop Visual */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-4 gap-2.5 items-stretch relative">
          <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center mb-1.5 font-mono text-xs font-bold">01</div>
              <h4 className="text-xs sm:text-sm font-bold text-white mb-0.5">Job Data Ingestion</h4>
              <p className="text-[11px] text-slate-300 leading-snug">Roles, KPIs, Performance Review feedback & identified weaknesses.</p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-brand-950/30 border border-brand-500/40 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-7 h-7 rounded-lg bg-brand-500/20 text-brand-300 flex items-center justify-center mb-1.5 font-mono text-xs font-bold">02</div>
              <h4 className="text-xs sm:text-sm font-bold text-white mb-0.5">Auto-Aligned Path</h4>
              <p className="text-[11px] text-slate-200 leading-snug">Personalized Engram path: Mi Puesto · Soft Skills · Procesos Críticos.</p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center mb-1.5 font-mono text-xs font-bold">03</div>
              <h4 className="text-xs sm:text-sm font-bold text-white mb-0.5">1:1 Contextual Coaching</h4>
              <p className="text-[11px] text-slate-300 leading-snug">AI Tutor tailors analogies to the exact company OKRs and quarterly targets.</p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/40 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center mb-1.5 font-mono text-xs font-bold">04</div>
              <h4 className="text-xs sm:text-sm font-bold text-white mb-0.5">Performance Feeder</h4>
              <p className="text-[11px] text-slate-200 leading-snug">“My Brain” live mastery telemetry directly informs the next review cycle.</p>
            </div>
          </div>
        </motion.div>

        {/* Investor Takeaway */}
        <motion.div variants={itemVariants} className="rounded-xl sm:rounded-2xl bg-gradient-to-r from-emerald-950/95 via-indigo-950/90 to-slate-900/95 border border-emerald-500/50 p-2.5 sm:p-3 flex items-center justify-between shadow-xl">
          <div className="flex items-center gap-2.5">
            <Quote className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <p className="text-xs sm:text-sm md:text-base font-bold text-white italic">
              “We turn L&D from an unmeasured expense into a measurable driver of business KPIs. HR can finally prove training moved the needle.”
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
`;

fs.writeFileSync(path.join(slidesDir, 'Slide10CapabilityStudio.jsx'), slide10);
fs.writeFileSync(path.join(slidesDir, 'Slide11LiveDemo.jsx'), slide11);
fs.writeFileSync(path.join(slidesDir, 'Slide12HRPerformanceLoop.jsx'), slide12);
console.log('Created slides 10-12');
