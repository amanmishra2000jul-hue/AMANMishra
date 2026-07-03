import kpmgDashboard from "../assets/kpmg_dashboard.png";
import kpmgChatbot from "../assets/kpmg_chatbot.png";
import kpmgDesignSystem from "../assets/kpmg_design_system.png";
import kpmgArchitecture from "../assets/kpmg_architecture.png";

// New category mockups
import kpmgWebsite from "../assets/kpmg_website.png";
import kpmgMobile from "../assets/kpmg_mobile.png";
import kpmgSocial from "../assets/kpmg_social.png";
import kpmgBranding from "../assets/kpmg_branding.png";
import kpmgMarketing from "../assets/kpmg_marketing.png";
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

// Selected Case Studies of Web Development and Design at KPMG
export const work = [
  {
    id: "kpmg-dashboard",
    title: "KPMG Client Solutions Suite",
    category: "Web applications",
    description: "Enterprise software product dashboard built for client intelligence telemetry, metrics analytics, and service operations tracking. Created a responsive UI/UX that presents complex data tables and interactive charts in a dark-themed aesthetic.",
    tags: ["React", "Vite", "D3.js", "System Design"],
    image: kpmgDashboard,
    link: "#",
    caseStudy: {
      subtitle: "Enterprise Intelligence Telemetry & Metrics",
      overview: "The KPMG Client Solutions Suite is a next-generation enterprise telemetry dashboard. It enables large-scale operations tracking, client query monitoring, and visual data graphing. The objective was to design a clean, responsive, dark-mode analytical interface that simplifies thousands of system logs and presents high-level KPIs in an easily digestible layout.",
      challenge: "Enterprise clients struggled with cluttered log tables, confusing configurations, and slow render speeds. They needed a tool that was not only fast and responsive but also presented insights clearly, allowing solutions leads to troubleshoot client issues instantly.",
      solution: "We engineered a React and Vite application utilizing D3.js for GPU-accelerated chart rendering. The user interface was structured with a premium, low-fatigue dark layout, emphasizing data highlights with a vibrant red accent.",
      duration: "6 Months (Oct 2024 — Mar 2026)",
      deliverables: ["Telemetry Dashboard", "Interactive Data Tables", "Custom Chart Engine", "Design System Library"],
      results: [
        { label: "Rendering Speedup", value: "4.8x" },
        { label: "Client Onboarding Time", value: "-35%" },
        { label: "User Task Completion", value: "+28%" }
      ],
      colors: [
        { name: "Primary Accent Red", hex: "#E2261C", usage: "Key highlights, buttons, and alert signals" },
        { name: "Ink Cream", hex: "#F3ECE1", usage: "Main body text, readable values, and tags" },
        { name: "Soft Charcoal", hex: "#17120F", usage: "Primary dashboard card backgrounds" }
      ],
      typography: {
        headlineFont: "Anton",
        bodyFont: "Space Grotesk",
        description: "Anton serves as a high-contrast heading element, emphasizing main KPIs, while Space Grotesk offers geometric readability for multi-column data grids."
      },
      screenshots: [
        { url: kpmgDashboard, caption: "Main dashboard mockup with telemetry data grids" },
        { url: kpmgDesignSystem, caption: "Reusable UI components and color guide stylesheet" },
        { url: kpmgArchitecture, caption: "System architecture design flow and backend data pipelines" }
      ]
    }
  },
  {
    id: "kpmg-chatbot",
    title: "GPT-3 Enterprise Assistant",
    category: "Web applications",
    description: "An advanced conversational interface chatbot designed to ingest complex regulatory files and answer client queries. Created a custom chat timeline with smooth Framer Motion micro-animations, improving user engagement and model accuracy by 15%.",
    tags: ["LLM Integration", "React", "CSS Grid", "Framer Motion"],
    image: kpmgChatbot,
    link: "#",
    caseStudy: {
      subtitle: "AI-Powered Conversational Knowledge Base",
      overview: "A custom artificial intelligence chat interface developed to ingest complex financial regulatory policies and answer questions from KPMG client solution leads. By combining a GPT-3 LLM backend with a responsive, animated chat frontend, the project streamlined search times for solutions guidelines.",
      challenge: "Client solutions leads spent hours searching through long regulatory PDFs. They needed a chatbot interface that could fetch answers contextually and showcase search citations in a clear, interactive timeline.",
      solution: "We designed a conversation-centric web interface with rich text rendering, collapsible sidebar citations, and fluid transition animations between response bubbles.",
      duration: "4 Months (Jul — Nov 2024)",
      deliverables: ["Conversational Chat UI", "Citations Sidebar", "System Administration Panel", "API Integration Pipeline"],
      results: [
        { label: "Search Efficiency", value: "+60%" },
        { label: "Model Query Accuracy", value: "+15%" },
        { label: "Daily Active Users", value: "240+" }
      ],
      colors: [
        { name: "Accent Red", hex: "#E2261C", usage: "Chat toggle keys and user active states" },
        { name: "Muted Cream", hex: "#B9AFA2", usage: "Bot chat speech text, timestamps, and details" },
        { name: "Midnight Frame", hex: "#0E0C0B", usage: "Core background canvas and sidebar" }
      ],
      typography: {
        headlineFont: "Anton",
        bodyFont: "Space Grotesk",
        description: "Bold sans-serif headlines paired with clean monospaced body structures for bubble dialog text."
      },
      screenshots: [
        { url: kpmgChatbot, caption: "GPT-3 enterprise chat layout with dynamic prompt timelines" },
        { url: kpmgDesignSystem, caption: "Component system variables and UI guidelines" },
        { url: kpmgArchitecture, caption: "Data ingestion pipeline architecture details" }
      ]
    }
  },
  {
    id: "kpmg-website",
    title: "KPMG Consulting Portal",
    category: "Website",
    description: "Corporate platform designed to showcase consulting practices, digital transformation insights, and advisory services. Fully optimized for high SEO performance, accessibility, and smooth asset downloads.",
    tags: ["React", "Vite", "SEO Suite", "A11y Standards"],
    image: kpmgWebsite,
    link: "#",
    caseStudy: {
      subtitle: "Modern High-Performance Corporate Hub",
      overview: "Designed and engineered the central web presence for KPMG's global advisory division, highlighting digital services and leadership columns.",
      challenge: "The old portal suffered from low user engagement, poor search engine visibility, and slow load times for client whitepaper assets.",
      solution: "Implemented a blazing-fast React and Vite structure with semantic HTML, serverless asset delivery, and responsive CSS frameworks, boosting PageSpeed score to 99%.",
      duration: "3 Months (Apr — Jun 2024)",
      deliverables: ["Global Corporate Portal", "SEO Optimization Suite", "Resource Download Hub", "Accessibility Guidelines (WCAG)"],
      results: [
        { label: "Search Visibility", value: "+85%" },
        { label: "Asset Downloads", value: "+45%" },
        { label: "Load Time Reduction", value: "2.4s" }
      ],
      colors: [
        { name: "Bright Red Accent", hex: "#E2261C", usage: "Call to action buttons and hover lines" },
        { name: "Cream Text", hex: "#F3ECE1", usage: "Main editorial titles and links" },
        { name: "Deep Charcoal", hex: "#17120F", usage: "Section backgrounds and grid cards" }
      ],
      typography: {
        headlineFont: "Anton",
        bodyFont: "Space Grotesk",
        description: "Bold, uppercase title styling gives the consulting portal a modern magazine look, contrasted by geometric body copy that reads easily on mobile."
      },
      screenshots: [
        { url: kpmgWebsite, caption: "Corporate landing page layout with conversion metrics grids" }
      ]
    }
  },
  {
    id: "kpmg-mobile",
    title: "Field Audit Assistant",
    category: "Mobile apps",
    description: "Secure, high-contrast mobile dashboard designed for auditing teams executing real-time inspections in remote logistics centers and warehouses.",
    tags: ["React Native", "TailwindCSS", "Node.js", "Data Flow"],
    image: kpmgMobile,
    link: "#",
    caseStudy: {
      subtitle: "On-the-go Operations Command Center",
      overview: "Developed a high-fidelity mobile application interface focused on ease of navigation in low-connectivity logistics warehouses.",
      challenge: "Auditors working in remote facilities had to deal with complex data input forms on sluggish desktop views, leading to data loss.",
      solution: "Designed a lightweight React Native client with local SQL databases, clear visual alerts, large touch targets, and automated offline data queuing.",
      duration: "5 Months (Jan — May 2025)",
      deliverables: ["React Native Client", "Offline Data Sync Engine", "Audit Forms System", "Alert Notification Suite"],
      results: [
        { label: "Audit Speed", value: "+40%" },
        { label: "Input Error Rate", value: "-22%" },
        { label: "Daily Active Auditors", value: "1,200+" }
      ],
      colors: [
        { name: "Safety Orange-Red", hex: "#E2261C", usage: "Critical warnings and high-priority alerts" },
        { name: "Off-White Value", hex: "#F3ECE1", usage: "Large metrics numbers and primary labels" },
        { name: "Slate base", hex: "#0E0C0B", usage: "App canvas and bottom navigation deck" }
      ],
      typography: {
        headlineFont: "Anton",
        bodyFont: "Space Grotesk",
        description: "Clean, robust sans-serif fonts chosen specifically to ensure maximum readability under direct warehouse fluorescent glare."
      },
      screenshots: [
        { url: kpmgMobile, caption: "Mobile ops command center dashboard featuring alerts timelines" }
      ]
    }
  },
  {
    id: "kpmg-social",
    title: "Tech Insights Branding Campaign",
    category: "Social Media Posts",
    description: "Visual marketing campaign consisting of dynamic content templates, infographics, and carousel layouts designed to translate technical reports into high-engagement slides.",
    tags: ["Brand Strategy", "Figma Design", "Social Identity", "Infographics"],
    image: kpmgSocial,
    link: "#",
    caseStudy: {
      subtitle: "Data-Driven Visual Social Narrative",
      overview: "Crafted a multi-platform visual identity and templates suite to present complex tech trends to decision makers on LinkedIn and Instagram.",
      challenge: "Engagement on technical whitepapers was low due to wall-of-text formatting and generic stock visuals on corporate accounts.",
      solution: "Created bespoke infographic cards, bold stats callouts, and clean checklists in a premium dark slate aesthetic.",
      duration: "3 Months (Sep — Nov 2025)",
      deliverables: ["LinkedIn Templates Library", "Animated Story Mockups", "Tech Infographics Suite", "Social Guidelines PDF"],
      results: [
        { label: "Engagement Rate", value: "+128%" },
        { label: "Monthly Reach", value: "92K+" },
        { label: "Inbound Leads", value: "+35%" }
      ],
      colors: [
        { name: "Attention Red", hex: "#E2261C", usage: "High-contrast highlights and title underlines" },
        { name: "Warm Cream", hex: "#F3ECE1", usage: "Text labels and slide content summaries" },
        { name: "Carbon Slate", hex: "#17120F", usage: "Card templates background" }
      ],
      typography: {
        headlineFont: "Anton",
        bodyFont: "Space Grotesk",
        description: "Bold headings to capture attention in scrolling timelines, combined with monospaced accents to emphasize technology data points."
      },
      screenshots: [
        { url: kpmgSocial, caption: "Visual grid layout showing social posts with conversion metrics graphics" }
      ]
    }
  },
  {
    id: "kpmg-branding",
    title: "AI Suite Identity System",
    category: "Branding & Marketing",
    description: "A cohesive brand identity system including logo design, color guidelines, custom icons, and typography specifications for KPMG's enterprise AI products.",
    tags: ["Brand Guidelines", "Vector Design", "Logo Mark", "Icon Set"],
    image: kpmgBranding,
    link: "#",
    caseStudy: {
      subtitle: "Corporate Identity for Next-Gen Solutions",
      overview: "Established the visual guidelines, logo system, and core assets for the KPMG enterprise AI solution portfolio.",
      challenge: "New AI product tools lacked visual consistency, making it hard for clients to associate them with the parent company's brand, hurting cross-sales.",
      solution: "Engineered a geometric logo mark combining KPMG colors with modern tech cues, alongside a detailed digital brand book for internal developers.",
      duration: "4 Months (Nov 2024 — Feb 2025)",
      deliverables: ["Core Brand Guidelines", "Vector Logo Library", "Custom Icon Set (32 icons)", "Corporate Stationary Layouts"],
      results: [
        { label: "Product Alignment", value: "100%" },
        { label: "Teams Adopting Rules", value: "12 teams" },
        { label: "Marketing Delivery Speed", value: "3.5x" }
      ],
      colors: [
        { name: "Corporate Red", hex: "#E2261C", usage: "Primary brand mark symbol and active states" },
        { name: "Guideline Cream", hex: "#F3ECE1", usage: "Documentation header labels and layout grid lines" },
        { name: "Dark Neutral", hex: "#0E0C0B", usage: "Documentation background and canvas frames" }
      ],
      typography: {
        headlineFont: "Anton",
        bodyFont: "Space Grotesk",
        description: "Strict typographic scale using bold geometric layouts for visual hierarchy in documents and stationery."
      },
      screenshots: [
        { url: kpmgBranding, caption: "Brand identity guidelines sheet showing typography and custom icons list" }
      ]
    }
  },
  {
    id: "kpmg-marketing",
    title: "Future of Audit Campaign",
    category: "Branding & Marketing",
    description: "Multi-channel digital marketing drive promoting KPMG's smart audit telemetry services to enterprise CFOs and finance leaders.",
    tags: ["Lead Generation", "Google Ads", "Email Sequences", "Analytics Dashboard"],
    image: kpmgMarketing,
    link: "#",
    caseStudy: {
      subtitle: "Growth Campaign for Enterprise Audit Tools",
      overview: "Designed, launched, and tracked a comprehensive growth marketing campaign including landing pages, search ads, and email sequences.",
      challenge: "C-level executives were unaware of KPMG's automated audit speed capability, relying on slower traditional service queries.",
      solution: "Constructed targeted landing pages showing interactive ROI calculators and automated email updates on audit status.",
      duration: "4 Months (Feb — May 2026)",
      deliverables: ["Conversion Landing Page", "Email Sequence Automation", "Ad Creative Asset Pack", "Analytics Dashboard Interface"],
      results: [
        { label: "Campaign ROI", value: "2.8x" },
        { label: "SQLs Generated", value: "480+" },
        { label: "C-Level Conversion Rate", value: "5.8%" }
      ],
      colors: [
        { name: "Conversion Red", hex: "#E2261C", usage: "Action tags, call-outs, and value gauges" },
        { name: "Warm Cream", hex: "#F3ECE1", usage: "Text headlines and email templates font" },
        { name: "Midnight Charcoal", hex: "#0E0C0B", usage: "Landing page background block" }
      ],
      typography: {
        headlineFont: "Anton",
        bodyFont: "Space Grotesk",
        description: "Anton was chosen to emphasize core figures and percentage values, while Space Grotesk supports the main reading columns."
      },
      screenshots: [
        { url: kpmgMarketing, caption: "Growth campaign analytics sheet showing ad creatives and email layout preview" }
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
        { url: "/Food Bridge app/211bbf184042261.654a94e5bc045.webp", caption: "Food Bridge mobile screen mockup 1 showing user dashboard lists and routing details" },
        { url: "/Food Bridge app/3c7dc7184042261.654a94e5ba28c.webp", caption: "Food Bridge mobile screen mockup 2 showing user dashboard lists and routing details" },
        { url: "/Food Bridge app/4f2d72184042261.654a94e5c05cb.webp", caption: "Food Bridge mobile screen mockup 3 showing user dashboard lists and routing details" },
        { url: "/Food Bridge app/4fc81a184042261.654a94e5bddb8.webp", caption: "Food Bridge mobile screen mockup 4 showing user dashboard lists and routing details" },
        { url: "/Food Bridge app/58d579184042261.654a94e5bb5e1.webp", caption: "Food Bridge mobile screen mockup 5 showing user dashboard lists and routing details" },
        { url: "/Food Bridge app/7dcd7b184042261.654a94e5b998d.webp", caption: "Food Bridge mobile screen mockup 6 showing user dashboard lists and routing details" },
        { url: "/Food Bridge app/8008b7184042261.654a94e5be68d.webp", caption: "Food Bridge mobile screen mockup 7 showing user dashboard lists and routing details" },
        { url: "/Food Bridge app/844b6c184042261.654a94e5bfd0d.webp", caption: "Food Bridge mobile screen mockup 8 showing user dashboard lists and routing details" },
        { url: "/Food Bridge app/9a4bb4184042261.654a94e5bd351.webp", caption: "Food Bridge mobile screen mockup 9 showing user dashboard lists and routing details" },
        { url: "/Food Bridge app/Home screen.webp", caption: "Food Bridge mobile screen mockup 10 showing user dashboard lists and routing details" },
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
  }
];
