import { motion } from "framer-motion";
import { experience } from "../data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <motion.span
          className="eyebrow"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
        >
          003 — Experience
        </motion.span>

        <motion.h2
          className="display experience-heading"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          Where I’ve worked.
        </motion.h2>

        <div className="timeline">
          {experience.map((item, i) => (
            <motion.div
              key={item.org}
              className="timeline-row"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ delay: i * 0.08 }}
            >
              <span className="timeline-date dim">{item.date}</span>
              <div className="timeline-body">
                <div className="timeline-heading">
                  <h3>{item.role}</h3>
                  <span className="timeline-org">{item.org}</span>
                </div>
                {item.points.length > 0 && (
                  <ul className="timeline-points">
                    {item.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
