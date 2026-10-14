/**
 * DEVI FARLO - Central Team Data File
 * 
 * Styled with the custom palette:
 * - Primary Dark: #363D39
 * - Primary Accent / Light: #D8C8B8
 * 
 * Contains all eight members' information, leadership messages,
 * timeline milestones, and team strengths.
 */

export const teamMembers = [
  {
    id: "DF-01",
    name: "Hiran Joy",
    role: "Captain",
    title: "Team Captain & Strategic Lead",
    image: "/images/hiran-joy.jpg",
    strength: "Visionary Leadership",
    superpower: "The Visionary",
    motto: "When we lift each other up, the impossible becomes inevitable.",
    bio: "Guiding DEVI FARLO with relentless empathy, clear strategic direction, and inspiring leadership. Hiran synthesizes disparate ideas into ambitious, cohesive breakthroughs and inspires the team to push past self-imposed limits.",
    contribution: "Architected DEVI FARLO's core mission framework and spearheaded cross-functional innovation roadmaps.",
    skills: ["Strategic Direction", "Team Cohesion", "Crisis Resolution", "Public Speaking"],
    stats: { leadership: 98, vision: 99, resilience: 95 },
    color: "#D8C8B8"
  },
  {
    id: "DF-02",
    name: "Angel Wilson",
    role: "Vice-Captain",
    title: "Vice-Captain & Operations Architect",
    image: "/images/angel-wilson.jpg",
    strength: "Tactical Execution & Synergy",
    superpower: "The Catalyst",
    motto: "Action without discipline is chaos; discipline with passion is unstoppable.",
    bio: "The steady engine behind DEVI FARLO's momentum. Angel bridges grand concepts into seamless real-world execution, ensuring every member operates in their zone of genius.",
    contribution: "Built the synchronized sprint pipeline and agile operational matrix that cut project iteration cycles by 60%.",
    skills: ["Operational Architecture", "Sprint Velocity", "Empathetic Mentorship", "Risk Mitigation"],
    stats: { execution: 97, synergy: 96, precision: 94 },
    color: "#E2D5C7"
  },
  {
    id: "DF-03",
    name: "Arya A",
    role: "Technical Lead",
    title: "Chief System Architect",
    image: "/images/arya-a.jpg",
    strength: "Algorithmic Mastery",
    superpower: "The Code Alchemist",
    motto: "Clean code is poetry that runs machines and empowers humanity.",
    bio: "Pioneering high-scale technical systems with elegant micro-architectures. Arya turns mathematically daunting problems into clean, high-performance computing masterpieces.",
    contribution: "Engineered DEVI FARLO's distributed real-time data engine, processing mission-critical events with sub-millisecond latency.",
    skills: ["Cloud Architecture", "Distributed Systems", "Performance Tuning", "Next-Gen Web"],
    stats: { logic: 99, architecture: 98, speed: 92 },
    color: "#CBBBAE"
  },
  {
    id: "DF-04",
    name: "Ananya T",
    role: "Creative Director",
    title: "Head of Experience & Design",
    image: "/images/ananya-t.jpg",
    strength: "Human-Centric Design",
    superpower: "The Experience Maestro",
    motto: "Beauty is not decoration; it is how emotion and function meet.",
    bio: "Crafting sensory, memorable interfaces that resonate deep in the human heart. Ananya elevates every touchpoint into an immersive, emotionally resonant journey.",
    contribution: "Designed DEVI FARLO's iconic visual identity and modular design language, praised for unrivaled accessibility and flair.",
    skills: ["Design Systems", "Emotional UX", "Motion Design", "Visual Storytelling"],
    stats: { aesthetics: 99, empathy: 97, creativity: 98 },
    color: "#EAE0D5"
  },
  {
    id: "DF-05",
    name: "Alant Saji",
    role: "AI & Data Scientist",
    title: "Machine Intelligence Pioneer",
    image: "/images/alant-saji.jpg",
    strength: "Cognitive Intelligence",
    superpower: "The Neural Pioneer",
    motto: "Data without curiosity is blind; intelligence with empathy illuminates the world.",
    bio: "Exploring the frontiers of neural computation and predictive modeling. Alant uncovers hidden patterns in chaotic noise, steering team decisions with data-grounded confidence.",
    contribution: "Trained predictive analytics models and generative reasoning assistants tailored to accelerate research workflows.",
    skills: ["Deep Learning", "Predictive Modeling", "Graph Algorithms", "Data Synthesis"],
    stats: { intelligence: 98, research: 97, analytics: 95 },
    color: "#D8C8B8"
  },
  {
    id: "DF-06",
    name: "Stephano Benny",
    role: "Product Strategist",
    title: "Product & Impact Lead",
    image: "/images/stephano-benny.jpg",
    strength: "Market Foresight",
    superpower: "The Grand Strategist",
    motto: "True innovation doesn't just anticipate the future; it crafts it responsibly.",
    bio: "Connecting technological capability with genuine human need. Stephano shapes product trajectories that deliver measurable value and enduring real-world transformation.",
    contribution: "Defined the team's long-term user roadmap and secured key collaborative partnerships across global tech ecosystems.",
    skills: ["Product Roadmap", "User Economics", "Strategic Alliances", "Growth Metrics"],
    stats: { strategy: 96, userCentricity: 98, marketSense: 95 },
    color: "#C5B4A3"
  },
  {
    id: "DF-07",
    name: "Gautham M",
    role: "Full-Stack Engineer",
    title: "Rapid Prototyper & Builder",
    image: "/images/gautham-m.jpg",
    strength: "Relentless Execution",
    superpower: "The Dynamo",
    motto: "Speed turns ideas into reality; perseverance turns reality into perfection.",
    bio: "A prolific builder who transforms whiteboard sketches into working, battle-tested software in hours. Gautham brings electric energy and infectious optimism to every sprint.",
    contribution: "Developed dynamic interactive toolkits and responsive test harnesses that enabled seamless prototype deployments.",
    skills: ["Full-Stack Dev", "Rapid Prototyping", "API Integration", "Creative Problem Solving"],
    stats: { velocity: 99, enthusiasm: 100, adaptability: 96 },
    color: "#DFD2C4"
  },
  {
    id: "DF-08",
    name: "Neeha Nazer",
    role: "Security & Reliability Lead",
    title: "Systems Resilience Guardian",
    image: "/images/neeha-nazer.jpg",
    strength: "Resilience & Security",
    superpower: "The Fortress",
    motto: "Trust is hard-won and easily lost; we build fortresses of reliability.",
    bio: "The unwavering protector of DEVI FARLO's integrity and infrastructure. Neeha ensures everything we launch is bulletproof, privacy-first, and resilient against any storm.",
    contribution: "Built zero-trust security postures and automated self-healing test infrastructures with 99.99% uptime guarantees.",
    skills: ["Cybersecurity", "Zero-Trust Protocol", "Fault Tolerance", "Observability"],
    stats: { defense: 99, reliability: 98, integrity: 100 },
    color: "#D8C8B8"
  }
];

