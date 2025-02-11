import React, { useEffect, useState } from "react";
import logoImage from "../assets/Logo-Home.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 280);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      {/* Logo Section */}
      <div className="logo">
        <img
          src={logoImage}
          alt="Drona Logo"
          className="logo-image"
          onClick={() => scrollToSection("home-page")}
        />
      </div>

      {/* Menu Section */}
      <div>
        <nav className="menu">
          <a href="#about" onClick={() => scrollToSection("about-section")}>
            About
          </a>
          <a
            href="#eligibility"
            onClick={() => scrollToSection("program-structure")}
          >
            Program
          </a>
          <a
            href="#application"
            onClick={() => scrollToSection("application-process")}
          >
            Application
          </a>
          <a href="#program">Eligibility</a>
          <a
            className="ghost-button"
            onClick={() => scrollToSection("global-support")}
          >
            Global
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
