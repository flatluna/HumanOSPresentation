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
              <span className="text-xs sm:text-sm uppercase font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 font-bold tracking-wider">
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

// Slide 16: The Real-Time Voice Agent & Total Context Grounding
const slide16VoiceContent = `import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Lock, Mic, Radio, CheckCircle2, User, Target, Briefcase, Zap, ShieldCheck } from 'lucide-react';

export function Slide16VoiceAgentContext({ slide, currentIndex = 15, totalSlides = 17 }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.02 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 6 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
  };

  const contextDataPillars = [
    {
      category: "ROLE & OPERATIONS",
      icon: Briefcase,
      color: "text-indigo-400",
      border: "border-indigo-500/30",
      bg: "bg-indigo-950/20",
      items: [
        { label: "Role Title & Purpose", field: "RoleTitle / RolePurpose" },
        { label: "Core Responsibilities", field: "CoreResponsibilities" },
        { label: "Daily Activities", field: "DailyActivities" },
        { label: "Tools & Software", field: "Tools" },
      ]
    },
    {
      category: "PERFORMANCE & OKRs",
      icon: Target,
      color: "text-brand-400",
      border: "border-brand-500/30",
      bg: "bg-brand-950/20",
      items: [
        { label: "SMART Objectives (Quarter/Status/Dept)", field: "ActiveObjectives" },
        { label: "Corporate Goal + Impact + Measurement", field: "ObjectiveInfo" },
        { label: "Live Performance KPIs", field: "Kpis" },
        { label: "Expected Success Outcomes", field: "ExpectedSuccessOutcomes" },
      ]
    },
    {
      category: "COACHING & GROWTH",
      icon: User,
      color: "text-emerald-400",
      border: "border-emerald-500/30",
      bg: "bg-emerald-950/20",
      items: [
        { label: "Coaching Notes & Manager Feeds", field: "CoachingInfo" },
        { label: "Coaching → Linked SMART Objective", field: "ImpactsSmartObjective" },
        { label: "Recommended Learning Track", field: "RecommendedLearningTrack" },
        { label: "Milestones & Progress Tracking", field: "GrowthMasteryProgress" },
      ]
    },
    {
      category: "SKILLS & CAPABILITIES",
      icon: Zap,
      color: "text-cyan-400",
      border: "border-cyan-500/30",
      bg: "bg-cyan-950/20",
      items: [
        { label: "Technical Competencies", field: "TechnicalSkills" },
        { label: "Soft Skills & Leadership Behaviors", field: "SoftSkills" },
        { label: "Sub-Second WebRTC Realtime Audio", field: "Azure OpenAI Voice" },
        { label: "Adaptive Socratic Dialogue", field: "Zero Spoon-Feeding" },
      ]
    }
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-9 overflow-hidden select-none bg-navy-950">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[700px] h-[320px] bg-gradient-to-b from-cyan-500/20 via-brand-500/15 to-transparent blur-3xl rounded-full opacity-60" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      </div>

      ${getHeader('AI Agent Architecture', 'Real-Time Voice & 360° Person Grounding')}

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 my-auto max-w-6xl mx-auto w-full flex-1 flex flex-col justify-between py-1 gap-3 sm:gap-4">
        
        {/* Title & Badge */}
        <div className="text-center space-y-1">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs sm:text-sm font-bold text-cyan-300 shadow-md">
            <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>REAL-TIME VOICE AGENT · TOTAL CONTEXT GROUNDING</span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-white leading-tight">
            The 360° Socratic Voice Agent: <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-brand-200 to-emerald-300">
              We Feed the AI a Complete Living Picture of the Person
            </span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xs sm:text-sm md:text-base text-slate-300 max-w-4xl mx-auto">
            Sub-second latency voice tutor with full conversational memory, Socratic friction, and zero generic responses. <strong className="text-white">Nothing left out.</strong>
          </motion.p>
        </div>

        {/* 4 Context Data Categories Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-stretch">
          {contextDataPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className={\`p-3.5 sm:p-4 rounded-2xl bg-slate-900/90 border \${pillar.border} shadow-lg flex flex-col justify-between\`}>
                <div>
                  <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-slate-800">
                    <span className={\`text-[11px] sm:text-xs font-mono font-bold tracking-wider \${pillar.color} uppercase\`}>
                      {pillar.category}
                    </span>
                    <Icon className={\`w-4 h-4 \${pillar.color}\`} />
                  </div>

                  <div className="space-y-2">
                    {pillar.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="text-left">
                        <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                          <span>{item.label}</span>
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 pl-5 block">
                          \`{item.field}\`
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Bottom Synthesis Banner */}
        <motion.div variants={itemVariants} className="rounded-2xl bg-gradient-to-r from-cyan-950/90 via-indigo-950/90 to-brand-950/90 border border-cyan-500/40 p-3 sm:p-4 flex flex-col md:flex-row items-center justify-between gap-3 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 flex-shrink-0">
              <Mic className="w-5 h-5 text-cyan-300 animate-pulse" />
            </div>
            <div className="text-left">
              <span className="text-[10px] sm:text-xs font-mono font-bold text-cyan-300 uppercase tracking-widest block">
                The Competitive Difference
              </span>
              <p className="text-xs sm:text-sm md:text-base font-bold text-white leading-tight">
                Generic chatbots know nothing about you. <span className="text-cyan-200">Our Socratic Voice Agent knows your exact role, KPIs, manager coaching notes, and mastery decay in real time.</span>
              </p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-1.5 text-xs font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 px-3 py-1.5 rounded-xl flex-shrink-0">
            <ShieldCheck className="w-4 h-4" />
            <span>Zero Hallucination Guarded</span>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
`;

