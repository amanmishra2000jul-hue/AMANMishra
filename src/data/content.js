import augreyDashboard from "../assets/augrey_dashboard.png";
import friendlyFlan from "../assets/friendly_flan.png";
import eastPoint from "../assets/eastpoint.png";
import lssmDashboard from "../assets/lssm.png";

export const profile = {
  name: "Aman Mishra",
  firstName: "Aman",
  lastName: "Mishra",
  role: "Software Developer",
  location: "Bangalore, India",
  fullLocation: "Mahadevapura, Bangalore 560048",
  email: "amanmishra2000jul@gmail.com",
  phone: "+91 90719 55326",
  timezone: "Asia/Kolkata",
  timezoneLabel: "IST",
  socials: [
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Behance", href: "#" },
  ],
};

export const about = {
  paragraphs: [
    "Multi-disciplinary designer working across the full product loop — UI/UX research, wireframing and interactive prototyping, client requirement gathering and business analysis, through to development coordination and go-to-market marketing execution.",
    "Comfortable owning a design from first client conversation to final delivery, and equally at home with content, brand voice, SEO/analytics and cross-functional coordination. Known for translating ambiguous requirements into clear, buildable designs — and for onboarding new teammates quickly.",
  ],
  stats: [
    { value: "2+", label: "Years of experience" },
    { value: "3", label: "Organisations" },
    { value: "15%", label: "Model accuracy improved" },
  ],
};

export const skills = [
  { name: "UI/UX Design", detail: "Prototyping · Wireframing", level: 4 },
  { name: "Product & Business Analysis", detail: "Requirements · Coordination", level: 4 },
  { name: "Digital Marketing", detail: "SEO · Analytics · Social", level: 3 },
  { name: "Content & Brand", detail: "Copy · Brand Systems", level: 3 },
  { name: "Technical", detail: "Python · Java · C#.NET", level: 4 },
];

export const experience = [
  {
    role: "Product Designer & Client Solutions Lead",
    org: "KPMG",
    date: "Jul 2024 — Mar 2026",
    points: [
      "Led client discovery, translating business needs into user flows & specs.",
      "Designed UI/UX mockups and prototypes through to sign-off.",
      "Coordinated development through to delivery; trained fresher hires.",
      "Built a GPT-3 chatbot; improved image-gen accuracy by 15%.",
    ],
  },
  {
    role: "Software Developer",
    org: "Emcom Serv Pvt Ltd",
    date: "Jun 2023 — Jun 2024",
    points: [
      "Built desktop apps in WPF/XAML with user-friendly interfaces.",
      "Delivered scalable Java microservices — “Super Team” award.",
    ],
  },
  {
    role: "Intern",
    org: "Comsoft Technologies",
    date: "Aug — Oct 2022",
    points: [],
  },
];

