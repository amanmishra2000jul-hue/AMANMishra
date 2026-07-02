import { motion } from "framer-motion";
import { profile } from "../data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="grid-overlay" />
      <div className="container">
        <motion.span
          className="eyebrow"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
        >
          005 — Contact
        </motion.span>

        <motion.h2
          className="display contact-heading"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          Let’s create <br /> something worth <span className="outline">shipping.</span>
        </motion.h2>

        <motion.div
          className="contact-row"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <a href={`mailto:${profile.email}`} className="btn">
            <span className="icon-circle">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H8M17 7v9" />
              </svg>
            </span>
            {profile.email}
          </a>

          <div className="contact-meta">
            <div>
              <span className="dim">Phone</span>
              <a href={`tel:${profile.phone}`}>{profile.phone}</a>
            </div>
            <div>
              <span className="dim">Location</span>
              <span>{profile.fullLocation}</span>
            </div>
          </div>
        </motion.div>
      </div>

      <footer className="footer container">
        <span className="dim">© 2026 {profile.name}. All rights reserved.</span>
        <div className="footer-socials">
          {profile.socials.map((s) => (
            <a key={s.label} href={s.href}>{s.label}</a>
          ))}
        </div>
      </footer>
    </section>
  );
}
