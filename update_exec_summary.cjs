const fs = require('fs');
const path = require('path');

const slidesDir = path.join(__dirname, 'src', 'components', 'slides');

// Helper for Slide Header
function getHeader(tag, titleSub, badgeColor = "bg-rose-500/15 border-rose-500/30 text-rose-300") {
  return `
      {/* TOP HEADER */}
      <motion.div 
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex items-center justify-between border-b border-slate-800/80 pb-2.5 sm:pb-3 flex-shrink-0"
      >
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-brand-500 to-indigo-600 shadow-lg shadow-brand-500/25 border border-white/20">
            <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-white animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2.5">
              <span className="font-display font-bold tracking-tight text-white text-base sm:text-xl">
                HUMAN <span className="text-brand-400">OS</span>
              </span>
              <span className="text-xs sm:text-sm uppercase font-mono px-2.5 py-0.5 rounded-full ${badgeColor} font-bold tracking-wider">
                ${tag}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">${titleSub}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-slate-900/90 border border-brand-500/40 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-500"></span>
            </span>
            <span className="font-mono text-xs sm:text-base font-bold tracking-wider text-brand-300">
              SLIDE {String(currentIndex + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300 font-medium">
            <Lock className="w-4 h-4 text-rose-400" />
            <span>Executive Briefing</span>
          </div>
        </div>
      </motion.div>
  `;
}

// ==========================================
// SLIDE 1: EXECUTIVE SUMMARY - THE PROBLEM
// Color theme: Obsidian + Ember/Crimson & Rose Glow
// ==========================================
const s1 = `import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Lock, AlertTriangle, TrendingDown, Users, Flame, ArrowRight, ShieldAlert } from 'lucide-react';

export function Slide1Title({ slide, currentIndex = 0, totalSlides = 17 }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.02 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 6 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-9 overflow-hidden select-none bg-[#07050a]">
      {/* Dynamic Crimson / Ember Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[750px] h-[340px] bg-gradient-to-b from-rose-600/25 via-red-900/15 to-transparent blur-3xl rounded-full opacity-70" />
        <div className="absolute bottom-[-15%] right-[5%] w-[500px] h-[300px] bg-amber-600/15 blur-3xl rounded-full opacity-50" />
        <div className="absolute top-[30%] left-[-10%] w-[400px] h-[350px] bg-indigo-900/20 blur-3xl rounded-full opacity-40" />
        <div className="absolute inset-0 bg-grid-pattern opacity-25" />
      </div>

      ${getHeader('Executive Summary 1/3', 'The Macro Problem & Cognitive Paradox', 'bg-rose-500/20 border-rose-500/40 text-rose-300')}

      {/* MAIN STAGE */}
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 my-auto max-w-6xl mx-auto w-full flex-1 flex flex-col justify-between py-1 gap-3 sm:gap-3.5">
        
        {/* Title Header */}
        <div className="text-center space-y-1">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/80 border border-rose-500/40 text-xs sm:text-sm font-bold text-rose-300 shadow-md">
            <Flame className="w-4 h-4 text-rose-400" />
            <span>THE MULTI-TRILLION DOLLAR CRISIS IN HUMAN COMPETENCE</span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-white leading-tight">
            What Problem Are We Solving? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-amber-200 to-sky-300">
              AI Is Causing Human Cognitive Atrophy & Learning Hasn't Evolved
            </span>
          </motion.h1>
        </div>

        {/* 3 Strategic Problem Pillars */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-3 items-stretch">
          
          {/* Problem 1 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-rose-500/30 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
                <span className="text-xs font-mono font-bold text-rose-400 uppercase">01 · THE AI PARADOX</span>
                <TrendingDown className="w-5 h-5 text-rose-400" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-1.5">The Cognitive Offloading Trap</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Raw AI chatbots think <em>for</em> humans. When workers delegate all cognitive effort, organic memory collapses — producing intellectual passengers unable to audit hallucinations.
              </p>
            </div>
            <div className="mt-3 py-1.5 px-2.5 rounded-lg bg-rose-950/40 border border-rose-500/20 text-xs font-mono text-rose-300 font-semibold">
              Result: Helpless Without Prompt Bars
            </div>
          </div>

          {/* Problem 2 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-amber-500/30 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase">02 · STRUCTURAL FAILURE</span>
                <Users className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-1.5">Industrial 1:Many Classrooms</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We built one-size-fits-all classrooms because great tutors were scarce. EdTech 1.0 (Coursera/Udemy) just streamed videos to laptops — resulting in <strong className="text-white">&lt;6% completion rates</strong> and zero durable memory.
              </p>
            </div>
            <div className="mt-3 py-1.5 px-2.5 rounded-lg bg-amber-950/40 border border-amber-500/20 text-xs font-mono text-amber-300 font-semibold">
              Result: Passive Streaming ≠ Mastery
            </div>
          </div>

          {/* Problem 3 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-emerald-500/30 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase">03 · THE UNLOCK</span>
                <Sparkles className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-1.5">Bloom's 2-Sigma Opportunity</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Benjamin Bloom proved that 1-to-1 mastery tutoring shifts student performance by <strong className="text-emerald-300">+2.0 Standard Deviations (98th percentile)</strong>. AI now breaks the economic barrier to scale 1:1 globally.
              </p>
            </div>
            <div className="mt-3 py-1.5 px-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/20 text-xs font-mono text-emerald-300 font-semibold">
              Unlock: 1:1 Mastery at Zero Marginal Cost
            </div>
          </div>

        </motion.div>

        {/* High-Impact Executive Quote Banner */}
        <motion.div variants={itemVariants} className="rounded-2xl bg-gradient-to-r from-rose-950/95 via-slate-900 to-navy-950/95 border border-rose-500/40 p-3.5 sm:p-4.5 flex items-center justify-between shadow-xl">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-400/40 flex items-center justify-center text-rose-300 flex-shrink-0">
              <ShieldAlert className="w-5 h-5 text-rose-400" />
            </div>
            <div className="text-left">
              <span className="text-xs font-mono font-bold text-rose-400 uppercase tracking-widest block">Executive Summary Takeaway</span>
              <p className="text-sm sm:text-base md:text-lg font-bold text-white leading-snug">
                “The easier it is to look up an answer with AI, the weaker your organic memory becomes. <span className="text-rose-200">Human OS is the anti-offloading platform that turns knowledge into permanent mental mastery.”</span>
              </p>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
`;

