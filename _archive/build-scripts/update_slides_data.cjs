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
    category: "Data Moat",
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
    title: "Defensibility & Moat",
    category: "Defensibility",
    headline: "The 7 Layers of Our Competitive Moat",
    subhead: "Why Raw LLMs Cannot Replicate Human OS",
    oneLiner: "Raw LLMs provide raw answers. Human OS owns the structured cognitive architecture, proprietary graph, and longitudinal memory curves.",
    speakerNotes: [
      {
        tag: "Structural Moats",
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
console.log('Updated slides.js with all 16 slides');
