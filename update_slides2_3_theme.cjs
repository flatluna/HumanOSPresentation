const fs = require('fs');
const path = require('path');

const slidesDir = path.join(__dirname, 'src', 'components', 'slides');

function getHeader(tag, titleSub) {
  return `
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
                ${tag}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">${titleSub}</p>
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
  `;
}

// ==========================================
// SLIDE 2: EXECUTIVE SUMMARY - HOW & THE PROCESS (Azure Blue & White)
// ==========================================
const s2 = `import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Lock, Radio, Network, CheckCircle2, ShieldCheck, Play, Mic, Database } from 'lucide-react';

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
    <div className="relative w-full h-full flex flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-9 overflow-hidden select-none bg-gradient-to-br from-[#f8fafc] via-[#f0f7ff] to-[#e6f2fe] text-slate-800">
      {/* Luminous Azure & Cyan Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[750px] h-[340px] bg-gradient-to-b from-sky-400/25 via-blue-500/15 to-transparent blur-3xl rounded-full opacity-70" />
        <div className="absolute bottom-[-15%] right-[5%] w-[500px] h-[300px] bg-cyan-400/20 blur-3xl rounded-full opacity-60" />
        
        {/* Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.07]" 
          style={{
            backgroundImage: 'linear-gradient(to right, #0284c7 1px, transparent 1px), linear-gradient(to bottom, #0284c7 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} 
        />
      </div>

      ${getHeader('Executive Summary 2/3', 'How We Solve It: The 5-Step Process & Voice Engine')}

      {/* MAIN STAGE */}
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 my-auto max-w-6xl mx-auto w-full flex-1 flex flex-col justify-between py-1 gap-3">
        
        {/* Title Header */}
        <div className="text-center space-y-1">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-300/80 text-xs sm:text-sm font-bold text-sky-900 shadow-sm">
            <Radio className="w-4 h-4 text-sky-600 animate-pulse" />
            <span>HOW WE SOLVE IT · THE END-TO-END COGNITIVE ENGINE</span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-slate-900 leading-tight">
            How Does Human OS Work? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-indigo-700">
              The 5-Step Cognitive Contract + 360° Real-Time Socratic Voice Tutor
            </span>
          </motion.h1>
        </div>

        {/* 5-Step Process Visual Timeline in Pure White & Azure Cards */}
        <motion.div variants={itemVariants} className="space-y-1.5">
          <div className="flex items-center justify-between px-2">
            <span className="text-xs sm:text-sm font-mono font-bold text-sky-800 uppercase tracking-wider flex items-center gap-2">
              <Play className="w-4 h-4 text-sky-600" />
              The 5-Step Cognitive Contract (The Engram State Machine)
            </span>
            <span className="text-xs font-mono text-slate-500 font-semibold">Memory Science · Not Video Delivery</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5">
            {processSteps.map((st, idx) => (
              <div key={idx} className="p-3 sm:p-3.5 rounded-2xl bg-white/90 border border-sky-200/90 shadow-md shadow-sky-900/5 hover:shadow-lg transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5 pb-1 border-b border-slate-100">
                    <span className="w-6 h-6 rounded-md bg-sky-100 text-sky-800 flex items-center justify-center font-mono text-xs font-bold">
                      {st.num}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 font-medium">{st.tag}</span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-0.5">{st.title}</h4>
                  <p className="text-[11px] text-slate-600 leading-snug">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 3 Core Technology Enablers */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-3 items-stretch">
          
          <div className="p-3.5 sm:p-4 rounded-2xl bg-white/90 border border-sky-200 shadow-md shadow-sky-900/5 hover:shadow-lg transition-all">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-100">
                <Network className="w-4 h-4" />
              </div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900">1. Knowledge Graph DAG</h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Knowledge is structured as an interconnected Directed Acyclic Graph with <code className="text-indigo-700 bg-indigo-50 px-1 py-0.5 rounded font-semibold">Requires</code> and <code className="text-indigo-700 bg-indigo-50 px-1 py-0.5 rounded font-semibold">BuildsOn</code> edges, enabling non-linear mastery.
            </p>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-white/90 border border-sky-300 shadow-md shadow-sky-900/5 hover:shadow-lg transition-all ring-1 ring-sky-400/20">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1.5 rounded-lg bg-sky-50 text-sky-600 border border-sky-100">
                <Database className="w-4 h-4" />
              </div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900">2. Grounded Factuals</h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Cryptographically verified truth units bound to graph nodes. Deterministic boundaries guarantee <strong className="text-sky-700">provable zero hallucination</strong>.
            </p>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-white/90 border border-sky-200 shadow-md shadow-sky-900/5 hover:shadow-lg transition-all">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1.5 rounded-lg bg-cyan-50 text-cyan-600 border border-cyan-100">
                <Mic className="w-4 h-4" />
              </div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900">3. 360° Socratic Voice Agent</h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Sub-second WebRTC voice audio grounded in employee's exact role, SMART objectives, live KPIs, and manager coaching notes.
            </p>
          </div>

        </motion.div>

        {/* Takeaway Banner in Rich Azure Blue */}
        <motion.div variants={itemVariants} className="rounded-2xl bg-gradient-to-r from-sky-800 via-blue-900 to-indigo-900 border border-sky-400/30 p-3 sm:p-4 flex items-center justify-between shadow-xl text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center text-white flex-shrink-0 shadow-inner">
              <ShieldCheck className="w-5 h-5 text-sky-200" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-sky-300 uppercase tracking-widest block">The Process Architecture</span>
              <p className="text-sm sm:text-base font-bold text-white leading-tight">
                Not a chatbot prompt. A deterministic, neuroscience-based state machine that ensures <span className="text-sky-200 font-bold">100% mastery and zero hallucination.</span>
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
// SLIDE 3: EXECUTIVE SUMMARY - STRENGTHS & ROI (Azure Blue & White)
// ==========================================
const s3 = `import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Lock, ShieldCheck, Target, TrendingUp, Factory, Globe, DollarSign, Quote, CheckCircle2, BookOpen } from 'lucide-react';

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
    <div className="relative w-full h-full flex flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-9 overflow-hidden select-none bg-gradient-to-br from-[#f8fafc] via-[#f0f7ff] to-[#e6f2fe] text-slate-800">
      {/* Luminous Azure & Cyan Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[750px] h-[340px] bg-gradient-to-b from-sky-400/25 via-blue-500/15 to-transparent blur-3xl rounded-full opacity-70" />
        <div className="absolute bottom-[-15%] right-[5%] w-[500px] h-[300px] bg-cyan-400/20 blur-3xl rounded-full opacity-60" />
        
        {/* Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.07]" 
          style={{
            backgroundImage: 'linear-gradient(to right, #0284c7 1px, transparent 1px), linear-gradient(to bottom, #0284c7 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} 
        />
      </div>

      ${getHeader('Executive Summary 3/3', 'Strategic Strengths, Market & Enterprise ROI')}

      {/* MAIN STAGE */}
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 my-auto max-w-6xl mx-auto w-full flex-1 flex flex-col justify-between py-1 gap-3">
        
        {/* Title Header */}
        <div className="text-center space-y-1">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-300/80 text-xs sm:text-sm font-bold text-sky-900 shadow-sm">
            <TrendingUp className="w-4 h-4 text-sky-600" />
            <span>OUR STRATEGIC INTENT · ENTERPRISE ROI & MARKET DOMINANCE</span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-slate-900 leading-tight">
            Our Strengths & Business Model: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-indigo-700">
              Tying Learning Directly to Job Performance & Capturing a $360B+ Market
            </span>
          </motion.h1>
        </div>

        {/* 4 Core Value Pillars Grid in White & Azure */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-stretch">
          
          <div className="p-4 rounded-2xl bg-white/90 border border-sky-200/90 shadow-md shadow-sky-900/5 hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-sky-700 uppercase block mb-1.5">01 · THE HR LOOP</span>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-1">Learning Tied to the Job</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Roles + KPIs + performance weaknesses auto-feed the Socratic tutor. Live mastery directly feeds the next review cycle.
              </p>
            </div>
            <div className="mt-3 py-1 px-2.5 rounded-lg bg-sky-50 text-xs font-semibold text-sky-800 border border-sky-200">
              L&D Becomes a KPI Driver
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/90 border border-sky-300 shadow-md shadow-sky-900/5 hover:shadow-lg transition-all flex flex-col justify-between ring-1 ring-sky-400/20">
            <div>
              <span className="text-xs font-mono font-bold text-blue-700 uppercase block mb-1.5">02 · FACTORY</span>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-1">Capability Studio</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                6-agent autonomous pipeline converts 300-page corporate manuals into full graph courses at <strong className="text-slate-900">near-zero marginal cost</strong>.
              </p>
            </div>
            <div className="mt-3 py-1 px-2.5 rounded-lg bg-blue-50 text-xs font-semibold text-blue-800 border border-blue-200">
              Near-Zero Content Cost
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/90 border border-sky-200/90 shadow-md shadow-sky-900/5 hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-indigo-700 uppercase block mb-1.5">03 · STRATEGIC ADVANTAGE</span>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-1">7 Compounding Pillars</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Compounding DAG data catalog, longitudinal memory decay curves, and deep enterprise workflow integration.
              </p>
            </div>
            <div className="mt-3 py-1 px-2.5 rounded-lg bg-indigo-50 text-xs font-semibold text-indigo-800 border border-indigo-200">
              High Enterprise Switching Cost
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/90 border border-sky-200/90 shadow-md shadow-sky-900/5 hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-cyan-800 uppercase block mb-1.5">04 · MONETIZATION</span>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-1">4 Scalable Streams</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Enterprise B2B per-seat SaaS, B2C Prosumer Subscriptions, Capability Studio API, and Public/NGO licensing.
              </p>
            </div>
            <div className="mt-3 py-1 px-2.5 rounded-lg bg-cyan-50 text-xs font-semibold text-cyan-900 border border-cyan-200">
              $360B+ Total Addressable Market
            </div>
          </div>

        </motion.div>

        {/* HIGH-VISIBILITY MARKET & RESEARCH CITATION BANNER in White & Azure */}
        <motion.div 
          variants={itemVariants}
          className="rounded-2xl bg-white/95 border border-sky-300 p-2.5 sm:p-3 flex items-center justify-between gap-3 shadow-md shadow-sky-900/5"
        >
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="p-2 rounded-xl bg-sky-100 text-sky-700 border border-sky-200 flex-shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-sky-900">
                  MARKET & RESEARCH BENCHMARK SOURCES
                </span>
                <span className="text-[10px] sm:text-xs font-mono px-2 py-0.5 rounded bg-sky-100 text-sky-800 border border-sky-200 font-bold">
                  $360B+ Global Corporate L&D
                </span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-700 leading-snug mt-0.5">
                <strong>Data Sources:</strong> Training Industry Inc. (Global Corporate Training Report) · ATD (State of the Industry) · Statista / Grand View Research Market Analysis.
              </p>
            </div>
          </div>

          <div className="hidden lg:flex items-center text-xs font-bold text-sky-800 bg-sky-100 border border-sky-300 px-3 py-1.5 rounded-xl flex-shrink-0">
            Institutional Market Data
          </div>
        </motion.div>

        {/* Executive ROI Quote in Rich Azure Blue */}
        <motion.div variants={itemVariants} className="rounded-2xl bg-gradient-to-r from-sky-800 via-blue-900 to-indigo-900 border border-sky-400/30 p-3 sm:p-3.5 flex items-center justify-between shadow-xl text-white">
          <div className="flex items-center gap-3.5">
            <Quote className="w-6 h-6 text-sky-200 flex-shrink-0" />
            <div className="text-left">
              <span className="text-xs font-mono font-bold text-sky-300 uppercase tracking-widest block">Executive Summary Synthesis</span>
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

fs.writeFileSync(path.join(slidesDir, 'Slide2LearningUnchanged.jsx'), s2);
fs.writeFileSync(path.join(slidesDir, 'Slide3MemoryParadox.jsx'), s3);
console.log('Updated Slide 2 and 3 to match Azure Blue & White Executive Theme');
