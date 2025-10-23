import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const onNavClick = (id) => {
    setIsOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
  };

  return (
    <header className="nav">
      <div className="nav__container">
        <div className="nav__brand">K&amp;P</div>

        <button
          className={`nav__toggle ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div
          className={`nav__overlay ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(false)}
        ></div>

        <nav className={`nav__links ${isOpen ? "active" : ""}`}>
          <button onClick={() => onNavClick("hero")}>Home</button>
          <button onClick={() => onNavClick("services")}>Services</button>
          <button onClick={() => onNavClick("roadmap")}>Roadmap</button>
          <button onClick={() => onNavClick("contact")}>Contact</button>
        </nav>
      </div>
    </header>
  );
}
