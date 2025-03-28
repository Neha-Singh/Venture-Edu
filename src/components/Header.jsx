import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import homeLogo from "../assets/Logo-Home.png";
import blueLogo from "../assets/Blue-Logo.png";
import "../styles/header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
      <div className="header-container">
        {/* Clicking the logo scrolls to home page */}
        <div className="logo" onClick={() => scrollToSection("home-page")}>
          {scrolled ? (
            <img src={blueLogo} alt="Logo" />
          ) : (
            <img src={homeLogo} alt="Logo" />
          )}
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a href="#about" onClick={() => scrollToSection("about-section")}>
                About
              </a>
            </li>
            <li>
              <a
                href="#program"
                onClick={() => scrollToSection("program-structure")}
              >
                Program
              </a>
            </li>
            <li>
              <a
                href="#global"
                onClick={() => scrollToSection("global-support")}
              >
                Global
              </a>
            </li>
            <li>
              <a
                href="#application"
                onClick={() => scrollToSection("application-process")}
              >
                Application
              </a>
            </li>
            <li>
              <a href="#media">Media</a>
            </li>
          </ul>
        </nav>
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {!mobileMenuOpen && <FaBars className="icon-hamburger" />}
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-header">
            {/* Clicking the mobile logo scrolls to home and closes menu */}
            <img
              src={blueLogo}
              alt="Mobile Logo"
              className="mobile-logo"
              onClick={() => {
                scrollToSection("home-page");
                toggleMobileMenu();
              }}
            />
            <FaTimes className="icon-close" onClick={toggleMobileMenu} />
          </div>
          <nav className="nav mobile-active">
            <ul>
              <li>
                <a
                  href="#about"
                  onClick={() => {
                    scrollToSection("about-section");
                    toggleMobileMenu();
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#program"
                  onClick={() => {
                    scrollToSection("program-structure");
                    toggleMobileMenu();
                  }}
                >
                  Program
                </a>
              </li>
              <li>
                <a
                  href="#global"
                  onClick={() => {
                    scrollToSection("global-support");
                    toggleMobileMenu();
                  }}
                >
                  Global
                </a>
              </li>
              <li>
                <a
                  href="#application"
                  onClick={() => {
                    scrollToSection("application-process");
                    toggleMobileMenu();
                  }}
                >
                  Application
                </a>
              </li>
              {/* "Media" menu item is hidden on mobile */}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
