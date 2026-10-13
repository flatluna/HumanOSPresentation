import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Lock, ShieldCheck, Network, Database, Mic, Video, Users, Building2, Factory, HeartHandshake, Trophy } from 'lucide-react';

export function Slide2LearningUnchanged({ slide, currentIndex = 1, totalSlides = 17 }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.02 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 6 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
  };

  const apps = [
    { icon: Users, title: "Engram Academy", desc: "Consumer self-learner app: active recall & graph-guided mastery." },
    { icon: Building2, title: "Human OS Employee", desc: "Career paths, \"My Brain\" mastery index, personal growth tracking." },
    { icon: Network, title: "Human OS Enterprise", desc: "HR org charts, job descriptions, AI-generated career roadmaps." },
    { icon: Factory, title: "Capability Studio", desc: "Multi-agent factory turning raw PDFs into full graph courses." },
    { icon: HeartHandshake, title: "NGO Automate", desc: "Community & non-profit volunteer and program operations." },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-3 sm:p-5 md:p-6 lg:p-7 overflow-hidden select-none bg-gradient-to-br from-[#f8fafc] via-[#f0f7ff] to-[#e6f2fe] text-slate-800">
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
                Resumen Ejecutivo 2/3
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">Lo que hemos construido: un ecosistema conectado y operativo</p>
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
  

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 my-auto max-w-6xl mx-auto w-full flex-1 flex flex-col justify-start py-1 gap-2 sm:gap-2.5">
        
        <div className="text-center space-y-1">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-300/80 text-xs sm:text-sm font-bold text-sky-900 shadow-sm">
            <Sparkles className="w-4 h-4 text-sky-600" />
            <span>TEC360 · DE LA ESTRATEGIA A LA EJECUCIÓN CON CAPACIDADES HUMANAS</span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-slate-900 leading-tight">
            Five Interconnected Apps, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-indigo-700">
              Un grafo de conocimiento compartido
            </span>
          </motion.h1>
        </div>

        {/* 5 Apps Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 items-stretch">
          {apps.map((a, idx) => {
            const Icon = a.icon;
            return (
              <div key={idx} className="p-2.5 sm:p-3 rounded-2xl bg-white/90 border border-sky-200/90 shadow-md shadow-sky-900/5 hover:shadow-lg transition-all flex flex-col justify-between">
                <div>
                  <div className="p-1.5 rounded-lg bg-sky-50 text-sky-600 border border-sky-100 w-fit mb-2">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">{a.title}</h4>
                  <p className="text-[11px] text-slate-600 leading-snug">{a.desc}</p>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Core Tech Foundation Row */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-5 gap-2 items-stretch">
          <div className="p-2.5 rounded-2xl bg-white/90 border border-sky-200 shadow-md shadow-sky-900/5">
            <div className="flex items-center gap-2 mb-1.5">
              <Network className="w-4 h-4 text-indigo-600" />
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">Knowledge Graph</h4>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">Engrams connected via Requires / BuildsOn edges — not a linear playlist.</p>
          </div>
          <div className="p-2.5 rounded-2xl bg-white/90 border border-sky-300 shadow-md shadow-sky-900/5 ring-1 ring-sky-400/20">
            <div className="flex items-center gap-2 mb-1.5">
              <Database className="w-4 h-4 text-sky-600" />
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">Grounded Factuals</h4>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">Cada respuesta se vincula con fuentes verificadas para reducir errores y decisiones sin respaldo.</p>
          </div>
          <div className="p-2.5 rounded-2xl bg-white/90 border border-sky-200 shadow-md shadow-sky-900/5">
            <div className="flex items-center gap-2 mb-1.5">
              <Mic className="w-4 h-4 text-cyan-600" />
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">Realtime Voice Tutor</h4>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">Acompañamiento conversacional para practicar decisiones, procesos y habilidades.</p>
          </div>
          <div className="p-2.5 rounded-2xl bg-white/90 border border-sky-200 shadow-md shadow-sky-900/5">
            <div className="flex items-center gap-2 mb-1.5">
              <Video className="w-4 h-4 text-rose-500" />
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">AI Video Engine</h4>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">Transforma conocimiento complejo en cápsulas visuales para acelerar la comprensión.</p>
          </div>
          <div className="p-2.5 rounded-2xl bg-white/90 border border-sky-200 shadow-md shadow-sky-900/5">
            <div className="flex items-center gap-2 mb-1.5">
              <Trophy className="w-4 h-4 text-amber-500" />
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">Gamification Engine</h4>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">Refuerza hábitos, práctica y avance continuo hacia las metas de cada frente.</p>
          </div>
        </motion.div>

        {/* Takeaway Banner */}
        <motion.div variants={itemVariants} className="rounded-2xl bg-gradient-to-r from-sky-800 via-blue-900 to-indigo-900 border border-sky-400/30 p-2 sm:p-3 flex items-center justify-between shadow-xl text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center text-white flex-shrink-0 shadow-inner">
              <ShieldCheck className="w-5 h-5 text-sky-200" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-sky-300 uppercase tracking-widest block">Cómo aporta Human OS a Tec360</span>
              <p className="text-sm sm:text-base font-bold text-white leading-tight">
                Human OS conecta las metas de Tec360 con rutas de capacidades, conocimiento verificable, aprendizaje aplicado y seguimiento de resultados para cada proyecto.
              </p>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