export const teamStats = [
  { value: 8, label: "TEAM MEMBERS", prefix: "0", suffix: "", description: "United under one purpose" },
  { value: 1, label: "SHARED VISION", prefix: "0", suffix: "", description: "Building tomorrow today" },
  { value: 1, label: "TEAM IDENTITY", prefix: "0", suffix: "", description: "We are DEVI FARLO" },
  { value: "∞", label: "POSSIBILITIES", prefix: "", suffix: "", description: "Boundless collective potential" }
];

export const missionVision = {
  vision: {
    title: "01 — SHARED VISION",
    heading: "Shaping Tomorrow Through Collective Brilliance",
    description: "To become a pioneering beacon of unified human ambition — where diverse intellects harmonize to conquer grand challenges and inspire generations to believe that 'You can do it.'"
  },
  mission: {
    title: "OUR MISSION",
    heading: "Turning Bold Ideals Into Unbreakable Reality",
    description: "DEVI FARLO is committed to excellence through radical collaboration, continuous reinvention, and unwavering resilience. We build transformative solutions that uplift our community and redefine the boundaries of what a dedicated team can achieve."
  },
  coreValues: [
    {
      title: "Radical Synergy",
      desc: "Individually strong, together invincible. We celebrate every member's unique perspective as our greatest superpower.",
      icon: "Users"
    },
    {
      title: "Unyielding Faith",
      desc: "Our heartbeat: 'You can do it.' When doubt creeps in, we become each other's compass and courage.",
      icon: "HeartHandshake"
    },
    {
      title: "Relentless Craft",
      desc: "We do not settle for ordinary. Every line of code, design nuance, and strategic decision is forged with uncompromising care.",
      icon: "Flame"
    },
    {
      title: "Endless Horizons",
      desc: "Limits exist only to be transcended. We embrace the unknown with curiosity, humility, and hunger.",
      icon: "Compass"
    }
  ]
};

