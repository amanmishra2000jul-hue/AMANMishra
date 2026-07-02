import { motion } from "framer-motion";
import { work } from "../data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Work({ onSelectProject }) {
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
            {String(work.length).padStart(2, "0")} projects
          </motion.span>
        </div>

        <motion.h2
          className="display work-title"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          Case studies, coming soon.
        </motion.h2>

        {work.length === 0 ? (
          <motion.div
            className="work-empty"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <div className="work-empty-grid">
              {[1, 2, 3].map((n) => (
                <div className="work-empty-card" key={n}>
                  <span className="work-empty-index">0{n}</span>
                  <span className="dim">Project slot open</span>
                </div>
              ))}
            </div>
            <p className="work-empty-note dim">
              This section is wired up and ready — drop your case studies into{" "}
              <code>src/data/content.js</code> and they’ll appear here.
            </p>
          </motion.div>
        ) : (
          <div className="work-grid">
            {work.map((item, index) => (
              <motion.div
                className="work-card"
                key={item.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ delay: index * 0.1 }}
              >
                <div
                  role="button"
                  style={{ cursor: "pointer" }}
                  onClick={() => onSelectProject && onSelectProject(item)}
                  className="work-card-link"
                  aria-label={`View project ${item.title}`}
                >
                  <div className="work-image-wrapper">
                    <img src={item.image} alt={item.title} className="work-image" />
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
      </div>
    </section>
  );
}
