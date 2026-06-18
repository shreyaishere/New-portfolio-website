import "./Navbar.css";

import { Link } from "react-scroll";

import { useContext } from "react";

import { FaMoon, FaSun } from "react-icons/fa";

import { useTheme } from "../../context/ThemeContext";

import { useState } from "react";

import useActiveSection from "../../hooks/useActiveSection";

import { HiMenuAlt3 } from "react-icons/hi";

import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const active = useActiveSection();

  const { theme, toggleTheme } = useTheme();

  const [open, setOpen] = useState(false);

  const navItems = [
    "about",
    "skills",
    "experience",
    "projects",
    "education",
    "certifications",
    "contact",
  ];

  return (
    <nav className="navbar glass">
      <h2>Shreya.</h2>

      <ul className={open ? "show" : ""}>
        {navItems.map((item) => (
          <li key={item}>
            <Link
              to={item}
              smooth
              duration={500}
              offset={-80}
              className={active === item ? "active-link" : ""}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      <div className="navbar-actions">
        <button className="theme-btn" onClick={toggleTheme}>
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>

        <button className="menu-btn" onClick={() => setOpen(!open)}>
          {open ? <IoClose /> : <HiMenuAlt3 />}
        </button>
      </div>
    </nav>
  );
}
