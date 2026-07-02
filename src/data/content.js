import kpmgDashboard from "../assets/kpmg_dashboard.png";
import kpmgChatbot from "../assets/kpmg_chatbot.png";
import kpmgDesignSystem from "../assets/kpmg_design_system.png";
import kpmgArchitecture from "../assets/kpmg_architecture.png";

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
      designSystemImage: kpmgDesignSystem,
      architectureImage: kpmgArchitecture,
      results: [
        { label: "Rendering Speedup", value: "4.8x" },
        { label: "Client Onboarding Time", value: "-35%" },
        { label: "User Task Completion", value: "+28%" }
      ]
    }
  },
  {
    id: "kpmg-chatbot",
    title: "GPT-3 Enterprise Assistant",
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
      designSystemImage: kpmgDesignSystem,
      architectureImage: kpmgArchitecture,
      results: [
        { label: "Search Efficiency", value: "+60%" },
        { label: "Model Query Accuracy", value: "+15%" },
        { label: "Daily Active Users", value: "240+" }
      ]
    }
  }
];
