import { motion } from "framer-motion";
import { about, skills } from "../data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.span
          className="eyebrow"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
        >
          002 — About
        </motion.span>

        <div className="about-grid">
          <motion.div
            className="about-copy"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <h2 className="display about-heading">
              Design that’s grounded in the details.
            </h2>
            {about.paragraphs.map((p, i) => (
              <p key={i} className="about-paragraph">{p}</p>
            ))}

            <div className="about-stats">
              {about.stats.map((s) => (
                <div key={s.label} className="about-stat">
                  <span className="display about-stat-value">{s.value}</span>
                  <span className="dim about-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="about-skills"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <span className="dim about-skills-title">Core skills</span>
            {skills.map((s) => (
              <div key={s.name} className="skill-row">
                <div className="skill-row-labels">
                  <span>{s.name}</span>
                  <span className="dim">{s.detail}</span>
                </div>
                <div className="skill-dots">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <span key={n} className={`skill-dot ${n <= s.level ? "on" : ""}`} />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
