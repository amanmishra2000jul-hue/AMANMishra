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
    category: "Social media Management",
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
    category: "Branding",
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
    category: "Marketing campaigns",
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
  }
];
