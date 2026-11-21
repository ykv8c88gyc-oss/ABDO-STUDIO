import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <NavLink to="/" className="brand" onClick={closeMenu}>
        <img
          src="/four18-logo.jpeg"
          alt="FOUR18 Digital Studio"
          className="brand-logo"
        />

        <span>
          FOUR<span className="brand-number">18</span>
          <small>DIGITAL STUDIO</small>
        </span>
      </NavLink>

      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        {open ? <X /> : <Menu />}
      </button>

      <nav className={open ? "nav-links open" : "nav-links"}>
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}