// Slide 17 (former Slide 16): The Ask & Vision
const slide17AskContent = `import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Lock, Rocket, Mail } from 'lucide-react';

export function Slide17AskAndVision({ slide, currentIndex = 16, totalSlides = 17 }) {
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
        <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-brand-500/25 via-indigo-600/15 to-transparent blur-3xl rounded-full opacity-70" />
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      </div>

      ${getHeader('The Vision & Round', 'Series Seed Partnership')}

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 my-auto max-w-6xl mx-auto w-full flex-1 flex flex-col justify-between py-2 gap-4">
        <div className="text-center space-y-2">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-brand-500/30 text-sm sm:text-base font-bold text-brand-300 shadow-md">
            <Rocket className="w-5 h-5 text-brand-400" />
            <span>JOIN THE COGNITIVE REVOLUTION</span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-display text-white">
            We're Not Making Learning Easier. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-indigo-200 to-sky-300">
              We're Making Humans Permanently More Capable.
            </span>
          </motion.h1>
        </div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-lg flex flex-col justify-between">
            <div>
              <span className="text-xs sm:text-sm font-mono font-bold text-brand-400 uppercase">01 · THE ROUND</span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1.5">Series Seed</h3>
              <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
                Scaling Capability Studio autonomous generation, accelerating enterprise GTM, and expanding research team.
              </p>
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-brand-950/30 border border-brand-500/40 shadow-xl flex flex-col justify-between">
            <div>
              <span className="text-xs sm:text-sm font-mono font-bold text-brand-300 uppercase">02 · USE OF FUNDS</span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1.5">Allocation</h3>
              <p className="text-sm sm:text-base text-slate-200 mt-2 leading-relaxed">
                <strong>50%</strong> AI Agent Engineering · <strong>30%</strong> Enterprise Sales & GTM · <strong>20%</strong> Content Operations.
              </p>
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-lg flex flex-col justify-between">
            <div>
              <span className="text-xs sm:text-sm font-mono font-bold text-emerald-400 uppercase">03 · MILESTONES</span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1.5">12-Month Target</h3>
              <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
                25+ Enterprise pilots · 10,000+ Active Prosumers · $2.5M ARR run-rate.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="rounded-2xl bg-gradient-to-r from-brand-950/95 via-indigo-950/90 to-slate-900/95 border border-brand-500/50 p-4 sm:p-6 text-center shadow-xl">
          <p className="text-lg sm:text-2xl md:text-3xl font-extrabold text-white italic font-display">
            “Humans First. AI Agents Second. Turning knowledge into durable mental mastery.”
          </p>
          <div className="mt-3 text-sm sm:text-base font-mono text-brand-300 flex items-center justify-center gap-2.5">
            <Mail className="w-5 h-5" />
            <span>Jorge Perez Luna · jorge@humanos.ai</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
`;

fs.writeFileSync(path.join(slidesDir, 'Slide16VoiceAgentContext.jsx'), slide16VoiceContent);
fs.writeFileSync(path.join(slidesDir, 'Slide17AskAndVision.jsx'), slide17AskContent);

// Remove former Slide16AskAndVision if exists
try {
  fs.unlinkSync(path.join(slidesDir, 'Slide16AskAndVision.jsx'));
} catch (e) {}

console.log('Created Slide16VoiceAgentContext and updated Slide17AskAndVision');
