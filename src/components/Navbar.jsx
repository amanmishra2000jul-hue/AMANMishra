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
