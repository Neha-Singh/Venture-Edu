import React, { useState, useEffect } from "react";
import "../styles/headeronscroll.css";
import logo from "../assets/logo-on-scroll.png";

const ScrollHeader = () => {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowHeader(true);
      } else {
        setShowHeader(false); // Hide header when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`scroll-header ${showHeader ? "visible" : "hidden"}`}>
      <div className="scroll-logo-container">
        <img
          src={logo}
          alt="Logo"
          className="scroll-logo"
          onClick={() => scrollToSection("home-page")}
        />
      </div>
      <nav className="scroll-nav-menu">
        <ul>
          <li>
            <a onClick={() => scrollToSection("about-section")}>About</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("program-structure")}>Program</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("application-process")}>
              Application
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection("global-support")}> Global</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default ScrollHeader;
