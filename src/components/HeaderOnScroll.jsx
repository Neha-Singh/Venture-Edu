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

  return (
    <header className={`scroll-header ${showHeader ? "visible" : "hidden"}`}>
      <div className="scroll-logo-container">
        <img src={logo} alt="Logo" className="scroll-logo" />
      </div>
      <nav className="scroll-nav-menu">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#program">Program</a>
          </li>
          <li>
            <a href="#application">Application</a>
          </li>
          <li>
            <a href="#eligibility">Eligibility</a>
          </li>
          <li>
            <a href="#support">Support</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default ScrollHeader;
