import { motion, AnimatePresence } from "framer-motion";
import { profile } from "../data/content";

const links = [
  { label: "Home", href: "#top", num: "01" },
  { label: "About", href: "#about", num: "02" },
  { label: "Experience", href: "#experience", num: "03" },
  { label: "Work", href: "#work", num: "04" },
  { label: "Contact", href: "#contact", num: "05" },
];

export default function MenuOverlay({ open, onClose, onNavigate }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="menu-overlay"
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="menu-overlay-inner container">
            <nav className="menu-links">
              {links.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  onClick={() => {
                    onClose();
                    if (onNavigate) onNavigate();
                  }}
                  className="menu-link"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.5 }}
                >
                  <span className="menu-link-num">{l.num}</span>
                  <span className="menu-link-label">{l.label}</span>
                </motion.a>
              ))}
            </nav>

            <div className="menu-footer">
              <div className="menu-footer-col">
                <span className="dim">Get in touch</span>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
                <a href={`tel:${profile.phone}`}>{profile.phone}</a>
              </div>
              <div className="menu-footer-col">
                <span className="dim">Elsewhere</span>
                {profile.socials.map((s) => (
                  <a key={s.label} href={s.href}>{s.label}</a>
                ))}
              </div>
              <div className="menu-footer-col">
                <span className="dim">Based in</span>
                <span>{profile.location}</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
