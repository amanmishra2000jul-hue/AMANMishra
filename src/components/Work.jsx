import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { work } from "../data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const categoryDetails = [
  {
    id: "web-apps",
    name: "Web applications",
    desc: "Custom React/Vite dashboards, SaaS web apps, database clients, and conversational AI chatbots.",
    countTag: "Web applications"
  },
  {
    id: "websites",
    name: "Website",
    desc: "Modern corporate landing pages, resource download hubs, portfolio platforms, and SEO optimization frameworks.",
    countTag: "Website"
  },
  {
    id: "mobile",
    name: "Mobile apps",
    desc: "Cross-platform React Native clients, mobile dashboards, operations controllers, and offline telemetry systems.",
    countTag: "Mobile apps"
  },
  {
    id: "social",
    name: "Social Media Posts",
    desc: "Professional slide templates, infographic campaign visuals, templates, and tech insights narratives.",
    countTag: "Social Media Posts"
  },
  {
    id: "branding-marketing",
    name: "Branding & Marketing",
    desc: "Bespoke brand identity systems, vector logos, Google Ads templates, and performance-driven marketing campaigns.",
    countTag: "Branding & Marketing"
  }
];

export default function Work({ onSelectProject }) {
  const [view, setView] = useState("categories"); // "categories" | "projects"
  const [activeCategory, setActiveCategory] = useState("Web applications");

  const filteredWork = work.filter((item) => item.category === activeCategory);

  const handleCategorySelect = (categoryName) => {
    if (categoryName === "Social Media Posts") {
      const smmProject = work.find((item) => item.id === "smm-brand-campaigns");
      if (smmProject && onSelectProject) {
        onSelectProject({ ...smmProject, defaultTab: "gallery" });
        return;
      }
    }
    setActiveCategory(categoryName);
    setView("projects");
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleBackToCategories = () => {
    setView("categories");
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="work" className="section work">
      <div className="container">
        <div className="work-heading-row">
          <motion.span
            className="eyebrow"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
          >
            004 — Selected Work
          </motion.span>
          <motion.span
            className="dim work-count"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
          >
            {view === "categories" 
              ? `${categoryDetails.length} categories` 
              : `${String(filteredWork.length).padStart(2, "0")} projects in ${activeCategory}`}
          </motion.span>
        </div>

        <motion.h2
          className="display work-title"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          My Works
        </motion.h2>

        <AnimatePresence mode="wait">
          {view === "categories" ? (
            /* 1. CATEGORIES EXPLORATION CARD GRID */
            <motion.div
              key="categories-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="category-card-grid">
                {categoryDetails.map((cat, index) => {
                  const count = work.filter((item) => item.category === cat.countTag).length;
                  return (
                    <motion.div
                      key={cat.id}
                      className="category-card"
                      onClick={() => handleCategorySelect(cat.countTag)}
                      whileHover={{ y: -8 }}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.15 }}
                      variants={fadeUp}
                      transition={{ delay: index * 0.05 }}
                    >
                      <div className="category-card-header">
                        <span className="category-card-index">0{index + 1}</span>
                        <span className="category-card-count">
                          {count > 0 ? `${count} Project${count > 1 ? "s" : ""}` : "Open Slot"}
                        </span>
                      </div>
                      <div className="category-card-body">
                        <h3 className="category-card-title display">{cat.name}</h3>
                        <p className="category-card-desc dim">{cat.desc}</p>
                      </div>
                      <div className="category-card-footer">
                        <span className="category-card-action">
                          Explore Category
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="arrow-icon">
                            <path d="M7 17L17 7M17 7H8M17 7v9" />
                          </svg>
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ) : (
            /* 2. SPECIFIC CATEGORY PORTFOLIO GRID */
            <motion.div
              key="projects-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="projects-view-header">
                <button className="back-to-categories-btn btn" onClick={handleBackToCategories}>
                  <span className="icon-circle">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: "rotate(180deg)" }}>
                      <path d="M7 17L17 7M17 7H8M17 7v9" />
                    </svg>
                  </span>
                  Back to Categories
                </button>
                <h3 className="projects-category-title display">{activeCategory}</h3>
              </div>

              {filteredWork.length === 0 ? (
                <div className="work-empty">
                  <div className="work-empty-grid">
                    {[1, 2, 3].map((n) => (
                      <div className="work-empty-card" key={n}>
                        <span className="work-empty-index">0{n}</span>
                        <span className="dim">Project slot open</span>
                      </div>
                    ))}
                  </div>
                  <p className="work-empty-note dim">
                    Currently polishing cases in <strong>{activeCategory}</strong>. Need a custom solution? Let's discuss your project!
                  </p>
                </div>
              ) : (
                <div className="work-grid">
                  {filteredWork.map((item, index) => (
                    <motion.div
                      className="work-card"
                      key={item.id || item.title}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      variants={fadeUp}
                      transition={{ delay: index * 0.05 }}
                    >
                      <div
                        role="button"
                        style={{ cursor: "pointer" }}
                        onClick={() => onSelectProject && onSelectProject(item)}
                        className="work-card-link"
                        aria-label={`View project ${item.title}`}
                      >
                        <div className="work-image-wrapper">
                          {item.category === "Mobile apps" ? (
                            <div className="mockup-device-mobile">
                              <div className="mockup-phone-frame">
                                <div className="mockup-screen">
                                  <img src={item.image} alt={item.title} className="work-image" />
                                </div>
                                <div className="mockup-island"></div>
                              </div>
                            </div>
                          ) : item.category === "Web applications" || item.category === "Website" ? (
                            <div className="mockup-device-laptop">
                              <div className="mockup-laptop-frame">
                                <div className="mockup-browser-header">
                                  <span className="dot dot-red"></span>
                                  <span className="dot dot-yellow"></span>
                                  <span className="dot dot-green"></span>
                                </div>
                                <div className="mockup-screen">
                                  <img src={item.image} alt={item.title} className="work-image" />
                                </div>
                              </div>
                            </div>
                          ) : (
                            <img src={item.image} alt={item.title} className="work-image" />
                          )}
                          <div className="work-hover-overlay">
                            <span className="btn-view-project">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="arrow-icon">
                                <path d="M7 17L17 7M17 7H8M17 7v9" />
                              </svg>
                            </span>
                          </div>
                        </div>
                        <div className="work-info">
                          <h3 className="work-card-title">{item.title}</h3>
                          <p className="work-card-desc dim">{item.description}</p>
                          <div className="work-card-tags">
                            {item.tags.map((tag) => (
                              <span key={tag} className="work-card-tag">{tag}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
