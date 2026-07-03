import { motion } from "framer-motion";
import { profile } from "../data/content";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="grid-overlay" />
      <div className="container hero-inner">
        <div className="hero-top">
          <motion.div
            className="hero-eyebrow-block"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <span className="eyebrow">001.1</span>
            <h2 className="hero-role display">
              {profile.role}
            </h2>
          </motion.div>

          <motion.div
            className="hero-intro-block"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
          >
            <span className="eyebrow">001.2</span>
            <p>
              I design end-to-end product experiences — research, wireframes,
              prototypes and go-to-market — for teams who want work that
              actually ships.
            </p>
            <span className="hero-copyright dim">© 2026 {profile.name}</span>
          </motion.div>
        </div>

        <div className="hero-headline-row">
          <motion.h1
            className="hero-headline display"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            I design products
            <br />
            people actually <span className="outline">want.</span>
          </motion.h1>
        </div>

        <motion.div
          className="hero-bottom"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <a href="#contact" className="btn">
            <span className="icon-circle">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H8M17 7v9" />
              </svg>
            </span>
            Send message for work
          </a>
          <div className="hero-bottom-meta">
            <span className="dim">Based in</span>
            <span>{profile.location}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
