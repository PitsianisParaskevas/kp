import "./Navbar.css";

export default function Navbar() {
  const onNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="nav">
      <div className="nav__brand">K&amp;P</div>
      <nav className="nav__links">
        <button onClick={() => onNavClick("hero")}>Home</button>
        <button onClick={() => onNavClick("services")}>Services</button>
        <button onClick={() => onNavClick("roadmap")}>Roadmap</button>
        <button onClick={() => onNavClick("contact")}>Contact</button>
      </nav>
    </header>
  );
}
