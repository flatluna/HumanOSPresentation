const fs = require('fs');
const path = require('path');

const slidesData = [
  {
    id: 1,
    title: "Title / Hook",
    category: "Vision & Thesis",
    headline: "Human OS — Turning Knowledge into Durable Mastery",
    subhead: "Humans First. AI Agents Second.",
    oneLiner: "The one-to-one learning operating system that strengthens human memory instead of replacing it.",
    speakerNotes: [
      {
        tag: "Provocation / Hook",
        text: "\"Look around the AI industry today. Every startup is racing to build tools that think for us, write for us, and remember for us. But when AI does all the cognitive heavy lifting, human competence collapses. We are generating generations of intellectual passengers.\""
      },
      {
        tag: "The Market Shift",
        text: "\"Enterprises don't want employees who are helpless without a prompt bar. They want people with deep, internalized, durable mastery who can command AI with sovereign judgment.\""
      }
    ]
  },
  {
    id: 2,
    title: "Macro Problem: 1:Many Failure",
    category: "Problem & Market Inefficiency",
    headline: "The World Has Changed, Learning Hasn't",
    subhead: "Breaking the Industrial 1-to-Many Model",
    oneLiner: "The economics that forced one-to-many educational models are finally broken by AI.",
    speakerNotes: [
      {
        tag: "Historical Context",
        text: "\"For all of human history, great teaching was scarce. We built classrooms not because they were pedagogically optimal, but because we couldn't give every child an Aristotle or a master tutor.\""
      },
      {
        tag: "Bloom's 2-Sigma Solution",
        text: "\"Benjamin Bloom proved 1-to-1 mastery tutoring shifts student performance by two full standard deviations (+2.0σ) into the 98th percentile. Today, AI agent swarms make 1-to-1 mastery cheaper than electricity.\""
      }
    ]
  },
  {
    id: 3,
    title: "The Memory Paradox",
    category: "Core Thesis & Psychology",
    headline: "The Memory Paradox — Friction by Design",
    subhead: "Why Easier Learning Leads to Cognitive Atrophy",
    oneLiner: "We are the anti-offloading platform: deliberate friction that turns cognitive effort into durable human mastery.",
    speakerNotes: [
      {
        tag: "The Core Provocation",
        text: "\"The easier it is to look up an answer with AI, the weaker your own organic memory becomes if you only search and never recall. When you delegate all synthesis to ChatGPT, you get short-term task completion at the cost of long-term brain atrophy.\""
      }
    ]
  },
  {
    id: 4,
    title: "The Solution: Human OS",
    category: "The Vision",
    headline: "Human OS: Humans First. AI Agents Second.",
    subhead: "Sovereign Cognitive Mastery",
    oneLiner: "We don't replace human cognition. We use autonomous AI agent swarms to train, test, and encode durable biological memory.",
    speakerNotes: [
      {
        tag: "The Paradigm Shift",
        text: "\"Human OS flips the script: sovereign judgment, Socratic sparring, and lifelong knowledge graphs.\""
      }
    ]
  },
  {
    id: 5,
    title: "What We're Building",
    category: "Product Architecture",
    headline: "A Trustworthy 1:1 Guide that Produces Validated Mastery",
    subhead: "The 3 Core Product Pillars",
    oneLiner: "Built on a Knowledge Graph + Grounded Facts, so the tutor can never hallucinate and never lets you skip the hard part.",
    speakerNotes: [
      {
        tag: "The 3 Pillars",
        text: "\"1. Plans a path with you from your role and KPIs. 2. Adapts to how you learn. 3. Stays with you patiently until mastery.\""
      }
    ]
  },
  {
    id: 6,
    title: "The Engram: Atomic Unit",
    category: "Pedagogical Core",
    headline: "The Engram: Our Atomic Unit of Mastery",
    subhead: "The 5-Step Cognitive Contract",
    oneLiner: "Every unit of learning is engineered around memory science, not content delivery.",
    speakerNotes: [
      {
        tag: "The Cognitive Contract",
        text: "\"Hypothesis (predict first) -> Teaching -> Recall (active retrieval) -> Production (real-world application) -> Assessment.\""
      }
    ]
  },
  {
    id: 7,
    title: "The Knowledge Graph",
    category: "Strategic Intent",
    headline: "The Knowledge Graph: Why We're Not a Playlist",
    subhead: "Non-Linear Mastery via Directed Acyclic Graphs",
    oneLiner: "The graph is a compounding data asset — every document ingested makes the whole ecosystem smarter.",
    speakerNotes: [
      {
        tag: "Graph Advantage",
        text: "\"Courses aren't linear videos. Knowledge is a Directed Acyclic Graph of interconnected concepts with Requires and BuildsOn edges.\""
      }
    ]
  },
  {
    id: 8,
    title: "Factuals: Guardrails",
    category: "Trust & Accuracy",
    headline: "Factuals: Zero-Hallucination Guardrails",
    subhead: "Verifiable Grounded Epistemic Units",
    oneLiner: "Knowledge Facts are extracted from verified source material, creating deterministic bounds so the AI tutor can never invent answers.",
    speakerNotes: [
      {
        tag: "Trust Layer",
        text: "\"The Tutor Agent is strictly bounded by validated Factuals — it cannot invent answers or hallucinate.\""
      }
    ]
  },
  {
    id: 9,
    title: "“My Brain” Mastery Map",
    category: "Live Telemetry",
    headline: "“My Brain”: Mastery You Can See",
    subhead: "Real-Time Cognitive Retention Telemetry",
    oneLiner: "Coursera tells you a course is finished. We tell you exactly what a person will still remember next Tuesday — and when to intervene.",
    speakerNotes: [
      {
        tag: "The Telemetry Climax",
        text: "\"Every mastered Engram becomes a glowing neuron with live recall probability % based on Wixted & Ebbesen forgetting-curve math.\""
      }
    ]
  },
  {
    id: 10,
    title: "Capability Studio",
    category: "Content Factory",
    headline: "Capability Studio: The AI Course Factory",
    subhead: "Autonomous Multi-Agent Curriculum Pipeline",
    oneLiner: "Content supply is our marginal cost — and it is near zero. We turn 300-page enterprise PDFs into full graph courses autonomously.",
    speakerNotes: [
      {
        tag: "Autonomous Factory",
        text: "\"Curador -> Graph Architect -> Facts Extractor -> Experience Designer -> Video/Media -> Tutor Agent.\""
      }
    ]
  },
  {
    id: 11,
    title: "Live Interactive Demo",
    category: "Interactive Proof",
    headline: "Live Demo: The Socratic AI Experience",
    subhead: "4-Minute Multi-Agent Live Walkthrough",
    oneLiner: "Drop a PDF -> enter an Engram -> voice-tutor sparring -> role/KPI context -> live neuron telemetry update.",
    speakerNotes: [
      {
        tag: "Demo Protocol",
        text: "\"Walk through PDF drop, voice tutor refusing to spoon-feed, role-aware coaching, and end on the glowing neuron brain map.\""
      }
    ]
  },
  {
    id: 12,
    title: "HR Performance Loop",
    category: "Enterprise Wedge",
    headline: "The HR Performance Loop: Learning Tied to the Job",
    subhead: "From Training Cost Center to Measurable KPI Driver",
    oneLiner: "We turn L&D from an unmeasured expense into a measurable driver of business KPIs. HR can finally prove training moved the needle.",
    speakerNotes: [
      {
        tag: "The Enterprise Wedge",
        text: "\"Job description + KPIs + review weaknesses feed the AI tutor, and live mastery directly feeds the next review cycle.\""
      }
    ]
  },
  {
    id: 13,
    title: "The Full Ecosystem",
    category: "Platform Breadth",
    headline: "The Full Ecosystem: Beyond Consumer",
    subhead: "One Engine, Multiple High-Margin Markets",
    oneLiner: "Engram Academy (B2C) + Human OS Employee (B2B) + Human OS Enterprise (L&D) + Capability Studio + NGO Automate.",
    speakerNotes: [
      {
        tag: "Multi-Market Strategy",
        text: "\"One single cognitive engine monetizes across consumer subscriptions, enterprise seat licenses, and public sector upskilling.\""
      }
    ]
  },
  {
    id: 14,
    title: "Strategic Intent & Defensibility",
    category: "Strategic Intent",
    headline: "The 7 Layers of Our Strategic Intent",
    subhead: "Why Raw LLMs Cannot Replicate Human OS",
    oneLiner: "Raw LLMs provide raw answers. Human OS owns the structured cognitive architecture, proprietary graph, and longitudinal memory curves.",
    speakerNotes: [
      {
        tag: "Strategic Intent",
        text: "\"Knowledge graph DAG, Grounded Factuals, deterministic state machine, video continuity, network effects, HR loop, and decay curves.\""
      }
    ]
  },
  {
    id: 15,
    title: "Market & Business Model",
    category: "Market Opportunity",
    headline: "Capturing a $360B+ Enterprise L&D Market",
    subhead: "Four Synergistic Revenue Streams",
    oneLiner: "High-margin SaaS enterprise seat licensing backed by our proprietary HR Performance Loop.",
    speakerNotes: [
      {
        tag: "Business Model",
        text: "\"B2C subscriptions, B2B per-seat licenses, Capability Studio course-generation API, and NGO institutional licensing.\""
      }
    ]
  },
  {
    id: 16,
    title: "The Real-Time Voice Agent",
    category: "Agent Architecture",
    headline: "The 360° Socratic Voice Agent: Total Context Grounding",
    subhead: "We Feed the AI a Complete Picture of the Person — Nothing Left Out",
    oneLiner: "Sub-second WebRTC voice tutor with full grounding in role purpose, daily tasks, SMART objectives, live KPIs, manager coaching notes, and tool sets.",
    speakerNotes: [
      {
        tag: "Total Person Grounding",
        text: "\"We feed the AI a complete 360 picture of the person: RoleTitle/Purpose, CoreResponsibilities, DailyActivities, ActiveObjectives, KPIs, CoachingInfo, ImpactsSmartObjective, TechnicalSkills, SoftSkills, Tools, ExpectedSuccessOutcomes. Nothing is left out.\""
      },
      {
        tag: "Real-Time Socratic Voice",
        text: "\"Powered by Azure OpenAI Realtime sub-second voice audio over WebRTC. The tutor answers immediately, actively listens, refuses to give direct answers, and challenges the employee with their real daily KPIs.\""
      }
    ]
  },
  {
    id: 17,
    title: "The Ask & Vision",
    category: "The Vision & Round",
    headline: "We're Making Humans Permanently More Capable",
    subhead: "Series Seed Partnership Opportunity",
    oneLiner: "Humans First. AI Agents Second. Turning knowledge into durable mental mastery.",
    speakerNotes: [
      {
        tag: "Closing Pitch",
        text: "\"We're raising our Seed round to scale Capability Studio, expand enterprise GTM, and accelerate research.\""
      }
    ]
  }
];

const fileContent = `export const initialSlides = ${JSON.stringify(slidesData, null, 2)};\n`;
fs.writeFileSync(path.join(__dirname, 'src', 'data', 'slides.js'), fileContent);

// Viewer Code update
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
  MousePointer2 
} from 'lucide-react';

export function PresentationViewer() {
  const [slides] = useState(initialSlides);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [isGridOpen, setIsGridOpen] = useState(false);
  const [isLaserEnabled, setIsLaserEnabled] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const totalSlides = slides.length;
  const currentSlide = slides[currentSlideIndex] || slides[0];

  // Navigation functions
  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

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
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

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

      {/* Main Presentation Stage */}
      <main className="w-full h-full flex items-center justify-center">
        <SlideFrame transitionType="slide" slideKey={currentSlide.id || currentSlideIndex}>
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
console.log('Updated 17-slide data and PresentationViewer.jsx');
