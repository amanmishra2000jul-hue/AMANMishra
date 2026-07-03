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
  const [copiedColor, setCopiedColor] = useState(null);
  const [selectedScreenshot, setSelectedScreenshot] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const cs = project.caseStudy;
  const category = project.category || "Web applications";
  const isCreativeCategory = ["Branding", "Social media Management", "Marketing campaigns", "Social Media Posts", "Branding & Marketing"].includes(category);
  const isSocialMediaCategory = category === "Social Media Posts";

  // Dynamic Tabs list based on project category
  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "gallery", label: "Gallery & Mockups" },
    { id: "styleguide", label: "Colors & Typography" },
    isCreativeCategory
      ? { id: "strategy", label: "Creative Strategy" }
      : { id: "architecture", label: "Tech Architecture" },
    { id: "impact", label: "Business Impact" },
  ];

  // Clipboard copy handler for color swatches
  const handleCopyColor = (hex) => {
    navigator.clipboard.writeText(hex).then(() => {
      setCopiedColor(hex);
      setTimeout(() => setCopiedColor(null), 1500);
    });
  };

  const screenshots = cs.screenshots || [{ url: project.image, caption: "Main project snapshot overview" }];
  const colors = cs.colors || [
    { name: "Accent Red", hex: "#E2261C", usage: "Main highlights" },
    { name: "Cream Text", hex: "#F3ECE1", usage: "Primary text and icons" },
    { name: "Charcoal Black", hex: "#0E0C0B", usage: "Canvas background" }
  ];
  const typography = cs.typography || {
    headlineFont: "Anton",
    bodyFont: "Space Grotesk",
    description: "Bold headings to command attention, supported by geometric monospaced numbers and letters."
  };

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
            Back to Works
          </motion.button>

          <div className="cs-header-grid">
            <motion.div
              className="cs-header-info"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <span className="eyebrow">{project.category} Case Study</span>
              <h1 className="cs-title display">{project.title}</h1>
              <p className="cs-subtitle">{cs.subtitle}</p>
              {project.link && project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn cs-visit-btn"
                  style={{ marginTop: "24px", display: "inline-flex", width: "fit-content" }}
                >
                  <span className="icon-circle">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H8M17 7v9" />
                    </svg>
                  </span>
                  Visit Live Site
                </a>
              )}
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
                <span className="cs-meta-val">{project.caseStudy.role || "UI/UX Designer & Developer"}</span>
              </div>
              <div className="cs-meta-item">
                <span className="dim cs-meta-label">Organization</span>
                <span className="cs-meta-val">{project.caseStudy.org || "KPMG"}</span>
              </div>
              <div className="cs-meta-item">
                <span className="dim cs-meta-label">Duration</span>
                <span className="cs-meta-val">{cs.duration}</span>
              </div>
              <div className="cs-meta-item">
                <span className="dim cs-meta-label">Tags</span>
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
            {/* 1. OVERVIEW TAB */}
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

            {/* 2. GALLERY & SCREENSHOTS TAB */}
            {activeTab === "gallery" && (
              <div className="cs-tab-gallery">
                <h3 className="cs-section-title">Project Gallery & Mockups</h3>
                <p className="cs-paragraph" style={{ marginBottom: "32px" }}>
                  A collection of high-fidelity interface screenshots, style guides, and design boards. Click on any mockup to view a high-resolution version.
                </p>

                {isSocialMediaCategory ? (
                  <div className="cs-collage-grid">
                    {screenshots.map((shot, idx) => (
                      <motion.div
                        key={idx}
                        className="cs-collage-item"
                        whileHover={{ y: -2 }}
                        onClick={() => setSelectedScreenshot(shot)}
                        style={{ cursor: "pointer" }}
                      >
                        <img src={shot.url} alt={shot.caption} className="cs-collage-img" />
                        <div className="cs-gallery-hover-overlay">
                          <span className="cs-gallery-zoom-btn">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "20px", height: "20px" }}>
                              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                            </svg>
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="cs-gallery-grid">
                    {screenshots.map((shot, idx) => (
                      <motion.div
                        key={idx}
                        className="cs-gallery-card"
                        whileHover={{ y: -6 }}
                        onClick={() => setSelectedScreenshot(shot)}
                        style={{ cursor: "pointer" }}
                      >
                        <div className="cs-gallery-img-wrapper">
                          <img src={shot.url} alt={shot.caption} className="cs-gallery-img" />
                          <div className="cs-gallery-hover-overlay">
                            <span className="cs-gallery-zoom-btn">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "20px", height: "20px" }}>
                                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                              </svg>
                            </span>
                          </div>
                        </div>
                        <div className="cs-gallery-info">
                          <span className="cs-gallery-index">Mockup 0{idx + 1}</span>
                          <p className="cs-gallery-caption dim">{shot.caption}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* 3. COLORS & TYPOGRAPHY STYLE GUIDE TAB */}
            {activeTab === "styleguide" && (
              <div className="cs-tab-styleguide">
                <div className="cs-styleguide-grid">
                  {/* Swatches Section */}
                  <div className="cs-swatches-panel">
                    <h3 className="cs-section-title">Color Palette</h3>
                    <p className="cs-paragraph" style={{ marginBottom: "30px" }}>
                      Click on any color circle below to copy the HEX code to your clipboard.
                    </p>

                    <div className="cs-swatches-list">
                      {colors.map((color) => (
                        <div key={color.hex} className="cs-swatch-item">
                          <button
                            className="cs-swatch-circle-btn"
                            style={{ backgroundColor: color.hex }}
                            onClick={() => handleCopyColor(color.hex)}
                            aria-label={`Copy color ${color.name} ${color.hex}`}
                          >
                            <span className="cs-swatch-hover-text">
                              {copiedColor === color.hex ? "Copied!" : "Copy HEX"}
                            </span>
                          </button>
                          <div className="cs-swatch-info">
                            <span className="cs-swatch-name">{color.name}</span>
                            <span className="cs-swatch-hex font-mono dim">{color.hex}</span>
                            <p className="cs-swatch-usage dim">{color.usage}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Typography Section */}
                  <div className="cs-typography-panel">
                    <h3 className="cs-section-title">Typography Specs</h3>
                    <p className="cs-paragraph" style={{ marginBottom: "30px" }}>
                      {typography.description}
                    </p>

                    <div className="cs-typo-specimens">
                      <div className="cs-typo-item">
                        <span className="cs-typo-tag dim">Display Headings</span>
                        <div className="cs-typo-specimen display-sample font-display">
                          {typography.headlineFont} Regular
                        </div>
                        <span className="cs-typo-font-name dim">Font: {typography.headlineFont} | Case: UPPERCASE</span>
                      </div>

                      <div className="cs-typo-item">
                        <span className="cs-typo-tag dim">Secondary Headers & Body Copy</span>
                        <div className="cs-typo-specimen body-sample font-body">
                          {typography.bodyFont} Medium & Regular
                        </div>
                        <span className="cs-typo-font-name dim">Font: {typography.bodyFont} | Style: Geometric Sans</span>
                      </div>

                      <div className="cs-typo-item">
                        <span className="cs-typo-tag dim">Typography Specimen Matrix</span>
                        <div className="cs-typo-specimen matrix-sample">
                          <div className="matrix-row">
                            <span className="matrix-h display font-display">H1</span>
                            <span className="matrix-label font-display">SELECTED PROJECT SUITE DESIGN</span>
                          </div>
                          <div className="matrix-row">
                            <span className="matrix-h font-body font-bold">H3</span>
                            <span className="matrix-label font-body font-bold">The quick brown fox jumps over the lazy dog.</span>
                          </div>
                          <div className="matrix-row">
                            <span className="matrix-h font-body">Body</span>
                            <span className="matrix-label font-body dim">Designed for responsive client data tracking, emphasizing readable values.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 4. CREATIVE STRATEGY / SYSTEM ARCHITECTURE TAB */}
            {activeTab === "strategy" && (
              <div className="cs-tab-strategy">
                <div className="cs-text-columns">
                  <div className="cs-col-full">
                    <h3 className="cs-section-title">Creative & Marketing Strategy</h3>
                    <p className="cs-paragraph" style={{ marginBottom: "24px" }}>
                      Every visual design requires a solid distribution strategy to maximize ROI. We aligned the aesthetic system (high-contrast dark mode grid) with target buyer profiles, crafting conversion paths directly into high-fidelity layouts.
                    </p>
                  </div>
                  <div className="cs-col">
                    <h4 className="cs-strategy-subheading">Creative Direction</h4>
                    <p className="cs-paragraph">
                      We combined a technical slate background with high-impact corporate red. Bold typography ensures that key statistics stand out in busy scrolling timelines, while simple grids make complex structures feel approachable.
                    </p>
                  </div>
                  <div className="cs-col">
                    <h4 className="cs-strategy-subheading">Campaign Alignment</h4>
                    <p className="cs-paragraph">
                      Assets were engineered specifically for conversion-heavy channels like LinkedIn slides and responsive CFO email sequences. Clear call-to-actions (CTAs) are highlighted using the primary red badge color.
                    </p>
                  </div>
                </div>

                <div className="cs-showcase-image-wrapper">
                  <h4 className="dim cs-image-label">Marketing Strategy & Core Creative Asset Deck</h4>
                  <div className="cs-showcase-frame">
                    <img src={project.image} alt="Campaign Assets Deck" className="cs-showcase-image" />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "architecture" && (
              <div className="cs-tab-architecture">
                <div className="cs-text-columns">
                  <div className="cs-col-full">
                    <h3 className="cs-section-title">System Architecture & Code Flow</h3>
                    <p className="cs-paragraph">
                      The application relies on a React & Vite client paired with secure REST APIs. Telemetry tables use rendering optimizations to handle thousands of concurrent updates, while the Chatbot uses chunked streaming APIs from a custom Node.js middleware.
                    </p>
                  </div>
                </div>

                <div className="cs-showcase-image-wrapper">
                  <h4 className="dim cs-image-label">Backend Data Flow & Node Map</h4>
                  <div className="cs-showcase-frame">
                    <img src={cs.screenshots[2]?.url || cs.screenshots[1]?.url || project.image} alt="Software Architecture Map" className="cs-showcase-image" />
                  </div>
                </div>
              </div>
            )}

            {/* 5. IMPACT & RESULTS TAB */}
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
                    By coordinating directly between client stakeholders and development teams, we minimized design-to-production friction. This unified process allowed us to deliver a complete production-grade system within tight constraints.
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Screen/Mockup Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedScreenshot && (
          <motion.div
            className="cs-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedScreenshot(null)}
          >
            <button className="cs-lightbox-close" onClick={() => setSelectedScreenshot(null)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "24px", height: "24px" }}>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <motion.div
              className="cs-lightbox-content"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedScreenshot.url} alt={selectedScreenshot.caption} className="cs-lightbox-img" />
              <p className="cs-lightbox-caption">{selectedScreenshot.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