// ==========================================
// SLIDE 2: EXECUTIVE SUMMARY - HOW & THE PROCESS
// Color theme: Deep Sapphire + Cyan & Blue Glow
// ==========================================
const s2 = `import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Lock, Cpu, Radio, Network, CheckCircle2, ShieldCheck, ArrowRight, Play, Mic, Database } from 'lucide-react';
import slide16Img from '../../Assets/Slide16.png';

export function Slide2LearningUnchanged({ slide, currentIndex = 1, totalSlides = 17 }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.02 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 6 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
  };

  const processSteps = [
    { num: "01", title: "Hypothesis", desc: "Predict first (prediction error primes brain)", tag: "Neuro-Plasticity" },
    { num: "02", title: "Teaching", desc: "Deep breakdown via multi-modal analogies", tag: "Concept Schema" },
    { num: "03", title: "Recall", desc: "Unassisted retrieval (active neural firing)", tag: "Memory Encoding" },
    { num: "04", title: "Production", desc: "Real-world application to daily role", tag: "Job Execution" },
    { num: "05", title: "Assessment", desc: "AI-scored diagnostic mastery calibration", tag: "Live Telemetry" },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-9 overflow-hidden select-none bg-[#040814]">
      {/* Dynamic Cyan / Sapphire Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[750px] h-[340px] bg-gradient-to-b from-cyan-600/25 via-indigo-700/20 to-transparent blur-3xl rounded-full opacity-70" />
        <div className="absolute bottom-[-15%] right-[5%] w-[500px] h-[300px] bg-brand-500/20 blur-3xl rounded-full opacity-50" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      </div>

      ${getHeader('Executive Summary 2/3', 'How We Solve It: The 5-Step Process & Voice Engine', 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300')}

      {/* MAIN STAGE */}
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 my-auto max-w-6xl mx-auto w-full flex-1 flex flex-col justify-between py-1 gap-3">
        
        {/* Title Header */}
        <div className="text-center space-y-1">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-xs sm:text-sm font-bold text-cyan-300 shadow-md">
            <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>HOW WE SOLVE IT · THE END-TO-END COGNITIVE ENGINE</span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-white leading-tight">
            How Does Human OS Work? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-brand-200 to-indigo-300">
              The 5-Step Cognitive Contract + 360° Real-Time Socratic Voice Tutor
            </span>
          </motion.h1>
        </div>

        {/* 5-Step Process Visual Timeline */}
        <motion.div variants={itemVariants} className="space-y-1.5">
          <div className="flex items-center justify-between px-2">
            <span className="text-xs sm:text-sm font-mono font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-2">
              <Play className="w-4 h-4 text-cyan-400" />
              The 5-Step Cognitive Contract (The Engram State Machine)
            </span>
            <span className="text-xs font-mono text-slate-400 font-semibold">Memory Science · Not Video Delivery</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5">
            {processSteps.map((st, idx) => (
              <div key={idx} className="p-3 sm:p-3.5 rounded-xl bg-slate-900/90 border border-cyan-500/30 shadow-lg flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="w-6 h-6 rounded-md bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-mono text-xs font-bold">
                      {st.num}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">{st.tag}</span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white mb-0.5">{st.title}</h4>
                  <p className="text-[11px] text-slate-300 leading-snug">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 3 Core Technology Enablers */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-3 items-stretch">
          
          <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/90 border border-slate-800 shadow-lg">
            <div className="flex items-center gap-2 mb-2">
              <Network className="w-5 h-5 text-indigo-400" />
              <h4 className="text-sm sm:text-base font-bold text-white">1. Knowledge Graph DAG</h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Knowledge is structured as an interconnected Directed Acyclic Graph with <code className="text-indigo-300">Requires</code> and <code className="text-indigo-300">BuildsOn</code> edges, enabling non-linear mastery.
            </p>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-brand-950/30 border border-brand-500/40 shadow-xl">
            <div className="flex items-center gap-2 mb-2">
              <Database className="w-5 h-5 text-brand-400" />
              <h4 className="text-sm sm:text-base font-bold text-brand-200">2. Grounded Factuals</h4>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed">
              Cryptographically verified truth units bound to graph nodes. Deterministic boundaries guarantee <strong className="text-emerald-300">provable zero hallucination</strong>.
            </p>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/40 shadow-xl">
            <div className="flex items-center gap-2 mb-2">
              <Mic className="w-5 h-5 text-cyan-400" />
              <h4 className="text-sm sm:text-base font-bold text-cyan-200">3. 360° Socratic Voice Agent</h4>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed">
              Sub-second WebRTC voice audio grounded in employee's exact role, SMART objectives, live KPIs, and manager coaching notes.
            </p>
          </div>

        </motion.div>

        {/* Takeaway Banner */}
        <motion.div variants={itemVariants} className="rounded-2xl bg-gradient-to-r from-cyan-950/95 via-indigo-950/90 to-slate-900/95 border border-cyan-500/50 p-3 sm:p-4 flex items-center justify-between shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 flex-shrink-0">
              <ShieldCheck className="w-5 h-5 text-cyan-300" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block">The Process Moat</span>
              <p className="text-sm sm:text-base font-bold text-white leading-tight">
                Not a chatbot prompt. A deterministic, neuroscience-based state machine that ensures <span className="text-cyan-200">100% mastery and zero hallucination.</span>
              </p>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
`;

