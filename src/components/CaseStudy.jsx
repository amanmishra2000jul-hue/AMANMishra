import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const tabContentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
};

export default function CaseStudy({ project, onBack }) {
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const cs = project.caseStudy;

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "design", label: "Design System" },
    { id: "architecture", label: "Architecture" },
    { id: "impact", label: "Business Impact" },
  ];

  return (
    <article className="case-study-page">
      {/* Hero Banner Section */}
      <section className="cs-hero">
        <div className="grid-overlay" />
        <div className="container cs-hero-inner">
          <motion.button
            className="cs-back-btn btn"
            onClick={onBack}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="icon-circle">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: "rotate(180deg)" }}>
                <path d="M7 17L17 7M17 7H8M17 7v9" />
              </svg>
            </span>
            Back to Home
          </motion.button>

          <div className="cs-header-grid">
            <motion.div
              className="cs-header-info"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <span className="eyebrow">Case Study</span>
              <h1 className="cs-title display">{project.title}</h1>
              <p className="cs-subtitle">{cs.subtitle}</p>
            </motion.div>

            <motion.div
              className="cs-meta-grid"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: 0.15 }}
            >
              <div className="cs-meta-item">
                <span className="dim cs-meta-label">Role</span>
                <span className="cs-meta-val">{project.caseStudy.role || "UI/UX & Lead Developer"}</span>
              </div>
              <div className="cs-meta-item">
                <span className="dim cs-meta-label">Client</span>
                <span className="cs-meta-val">KPMG</span>
              </div>
              <div className="cs-meta-item">
                <span className="dim cs-meta-label">Duration</span>
                <span className="cs-meta-val">{cs.duration}</span>
              </div>
              <div className="cs-meta-item">
                <span className="dim cs-meta-label">Technologies</span>
                <div className="cs-meta-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="cs-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="cs-tabs-section">
        <div className="container">
          <div className="cs-tabs-wrapper">
            <div className="cs-tabs-list">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`cs-tab-btn ${activeTab === tab.id ? "active" : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div className="cs-active-tab-indicator" layoutId="activeTabIndicator" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tab Content Showcase */}
      <section className="cs-content-section container">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={tabContentVariants}
            className="cs-tab-container"
          >
            {activeTab === "overview" && (
              <div className="cs-tab-overview">
                <div className="cs-text-columns">
                  <div className="cs-col">
                    <h3 className="cs-section-title">The Challenge</h3>
                    <p className="cs-paragraph">{cs.challenge}</p>
                  </div>
                  <div className="cs-col">
                    <h3 className="cs-section-title">The Solution</h3>
                    <p className="cs-paragraph">{cs.solution}</p>
                  </div>
                </div>

                <div className="cs-showcase-image-wrapper">
                  <h4 className="dim cs-image-label">High-Fidelity Interface Overview</h4>
                  <div className="cs-showcase-frame">
                    <img src={project.image} alt={`${project.title} Interface`} className="cs-showcase-image" />
                  </div>
                </div>

                <div className="cs-deliverables-box">
                  <h3 className="cs-section-title">Key Deliverables</h3>
                  <div className="cs-deliverables-grid">
                    {cs.deliverables.map((item, idx) => (
                      <div key={item} className="cs-deliverable-item">
                        <span className="cs-deliverable-index">0{idx + 1}</span>
                        <span className="cs-deliverable-text">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "design" && (
              <div className="cs-tab-design">
                <div className="cs-text-columns">
                  <div className="cs-col-full">
                    <h3 className="cs-section-title">Visual Design & System Library</h3>
                    <p className="cs-paragraph">
                      To enable developers to quickly build consistent enterprise screens, we crafted a high-fidelity Design System. This includes a modular dark UI kit, strict typographic hierarchy, input validation styling, and pre-packaged layout components.
                    </p>
                  </div>
                </div>

                <div className="cs-showcase-image-wrapper">
                  <h4 className="dim cs-image-label">Component Library & Figma Stylesheet</h4>
                  <div className="cs-showcase-frame">
                    <img src={cs.designSystemImage} alt="Design System Stylesheet" className="cs-showcase-image" />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "architecture" && (
              <div className="cs-tab-architecture">
                <div className="cs-text-columns">
                  <div className="cs-col-full">
                    <h3 className="cs-section-title">System Architecture & Pipeline</h3>
                    <p className="cs-paragraph">
                      The application relies on a React & Vite client paired with secure REST APIs. Telemetry tables use rendering optimizations to handle thousands of concurrent updates, while the Chatbot uses chunked streaming APIs from a custom Node.js middleware.
                    </p>
                  </div>
                </div>

                <div className="cs-showcase-image-wrapper">
                  <h4 className="dim cs-image-label">Backend Data Flow & Node Map</h4>
                  <div className="cs-showcase-frame">
                    <img src={cs.architectureImage} alt="Software Architecture Map" className="cs-showcase-image" />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "impact" && (
              <div className="cs-tab-impact">
                <h3 className="cs-section-title centered">Project Performance & Results</h3>
                <div className="cs-stats-showcase">
                  {cs.results.map((stat, idx) => (
                    <motion.div
                      key={stat.label}
                      className="cs-stat-card"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <span className="cs-stat-val display">{stat.value}</span>
                      <span className="cs-stat-lbl dim">{stat.label}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="cs-takeaway-block">
                  <h3 className="cs-section-title">Key Takeaways</h3>
                  <p className="cs-paragraph">
                    By coordinating directly between client stakeholders and developers, we minimized design-to-production friction. This unified process allowed us to deliver a complete production build within a tight timeframe while ensuring all security requirements were met.
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Footer Call To Action */}
      <section className="cs-footer-cta container">
        <div className="cs-cta-box">
          <h2 className="display cs-cta-heading">Interested in similar results?</h2>
          <a href="#contact" className="btn" onClick={onBack}>
            <span className="icon-circle">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H8M17 7v9" />
              </svg>
            </span>
            Start a project
          </a>
        </div>
      </section>
    </article>
  );
}
