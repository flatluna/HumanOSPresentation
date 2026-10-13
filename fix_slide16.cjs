const fs = require('fs');
const path = require('path');

const slide16Code = `import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Lock, Mic, Radio, CheckCircle2, User, Target, Briefcase, Zap, ShieldCheck } from 'lucide-react';
import slide16Img from '../../Assets/Slide16.png';

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
      items: [
        { label: "SMART Objectives", field: "ActiveObjectives" },
        { label: "Corporate Goal & Impact", field: "ObjectiveInfo" },
        { label: "Live Performance KPIs", field: "Kpis" },
        { label: "Expected Success Outcomes", field: "ExpectedSuccessOutcomes" },
      ]
    },
    {
      category: "COACHING & GROWTH",
      icon: User,
      color: "text-emerald-400",
      border: "border-emerald-500/30",
      items: [
        { label: "Coaching Notes & Feeds", field: "CoachingInfo" },
        { label: "Linked SMART Goal", field: "ImpactsSmartObjective" },
        { label: "Recommended Track", field: "RecommendedLearningTrack" },
        { label: "Milestones & Progress", field: "GrowthMasteryProgress" },
      ]
    },
    {
      category: "SKILLS & REAL-TIME VOICE",
      icon: Zap,
      color: "text-cyan-400",
      border: "border-cyan-500/30",
      items: [
        { label: "Technical Competencies", field: "TechnicalSkills" },
        { label: "Soft Skills & Behaviors", field: "SoftSkills" },
        { label: "Sub-Second WebRTC Voice", field: "Azure OpenAI Voice" },
        { label: "Socratic Sparring", field: "Zero Spoon-Feeding" },
      ]
    }
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-4 sm:p-5 md:p-6 lg:p-8 overflow-hidden select-none bg-navy-950">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[700px] h-[320px] bg-gradient-to-b from-cyan-500/20 via-brand-500/15 to-transparent blur-3xl rounded-full opacity-60" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      </div>

      {/* TOP HEADER */}
      <motion.div 
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex items-center justify-between border-b border-slate-800/80 pb-2.5 sm:pb-3 flex-shrink-0"
      >
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-brand-500 to-indigo-600 shadow-lg shadow-brand-500/25 border border-white/20">
            <Brain className="w-5 h-5 text-white animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2.5">
              <span className="font-display font-bold tracking-tight text-white text-lg sm:text-xl">
                HUMAN <span className="text-brand-400">OS</span>
              </span>
              <span className="text-xs sm:text-sm uppercase font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 font-bold tracking-wider">
                AI Agent Architecture
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">Real-Time Voice & 360° Person Grounding</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-brand-500/40 shadow-sm">
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

      {/* MAIN STAGE */}
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 my-auto max-w-6xl mx-auto w-full flex-1 flex flex-col justify-between py-1 gap-2.5 sm:gap-3">
        
        {/* Title & Badge */}
        <div className="text-center space-y-0.5">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs sm:text-sm font-bold text-cyan-300 shadow-md">
            <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>REAL-TIME VOICE AGENT · TOTAL CONTEXT GROUNDING</span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-display text-white leading-tight">
            The 360° Socratic Voice Agent:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-brand-200 to-emerald-300">
              We Feed the AI a Complete Picture of the Person
            </span>
          </motion.h1>
        </div>

        {/* 2-Column Split: Visual Diagram Image (Left) + Context Breakdown Grid (Right) */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch w-full flex-1 min-h-0">
          
          {/* Left Column: Embedded Image Diagram with glow frame (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl glass-panel-glow border border-cyan-500/40 p-2 sm:p-2.5 flex flex-col justify-between shadow-xl relative overflow-hidden bg-slate-950/70 group">
            <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-slate-800/80">
              <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
                <Mic className="w-3.5 h-3.5 text-cyan-400" />
                Sub-Second Voice & Context Map
              </span>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-semibold">
                Architecture Visual
              </span>
            </div>

            <div className="relative rounded-xl overflow-hidden flex items-center justify-center flex-1 bg-slate-900/60 border border-slate-800">
              <img 
                src={slide16Img} 
                alt="360° Socratic Agent Total Context Grounding Diagram" 
                className="w-full h-full object-contain max-h-[300px] sm:max-h-[340px] rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>

            <div className="mt-1.5 pt-1 border-t border-slate-800 text-[10px] sm:text-[11px] text-slate-300 text-center leading-tight">
              <strong className="text-white">Total Person Grounding:</strong> The voice tutor knows role, KPIs, coaching gaps, and tools in real time.
            </div>
          </div>

          {/* Right Column: 4 Context Data Categories Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {contextDataPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className={"p-3 rounded-xl bg-slate-900/90 border " + pillar.border + " shadow-lg flex flex-col justify-between"}>
                  <div>
                    <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-slate-800">
                      <span className={"text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase " + pillar.color}>
                        {pillar.category}
                      </span>
                      <Icon className={"w-3.5 h-3.5 " + pillar.color} />
                    </div>

                    <div className="space-y-1.5">
                      {pillar.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="text-left">
                          <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white leading-tight">
                            <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                            <span>{item.label}</span>
                          </div>
                          <span className="text-[10px] font-mono text-slate-400 pl-4.5 block leading-tight">
                            {item.field}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </motion.div>

        {/* Bottom Synthesis Banner */}
        <motion.div variants={itemVariants} className="rounded-xl sm:rounded-2xl bg-gradient-to-r from-cyan-950/90 via-indigo-950/90 to-brand-950/90 border border-cyan-500/40 p-2.5 sm:p-3 flex flex-col md:flex-row items-center justify-between gap-2.5 shadow-xl">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 flex-shrink-0">
              <Mic className="w-4 h-4 text-cyan-300 animate-pulse" />
            </div>
            <div className="text-left">
              <span className="text-[9px] sm:text-[10px] font-mono font-bold text-cyan-300 uppercase tracking-widest block">
                The Competitive Difference
              </span>
              <p className="text-xs sm:text-sm font-bold text-white leading-tight">
                Generic chatbots know nothing about you. <span className="text-cyan-200">Our Socratic Voice Agent coaches THIS person, in THIS role, on THIS quarter's priorities.</span>
              </p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-1.5 text-xs font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 px-3 py-1 rounded-xl flex-shrink-0">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Zero Hallucination Guarded</span>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
`;

fs.writeFileSync(path.join(__dirname, 'src', 'components', 'slides', 'Slide16VoiceAgentContext.jsx'), slide16Code);
console.log('Fixed Slide16VoiceAgentContext.jsx with Slide16.png');
