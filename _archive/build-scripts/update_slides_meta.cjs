const fs = require('fs');
const path = require('path');

const slidesData = [
  {
    id: 1,
    title: "Exec Summary 1: The Macro Problem",
    category: "Executive Briefing",
    headline: "What Problem Are We Solving? The AI Cognitive Atrophy Crisis",
    subhead: "The Multi-Trillion Dollar AI Paradox & Classroom Failure",
    oneLiner: "Raw AI is causing human cognitive atrophy, while industrial 1-to-many classrooms fail to build durable mastery.",
    speakerNotes: [
      {
        tag: "Executive Hook",
        text: "\"Look around the AI industry today. Every startup is building tools that think for us, write for us, and remember for us. But when AI does all the cognitive heavy lifting, human competence collapses. Workers become helpless intellectual passengers who cannot audit hallucinations.\""
      },
      {
        tag: "Classroom Failure",
        text: "\"Industrial classrooms and EdTech 1.0 video streaming (Coursera/Udemy) have <6% completion rates because passive streaming does not encode memory. Bloom proved 1:1 tutoring yields +2.0σ (+98th percentile). AI breaks the economics to make 1:1 globally abundant.\""
      }
    ]
  },
  {
    id: 2,
    title: "Exec Summary 2: How & The Process",
    category: "Executive Briefing",
    headline: "How Does Human OS Work? The 5-Step Process & Voice Engine",
    subhead: "The 5-Step Cognitive Contract + 360° Socratic Voice Tutor",
    oneLiner: "A deterministic state machine (Hypothesis -> Teaching -> Recall -> Production -> Assessment) powered by sub-second voice audio and Knowledge Graphs.",
    speakerNotes: [
      {
        tag: "The End-to-End Engine",
        text: "\"Human OS is not a chatbot prompt. It is a deterministic state machine built on memory science: 1. Hypothesis (predict first), 2. Teaching, 3. Recall (unassisted active retrieval), 4. Production, 5. Assessment.\""
      },
      {
        tag: "Core Enablers",
        text: "\"Supported by a Directed Acyclic Knowledge Graph, cryptographically verified Grounded Factuals (provable zero hallucination), and a 360° Real-Time Socratic Voice Tutor that refuses to spoon-feed.\""
      }
    ]
  },
  {
    id: 3,
    title: "Exec Summary 3: Strengths & ROI",
    category: "Executive Briefing",
    headline: "Our Strengths, Business Model & Enterprise ROI",
    subhead: "The HR Performance Loop & Capturing a $360B+ Market",
    oneLiner: "Tying training directly to employee roles and quarterly KPIs, turning L&D into a measurable business driver.",
    speakerNotes: [
      {
        tag: "Strategic Strengths",
        text: "\"Our 4 core pillars: 1. The HR Performance Loop (training tied to employee roles, KPIs, and reviews), 2. Capability Studio (near-zero marginal content generation cost), 3. Seven compounding structural advantages, 4. Four monetization streams across a $360B+ addressable market.\""
      },
      {
        tag: "The Executive ROI",
        text: "\"We turn L&D from an unmeasured cost center into provable business ROI. HR can finally prove training moved the needle on quarterly business KPIs.\""
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
console.log('Updated slides.js with Executive Summary briefing metadata');