export const journeyTimeline = [
  {
    year: "Chapter 01",
    phase: "The Spark of Assembly",
    title: "Eight Paths Converge",
    description: "Eight distinct minds from different domains discovered a shared longing: to build something far greater than themselves. DEVI FARLO was born.",
    highlight: "Foundation of Our Code & Creed",
    tag: "Genesis"
  },
  {
    year: "Chapter 02",
    phase: "The Crucible of Growth",
    title: "Forging Trust in the Storm",
    description: "When our first major initiative met unprecedented technical bottlenecks, we refused to fracture. Through late nights and mutual belief, we emerged twice as sharp.",
    highlight: "'You Can Do It' Became Our Anthem",
    tag: "Resilience"
  },
  {
    year: "Chapter 03",
    phase: "The Breakthrough",
    title: "Harmonized Velocity",
    description: "Roles clicked into perfect symbiosis. Systems scaled effortlessly, creative visions materialized, and DEVI FARLO delivered historic benchmark results.",
    highlight: "Milestone Deployment & Global Recognition",
    tag: "Triumph"
  },
  {
    year: "Chapter 04",
    phase: "The Infinite Horizon",
    title: "Only the Beginning",
    description: "With roots set deep in camaraderie and eyes lifted toward uncharted frontiers, our chapter continues with boundless ambition.",
    highlight: "Scaling Impact Across New Frontiers",
    tag: "Horizon"
  }
];

export const teamStrengths = [
  {
    title: "Visionary Direction",
    level: 98,
    desc: "Unwavering clarity of purpose, turning ambiguous horizons into actionable roadmaps."
  },
  {
    title: "Full-Stack Innovation",
    level: 96,
    desc: "From distributed backend architecture to intuitive emotive interfaces."
  },
  {
    title: "Resilient Execution",
    level: 99,
    desc: "Bouncing back stronger from every obstacle with adaptive problem solving."
  },
  {
    title: "Harmonious Synergy",
    level: 100,
    desc: "A frictionless culture of mutual trust, constructive challenge, and collective joy."
  }
];

export const teamGalleryImages = [
  {
    url: "/images/team-cover.jpg",
    title: "The Official DEVI FARLO Team",
    subtitle: "United together — Hiran Joy, Angel Wilson, Arya A, Ananya T, Alant Saji, Stephano Benny, Gautham M, and Neeha Nazer."
  },
  {
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    title: "Collaborative Synergy",
    subtitle: "Whiteboarding algorithms and architectural blueprints."
  },
  {
    url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    title: "The Workshop of Breakthroughs",
    subtitle: "Turning complex theory into working, responsive realities."
  },
  {
    url: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
    title: "Milestone Celebration",
    subtitle: "Rejoicing in shared triumphs and the resilience of our bond."
  }
];

export const initialLeadershipMessages = {
  captain: {
    author: "Hiran Joy",
    role: "Captain",
    message: "To every soul on this team: we didn't come together simply to check boxes. We gathered to prove that when diverse hearts beat with one purpose, no summit is too steep. Believe in yourself as fiercely as I believe in you. You can do it.",
    date: "Official Message from Captain"
  },
  viceCaptain: {
    author: "Angel Wilson",
    role: "Vice-Captain",
    message: "Dreams without rhythm stay dreams. Every milestone we celebrate was forged through the quiet, unglamorous hours of showing up for each other. Never underestimate what we can build when we stand united. You can do it.",
    date: "Official Message from Vice-Captain"
  }
};
