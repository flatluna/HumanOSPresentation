import React, { useState, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Slide1TheGap } from './slides/Slide1TheGap';
import { Slide2WhatWeAdd } from './slides/Slide2WhatWeAdd';
import { Slide3TheAsk } from './slides/Slide3TheAsk';

const slides = [Slide1TheGap, Slide2WhatWeAdd, Slide3TheAsk];

export function PartnerPitchApp() {
  const [index, setIndex] = useState(0);
  const totalSlides = slides.length;

  const next = useCallback(() => setIndex((i) => (i < totalSlides - 1 ? i + 1 : i)), [totalSlides]);
  const prev = useCallback(() => setIndex((i) => (i > 0 ? i - 1 : i)), []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') { e.preventDefault(); next(); }
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); prev(); }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [next, prev]);

  const Slide = slides[index];

  return (
    <div className="relative w-screen h-screen bg-[#05070f] flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full max-w-[1600px] aspect-video shadow-2xl">
        <Slide currentIndex={index} totalSlides={totalSlides} />
      </div>

      <button
        onClick={prev}
        disabled={index === 0}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/90 border border-slate-200 shadow-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white transition-all"
      >
        <ChevronLeft className="w-5 h-5 text-slate-700" />
      </button>
      <button
        onClick={next}
        disabled={index === totalSlides - 1}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/90 border border-slate-200 shadow-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white transition-all"
      >
        <ChevronRight className="w-5 h-5 text-slate-700" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition-all ${i === index ? 'bg-sky-400 w-6' : 'bg-white/40'}`}
          />
        ))}
      </div>
    </div>
  );
}
