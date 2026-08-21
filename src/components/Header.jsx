import { ArrowUpRight, Menu, X } from "lucide-react";
import logo from "../assets/astrum-logo.svg";
import { navigation } from "../data/site";
import { Button } from "./ui/Button";
import "./logo.css";

export function Header({ menuOpen, onMenuToggle, onProjectStart }) {
  const closeMenu = () => menuOpen && onMenuToggle();

  return (
    <header className="nav-wrap">
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Astrum home">
          <img src={logo} alt="Astrum" width="144" height="35" />
        </a>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navigation.map(([label, id]) => (
            <a href={`#${id}`} onClick={closeMenu} key={id}>
              {label}
            </a>
          ))}
        </div>
        <Button variant="dark" className="nav-cta" onClick={onProjectStart}>
          Start a project <ArrowUpRight size={16} />
        </Button>
        <button
          className="menu-button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={onMenuToggle}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>
    </header>
  );
}
