import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Lock, TrendingDown, Users, Flame, ShieldAlert, Quote, BookOpen, Repeat, GraduationCap } from 'lucide-react';

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
    <div className="relative w-full h-full flex flex-col justify-between p-3 sm:p-5 md:p-6 lg:p-7 overflow-hidden select-none bg-gradient-to-br from-[#f8fafc] via-[#f0f7ff] to-[#e6f2fe] text-slate-800">
      {/* Luminous Azure Blue & White Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[750px] h-[340px] bg-gradient-to-b from-sky-400/25 via-blue-500/15 to-transparent blur-3xl rounded-full opacity-70" />
        <div className="absolute bottom-[-15%] right-[5%] w-[500px] h-[300px] bg-cyan-400/20 blur-3xl rounded-full opacity-60" />
        <div className="absolute top-[30%] left-[-10%] w-[400px] h-[350px] bg-indigo-300/20 blur-3xl rounded-full opacity-40" />
        
        {/* Subtle Light Grid Pattern */}
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
                Executive Summary 1/3
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">The Macro Problem & Cognitive Paradox</p>
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
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 my-auto max-w-6xl mx-auto w-full flex-1 flex flex-col justify-start py-1 gap-2 sm:gap-2.5">
        
        {/* Title Header */}
        <div className="text-center space-y-1">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-300/80 text-xs sm:text-sm font-bold text-sky-900 shadow-sm">
            <Flame className="w-4 h-4 text-rose-500" />
            <span>THE MULTI-TRILLION DOLLAR CRISIS IN HUMAN COMPETENCE</span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-base sm:text-xl md:text-2xl font-extrabold tracking-tight font-display text-slate-900 leading-tight">
            What Problem Are We Solving? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-indigo-700">
              AI Is Causing Human Cognitive Atrophy & Learning Hasn't Evolved
            </span>
          </motion.h1>
        </div>

        <motion.div variants={itemVariants} className="flex justify-center">
          <video className="w-full max-w-2xl max-h-20 sm:max-h-24 rounded-xl border border-sky-200 bg-slate-950 object-contain shadow-md" src="/RobotsFinal.m4v" controls preload="metadata" />
        </motion.div>

        {/* Two-Column: The Memory Paradox definition + supporting research pillars */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-12 gap-3 items-stretch">

          {/* Left: Definition Callout */}
          <div className="md:col-span-5 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-sky-800 via-blue-900 to-indigo-900 border border-sky-400/30 shadow-xl text-white flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 pb-2 mb-2 border-b border-white/15">
                <Quote className="w-4 h-4 text-sky-200 flex-shrink-0" />
                <span className="text-xs font-mono font-bold text-sky-300 uppercase tracking-widest">The Memory Paradox</span>
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold leading-snug">
                Reliance on external digital tools and AI can <span className="text-sky-200">weaken our internal memory systems</span> — even as those same tools enhance our cognitive capabilities.
              </p>
            </div>
            <div className="mt-3 py-1.5 px-2.5 rounded-lg bg-white/10 border border-white/20 text-[11px] sm:text-xs font-mono text-sky-100 font-semibold">
              Source: Oakley et al., 2025
            </div>
          </div>

          {/* Right: 2x2 research-grounded pillars */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">

            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/90 border border-sky-200/90 shadow-md shadow-sky-900/5 hover:shadow-lg transition-all">
              <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-slate-100">
                <span className="text-xs font-mono font-bold text-rose-600 uppercase">Cognitive Offloading</span>
                <div className="p-1.5 rounded-lg bg-rose-50 text-rose-600 border border-rose-100"><TrendingDown className="w-4 h-4" /></div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Skipping retrieval, integration, and pattern recognition by consulting AI immediately weakens <strong className="text-slate-900">declarative and procedural memory</strong> — the intellectual passenger effect.
              </p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/90 border border-sky-200/90 shadow-md shadow-sky-900/5 hover:shadow-lg transition-all">
              <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-slate-100">
                <span className="text-xs font-mono font-bold text-amber-600 uppercase">Atrophied Mechanisms</span>
                <div className="p-1.5 rounded-lg bg-amber-50 text-amber-600 border border-amber-100"><Repeat className="w-4 h-4" /></div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Bypassing spaced repetition and retrieval practice starves the brain of the durable memory "schemata" and neural manifolds needed for <strong className="text-slate-900">critical thinking &amp; skill mastery</strong>.
              </p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/90 border border-sky-200/90 shadow-md shadow-sky-900/5 hover:shadow-lg transition-all">
              <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-slate-100">
                <span className="text-xs font-mono font-bold text-slate-600 uppercase">Structural Failure</span>
                <div className="p-1.5 rounded-lg bg-slate-50 text-slate-600 border border-slate-100"><Users className="w-4 h-4" /></div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Industrial 1:many classrooms and EdTech 1.0 streaming (Coursera/Udemy) yield <strong className="text-slate-900">&lt;6% completion rates</strong>, compounding the reversal of the Flynn Effect.
              </p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/90 border border-sky-300 shadow-md shadow-sky-900/5 hover:shadow-lg transition-all ring-1 ring-sky-400/20">
              <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-slate-100">
                <span className="text-xs font-mono font-bold text-sky-700 uppercase">Societal Decline</span>
                <div className="p-1.5 rounded-lg bg-sky-50 text-sky-600 border border-sky-100"><GraduationCap className="w-4 h-4" /></div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The paradox is linked to the <strong className="text-sky-700">reversal of the Flynn Effect</strong> — IQ scores in developed nations plateauing or declining as discovery-based learning combines with rising cognitive offloading.
              </p>
            </div>

          </div>
        </motion.div>

        {/* Big Card: Education Has Not Evolved */}
        <motion.div variants={itemVariants} className="rounded-2xl bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 border border-sky-400/30 p-4 sm:p-5 shadow-xl text-white">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center text-white flex-shrink-0 shadow-inner">
              <BookOpen className="w-5 h-5 text-sky-200" />
            </div>
            <div className="text-left space-y-1.5">
              <span className="text-xs font-mono font-bold text-sky-300 uppercase tracking-widest block">Education Hasn't Evolved in Years</span>
              <p className="text-xs sm:text-sm md:text-base text-white/90 leading-snug">
                Classrooms were built for <strong className="text-sky-200">economics, not achievement</strong> — a compromise for not being able to give everyone their own tutor. Despite AI's rise, learning is still <strong className="text-sky-200">one-to-many</strong>, and unguarded chatbots make it worse: cognitive offloading means learning less, from a source you can't always trust — just as demand for <strong className="text-sky-200">accurate, trustworthy learning</strong> has never been higher.
              </p>
            </div>
          </div>
        </motion.div>

        {/* High-Impact Executive Quote Banner in Rich Azure Blue */}
        <motion.div variants={itemVariants} className="rounded-2xl bg-gradient-to-r from-sky-800 via-blue-900 to-indigo-900 border border-sky-400/30 p-3.5 sm:p-4.5 flex items-center justify-between shadow-xl text-white">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center text-white flex-shrink-0 shadow-inner">
              <ShieldAlert className="w-5 h-5 text-sky-200" />
            </div>
            <div className="text-left">
              <span className="text-xs font-mono font-bold text-sky-300 uppercase tracking-widest block">The Core Risk</span>
              <p className="text-sm sm:text-base md:text-lg font-bold text-white leading-snug">
                “The easier it is to look up an answer with AI, the weaker your organic memory becomes. <span className="text-sky-200">Workers become helpless intellectual passengers, unable to audit hallucinations or reason without a prompt bar.”</span>
              </p>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
