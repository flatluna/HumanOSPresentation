import React from 'react';
import { motion } from 'framer-motion';

export function SlideFrame({ children, slideKey }) {
  return (
    <div className="w-full h-full flex items-center justify-center p-2 sm:p-3 md:p-4 lg:p-6 overflow-hidden">
      {/* Dynamic 16:9 responsive frame that never overflows viewport */}
      <div 
        className="w-full h-full max-w-[1600px] max-h-[900px] aspect-[16/9] bg-navy-950 rounded-xl sm:rounded-2xl lg:rounded-3xl border border-slate-800 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.9)] relative overflow-hidden flex flex-col justify-between"
        style={{
          maxHeight: 'calc(100vh - 1.5rem)',
          maxWidth: 'calc((100vh - 1.5rem) * 1.7777777778)',
          width: 'min(100%, calc((100vh - 1.5rem) * 1.7777777778))',
          height: 'min(100%, calc(100vw / 1.7777777778))'
        }}
      >
        <motion.div
          key={slideKey}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="w-full h-full"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
