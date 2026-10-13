import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Lock, ShieldCheck, XCircle, CheckCircle2, Quote } from 'lucide-react';

export function Slide3MemoryParadox({ slide, currentIndex = 2, totalSlides = 17 }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.02 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 6 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
  };

  const rows = [
    { label: "Learning Model", them: "Chatbot-guided, one-to-one \"path\"", us: "Deterministic 5-step Engram state machine (Hypothesis → Assessment)" },
    { label: "Knowledge Grounding", them: "General-purpose LLM reasoning", us: "Knowledge Graph + Grounded Factuals — provably zero hallucination" },
    { label: "Memory Guarantee", them: "\"Adapts to how you learn\"", us: "Active recall + spaced retrieval engineered into every Engram" },
    { label: "Voice Interaction", them: "Text-first chat interface", us: "Azure OpenAI Realtime + WebRTC sub-second natural voice tutoring" },
    { label: "Content Supply", them: "Manual curriculum partnerships", us: "Multi-agent Capability Studio: PDF → full graph course, autonomously" },
    { label: "Enterprise Context", them: "Generic learner profile", us: "Grounded in role, KPIs, manager coaching notes, and daily activities" },
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
                Executive Summary 3/3
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">How We Solve It: Our Unique Competitive Differentiator</p>
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
  

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 my-auto max-w-6xl mx-auto w-full flex-1 flex flex-col justify-between py-1 gap-3">
        
        <div className="text-center space-y-1">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-300/80 text-xs sm:text-sm font-bold text-sky-900 shadow-sm">
            <Sparkles className="w-4 h-4 text-sky-600" />
            <span>ONE-TO-ONE LEARNING IS THE CATEGORY · WE WIN ON PROOF, NOT PROMISE</span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-slate-900 leading-tight">
            Everyone Wants "One-to-One." <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-indigo-700">
              We Already Built the Graph, the Facts, and the Voice.
            </span>
          </motion.h1>
        </div>

        {/* Comparison Table */}
        <motion.div variants={itemVariants} className="rounded-2xl bg-white/90 border border-sky-200 shadow-md shadow-sky-900/5 overflow-hidden">
          <div className="grid grid-cols-12 bg-sky-50/80 border-b border-sky-200 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wide text-slate-600">
            <div className="col-span-3 px-3 py-2">Dimension</div>
            <div className="col-span-4 px-3 py-2 flex items-center gap-1.5 text-rose-700"><XCircle className="w-3.5 h-3.5" /> Generic AI Tutors</div>
            <div className="col-span-5 px-3 py-2 flex items-center gap-1.5 text-sky-800"><CheckCircle2 className="w-3.5 h-3.5" /> Human OS</div>
          </div>
          {rows.map((r, idx) => (
            <div key={idx} className={"grid grid-cols-12 text-[11px] sm:text-xs " + (idx % 2 === 0 ? "bg-white/60" : "bg-sky-50/40")}>
              <div className="col-span-3 px-3 py-2 font-bold text-slate-800 border-t border-sky-100">{r.label}</div>
              <div className="col-span-4 px-3 py-2 text-slate-500 border-t border-sky-100">{r.them}</div>
              <div className="col-span-5 px-3 py-2 text-sky-800 font-medium border-t border-sky-100">{r.us}</div>
            </div>
          ))}
        </motion.div>

        {/* Takeaway Banner */}
        <motion.div variants={itemVariants} className="rounded-2xl bg-gradient-to-r from-sky-800 via-blue-900 to-indigo-900 border border-sky-400/30 p-3 sm:p-4 flex items-center justify-between shadow-xl text-white">
          <div className="flex items-center gap-3">
            <Quote className="w-5 h-5 text-sky-200 flex-shrink-0" />
            <div>
              <span className="text-xs font-mono font-bold text-sky-300 uppercase tracking-widest block">The Differentiator</span>
              <p className="text-sm sm:text-base font-bold text-white leading-tight">
                Every serious player is racing toward "one-to-one." <span className="text-sky-200">We're the only one shipping it as a graph, grounded in facts, spoken in real time.</span>
              </p>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
