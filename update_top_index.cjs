const fs = require('fs');
const path = require('path');

const viewerCode = `import React, { useState, useEffect, useCallback } from 'react';
import { initialSlides } from '../data/slides';
import { SlideFrame } from './SlideFrame';
import { Slide1Title } from './slides/Slide1Title';
import { Slide2LearningUnchanged } from './slides/Slide2LearningUnchanged';
import { Slide3MemoryParadox } from './slides/Slide3MemoryParadox';
import { Slide4Solution } from './slides/Slide4Solution';
import { Slide5WhatWeAreBuilding } from './slides/Slide5WhatWeAreBuilding';
import { Slide6Engram } from './slides/Slide6Engram';
import { Slide7KnowledgeGraph } from './slides/Slide7KnowledgeGraph';
import { Slide8Factuals } from './slides/Slide8Factuals';
import { Slide9MyBrain } from './slides/Slide9MyBrain';
import { Slide10CapabilityStudio } from './slides/Slide10CapabilityStudio';
import { Slide11LiveDemo } from './slides/Slide11LiveDemo';
import { Slide12HRPerformanceLoop } from './slides/Slide12HRPerformanceLoop';
import { Slide13FullEcosystem } from './slides/Slide13FullEcosystem';
import { Slide14Defensibility } from './slides/Slide14Defensibility';
import { Slide15BusinessModel } from './slides/Slide15BusinessModel';
import { Slide16VoiceAgentContext } from './slides/Slide16VoiceAgentContext';
import { Slide17AskAndVision } from './slides/Slide17AskAndVision';
import { PresenterNotesModal } from './PresenterNotesModal';
import { SlideGridModal } from './SlideGridModal';
import { LaserPointer } from './LaserPointer';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Minimize2, 
  Layers, 
  Mic, 
  MousePointer2,
  ListOrdered,
  ArrowRight,
  Hash
} from 'lucide-react';

export function PresentationViewer() {
  const [slides] = useState(initialSlides);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [isGridOpen, setIsGridOpen] = useState(false);
  const [isLaserEnabled, setIsLaserEnabled] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [jumpInput, setJumpInput] = useState('');

  const totalSlides = slides.length;
  const currentSlide = slides[currentSlideIndex] || slides[0];

  // Navigation functions
  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const goToSlide = useCallback((index) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlideIndex(index);
    }
  }, [totalSlides]);

  const handleJumpSubmit = (e) => {
    e.preventDefault();
    const targetNum = parseInt(jumpInput, 10);
    if (!isNaN(targetNum) && targetNum >= 1 && targetNum <= totalSlides) {
      goToSlide(targetNum - 1);
      setJumpInput('');
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Keyboard Navigation handler
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;

      switch (e.key) {
        case 'ArrowRight':
        case 'Space':
        case 'PageDown':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          prevSlide();
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullscreen();
          break;
        case 'n':
        case 'N':
          e.preventDefault();
          setIsNotesOpen((prev) => !prev);
          break;
        case 'g':
        case 'G':
          e.preventDefault();
          setIsGridOpen((prev) => !prev);
          break;
        case 'l':
        case 'L':
          e.preventDefault();
          setIsLaserEnabled((prev) => !prev);
          break;
        case 'Escape':
          setIsNotesOpen(false);
          setIsGridOpen(false);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Render slide content
  const renderSlideContent = () => {
    const props = {
      slide: currentSlide,
      currentIndex: currentSlideIndex,
      totalSlides: totalSlides,
    };

    switch (currentSlide.id) {
      case 1:
        return <Slide1Title {...props} />;
      case 2:
        return <Slide2LearningUnchanged {...props} />;
      case 3:
        return <Slide3MemoryParadox {...props} />;
      case 4:
        return <Slide4Solution {...props} />;
      case 5:
        return <Slide5WhatWeAreBuilding {...props} />;
      case 6:
        return <Slide6Engram {...props} />;
      case 7:
        return <Slide7KnowledgeGraph {...props} />;
      case 8:
        return <Slide8Factuals {...props} />;
      case 9:
        return <Slide9MyBrain {...props} />;
      case 10:
        return <Slide10CapabilityStudio {...props} />;
      case 11:
        return <Slide11LiveDemo {...props} />;
      case 12:
        return <Slide12HRPerformanceLoop {...props} />;
      case 13:
        return <Slide13FullEcosystem {...props} />;
      case 14:
        return <Slide14Defensibility {...props} />;
      case 15:
        return <Slide15BusinessModel {...props} />;
      case 16:
        return <Slide16VoiceAgentContext {...props} />;
      case 17:
        return <Slide17AskAndVision {...props} />;
      default:
        return <Slide1Title {...props} />;
    }
  };

  return (
    <div className="relative w-screen h-screen bg-[#05070f] text-slate-100 flex items-center justify-center overflow-hidden">
      {/* Laser pointer overlay */}
      <LaserPointer enabled={isLaserEnabled} />

      {/* TOP INDEX & QUICK JUMP BAR */}
      <header className="absolute top-2 sm:top-2.5 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/85 backdrop-blur-md border border-slate-700/70 shadow-2xl opacity-40 hover:opacity-100 focus-within:opacity-100 transition-opacity duration-200">
        <div className="flex items-center gap-1.5 text-xs font-mono text-brand-400 font-bold">
          <ListOrdered className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">INDEX:</span>
        </div>

        {/* Slide Selector Dropdown */}
        <select
          value={currentSlideIndex}
          onChange={(e) => goToSlide(Number(e.target.value))}
          className="bg-slate-950/90 text-slate-200 text-xs font-mono font-medium rounded-lg px-2.5 py-1 border border-slate-700/80 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 max-w-[180px] sm:max-w-[300px] md:max-w-[420px] truncate cursor-pointer"
          title="Jump directly to any slide"
        >
          {slides.map((s, idx) => (
            <option key={s.id || idx} value={idx} className="bg-slate-900 text-slate-200 py-1">
              Slide {String(idx + 1).padStart(2, '0')}: {s.title}
            </option>
          ))}
        </select>

        {/* Direct Number Input Jump */}
        <form onSubmit={handleJumpSubmit} className="flex items-center gap-1">
          <div className="relative flex items-center">
            <span className="absolute left-1.5 text-[10px] text-slate-500 font-mono">#</span>
            <input
              type="number"
              min="1"
              max={totalSlides}
              value={jumpInput}
              onChange={(e) => setJumpInput(e.target.value)}
              placeholder={\`1-\${totalSlides}\`}
              className="w-16 bg-slate-950/90 text-slate-200 text-xs font-mono pl-4 pr-1 py-1 rounded-lg border border-slate-700/80 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 placeholder:text-slate-500"
              title={\`Type slide number (1 to \${totalSlides}) and press Enter\`}
            />
          </div>
          <button
            type="submit"
            className="px-2 py-1 rounded-lg bg-brand-500/20 hover:bg-brand-500 text-brand-300 hover:text-white border border-brand-500/40 text-[11px] font-mono font-bold transition flex items-center gap-0.5"
            title="Go to slide"
          >
            <span>Go</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </form>

        <div className="h-3.5 w-px bg-slate-700 mx-0.5" />

        {/* Overview Grid Trigger */}
        <button
          onClick={() => setIsGridOpen(true)}
          className="px-2 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-[11px] font-mono font-medium flex items-center gap-1 transition"
          title="Open Visual Slide Grid (G)"
        >
          <Layers className="w-3 h-3 text-brand-400" />
          <span className="hidden sm:inline">Grid (G)</span>
        </button>
      </header>

      {/* Main Presentation Stage */}
      <main className="w-full h-full flex items-center justify-center">
        <SlideFrame slideKey={currentSlide.id || currentSlideIndex}>
          {renderSlideContent()}
        </SlideFrame>
      </main>

      {/* Floating Presenter Control Bar */}
      <nav aria-label="Presentation controls" className="absolute bottom-3 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/60 shadow-xl opacity-30 hover:opacity-100 transition-opacity duration-200">
        <button
          onClick={prevSlide}
          disabled={currentSlideIndex === 0}
          className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition"
          title="Previous Slide (← / PageUp)"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <span className="text-xs font-mono font-medium px-2 text-slate-400">
          {currentSlideIndex + 1} / {totalSlides}
        </span>

        <button
          onClick={nextSlide}
          disabled={currentSlideIndex === totalSlides - 1}
          className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition"
          title="Next Slide (→ / Space / PageDown)"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        <div className="h-3.5 w-px bg-slate-700 mx-1" />

        <button
          onClick={() => setIsNotesOpen(true)}
          className={"p-1.5 rounded-full transition " + (isNotesOpen ? "text-brand-400 bg-brand-500/20" : "text-slate-300 hover:text-white hover:bg-slate-800")}
          title="Speaker Notes (N)"
        >
          <Mic className="w-4 h-4" />
        </button>

        <button
          onClick={() => setIsGridOpen(true)}
          className={"p-1.5 rounded-full transition " + (isGridOpen ? "text-brand-400 bg-brand-500/20" : "text-slate-300 hover:text-white hover:bg-slate-800")}
          title="Slide Overview (G)"
        >
          <Layers className="w-4 h-4" />
        </button>

        <button
          onClick={() => setIsLaserEnabled(!isLaserEnabled)}
          className={"p-1.5 rounded-full transition " + (isLaserEnabled ? "text-red-400 bg-red-500/20" : "text-slate-300 hover:text-white hover:bg-slate-800")}
          title="Laser Pointer (L)"
        >
          <MousePointer2 className="w-4 h-4" />
        </button>

        <button
          onClick={toggleFullscreen}
          className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-slate-800 transition"
          title="Toggle Fullscreen (F)"
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>
      </nav>

      {/* Speaker Notes Modal */}
      <PresenterNotesModal
        isOpen={isNotesOpen}
        onClose={() => setIsNotesOpen(false)}
        currentSlide={currentSlide}
        currentIndex={currentSlideIndex}
        totalSlides={totalSlides}
        onPrev={prevSlide}
        onNext={nextSlide}
        slides={slides}
      />

      {/* Slide Overview Grid Modal */}
      <SlideGridModal
        isOpen={isGridOpen}
        onClose={() => setIsGridOpen(false)}
        slides={slides}
        currentIndex={currentSlideIndex}
        onSelectSlide={(index) => setCurrentSlideIndex(index)}
      />
    </div>
  );
}
`;

fs.writeFileSync(path.join(__dirname, 'src', 'components', 'PresentationViewer.jsx'), viewerCode);
console.log('Added top Index bar to PresentationViewer.jsx');
