import { motion } from "framer-motion";
import { about, skills, tools, education, awards, certifications } from "../data/content";

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
            className="about-skills-and-tools"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <div className="about-skills">
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
            </div>

            <div className="about-tools" style={{ marginTop: "24px" }}>
              <span className="dim about-skills-title">Tools & Frameworks</span>
              <div className="tools-grid">
                {tools.map((t) => (
                  <div key={t.category} className="tool-category">
                    <span className="tool-cat-name dim">{t.category}</span>
                    <div className="tool-tags">
                      {t.items.map((item) => (
                        <span key={item} className="tool-tag">{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="about-credentials-grid">
          <motion.div
            className="about-education"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <span className="dim about-skills-title">Education</span>
            <div className="education-list">
              {education.map((edu) => (
                <div key={edu.degree} className="education-item">
                  <div className="education-header">
                    <h4>{edu.degree}</h4>
                    <span className="education-year dim">{edu.year}</span>
                  </div>
                  <div className="education-body">
                    <p className="education-institution">{edu.institution}</p>
                    {edu.score && <p className="education-score dim">{edu.score}</p>}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="about-awards"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <span className="dim about-skills-title">Awards & Certifications</span>
            <div className="awards-certifications-list">
              <h4 className="awards-section-title">Awards</h4>
              <div className="awards-sublist">
                {awards.map((award) => (
                  <div key={award.title} className="award-item">
                    <div className="award-header">
                      <h5>{award.title}</h5>
                      <span className="award-year dim">{award.year}</span>
                    </div>
                    <p className="award-desc">{award.org} — {award.desc}</p>
                  </div>
                ))}
              </div>

              <h4 className="awards-section-title">Certifications</h4>
              <div className="certifications-sublist">
                {certifications.map((cert) => (
                  <div key={cert.name} className="certification-item">
                    <span>{cert.name}</span>
                    <span className="dim">{cert.org}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
