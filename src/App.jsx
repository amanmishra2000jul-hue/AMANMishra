import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import MenuOverlay from "./components/MenuOverlay";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Contact from "./components/Contact";
import CaseStudy from "./components/CaseStudy";
import Brands from "./components/Brands";

import "./components/Preloader.css";
import "./components/Navbar.css";
import "./components/MenuOverlay.css";
import "./components/Hero.css";
import "./components/About.css";
import "./components/Experience.css";
import "./components/Work.css";
import "./components/Contact.css";
import "./components/CaseStudy.css";
import "./components/Brands.css";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1700);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [activeProject]);

  const handleNavigation = () => {
    setActiveProject(null);
    setMenuOpen(false);
  };

  return (
    <>
      <Preloader loading={loading} />
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} onNavigate={handleNavigation} />
      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} onNavigate={handleNavigation} />
      <main>
        {activeProject ? (
          <CaseStudy project={activeProject} onBack={() => setActiveProject(null)} />
        ) : (
          <>
            <Hero />
            <Brands />
            <About />
            <Experience />
            <Work onSelectProject={setActiveProject} />
          </>
        )}
        <Contact />
      </main>
    </>
  );
}
