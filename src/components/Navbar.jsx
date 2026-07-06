import { useEffect, useState } from "react";
import { profile } from "../data/content";

function useClock(timezone) {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: timezone,
      }).format(now);
      setTime(formatted);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [timezone]);
  return time;
}

export default function Navbar({ menuOpen, setMenuOpen, onNavigate }) {
  const time = useClock(profile.timezone);

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <a href="#top" className="navbar-logo" aria-label="Home" onClick={onNavigate}>
          <span className="navbar-logo-mark">A.</span>
        </a>

        <div className="navbar-clock">
          <span className="dim">LOCAL HOUR</span>
          <span className="navbar-clock-value">{time}</span>
          <span className="dim">{profile.timezoneLabel}</span>
        </div>

        <div className="navbar-right">
          <a href={`mailto:${profile.email}`} className="navbar-contact">
            <span className="dim">Get in touch</span>
            <span>{profile.email}</span>
          </a>
          <a 
            href="/Aman_Mishra_Resume.pdf" 
            download="Aman_Mishra_Resume.pdf" 
            className="navbar-cv-btn"
          >
            <span>CV</span>
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="navbar-cv-icon"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
          <button
            className={`navbar-menu-btn ${menuOpen ? "is-open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className="navbar-menu-label">{menuOpen ? "Close" : "Menu"}</span>
            <span className="navbar-menu-lines">
              <i></i>
              <i></i>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