// Selected Case Studies of Web Development and Design
export const work = [
  {
    id: "meridian-terminal",
    title: "Meridian Trading Terminal",
    category: "Web applications",
    description: "High-fidelity stock and cryptocurrency trading terminal dashboard containing interactive price charts, real-time portfolio tracking, order lists, and customizable settings.",
    tags: ["React", "Vite", "SVG Charts", "Trading Terminal"],
    image: "/meridian.png",
    link: "https://stellular-banoffee-158add.netlify.app/",
    caseStudy: {
      subtitle: "Responsive Cryptocurrency & Stock Trading Terminal",
      overview: "Meridian is a high-fidelity crypto and stock trading terminal. It features interactive SVG price charts, a real-time portfolio tracker, order history list, sector-specific market screener, and customizable alerts settings panel.",
      challenge: "Traders need low-latency terminal dashboards that compile system metrics and charts cleanly without clunky layout shifts on mobile device sizes.",
      solution: "Developed a modular React dashboard client utilizing SVG for responsive chart rendering and responsive layout cards with zero layout shifts on small viewports.",
      duration: "3 Months (May — Jul 2026)",
      deliverables: ["Interactive Candlestick Chart", "Real-Time Portfolio Tracker", "Stock & Crypto Screener Grid", "Responsive Settings Dashboard"],
      results: [],
      colors: [
        { name: "Brand Blue", hex: "#0A84FF", usage: "Primary actions and active indicator tags" },
        { name: "Secure Green", hex: "#30D158", usage: "Price metrics increase and filled states" },
        { name: "Dashboard Dark", hex: "#0A0A0B", usage: "Terminal canvas background frame" }
      ],
      typography: {
        headlineFont: "Inter",
        bodyFont: "Inter",
        description: "Clean, readable sans-serif typography paired with monospaced numbers ensures numerical precision on grids."
      },
      screenshots: [
        { url: "/meridian.png", caption: "Meridian Trading Terminal Main Dashboard View" }
      ]
    }
  },
  {
    id: "augrey-crm",
    title: "Augrey CRM Platform",
    category: "Website",
    description: "Modern, multilingual customer relationship management (CRM) portal built for sales, product, and growth teams to streamline operations and accelerate performance.",
    tags: ["React", "Vite", "TailwindCSS", "CDP Integrations"],
    image: augreyDashboard,
    link: "https://effervescent-vacherin-249693.netlify.app/",
    caseStudy: {
      org: "Augrey",
      role: "Software Developer",
      subtitle: "Enterprise Multilingual CRM Portal",
      overview: "Augrey is a high-performance customer relationship management (CRM) web portal. Designed to help sales, product, and growth teams collaborate in a single place, it offers drag-and-drop pipelines, customizable reporting dashboards, and native multilingual localization in English, French, German, and Spanish.",
      challenge: "Outdated CRM platforms were slow, cluttered, expensive, and difficult for global cross-functional teams to use. The client needed a fast, modern solution with seamless collaboration support, dynamic translation options, and simple visual deal tracking.",
      solution: "We engineered a modular React and Vite platform integrated with TailwindCSS, utilizing clean grid layouts and flexible component systems. We built visual sales timelines, unified product workspace tools, and integrated over 150 third-party API configurations.",
      duration: "3 Months (Mar — May 2026)",
      deliverables: ["Multilingual UI Framework", "Interactive Visual Sales Pipeline", "Dynamic Analytical Dashboards", "Integrated Helpdesk Module"],
      results: [
        { label: "Deal Closure Rate", value: "+40%" },
        { label: "CRM Cost Saved", value: "-40%" },
        { label: "Partner Integrations", value: "150+" }
      ],
      colors: [
        { name: "Primary Accent Purple", hex: "#4B2EFF", usage: "Main action buttons, brand indicators, and focus outlines" },
        { name: "Secondary Indigo", hex: "#5B4CFF", usage: "Background gradients, card accents, and hover highlights" },
        { name: "Neutral Dark Grey", hex: "#111827", usage: "Main body text readability and typography frames" }
      ],
      typography: {
        headlineFont: "Anton",
        bodyFont: "Space Grotesk",
        description: "Bold display titles provide a strong brand identity, while clean geometric sans-serif shapes ensure readability across dynamic multilanguage tables."
      },
      screenshots: [
        { url: augreyDashboard, caption: "Augrey dashboard preview showcasing sales performance overview, pipelines, and revenue forecast graphs" }
      ]
    }
  },
  {
    id: "taskflow",
    title: "TaskFlow Workspace",
    category: "Web applications",
    description: "Collaborative project management dashboard built for engineering, design, and product squads. Integrates custom kanban workflows, sprint metrics, calendars, and Zoom event management.",
    tags: ["React", "TailwindCSS", "React Router", "Calendar APIs"],
    image: friendlyFlan,
    link: "https://friendly-flan-3e094f.netlify.app/",
    caseStudy: {
      org: "TaskFlow",
      role: "Software Developer",
      subtitle: "Collaborative Project & Workspace Management Suite",
      overview: "TaskFlow is an enterprise project and task management dashboard designed to align cross-functional teams. It features sprint planning tools, calendar syncs, real-time workload heatmaps, and customizable project analytics charts.",
      challenge: "Legacy sprint management software was slow and disjointed, forcing squads to jump between task trackers, standalone calendars, and video links, which caused communication bottlenecks and delayed mobile application rollouts.",
      solution: "We developed a centralized workspace integrating kanban scheduling, custom reminders, user focus metrics, and meeting details. We built modular task filters, calendar grids, and team analytics charts with a clean, low-fatigue design.",
      duration: "4 Months (Sep — Dec 2025)",
      deliverables: ["Unified Kanban Dashboard", "Shared Sprint Calendar Component", "Custom Productivity Metric Reports", "Meeting Integrations Panel"],
      results: [
        { label: "Productivity Increase", value: "+32%" },
        { label: "Cycle Time Reduced", value: "-25%" },
        { label: "Partner Integrations", value: "150+" }
      ],
      colors: [
        { name: "Focus Blue", hex: "#3B82F6", usage: "Primary buttons, active calendar states, and timeline indicators" },
        { name: "Design Purple", hex: "#8B5CF6", usage: "Workspace category identifiers and sprint tags" },
        { name: "Soft Neutral Gray", hex: "#F3F4F6", usage: "Primary task container background grid" }
      ],
      typography: {
        headlineFont: "Anton",
        bodyFont: "Space Grotesk",
        description: "Sleek headings emphasize project metrics and stats, supported by geometric font scales designed for dense multi-column tables."
      },
      screenshots: [
        { url: friendlyFlan, caption: "TaskFlow workspace dashboard highlighting team sprint backlogs, recent task cards, and project progress widgets" }
      ]
    }
  },
  {
    id: "eastpoint-portal",
    title: "East Point Portal",
    category: "Website",
    description: "Responsive academic website and student enrollment hub for East Point Group of Institutions, fully optimized for high-volume admissions, SEO, and campus analytics.",
    tags: ["React", "Vite", "React Bootstrap", "SEO Suite"],
    image: eastPoint,
    link: "https://eastpoint.ac.in/",
    caseStudy: {
      org: "East Point",
      role: "Software Developer",
      subtitle: "Responsive Academic Portal & Educational Hub",
      overview: "The East Point Group of Institutions Portal is a high-volume academic hub built to streamline student admissions, course directories, campus events, and university administration systems. The objective was to deliver a responsive, accessible, and fast academic portal that connects students, parents, and administrative staff.",
      challenge: "The older site had low user engagement, slow load speeds, and lacked integrated tracking, making it hard to monitor admissions inquiries and marketing ROI during enrollment peaks.",
      solution: "We designed a modular React-based frontend using Vite and React Bootstrap. We implemented strict SEO metadata structures, GTM event logs, and Google Ads conversions integrations. PageSpeed load metrics were boosted to 98% with serverless assets optimizations.",
      duration: "3 Months (Jan — Mar 2026)",
      deliverables: ["Admissions Inquiry Pipeline", "Dynamic Course Catalogs", "Campuses Event Timelines", "Google Tag Manager Integrations"],
      results: [
        { label: "Organic Student Leads", value: "+65%" },
        { label: "PageSpeed Performance", value: "98%" },
        { label: "Lead Conversion Rate", value: "+42%" }
      ],
      colors: [
        { name: "Academic Navy", hex: "#002B49", usage: "Main header banners, primary text, and formal layouts" },
        { name: "Accent Gold", hex: "#D97706", usage: "Buttons, highlights, active menu links, and borders" },
        { name: "Neutral Slate Grey", hex: "#F8FAFC", usage: "Background section cards and container cards" }
      ],
      typography: {
        headlineFont: "Anton",
        bodyFont: "Space Grotesk",
        description: "Bold uppercase headline fonts pair with geometric body scaling to establish institutional authority and clear readability for admission forms."
      },
      screenshots: [
        { url: eastPoint, caption: "East Point Portal homepage showcasing admissions sliders, courses overview, and campus statistics" }
      ]
    }
  },
  {
    id: "lssm-portal",
    title: "LSSM Teacher Portal",
    category: "Website",
    description: "Academic management and music lab learning portal built for Lorraine School of Music & Arts. Integrates batch scheduling, digital assignments, attendance logs, and student performance metrics.",
    tags: ["React", "TailwindCSS", "Recharts", "Lucide Icons"],
    image: lssmDashboard,
    link: "http://lssm.co.in/",
    caseStudy: {
      org: "LSSM",
      role: "Software Developer",
      subtitle: "Teacher Learning & Music Lab Portal",
      overview: "The LSSM Teacher Learning Portal is a comprehensive academic platform built for Lorraine School of Music & Arts. It unifies teacher-student dashboards, attendance logs, class schedules, assignments, leaderboards, and an interactive 'Music Lab' for reviewing audio/video recital entries.",
      challenge: "Managing lessons, schedules, grades, and student practice submissions across multiple campuses was a massive administrative burden that suffered from slow manual feedback cycles.",
      solution: "We engineered a clean dashboard platform with dynamic charts for student attendance and performance grades. We integrated a digital 'Music Lab' module that lets students upload audio practice recordings (e.g. piano hand placement, guitar strumming patterns) for teachers to grade and review in real-time.",
      duration: "4 Months (Sep — Dec 2023)",
      deliverables: ["Music Lab Grading Interface", "Batch Attendance Monitor", "Shared Class Scheduler", "Student Leaderboard & Badges"],
      results: [
        { label: "Daily Active Students", value: "320+" },
        { label: "Assignment Completion", value: "+48%" },
        { label: "Admin Processing", value: "2.5x Faster" }
      ],
      colors: [
        { name: "Primary Sky Blue", hex: "#0EA5E9", usage: "Brand indicators, active tabs, and primary action buttons" },
        { name: "Musical Gold", hex: "#F59E0B", usage: "Achievements, points, stars, and leaderboard highlights" },
        { name: "Accent Violet", hex: "#8B5CF6", usage: "Secondary tags, special badges, and highlights" }
      ],
      typography: {
        headlineFont: "Anton",
        bodyFont: "Space Grotesk",
        description: "Rounded geometric layouts styled specifically to create a positive, inspiring, and distraction-free academic dashboard environment."
      },
      screenshots: [
        { url: lssmDashboard, caption: "LSSM Dashboard showing courses list, student performance leaderboards, and active assignments panels" }
      ]
    }
  },
  {
    id: "airlift-branding",
    title: "Airlift Express Branding",
    category: "Branding & Marketing",
    description: "Bespoke visual identity and multi-channel launch campaign for Airlift's micro-mobility and quick-commerce network, communicating speed and modern logistics.",
    tags: ["Brand Strategy", "Fleet Mockups", "Social Ads", "Iconography"],
    image: "/Airlift/download.jpg",
    link: "#",
    caseStudy: {
      org: "Airlift",
      role: "Lead Designer & Strategist",
      subtitle: "Micro-Mobility & Quick-Commerce Branding",
      overview: "Airlift launched a rapid micro-mobility and quick-commerce delivery network in densely populated urban centers. We built a bold, high-visibility branding system to ensure instant street recognition on delivery bags, jackets, and transport fleets, conveying speed, safety, and operational reliability.",
      challenge: "Standing out on chaotic city streets required an extremely prominent color scheme and clean visual symbols that translate clearly onto both moving vehicles and compact mobile applications.",
      solution: "We selected a vibrant yellow and deep transit charcoal palette, supported by bold structural vectors. We designed custom fleet wrappers, delivery packages, advertising banners, and promotional social templates.",
      duration: "3 Months (May — Jul 2025)",
      deliverables: ["Brand Identity Book", "Fleet Wrapper Guidelines", "Ad Campaigns Creative Assets", "Social Media Launch Kit"],
      results: [
        { label: "Brand Recognition", value: "+110%" },
        { label: "Ad Click-Through Rate", value: "+38%" },
        { label: "Collateral Design Speed", value: "2.8x Faster" }
      ],
      colors: [
        { name: "Airlift Yellow", hex: "#FBBF24", usage: "High-visibility fleet jackets, key action marks, and logo borders" },
        { name: "Transit Charcoal", hex: "#1F2937", usage: "Main body typography and transport background panels" },
        { name: "Off-White Canvas", hex: "#F9FAF8", usage: "Brand manual pages and container cards" }
      ],
      typography: {
        headlineFont: "Anton",
        bodyFont: "Space Grotesk",
        description: "Aggressive, bold uppercase headline types deliver the swift movement feel, contrasted with clean monospaced layout elements."
      },
      screenshots: [
        { url: "/Airlift/download (1).jpg", caption: "Airlift transit branding item 1 showing transport and logistics asset designs" },
        { url: "/Airlift/download (10).jpg", caption: "Airlift transit branding item 2 showing transport and logistics asset designs" },
        { url: "/Airlift/download (11).jpg", caption: "Airlift transit branding item 3 showing transport and logistics asset designs" },
        { url: "/Airlift/download (12).jpg", caption: "Airlift transit branding item 4 showing transport and logistics asset designs" },
        { url: "/Airlift/download (13).jpg", caption: "Airlift transit branding item 5 showing transport and logistics asset designs" },
        { url: "/Airlift/download (14).jpg", caption: "Airlift transit branding item 6 showing transport and logistics asset designs" },
        { url: "/Airlift/download (2).jpg", caption: "Airlift transit branding item 7 showing transport and logistics asset designs" },
        { url: "/Airlift/download (3).jpg", caption: "Airlift transit branding item 8 showing transport and logistics asset designs" },
        { url: "/Airlift/download (4).jpg", caption: "Airlift transit branding item 9 showing transport and logistics asset designs" },
        { url: "/Airlift/download (5).jpg", caption: "Airlift transit branding item 10 showing transport and logistics asset designs" },
        { url: "/Airlift/download (6).jpg", caption: "Airlift transit branding item 11 showing transport and logistics asset designs" },
        { url: "/Airlift/download (7).jpg", caption: "Airlift transit branding item 12 showing transport and logistics asset designs" },
        { url: "/Airlift/download (8).jpg", caption: "Airlift transit branding item 13 showing transport and logistics asset designs" },
        { url: "/Airlift/download (9).jpg", caption: "Airlift transit branding item 14 showing transport and logistics asset designs" },
        { url: "/Airlift/download.jpg", caption: "Airlift transit branding item 15 showing transport and logistics asset designs" }
      ]
    }
  },
  {
    id: "cloud4c-branding",
    title: "Cloud4C Managed Services Identity",
    category: "Branding & Marketing",
    description: "Enterprise branding guidelines and global lead-generation creative suite built to simplify multi-cloud structures for enterprise IT buyers.",
    tags: ["Brand Guidelines", "Infographics", "Display Ads", "UI Design"],
    image: "/Cloud4c/0cc53d184893613.655a7265ce977.jpg",
    link: "#",
    caseStudy: {
      org: "Cloud4C",
      role: "Product Designer & Strategist",
      subtitle: "Enterprise Managed Cloud Services Branding",
      overview: "Cloud4C is a global leader in enterprise cloud managed hosting. We designed a clean, structured branding system and landing page assets to translate abstract technical architectures into clear, user-friendly layouts that boost corporate sales conversions.",
      challenge: "Enterprise IT solutions suffered from abstract diagrams and wall-of-text whitepapers, making it hard for C-suite decision-makers to evaluate secure SAP hosting speeds.",
      solution: "We structured an enterprise brand book, vector iconography systems, and landing page layouts using technical infographics that clearly display multi-cloud integrations and data pipelines.",
      duration: "4 Months (Aug — Nov 2025)",
      deliverables: ["Enterprise Brand Guidelines", "Architecture Infographics Library", "Landing Page Templates", "Google Ad Display Creatives"],
      results: [
        { label: "Lead Conversions", value: "+28%" },
        { label: "Asset Downloads", value: "+54%" },
        { label: "Unified Team Adoption", value: "14 Regions" }
      ],
      colors: [
        { name: "Cloud4C Sky Blue", hex: "#0EA5E9", usage: "Main accent elements, cloud icons, and active CTA tags" },
        { name: "Secure Navy", hex: "#0C4A6E", usage: "Main header lines, text layouts, and container backgrounds" },
        { name: "Highlight Gold", hex: "#FBBF24", usage: "Key data Callouts and conversion button outlines" }
      ],
      typography: {
        headlineFont: "Anton",
        bodyFont: "Space Grotesk",
        description: "Modern sans-serif typography paired with rigid structural grids simplifies detailed system architecture tables."
      },
      screenshots: [
        { url: "/Cloud4c/0cc53d184893613.655a7265ce977.jpg", caption: "Cloud4C cloud migration systems illustration 1 showcasing architecture and network nodes" },
        { url: "/Cloud4c/76ebb6184893613.655a7265cdc49 (1).jpg", caption: "Cloud4C cloud migration systems illustration 2 showcasing architecture and network nodes" },
        { url: "/Cloud4c/76ebb6184893613.655a7265cdc49.jpg", caption: "Cloud4C cloud migration systems illustration 3 showcasing architecture and network nodes" },
        { url: "/Cloud4c/7c0d0f184893613.655a7265d0381.jpg", caption: "Cloud4C cloud migration systems illustration 4 showcasing architecture and network nodes" },
        { url: "/Cloud4c/ca7bf4184893613.655a7265d1209.jpg", caption: "Cloud4C cloud migration systems illustration 5 showcasing architecture and network nodes" },
        { url: "/Cloud4c/daf53e184893613.655a7265cf60e (1).jpg", caption: "Cloud4C cloud migration systems illustration 6 showcasing architecture and network nodes" },
        { url: "/Cloud4c/daf53e184893613.655a7265cf60e.jpg", caption: "Cloud4C cloud migration systems illustration 7 showcasing architecture and network nodes" }
      ]
    }
  },
  {
    id: "horizonx-branding",
    title: "Horizon X Venture Branding",
    category: "Branding & Marketing",
    description: "Futuristic brand identity, investor decks, and digital identity structures built for Horizon X innovation and aerospace venture fund.",
    tags: ["Brand Identity", "Pitch Decks", "Cyber Aesthetics", "Digital Assets"],
    image: "/Horizon X/Main Page.jpg",
    link: "#",
    caseStudy: {
      org: "Horizon X",
      role: "Brand Director",
      subtitle: "Aerospace & Tech Innovation Venture Branding",
      overview: "Horizon X is a premier innovation and aerospace venture capital fund. We engineered a sleek, high-contrast digital identity and investor pitch templates that align advanced aerospace technology with venture funding aesthetics.",
      challenge: "Deep-tech venture funds often look overly generic or traditional. Horizon X needed a cybernetic, futuristic visual language to establish credibility with next-gen aerospace founders.",
      solution: "Created a minimalist brand system with cybernetic indigo gradients, dark wireframe vectors, and clean grid lines optimized for LP slide decks and digital landing platforms.",
      duration: "2 Months (Jan — Feb 2026)",
      deliverables: ["Digital Identity System", "Pitch Deck Master Templates", "Venture Portfolio Landing Pages", "Custom Vector Iconography Pack"],
      results: [
        { label: "LP Feedback Score", value: "100% Positive" },
        { label: "Presentation Speedup", value: "3.0x" },
        { label: "Visual Consistency", value: "Fully Unified" }
      ],
      colors: [
        { name: "Cybernetic Indigo", hex: "#6366F1", usage: "Gradient overlays, active elements, and core aerospace highlights" },
        { name: "Deep Space Slate", hex: "#0F172A", usage: "Slide presentation backgrounds and dark container frames" },
        { name: "Stark White", hex: "#FFFFFF", usage: "Main display headings, details, and high-contrast lines" }
      ],
      typography: {
        headlineFont: "Anton",
        bodyFont: "Space Grotesk",
        description: "Precision-engineered bold sans-serif headlines communicate cutting-edge technology and mathematical clarity."
      },
      screenshots: [
        { url: "/Horizon X/Main Page.jpg", caption: "Horizon X space-tech venture portfolio illustration 1 showing advanced aero design layouts" },
        { url: "/Horizon X/a3e973184387085.65512cdf2e92c.jpg", caption: "Horizon X space-tech venture portfolio illustration 2 showing advanced aero design layouts" },
        { url: "/Horizon X/ed2731184387085.65512cdf2fa38.jpg", caption: "Horizon X space-tech venture portfolio illustration 3 showing advanced aero design layouts" },
        { url: "/Horizon X/f77752184387085.65512cdf2d457.jpg", caption: "Horizon X space-tech venture portfolio illustration 4 showing advanced aero design layouts" }
      ]
    }
  },
  {
    id: "women-empowerment",
    title: "Empower Women Campaign",
    category: "Branding & Marketing",
    description: "Vibrant branding identity, social templates, and editorial layouts designed for a global women's leadership and diversity initiative.",
    tags: ["Campaign Design", "Social Assets", "Style Guides", "Typography"],
    image: "/Women/a6f011184041871.654a9162ce5a0.jpg",
    link: "#",
    caseStudy: {
      org: "Empower Women",
      role: "Creative Director",
      subtitle: "Global Leadership & Diversity Campaign",
      overview: "The Empower Women Initiative is a global movement celebrating female leadership and career growth. We designed a vibrant brand guidelines system, social media template catalog, and custom typography templates to drive engagement across digital communities.",
      challenge: "Previous outreach campaigns relied on muted stock graphics, resulting in low social media interactions and a lack of visual identity consistency across chapters.",
      solution: "We designed a warm terracotta and hot pink style system featuring custom hand-drawn motifs, high-contrast layouts, and clean typographic patterns across 30+ campaign templates.",
      duration: "3 Months (Oct — Dec 2024)",
      deliverables: ["Visual Style Guidelines", "Social Media Graphics Toolkit", "Chapter Campaign Resource Kit", "Editorial Print Templates"],
      results: [
        { label: "Social Media Views", value: "+140%" },
        { label: "Resource Downloads", value: "+60%" },
        { label: "Chapter Registrations", value: "+85%" }
      ],
      colors: [
        { name: "Empower Pink", hex: "#EC4899", usage: "Action tags, title highlights, and primary slide backgrounds" },
        { name: "Warm Terracotta", hex: "#F59E0B", usage: "Secondary shapes, quotes icons, and warm outlines" },
        { name: "Contrast Slate", hex: "#1E293B", usage: "Main body text readability and dense tables base" }
      ],
      typography: {
        headlineFont: "Anton",
        bodyFont: "Space Grotesk",
        description: "Vibrant display headline elements convey community strength, supported by geometric monospaced body copy."
      },
      screenshots: [
        { url: "/Women/01a83a184041871.654a9162d00da.jpg", caption: "Empower Women social campaign asset sheet 1 highlighting diversity typography and graphics guidelines" },
        { url: "/Women/03d20a184041871.654a91627f044.jpg", caption: "Empower Women social campaign asset sheet 2 highlighting diversity typography and graphics guidelines" },
        { url: "/Women/07f389184041871.654a9162ac8b3.jpg", caption: "Empower Women social campaign asset sheet 3 highlighting diversity typography and graphics guidelines" },
        { url: "/Women/09e9d7184041871.654a9162c7e61.jpg", caption: "Empower Women social campaign asset sheet 4 highlighting diversity typography and graphics guidelines" },
        { url: "/Women/12c611184041871.654a9162cba2d.jpg", caption: "Empower Women social campaign asset sheet 5 highlighting diversity typography and graphics guidelines" },
        { url: "/Women/13347b184041871.654a91626f89b.jpg", caption: "Empower Women social campaign asset sheet 6 highlighting diversity typography and graphics guidelines" },
        { url: "/Women/2ad74b184041871.654a9162af3db.jpg", caption: "Empower Women social campaign asset sheet 7 highlighting diversity typography and graphics guidelines" },
        { url: "/Women/2df861184041871.654a9162cf35d.jpg", caption: "Empower Women social campaign asset sheet 8 highlighting diversity typography and graphics guidelines" },
        { url: "/Women/39ba31184041871.654a9162b082f.jpg", caption: "Empower Women social campaign asset sheet 9 highlighting diversity typography and graphics guidelines" },
        { url: "/Women/3ec98e184041871.654a9162ccad9.jpg", caption: "Empower Women social campaign asset sheet 10 highlighting diversity typography and graphics guidelines" },
        { url: "/Women/49e92f184041871.654a916272d37.jpg", caption: "Empower Women social campaign asset sheet 11 highlighting diversity typography and graphics guidelines" },
        { url: "/Women/6cfd82184041871.654a91627a8dc.jpg", caption: "Empower Women social campaign asset sheet 12 highlighting diversity typography and graphics guidelines" },
        { url: "/Women/6d5f22184041871.654a9162c6ba4.jpg", caption: "Empower Women social campaign asset sheet 13 highlighting diversity typography and graphics guidelines" },
        { url: "/Women/7e2ce7184041871.654a91627d41e.jpg", caption: "Empower Women social campaign asset sheet 14 highlighting diversity typography and graphics guidelines" },
        { url: "/Women/86f325184041871.654a9162dec3a.jpg", caption: "Empower Women social campaign asset sheet 15 highlighting diversity typography and graphics guidelines" },
        { url: "/Women/88dad5184041871.654a9162b1da7.jpg", caption: "Empower Women social campaign asset sheet 16 highlighting diversity typography and graphics guidelines" },
        { url: "/Women/8f24b3184041871.654a9162c41c0.jpg", caption: "Empower Women social campaign asset sheet 17 highlighting diversity typography and graphics guidelines" },
        { url: "/Women/950229184041871.654a9162dbea3.jpg", caption: "Empower Women social campaign asset sheet 18 highlighting diversity typography and graphics guidelines" },
        { url: "/Women/99a638184041871.654a916293a71.jpg", caption: "Empower Women social campaign asset sheet 19 highlighting diversity typography and graphics guidelines" },
        { url: "/Women/a6f011184041871.654a9162ce5a0.jpg", caption: "Empower Women social campaign asset sheet 20 highlighting diversity typography and graphics guidelines" },
        { url: "/Women/b15991184041871.654a916296f05.jpg", caption: "Empower Women social campaign asset sheet 21 highlighting diversity typography and graphics guidelines" },
        { url: "/Women/b17810184041871.654a9162c93ae.jpg", caption: "Empower Women social campaign asset sheet 22 highlighting diversity typography and graphics guidelines" },
        { url: "/Women/b68fa2184041871.654a916295781.jpg", caption: "Empower Women social campaign asset sheet 23 highlighting diversity typography and graphics guidelines" },
        { url: "/Women/bec23d184041871.654a9162ca493.jpg", caption: "Empower Women social campaign asset sheet 24 highlighting diversity typography and graphics guidelines" },
        { url: "/Women/c0c540184041871.654a9162b3102.jpg", caption: "Empower Women social campaign asset sheet 25 highlighting diversity typography and graphics guidelines" },
        { url: "/Women/c51591184041871.654a9162ab4b6.jpg", caption: "Empower Women social campaign asset sheet 26 highlighting diversity typography and graphics guidelines" },
        { url: "/Women/c79b59184041871.654a916273a37.jpg", caption: "Empower Women social campaign asset sheet 27 highlighting diversity typography and graphics guidelines" },
        { url: "/Women/d06fc2184041871.654a9162cd8dc.jpg", caption: "Empower Women social campaign asset sheet 28 highlighting diversity typography and graphics guidelines" },
        { url: "/Women/d84e8b184041871.654a9162c5494.jpg", caption: "Empower Women social campaign asset sheet 29 highlighting diversity typography and graphics guidelines" },
        { url: "/Women/e0662a184041871.654a9162709c0.jpg", caption: "Empower Women social campaign asset sheet 30 highlighting diversity typography and graphics guidelines" },
        { url: "/Women/e930ff184041871.654a9162e0437.jpg", caption: "Empower Women social campaign asset sheet 31 highlighting diversity typography and graphics guidelines" },
        { url: "/Women/eae354184041871.654a9162ae180.jpg", caption: "Empower Women social campaign asset sheet 32 highlighting diversity typography and graphics guidelines" },
        { url: "/Women/f3ce16184041871.654a916271f7c.jpg", caption: "Empower Women social campaign asset sheet 33 highlighting diversity typography and graphics guidelines" },
        { url: "/Women/f7a008184041871.654a91627be08.jpg", caption: "Empower Women social campaign asset sheet 34 highlighting diversity typography and graphics guidelines" }
      ]
    }
  },
  {
    id: "foodbridge-mobile",
    title: "Food Bridge Mobile Client",
    category: "Mobile apps",
    description: "Cross-platform React Native application designed to reduce food waste by connecting commercial surplus kitchens to verified local shelters.",
    tags: ["React Native", "Local SQL", "Push Notifications", "Maps API"],
    image: "/Food Bridge app/Home screen.webp",
    link: "#",
    caseStudy: {
      org: "Food Bridge",
      role: "Mobile App Developer",
      subtitle: "Food Waste Reduction & Logistics Mobile App",
      overview: "Food Bridge is a mobile application built to tackle urban food waste. It enables commercial establishments (hotels, restaurants, supermarkets) to catalog food surplus and schedule instant pickups, which are matched with verified local shelters and food banks.",
      challenge: "Commercial surplus went to waste due to delayed communication and high transaction costs. Shelters lacked visibility on when food was available for pickup.",
      solution: "Engineered a React Native mobile application with real-time GPS tracking, local SQL offline databases, shelter matching queue alerts, and automated push notifications.",
      duration: "5 Months (Jun — Oct 2025)",
      deliverables: ["React Native Client App", "Real-Time Matching Dashboard", "Shelter Verification Panel", "Automated Driver Alert Engine"],
      results: [
        { label: "Food Waste Prevented", value: "12+ Tons" },
        { label: "Verified Shelters", value: "85+ Served" },
        { label: "Matching Dispatch Time", value: "<4 Mins" }
      ],
      colors: [
        { name: "Bridge Green", hex: "#10B981", usage: "Success states, active donation tags, and brand badges" },
        { name: "Alert Blue", hex: "#3B82F6", usage: "Action keys, map driver pointers, and notification highlights" },
        { name: "App Canvas BG", hex: "#F9FAFB", usage: "Clean light-mode mobile dashboard screens" }
      ],
      typography: {
        headlineFont: "Anton",
        bodyFont: "Space Grotesk",
        description: "Highly visible rounded text scales optimize mobile driver route navigation and quick pickup checkout forms."
      },
      screenshots: [
        { url: "/Food Bridge app/Home screen.webp", caption: "Food Bridge mobile screen mockup 10 showing user dashboard lists and routing details" },
        { url: "/Food Bridge app/211bbf184042261.654a94e5bc045.webp", caption: "Food Bridge mobile screen mockup 1 showing user dashboard lists and routing details" },
        { url: "/Food Bridge app/3c7dc7184042261.654a94e5ba28c.webp", caption: "Food Bridge mobile screen mockup 2 showing user dashboard lists and routing details" },
        { url: "/Food Bridge app/4f2d72184042261.654a94e5c05cb.webp", caption: "Food Bridge mobile screen mockup 3 showing user dashboard lists and routing details" },
        { url: "/Food Bridge app/4fc81a184042261.654a94e5bddb8.webp", caption: "Food Bridge mobile screen mockup 4 showing user dashboard lists and routing details" },
        { url: "/Food Bridge app/58d579184042261.654a94e5bb5e1.webp", caption: "Food Bridge mobile screen mockup 5 showing user dashboard lists and routing details" },
        { url: "/Food Bridge app/7dcd7b184042261.654a94e5b998d.webp", caption: "Food Bridge mobile screen mockup 6 showing user dashboard lists and routing details" },
        { url: "/Food Bridge app/8008b7184042261.654a94e5be68d.webp", caption: "Food Bridge mobile screen mockup 7 showing user dashboard lists and routing details" },
        { url: "/Food Bridge app/844b6c184042261.654a94e5bfd0d.webp", caption: "Food Bridge mobile screen mockup 8 showing user dashboard lists and routing details" },
        { url: "/Food Bridge app/9a4bb4184042261.654a94e5bd351.webp", caption: "Food Bridge mobile screen mockup 9 showing user dashboard lists and routing details" },
        { url: "/Food Bridge app/a63caa184042261.654a94e5b8eeb.webp", caption: "Food Bridge mobile screen mockup 11 showing user dashboard lists and routing details" },
        { url: "/Food Bridge app/bbd278184042261.654a94e5bf1cb.webp", caption: "Food Bridge mobile screen mockup 12 showing user dashboard lists and routing details" },
        { url: "/Food Bridge app/dd77c4184042261.654a94e5bcaa6.webp", caption: "Food Bridge mobile screen mockup 13 showing user dashboard lists and routing details" },
        { url: "/Food Bridge app/f6989a184042261.654a94e5bad07.webp", caption: "Food Bridge mobile screen mockup 14 showing user dashboard lists and routing details" }
      ]
    }
  },
  {
    id: "smm-brand-campaigns",
    title: "SMM Brand Campaigns",
    category: "Social Media Posts",
    description: "Vibrant, high-engagement graphics, carousels, and templates created for multi-channel social media marketing campaigns.",
    tags: ["Social Design", "Figma Templates", "Instagram Collage", "LinkedIn Growth"],
    image: "/SMM/WhatsApp Image 2026-07-03 at 5.18.39 PM.jpeg",
    link: "#",
    caseStudy: {
      org: "SMM Campaigns",
      role: "Social Media Designer",
      subtitle: "Curated Brand Graphics & Instagram Collages",
      overview: "A collection of high-impact visual post systems designed to optimize social media feed aesthetics, carousel flow structures, and lead generation banners.",
      challenge: "Standard static square posts lack visual hierarchy and fail to stop users from scrolling past. Traditional layouts feel repetitive and fail to stand out.",
      solution: "We designed a bespoke collage layout that arranges a large selection of posts of varying sizes in a clean, tight masonry collage grid. This allows users to view carousels and standalone quotes as a single premium brand tapestry.",
      duration: "6 Months (Jan — Jun 2026)",
      deliverables: ["Visual Social Media Guidelines", "LinkedIn Slide deck templates", "Custom Vector Illustrations Pack", "Collage Grid Layout Guides"],
      results: [
        { label: "Organic Post Views", value: "+128%" },
        { label: "Content Creation Capacity", value: "3.5x Faster" },
        { label: "Brand Recall Metrics", value: "95% positive" }
      ],
      colors: [
        { name: "Neon Violet", hex: "#8B5CF6", usage: "Action borders, active status points, and typography marks" },
        { name: "Contrast Sand", hex: "#F59E0B", usage: "Quotes highlights and stats text callouts" },
        { name: "Charcoal Frame", hex: "#111827", usage: "Post cards backgrounds and canvas grids" }
      ],
      typography: {
        headlineFont: "Anton",
        bodyFont: "Space Grotesk",
        description: "Bold geometric displays built to command attention in scroll timelines, paired with clean technical font scaling."
      },
      screenshots: [
        { url: "/SMM/WhatsApp Image 2026-07-03 at 5.18.39 PM.jpeg", caption: "Social media graphics asset 1" },
        { url: "/SMM/WhatsApp Image 2026-07-03 at 5.22.08 PM.jpeg", caption: "Social media graphics asset 2" },
        { url: "/SMM/WhatsApp Image 2026-07-03 at 5.23.17 PM.jpeg", caption: "Social media graphics asset 3" },
        { url: "/SMM/WhatsApp Image 2026-07-03 at 5.24.15 PM.jpeg", caption: "Social media graphics asset 4" },
        { url: "/SMM/WhatsApp Image 2026-07-03 at 5.25.19 PM.jpeg", caption: "Social media graphics asset 5" },
        { url: "/SMM/WhatsApp Image 2026-07-03 at 5.26.50 PM.jpeg", caption: "Social media graphics asset 6" },
        { url: "/SMM/WhatsApp Image 2026-07-03 at 5.28.08 PM.jpeg", caption: "Social media graphics asset 7" },
        { url: "/SMM/WhatsApp Image 2026-07-03 at 5.29.07 PM.jpeg", caption: "Social media graphics asset 8" },
        { url: "/SMM/WhatsApp Image 2026-07-03 at 5.30.22 PM.jpeg", caption: "Social media graphics asset 9" },
        { url: "/SMM/WhatsApp Image 2026-07-03 at 5.45.00 PM (1).jpeg", caption: "Social media graphics asset 10" },
        { url: "/SMM/WhatsApp Image 2026-07-03 at 5.45.00 PM.jpeg", caption: "Social media graphics asset 11" },
        { url: "/SMM/WhatsApp Image 2026-07-03 at 5.47.16 PM (1).jpeg", caption: "Social media graphics asset 12" },
        { url: "/SMM/WhatsApp Image 2026-07-03 at 5.47.16 PM (2).jpeg", caption: "Social media graphics asset 13" },
        { url: "/SMM/WhatsApp Image 2026-07-03 at 5.47.16 PM.jpeg", caption: "Social media graphics asset 14" },
        { url: "/SMM/WhatsApp Image 2026-07-03 at 5.47.17 PM.jpeg", caption: "Social media graphics asset 15" },
        { url: "/SMM/WhatsApp Image 2026-07-03 at 5.49.58 PM.jpeg", caption: "Social media graphics asset 16" },
        { url: "/SMM/WhatsApp Image 2026-07-03 at 5.49.59 PM (1).jpeg", caption: "Social media graphics asset 17" },
        { url: "/SMM/WhatsApp Image 2026-07-03 at 5.49.59 PM.jpeg", caption: "Social media graphics asset 18" },
        { url: "/SMM/WhatsApp Image 2026-07-03 at 5.53.11 PM.jpeg", caption: "Social media graphics asset 19" },
        { url: "/SMM/WhatsApp Image 2026-07-03 at 5.56.32 PM.jpeg", caption: "Social media graphics asset 20" },
        { url: "/SMM/WhatsApp Image 2026-07-03 at 6.01.01 PM.jpeg", caption: "Social media graphics asset 21" },
        { url: "/SMM/WhatsApp Image 2026-07-03 at 6.01.41 PM.jpeg", caption: "Social media graphics asset 22" },
        { url: "/SMM/WhatsApp Image 2026-07-03 at 6.03.53 PM (1).jpeg", caption: "Social media graphics asset 23" },
        { url: "/SMM/WhatsApp Image 2026-07-03 at 6.03.53 PM.jpeg", caption: "Social media graphics asset 24" },
        { url: "/SMM/WhatsApp Image 2026-07-03 at 6.03.54 PM (1).jpeg", caption: "Social media graphics asset 25" },
        { url: "/SMM/WhatsApp Image 2026-07-03 at 6.03.54 PM.jpeg", caption: "Social media graphics asset 26" }
      ]
    }
  },
  {
    id: "ambient-sound",
    title: "Ambient Sound Master",
    category: "Mobile apps",
    description: "Personalized soundscape generator mobile application providing immersive white noise, nature sounds, and sleep focus loops.",
    tags: ["React Native", "Audio Stream", "UX Design", "Sleep Tech"],
    image: "/Ambient sound/WhatsApp Image 2026-07-03 at 11.17.03 PM.jpeg",
    link: "#",
    caseStudy: {
      subtitle: "Personalized Sleep & Focus Soundscapes",
      overview: "Ambient Sound Master is a custom mobile sound generator. It allows users to mix and match sleep sounds, nature audio streams, and white noise frequencies into personalized soundscapes.",
      challenge: "Standard sleep sound apps have repetitive audio loops, low-quality transitions, and heavy memory usage on low-connectivity devices.",
      solution: "Designed a lightweight mobile frontend client using React Native, integrating low-latency audio stream buffers and fluid CSS animations for sleeping mode.",
      duration: "4 Months (Nov 2025 — Feb 2026)",
      deliverables: ["React Native Audio Client", "Custom Mixing Dashboard", "Audio Stream Optimization Buffer", "Soundscape Library UI"],
      results: [],
      colors: [
        { name: "Deep Indigo BG", hex: "#0E0C0B", usage: "Main interface canvas background" },
        { name: "Soundwave Orange", hex: "#E2261C", usage: "Active player buttons, frequency curves, and tag highlights" },
        { name: "Cream Text", hex: "#F3ECE1", usage: "Titles and primary menu descriptions" }
      ],
      typography: {
        headlineFont: "Anton",
        bodyFont: "Space Grotesk",
        description: "Bold headings deliver energy for custom controls, paired with sleek space-scale sans-serif text blocks."
      },
      screenshots: [
        { url: "/Ambient sound/WhatsApp Image 2026-07-03 at 11.17.03 PM.jpeg", caption: "Ambient Sound Main Home Screen and Active Audio Player Mockup" },
        { url: "/Ambient sound/WhatsApp Image 2026-07-03 at 11.17.24 PM.jpeg", caption: "Soundscape mixer controls panel" },
        { url: "/Ambient sound/WhatsApp Image 2026-07-03 at 11.17.47 PM.jpeg", caption: "Timer customizer and alarm setting screens" },
        { url: "/Ambient sound/WhatsApp Image 2026-07-03 at 11.17.57 PM.jpeg", caption: "Nature audio streams library catalog" },
        { url: "/Ambient sound/WhatsApp Image 2026-07-03 at 11.18.09 PM.jpeg", caption: "Favorite sound combinations cloud sync options" },
        { url: "/Ambient sound/WhatsApp Image 2026-07-03 at 11.18.17 PM.jpeg", caption: "Custom noise color options (pink, brown, white noise)" },
        { url: "/Ambient sound/WhatsApp Image 2026-07-03 at 11.18.26 PM.jpeg", caption: "Binaural beat generators selection UI" },
        { url: "/Ambient sound/WhatsApp Image 2026-07-03 at 11.18.35 PM.jpeg", caption: "User focus telemetry history chart" },
        { url: "/Ambient sound/WhatsApp Image 2026-07-03 at 11.18.44 PM.jpeg", caption: "Offline download library controller" },
        { url: "/Ambient sound/WhatsApp Image 2026-07-03 at 11.18.54 PM.jpeg", caption: "Device settings & audio quality sliders" }
      ]
    }
  },
  {
    id: "food-delivery",
    title: "Food Express Delivery",
    category: "Mobile apps",
    description: "On-demand fresh food delivery client app featuring real-time kitchen tracking, personalized diet filters, and secure cart management.",
    tags: ["React Native", "GPS Sync", "Stripe Payments", "UX Wireframes"],
    image: "/Food /WhatsApp Image 2026-07-03 at 10.19.25 PM.jpeg",
    link: "#",
    caseStudy: {
      subtitle: "On-Demand Delivery & Kitchen Tracking",
      overview: "Food Express is a mobile delivery client designed to minimize ordering friction. It features highly visual menus, kitchen telemetry (status indicators), and real-time route mappings.",
      challenge: "Cluttered checkout structures, missing filter states, and slow location lookups cause users to drop off before checkout.",
      solution: "Created an optimized, highly visual multi-step checkout flow with responsive filters, clear order status cards, and integrated maps API tracking.",
      duration: "5 Months (Jun — Oct 2025)",
      deliverables: ["Food Ordering Client App", "Real-Time Tracking Panel", "Custom Food Categories Grid", "Express Checkout API Pipeline"],
      results: [],
      colors: [
        { name: "Active Green", hex: "#10B981", usage: "Success states, order complete tags, and brand badges" },
        { name: "Alert Red", hex: "#E2261C", usage: "Action buttons, live pointers, and cart numbers" },
        { name: "Clean White BG", hex: "#F9FAFB", usage: "Light-mode cards and background components" }
      ],
      typography: {
        headlineFont: "Anton",
        bodyFont: "Space Grotesk",
        description: "Bold uppercase headings pairing with geometric body structures optimize quick navigation in menus."
      },
      screenshots: [
        { url: "/Food /WhatsApp Image 2026-07-03 at 10.19.25 PM.jpeg", caption: "Food Express Welcome Screen and Home Dashboard Mockup" },
        { url: "/Food /WhatsApp Image 2026-07-03 at 10.19.35 PM.jpeg", caption: "Restaurant profile and menu selection grid" },
        { url: "/Food /WhatsApp Image 2026-07-03 at 10.20.23 PM.jpeg", caption: "Dynamic food options and cart overview list" },
        { url: "/Food /WhatsApp Image 2026-07-03 at 10.20.50 PM.jpeg", caption: "Detailed active order tracking timeline" },
        { url: "/Food /WhatsApp Image 2026-07-03 at 10.21.38 PM.jpeg", caption: "Search filters and category selections list" },
        { url: "/Food /WhatsApp Image 2026-07-03 at 10.22.06 PM.jpeg", caption: "Delivery details form and payment selection" },
        { url: "/Food /WhatsApp Image 2026-07-03 at 10.22.29 PM.jpeg", caption: "Active order progress status indicator" },
        { url: "/Food /WhatsApp Image 2026-07-03 at 10.22.47 PM.jpeg", caption: "User profile settings and payment cards history" },
        { url: "/Food /WhatsApp Image 2026-07-03 at 10.22.58 PM.jpeg", caption: "Promo banners and referral reward panel" },
        { url: "/Food /WhatsApp Image 2026-07-03 at 10.23.10 PM.jpeg", caption: "Receipt summary and feedback rating screen" }
      ]
    }
  },
  {
    id: "gym-fitness",
    title: "Gym Fitness Workout Tracker",
    category: "Mobile apps",
    description: "Cross-platform personal training log and routine builder with audio guidance, workout metrics charts, and heart rate integration.",
    tags: ["React Native", "Biometrics", "Local Storage", "Fitness IoT"],
    image: "/Gym fitness/WhatsApp Image 2026-07-03 at 10.35.35 PM.jpeg",
    link: "#",
    caseStudy: {
      subtitle: "Personal Training Log & Performance Metrics",
      overview: "Gym Fitness is a high-contrast workout telemetry application. It supports building custom routines, logging set weights, and visualizing heart rate history charts in real-time.",
      challenge: "Logging workouts during a high-intensity session requires speed. Clunky multi-step forms make logging sets slow and cause users to abandon their log.",
      solution: "Designed a simple 'one-tap set complete' UI with a high-contrast dark layout, minimizing fatigue and allowing instant logs of sets, reps, and active rest times.",
      duration: "3 Months (Jan — Mar 2026)",
      deliverables: ["Workout Tracking App Client", "Routine Builder Component", "Telemetry Charts Integration", "Local SQLite Log Database"],
      results: [],
      colors: [
        { name: "Gym Violet", hex: "#8B5CF6", usage: "Primary routine tags and active exercises indicators" },
        { name: "Accent Red", hex: "#E2261C", usage: "Critical telemetry warnings and timer states" },
        { name: "Ink Cream", hex: "#F3ECE1", usage: "Main body text and workout log inputs" }
      ],
      typography: {
        headlineFont: "Anton",
        bodyFont: "Space Grotesk",
        description: "Bold sans-serif headlines paired with clean monospaced body structures for dense workout tables."
      },
      screenshots: [
        { url: "/Gym fitness/WhatsApp Image 2026-07-03 at 10.35.35 PM.jpeg", caption: "Gym Fitness Home Workout Tracker Dashboard Mockup" },
        { url: "/Gym fitness/WhatsApp Image 2026-07-03 at 10.35.49 PM.jpeg", caption: "Workout routine details and exercises list" },
        { url: "/Gym fitness/WhatsApp Image 2026-07-03 at 10.35.58 PM.jpeg", caption: "Active workout tracker timer screen" },
        { url: "/Gym fitness/WhatsApp Image 2026-07-03 at 10.36.33 PM.jpeg", caption: "Weekly performance telemetry history graphs" },
        { url: "/Gym fitness/WhatsApp Image 2026-07-03 at 10.36.42 PM.jpeg", caption: "Custom routine creator form panel" },
        { url: "/Gym fitness/WhatsApp Image 2026-07-03 at 10.36.50 PM.jpeg", caption: "User weight log history chart" },
        { url: "/Gym fitness/WhatsApp Image 2026-07-03 at 10.37.09 PM.jpeg", caption: "Exercise tutorials video directory" },
        { url: "/Gym fitness/WhatsApp Image 2026-07-03 at 10.37.17 PM.jpeg", caption: "Goal setter and milestone details page" },
        { url: "/Gym fitness/WhatsApp Image 2026-07-03 at 10.37.25 PM.jpeg", caption: "Personal profile achievements checklist" },
        { url: "/Gym fitness/WhatsApp Image 2026-07-03 at 10.37.35 PM.jpeg", caption: "App settings and local data sync console" }
      ]
    }
  },
  {
    id: "luxe-booking",
    title: "Luxe Stay Booking",
    category: "Mobile apps",
    description: "Premium hotel and hospitality booking client app showcasing rich resort galleries, dynamic room selection, and concierge chats.",
    tags: ["React Native", "Interactive Map", "Animations", "Luxury Branding"],
    image: "/Luxe/WhatsApp Image 2026-07-03 at 10.09.23 PM.jpeg",
    link: "#",
    caseStudy: {
      subtitle: "High-End Resort & Hospitality Booking Client",
      overview: "Luxe Stay Booking is a premium mobile app designed for high-end boutique hotels. It unifies luxury resort catalog listings, interactive custom map check-ins, and direct concierge messaging.",
      challenge: "Standard booking tools feel generic and fail to showcase high-fidelity resort photos, lowering conversions for luxury suites.",
      solution: "Engineered a minimalist, premium layout emphasizing rich, full-screen asset sliders, fluid transitions, and a streamlined concierge chat console.",
      duration: "4 Months (Sep — Dec 2025)",
      deliverables: ["Luxury Booking Mobile Client", "Interactive Map API Panel", "Concierge Chat Component", "Resort Profile Page Layout"],
      results: [],
      colors: [
        { name: "Luxury Gold", hex: "#D97706", usage: "Rating stars, gold badges, and premium action states" },
        { name: "Midnight Canvas", hex: "#0E0C0B", usage: "Main editorial background structure" },
        { name: "Contrast Sand", hex: "#F3ECE1", usage: "Main typography headlines and lists" }
      ],
      typography: {
        headlineFont: "Anton",
        bodyFont: "Space Grotesk",
        description: "Bold sans-serif headlines communicate premium brand alignment, paired with readable geometric scales."
      },
      screenshots: [
        { url: "/Luxe/WhatsApp Image 2026-07-03 at 10.09.23 PM.jpeg", caption: "Luxe Stay Main Landing Page and Resort Selection Grid Mockup" },
        { url: "/Luxe/WhatsApp Image 2026-07-03 at 10.10.26 PM.jpeg", caption: "Resort catalog listing page with filters" },
        { url: "/Luxe/WhatsApp Image 2026-07-03 at 10.10.36 PM.jpeg", caption: "Boutique hotel details and room selection panel" },
        { url: "/Luxe/WhatsApp Image 2026-07-03 at 10.10.58 PM.jpeg", caption: "High-resolution photo slider and ratings review" },
        { url: "/Luxe/WhatsApp Image 2026-07-03 at 10.11.15 PM.jpeg", caption: "Interactive maps checkout and directions grid" },
        { url: "/Luxe/WhatsApp Image 2026-07-03 at 10.11.39 PM.jpeg", caption: "Booking details review and user forms" },
        { url: "/Luxe/WhatsApp Image 2026-07-03 at 10.11.55 PM.jpeg", caption: "Confirm booking ticket and barcode check-in" },
        { url: "/Luxe/WhatsApp Image 2026-07-03 at 10.12.08 PM.jpeg", caption: "Concierge live chat message history screen" },
        { url: "/Luxe/WhatsApp Image 2026-07-03 at 10.13.03 PM.jpeg", caption: "Payment history and card manager page" },
        { url: "/Luxe/WhatsApp Image 2026-07-03 at 10.13.15 PM.jpeg", caption: "Special promo codes and holiday deals checklist" },
        { url: "/Luxe/WhatsApp Image 2026-07-03 at 10.13.24 PM.jpeg", caption: "User settings and security dashboard" },
        { url: "/Luxe/WhatsApp Image 2026-07-03 at 10.13.33 PM.jpeg", caption: "Notification alerts and message manager" },
        { url: "/Luxe/WhatsApp Image 2026-07-03 at 10.13.45 PM.jpeg", caption: "Helpdesk support and FAQ details" },
        { url: "/Luxe/WhatsApp Image 2026-07-03 at 10.13.57 PM.jpeg", caption: "Log out panel and account review check" }
      ]
    }
  },
  {
    id: "voyage-planner",
    title: "Voyage Travel Planner",
    category: "Mobile apps",
    description: "Immersive itinerary planning client app with collaborative group mapping, ticket storage, and offline travel advice.",
    tags: ["React Native", "Offline Mode", "Maps API", "Travel Companion"],
    image: "/Voyage/WhatsApp Image 2026-07-03 at 11.01.48 PM.jpeg",
    link: "#",
    caseStudy: {
      subtitle: "Collaborative Trip Planning & Offline Itineraries",
      overview: "Voyage Travel Planner is a mobile travel companion app. It supports creating group itineraries, pins travel tickets contextually, and works offline in remote regions.",
      challenge: "Traveling in low-connectivity areas makes cloud-reliant travel apps useless. Users need instant access to local transport maps and flight tickets.",
      solution: "Engineered a React Native app that caches all active trip assets to a local SQL database and loads transport maps, route directions, and check-in tickets instantly.",
      duration: "4 Months (Jul — Oct 2025)",
      deliverables: ["Voyage App Mobile Client", "Offline Maps Sync Engine", "Itinerary Scheduler Component", "Ticket PDF Wallet UI"],
      results: [],
      colors: [
        { name: "Travel Blue", hex: "#3B82F6", usage: "Main flight buttons, active route highlights, and indicators" },
        { name: "Accent Red", hex: "#E2261C", usage: "Urgent check-in notifications and departure warnings" },
        { name: "Soft Charcoal BG", hex: "#17120F", usage: "Primary dashboard panels and menu backgrounds" }
      ],
      typography: {
        headlineFont: "Anton",
        bodyFont: "Space Grotesk",
        description: "Bold sans-serif headlines communicate travel adventure, paired with readable monospaced coordinates."
      },
      screenshots: [
        { url: "/Voyage/WhatsApp Image 2026-07-03 at 11.01.48 PM.jpeg", caption: "Voyage Travel Planner Welcome Landing Screen and Active Trips Mockup" },
        { url: "/Voyage/WhatsApp Image 2026-07-03 at 11.02.02 PM.jpeg", caption: "New travel itinerary creation screen" },
        { url: "/Voyage/WhatsApp Image 2026-07-03 at 11.02.34 PM.jpeg", caption: "Daily schedule timelines and activities list" },
        { url: "/Voyage/WhatsApp Image 2026-07-03 at 11.02.41 PM.jpeg", caption: "Interactive routes map and direction pins" },
        { url: "/Voyage/WhatsApp Image 2026-07-03 at 11.02.49 PM.jpeg", caption: "Hotel details and accommodation booking cards" },
        { url: "/Voyage/WhatsApp Image 2026-07-03 at 11.02.59 PM.jpeg", caption: "Flight flight details and departures alert" },
        { url: "/Voyage/WhatsApp Image 2026-07-03 at 11.03.10 PM.jpeg", caption: "Group travel collaborators chat panel" },
        { url: "/Voyage/WhatsApp Image 2026-07-03 at 11.03.18 PM.jpeg", caption: "Packing checklist and essentials count tracker" },
        { url: "/Voyage/WhatsApp Image 2026-07-03 at 11.03.26 PM.jpeg", caption: "Expense logs and group splitting details" },
        { url: "/Voyage/WhatsApp Image 2026-07-03 at 11.03.37 PM.jpeg", caption: "Offline local travel advisory lists" },
        { url: "/Voyage/WhatsApp Image 2026-07-03 at 11.03.48 PM.jpeg", caption: "Ticket wallet and QR barcode scanner page" },
        { url: "/Voyage/WhatsApp Image 2026-07-03 at 11.03.58 PM.jpeg", caption: "Destination photo memories diary gallery" },
        { url: "/Voyage/WhatsApp Image 2026-07-03 at 11.04.09 PM.jpeg", caption: "Settings panel and database backup sync console" }
      ]
    }
  },
  {
    id: "analytics-telemetry",
    title: "Enterprise Analytics Suite",
    category: "Web applications",
    description: "Comprehensive business intelligence and telemetry web dashboard translating complex cloud service operations into interactive SVG metrics charts.",
    tags: ["React", "Vite", "D3.js", "Enterprise SaaS"],
    image: "/Analytics/WhatsApp Image 2026-07-03 at 11.43.09 PM.jpeg",
    link: "#",
    caseStudy: {
      subtitle: "Business Intelligence & Telemetry Analytics Suite",
      overview: "The Enterprise Analytics Suite is a web portal built to aggregate server telemetry logs. It provides D3.js powered custom charts, data grids, and filter templates to streamline IT infrastructure monitoring.",
      challenge: "Systems administrators struggle to read huge logs. They need a dashboard that visualizes network spikes and tracks data pipelines instantly.",
      solution: "Engineered a modular React application using Vite and TailwindCSS, incorporating accelerated charts, real-time filters, and clean tables.",
      duration: "4 Months (Sep — Dec 2025)",
      deliverables: ["Telemetry Dashboard Portal", "Custom D3.js Charts Engine", "Data Grid Filter Library", "Operations API Integration Panel"],
      results: [],
      colors: [
        { name: "Telemetry Blue", hex: "#3B82F6", usage: "Data charts lines, indicators, and buttons" },
        { name: "Vibrant Red", hex: "#E2261C", usage: "Critical alerts, errors, and system warnings" },
        { name: "Charcoal BG", hex: "#0E0C0B", usage: "Main dashboard canvas background" }
      ],
      typography: {
        headlineFont: "Anton",
        bodyFont: "Space Grotesk",
        description: "Aggressive display titles paired with monospaced body systems make detailed reports easy to skim."
      },
      screenshots: [
        { url: "/Analytics/WhatsApp Image 2026-07-03 at 11.43.09 PM.jpeg", caption: "Analytics Suite Main Telemetry Grid and Server Performance Mockup" },
        { url: "/Analytics/WhatsApp Image 2026-07-03 at 11.43.17 PM.jpeg", caption: "Interactive data charts showing transaction volumes" },
        { url: "/Analytics/WhatsApp Image 2026-07-03 at 11.43.22 PM.jpeg", caption: "Data pipe logs and database latency lists" },
        { url: "/Analytics/WhatsApp Image 2026-07-03 at 11.43.29 PM.jpeg", caption: "Detailed user conversion funnel tracking metrics" },
        { url: "/Analytics/WhatsApp Image 2026-07-03 at 11.43.35 PM.jpeg", caption: "Custom report generator configuration page" },
        { url: "/Analytics/WhatsApp Image 2026-07-03 at 11.43.42 PM.jpeg", caption: "Weekly performance telemetry history graphs" },
        { url: "/Analytics/WhatsApp Image 2026-07-03 at 11.43.49 PM.jpeg", caption: "Active node alert configuration panel" },
        { url: "/Analytics/WhatsApp Image 2026-07-03 at 11.43.55 PM.jpeg", caption: "Cloud integration sync settings panel" },
        { url: "/Analytics/WhatsApp Image 2026-07-03 at 11.44.06 PM.jpeg", caption: "Database status monitoring checklists" },
        { url: "/Analytics/WhatsApp Image 2026-07-03 at 11.44.13 PM.jpeg", caption: "Audit checklist details and export records console" }
      ]
    }
  },
  {
    id: "health-telemetry",
    title: "Health Track Dashboard",
    category: "Web applications",
    description: "Responsive clinical analytics platform for monitoring patient telemetry, scheduling appointments, and syncing EHR data.",
    tags: ["React", "TailwindCSS", "Recharts", "HIPAA Compliance"],
    image: "/Health track/WhatsApp Image 2026-07-03 at 11.36.54 PM.jpeg",
    link: "#",
    caseStudy: {
      subtitle: "Clinical Patient Telemetry & Appointment Hub",
      overview: "Health Track is a clinician dashboard designed for real-time patient monitoring. It tracks heart rate, sleep quality metrics, and coordinates schedules.",
      challenge: "Medical staff are overwhelmed with patient lists and scattered data files, delaying reviews of critical health telemetry.",
      solution: "Designed a clean, multi-column dashboard using React, featuring patient health indicators, scheduling, and EHR data sync logs.",
      duration: "4 Months (Jul — Nov 2025)",
      deliverables: ["Patient Telemetry Portal", "Recharts Health Graphs", "Appointment Scheduler Grid", "Secure EHR Sync Connector"],
      results: [],
      colors: [
        { name: "Bridge Green", hex: "#10B981", usage: "Stable health tags and positive trend outlines" },
        { name: "Alert Orange", hex: "#F59E0B", usage: "Medium risk indicators and active reminders" },
        { name: "Midnight Blue", hex: "#0F172A", usage: "Clinical panel frame and text layouts" }
      ],
      typography: {
        headlineFont: "Anton",
        bodyFont: "Space Grotesk",
        description: "Bold headings emphasize patients metrics, supported by clean geometric scales for medical notes."
      },
      screenshots: [
        { url: "/Health track/WhatsApp Image 2026-07-03 at 11.36.54 PM.jpeg", caption: "Health Track Clinical Dashboard and Patient Telemetry Overview Mockup" },
        { url: "/Health track/WhatsApp Image 2026-07-03 at 11.37.04 PM.jpeg", caption: "Clinician schedule calendar and appointments grid" },
        { url: "/Health track/WhatsApp Image 2026-07-03 at 11.37.11 PM.jpeg", caption: "Detailed patient health profile telemetry data" },
        { url: "/Health track/WhatsApp Image 2026-07-03 at 11.37.20 PM.jpeg", caption: "Vitals log charts showing heart rates history" },
        { url: "/Health track/WhatsApp Image 2026-07-03 at 11.37.30 PM.jpeg", caption: "Medication list tracker and alerts settings" },
        { url: "/Health track/WhatsApp Image 2026-07-03 at 11.37.39 PM.jpeg", caption: "Clinician review notes and feedback panel" },
        { url: "/Health track/WhatsApp Image 2026-07-03 at 11.37.49 PM.jpeg", caption: "Lab test files report list and download" },
        { url: "/Health track/WhatsApp Image 2026-07-03 at 11.37.59 PM.jpeg", caption: "Emergency alert dashboard for urgent vitals" },
        { url: "/Health track/WhatsApp Image 2026-07-03 at 11.38.13 PM.jpeg", caption: "Patient message queue and requests timeline" },
        { url: "/Health track/WhatsApp Image 2026-07-03 at 11.38.21 PM.jpeg", caption: "EHR secure database synchronization console" }
      ]
    }
  },
  {
    id: "smarthome-controller",
    title: "Smart Home Hub",
    category: "Web applications",
    description: "Advanced web interface dashboard for home automation telemetry, configuring camera nodes, and managing live thermostat levels.",
    tags: ["React", "Vite", "WebSocket APIs", "IoT Telemetry"],
    image: "/Smart home/WhatsApp Image 2026-07-03 at 11.55.04 PM.jpeg",
    link: "#",
    caseStudy: {
      subtitle: "Home Automation Telemetry & IoT Control Hub",
      overview: "Smart Home Hub is a dashboard portal built to manage smart appliances, track home energy efficiency metrics, and review live security feeds.",
      challenge: "IoT apps are often slow to respond, causing lag in camera streams and thermostat updates.",
      solution: "Developed a responsive dashboard client using WebSockets for real-time telemetry updates and optimized camera stream buffers.",
      duration: "5 Months (Jun — Oct 2025)",
      deliverables: ["IoT Operations Dashboard", "Thermostat Control Slider", "Camera Feeds Buffer Panel", "Energy Analytics Report Suite"],
      results: [],
      colors: [
        { name: "Active Teal", hex: "#14B8A6", usage: "Power status overlays and active node tags" },
        { name: "Accent Red", hex: "#E2261C", usage: "Heating settings, fire alerts, and active recorders" },
        { name: "Soft Charcoal", hex: "#17120F", usage: "Main dashboard layout background" }
      ],
      typography: {
        headlineFont: "Anton",
        bodyFont: "Space Grotesk",
        description: "High-contrast sans headings deliver a clean smart home control feel, with geometic text details."
      },
      screenshots: [
        { url: "/Smart home/WhatsApp Image 2026-07-03 at 11.55.04 PM.jpeg", caption: "Smart Home Central Controller and Energy Telemetry Overview Mockup" },
        { url: "/Smart home/WhatsApp Image 2026-07-03 at 11.55.50 PM.jpeg", caption: "Living room thermostat and light settings" },
        { url: "/Smart home/WhatsApp Image 2026-07-03 at 11.56.01 PM.jpeg", caption: "Kitchen appliances control dashboard" },
        { url: "/Smart home/WhatsApp Image 2026-07-03 at 11.56.12 PM.jpeg", caption: "Smart security camera live feed panel" },
        { url: "/Smart home/WhatsApp Image 2026-07-03 at 11.56.22 PM.jpeg", caption: "Device telemetry connections status list" },
        { url: "/Smart home/WhatsApp Image 2026-07-03 at 11.56.32 PM.jpeg", caption: "Automations timer rules configuration page" },
        { url: "/Smart home/WhatsApp Image 2026-07-03 at 11.56.41 PM.jpeg", caption: "Water heater status monitor graphs" },
        { url: "/Smart home/WhatsApp Image 2026-07-03 at 11.56.53 PM.jpeg", caption: "Energy saving score analytics console" },
        { url: "/Smart home/WhatsApp Image 2026-07-03 at 11.57.13 PM.jpeg", caption: "Smart locks status and access logs sheet" },
        { url: "/Smart home/WhatsApp Image 2026-07-03 at 11.57.22 PM.jpeg", caption: "Entertainment devices voice control maps" },
        { url: "/Smart home/WhatsApp Image 2026-07-03 at 11.57.30 PM.jpeg", caption: "General device settings and alerts filters" },
        { url: "/Smart home/WhatsApp Image 2026-07-03 at 11.57.44 PM.jpeg", caption: "System health check logs and database backup console" }
      ]
    }
  },
  {
    id: "project-alpha-portal",
    title: "Project Alpha Control Panel",
    category: "Web applications",
    description: "High-fidelity software dashboard built for blockchain system operations, node analytics, and real-time transaction speeds.",
    tags: ["React", "TailwindCSS", "Node.js", "System Analytics"],
    image: "/project alpha/WhatsApp Image 2026-07-03 at 10.52.15 PM.jpeg",
    link: "#",
    caseStudy: {
      subtitle: "Blockchain Telemetry & Node Operations Control Panel",
      overview: "Project Alpha is an enterprise control panel designed to monitor blockchain node metrics, transaction block pipelines, and network loads.",
      challenge: "Blockchain operators have poor dashboard visibility on network lag and transaction pipeline blocks, leading to slow resolutions.",
      solution: "Built a customized dashboard with React and WebSockets, delivering real-time telemetry grids, system speedometers, and block pipelines.",
      duration: "4 Months (Jan — Apr 2026)",
      deliverables: ["Node Operations Dashboard", "Block Pipeline Monitor Component", "Network Spikes Telemetry Chart", "Operator Access control Panel"],
      results: [],
      colors: [
        { name: "Crypto Gold", hex: "#F59E0B", usage: "Block indicators, validation stars, and positive trends" },
        { name: "Active Indigo", hex: "#4B2EFF", usage: "Main buttons, active routes, and focus lines" },
        { name: "Midnight Charcoal", hex: "#0E0C0B", usage: "Core terminal background canvas frame" }
      ],
      typography: {
        headlineFont: "Anton",
        bodyFont: "Space Grotesk",
        description: "Bold sans headings reflect cutting-edge aerospace venture feel, supported by geometric logs."
      },
      screenshots: [
        { url: "/project alpha/WhatsApp Image 2026-07-03 at 10.52.15 PM.jpeg", caption: "Project Alpha System Telemetry and Node Operations Control Panel Mockup" },
        { url: "/project alpha/WhatsApp Image 2026-07-03 at 10.52.25 PM.jpeg", caption: "Blockchain blocks validator timeline logs" },
        { url: "/project alpha/WhatsApp Image 2026-07-03 at 10.52.30 PM.jpeg", caption: "Transaction latency statistics graphs" },
        { url: "/project alpha/WhatsApp Image 2026-07-03 at 10.52.39 PM.jpeg", caption: "Security nodes keys overview board" },
        { url: "/project alpha/WhatsApp Image 2026-07-03 at 10.52.49 PM.jpeg", caption: "User accounts wallet balance listings" },
        { url: "/project alpha/WhatsApp Image 2026-07-03 at 10.52.58 PM.jpeg", caption: "Network load alerts configuration screen" },
        { url: "/project alpha/WhatsApp Image 2026-07-03 at 10.53.39 PM.jpeg", caption: "Custom block gas prices estimator panel" },
        { url: "/project alpha/WhatsApp Image 2026-07-03 at 10.53.49 PM.jpeg", caption: "API access token manager guidelines" },
        { url: "/project alpha/WhatsApp Image 2026-07-03 at 10.54.11 PM.jpeg", caption: "General logs summary download dashboard" },
        { url: "/project alpha/WhatsApp Image 2026-07-03 at 10.54.38 PM.jpeg", caption: "Database synchronization console and logs export" }
      ]
    }
  }
];
