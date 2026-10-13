import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Clock, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Mic, 
  Volume2, 
  Maximize2, 
  Play, 
  Pause, 
  RotateCcw,
  Quote,
  Flame,
  CheckCircle2
} from 'lucide-react';

export function PresenterNotesModal({ 
  isOpen, 
  onClose, 
  currentSlide, 
  currentIndex, 
  totalSlides, 
  onPrev, 
  onNext, 
  slides 
}) {
  const [seconds, setSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  useEffect(() => {
    let interval = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const formatTime = (totalSec) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const nextSlide = slides[currentIndex + 1];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-navy-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      >
        <motion.div 
          initial={{ scale: 0.96, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.96, opacity: 0, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 280 }}
          className="w-full max-w-5xl h-[85vh] bg-slate-900 border border-slate-700/60 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-100"
        >
          {/* Header */}
          <div className="px-6 py-4 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <div>
                <h3 className="font-semibold text-slate-200 text-sm tracking-wide uppercase flex items-center gap-2">
                  <Mic className="w-4 h-4 text-brand-400" />
                  Presenter Mode & Speaker Script
                </h3>
                <p className="text-xs text-slate-400">Human OS · Slide {currentIndex + 1} of {totalSlides}: {currentSlide.title}</p>
              </div>
            </div>

            {/* Timer & Controls */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-slate-800/80 border border-slate-700 rounded-lg px-3 py-1.5">
                <Clock className="w-4 h-4 text-brand-400" />
                <span className="font-mono text-sm font-semibold tracking-wider text-slate-200">
                  {formatTime(seconds)}
                </span>
                <button 
                  onClick={() => setIsTimerRunning(!isTimerRunning)} 
                  className="p-1 hover:text-white text-slate-400 transition"
                  title={isTimerRunning ? "Pause timer" : "Resume timer"}
                >
                  {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>
                <button 
                  onClick={() => setSeconds(0)} 
                  className="p-1 hover:text-white text-slate-400 transition"
                  title="Reset timer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                onClick={onClose}
                className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Body Content */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-12 overflow-hidden">
            {/* Left Column: Speaker Notes & Provocations (7 cols) */}
            <div className="md:col-span-7 p-6 overflow-y-auto space-y-5 border-r border-slate-800 bg-slate-900/60">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold tracking-wider text-brand-400 flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-amber-400" />
                  Investor Pitch Script & Key Points
                </span>
                <span className="text-xs bg-slate-800 border border-slate-700 text-slate-300 px-2.5 py-0.5 rounded-full">
                  Target: 90 seconds
                </span>
              </div>

              {/* Notes list */}
              <div className="space-y-4">
                {currentSlide.speakerNotes?.map((note, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 transition"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Quote className="w-3.5 h-3.5 text-brand-400" />
                      <span className="text-xs font-semibold text-brand-300 uppercase tracking-wider">
                        {note.tag}
                      </span>
                    </div>
                    <p className="text-slate-200 text-sm leading-relaxed whitespace-pre-line font-normal">
                      {note.text}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Key Takeaway / Elevator Punch */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-brand-950/50 to-indigo-950/40 border border-brand-800/40">
                <div className="flex items-center gap-2 text-brand-300 font-semibold text-xs uppercase mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-brand-400" />
                  Anchor Message
                </div>
                <p className="text-xs text-slate-300 italic">
                  "{currentSlide.headline}" — Position Human OS not as a toy tutor, but as the indispensable cognitive substrate for the post-AI workforce.
                </p>
              </div>
            </div>

            {/* Right Column: Slide Context & Next Slide Preview (5 cols) */}
            <div className="md:col-span-5 p-6 overflow-y-auto bg-slate-950/40 flex flex-col justify-between space-y-6">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Current Slide Glance
                </h4>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <div className="text-xs font-semibold text-brand-400">{currentSlide.category}</div>
                  <div className="text-sm font-bold text-white">{currentSlide.headline}</div>
                  <div className="text-xs text-slate-400 italic">{currentSlide.subhead}</div>
                </div>

                {/* Highlights */}
                {currentSlide.highlights && (
                  <div className="mt-4 space-y-2">
                    <span className="text-xs font-semibold text-slate-400">Key Themes:</span>
                    <div className="space-y-1.5">
                      {currentSlide.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                          <span><strong className="text-slate-100">{h.label}:</strong> {h.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Next Slide Preview */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-dashed border-slate-700">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Up Next
                </span>
                {nextSlide ? (
                  <div>
                    <span className="text-xs font-medium text-brand-400">Slide {currentIndex + 2}</span>
                    <p className="text-xs font-semibold text-slate-200 line-clamp-1">{nextSlide.headline || nextSlide.title}</p>
                  </div>
                ) : (
                  <span className="text-xs text-slate-500 italic">
                    (Ready for Slide 2 — submit next slide content anytime)
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Footer Nav inside Modal */}
          <div className="px-6 py-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-500">
              Press <kbd className="px-1.5 py-0.5 bg-slate-800 text-slate-300 rounded border border-slate-700 font-mono text-[10px]">P</kbd> or <kbd className="px-1.5 py-0.5 bg-slate-800 text-slate-300 rounded border border-slate-700 font-mono text-[10px]">Esc</kbd> to toggle notes
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={onPrev}
                disabled={currentIndex === 0}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:pointer-events-none text-xs font-medium text-slate-200 flex items-center gap-1 transition"
              >
                <ChevronLeft className="w-3.5 h-3.5" /> Previous
              </button>
              <button
                onClick={onNext}
                disabled={currentIndex === totalSlides - 1}
                className="px-3 py-1.5 rounded-lg bg-brand-600 hover:bg-brand-500 disabled:opacity-40 disabled:pointer-events-none text-xs font-medium text-white flex items-center gap-1 transition"
              >
                Next <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