// ==========================================
// SLIDE 3: EXECUTIVE SUMMARY - STRENGTHS & ROI
// Color theme: Emerald Forest + Aurora Green & Gold Glow
// ==========================================
const s3 = `import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Lock, ShieldCheck, Target, TrendingUp, Factory, Globe, DollarSign, Quote, CheckCircle2 } from 'lucide-react';

export function Slide3MemoryParadox({ slide, currentIndex = 2, totalSlides = 17 }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.02 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 6 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-9 overflow-hidden select-none bg-[#030d08]">
      {/* Dynamic Emerald / Aurora Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[750px] h-[340px] bg-gradient-to-b from-emerald-600/25 via-teal-900/20 to-transparent blur-3xl rounded-full opacity-70" />
        <div className="absolute bottom-[-15%] right-[5%] w-[500px] h-[300px] bg-cyan-600/15 blur-3xl rounded-full opacity-50" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      </div>

      ${getHeader('Executive Summary 3/3', 'Strategic Strengths, Market & Enterprise ROI', 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300')}

      {/* MAIN STAGE */}
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 my-auto max-w-6xl mx-auto w-full flex-1 flex flex-col justify-between py-1 gap-3">
        
        {/* Title Header */}
        <div className="text-center space-y-1">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-xs sm:text-sm font-bold text-emerald-300 shadow-md">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span>OUR STRATEGIC INTENT · ENTERPRISE ROI & MARKET DOMINANCE</span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-white leading-tight">
            Our Strengths & Business Model: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-brand-300">
              Tying Learning Directly to Job Performance & Capturing a $360B+ Market
            </span>
          </motion.h1>
        </div>

        {/* 4 Core Value Pillars Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-stretch">
          
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-emerald-500/30 shadow-lg flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase block mb-1.5">01 · THE HR LOOP</span>
              <h4 className="text-sm sm:text-base font-bold text-white mb-1">Learning Tied to the Job</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Roles + KPIs + performance weaknesses auto-feed the Socratic tutor. Live mastery directly feeds the next review cycle.
              </p>
            </div>
            <div className="mt-3 py-1 px-2 rounded bg-slate-950 text-xs font-semibold text-emerald-300 border border-emerald-500/20">
              L&D Becomes a KPI Driver
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-brand-950/30 border border-brand-500/40 shadow-xl flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-brand-300 uppercase block mb-1.5">02 · FACTORY</span>
              <h4 className="text-sm sm:text-base font-bold text-white mb-1">Capability Studio</h4>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                6-agent autonomous pipeline converts 300-page corporate manuals into full graph courses at <strong className="text-white">near-zero marginal cost</strong>.
              </p>
            </div>
            <div className="mt-3 py-1 px-2 rounded bg-brand-950 text-xs font-semibold text-brand-300 border border-brand-500/30">
              Near-Zero Content Cost
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-lg flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-indigo-400 uppercase block mb-1.5">03 · MOAT</span>
              <h4 className="text-sm sm:text-base font-bold text-white mb-1">7 Strategic Advantages</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Compounding DAG data catalog, longitudinal memory decay curves, and deep enterprise workflow integration.
              </p>
            </div>
            <div className="mt-3 py-1 px-2 rounded bg-slate-950 text-xs font-semibold text-indigo-300 border border-indigo-500/20">
              High Enterprise Switching Cost
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 shadow-xl flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-emerald-300 uppercase block mb-1.5">04 · MONETIZATION</span>
              <h4 className="text-sm sm:text-base font-bold text-white mb-1">4 Scalable Streams</h4>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Enterprise B2B per-seat SaaS, B2C Prosumer Subscriptions, Capability Studio API, and Public/NGO licensing.
              </p>
            </div>
            <div className="mt-3 py-1 px-2 rounded bg-emerald-950 text-xs font-semibold text-emerald-300 border border-emerald-500/30">
              $360B+ Total Addressable Market
            </div>
          </div>

        </motion.div>

        {/* Executive ROI Quote */}
        <motion.div variants={itemVariants} className="rounded-2xl bg-gradient-to-r from-emerald-950/95 via-teal-950/90 to-slate-900/95 border border-emerald-500/50 p-3.5 sm:p-4.5 flex items-center justify-between shadow-xl">
          <div className="flex items-center gap-3.5">
            <Quote className="w-6 h-6 text-emerald-400 flex-shrink-0" />
            <div className="text-left">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block">Executive Summary Synthesis</span>
              <p className="text-sm sm:text-base md:text-lg font-bold text-white italic leading-snug">
                “We turn corporate training from an unmeasured expense into provable business ROI. HR can finally prove training moved the needle on quarterly KPIs.”
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
fs.writeFileSync(path.join(slidesDir, 'Slide2LearningUnchanged.jsx'), s2);
fs.writeFileSync(path.join(slidesDir, 'Slide3MemoryParadox.jsx'), s3);
console.log('Updated first 3 slides to complete Executive Summary format');
