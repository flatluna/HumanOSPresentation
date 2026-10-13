import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Layers, Sparkles, Check, ChevronRight } from 'lucide-react';

export function SlideGridModal({ 
  isOpen, 
  onClose, 
  slides, 
  currentIndex, 
  onSelectSlide 
}) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-navy-950/90 backdrop-blur-md flex items-center justify-center p-6"
      >
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="w-full max-w-5xl max-h-[85vh] bg-slate-900 border border-slate-700/80 rounded-2xl p-6 shadow-2xl flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-brand-400" />
              <h3 className="font-bold text-slate-100 text-lg">Slide Overview Navigator</h3>
              <span className="text-xs bg-brand-500/10 text-brand-400 border border-brand-500/20 px-2.5 py-0.5 rounded-full font-medium">
                {slides.length} {slides.length === 1 ? 'Slide' : 'Slides'}
              </span>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Grid of Slide Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 overflow-y-auto pr-1">
            {slides.map((slide, idx) => {
              const isActive = idx === currentIndex;
              return (
                <motion.div
                  key={slide.id || idx}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    onSelectSlide(idx);
                    onClose();
                  }}
                  className={`cursor-pointer rounded-xl p-4 border transition-all flex flex-col justify-between h-48 relative overflow-hidden ${
                    isActive 
                      ? 'bg-brand-950/40 border-brand-500 shadow-[0_0_20px_rgba(14,165,233,0.3)] ring-2 ring-brand-400/50' 
                      : 'bg-slate-950/50 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-brand-400 font-bold">
                        SLIDE {String(idx + 1).padStart(2, '0')}
                      </span>
                      {isActive && (
                        <span className="flex items-center gap-1 text-[10px] bg-brand-500 text-white font-semibold px-2 py-0.5 rounded-full">
                          <Check className="w-3 h-3" /> Active
                        </span>
                      )}
                    </div>
                    <h4 className="font-bold text-sm text-slate-100 line-clamp-2 mt-1">
                      {slide.title}
                    </h4>
                    <p className="text-xs text-slate-400 line-clamp-2">
                      {slide.headline}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="italic truncate">{slide.category}</span>
                    <span className="flex items-center text-brand-400 group-hover:translate-x-1 transition">
                      Jump <ChevronRight className="w-3 h-3 ml-0.5" />
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 flex justify-between items-center text-xs text-slate-500">
            <span>Press <kbd className="px-1.5 py-0.5 bg-slate-800 text-slate-300 rounded font-mono text-[10px]">G</kbd> to toggle overview anytime</span>
            <span>Human OS Pitch Deck</span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
