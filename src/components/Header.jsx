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

  return (
    <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
      <div className="header-container">
        <div className="logo">
          {scrolled ? (
            <img src={blueLogo} alt="Logo" />
          ) : (
            <img src={homeLogo} alt="Logo" />
          )}
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#program">Program</a>
            </li>
            <li>
              <a href="#global">Global</a>
            </li>
            <li>
              <a href="#application">Application</a>
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
            <img src={blueLogo} alt="Mobile Logo" className="mobile-logo" />
            <FaTimes className="icon-close" onClick={toggleMobileMenu} />
          </div>
          <nav className="nav mobile-active">
            <ul>
              <li>
                <a href="#about" onClick={toggleMobileMenu}>
                  About
                </a>
              </li>
              <li>
                <a href="#program" onClick={toggleMobileMenu}>
                  Program
                </a>
              </li>
              <li>
                <a href="#global" onClick={toggleMobileMenu}>
                  Global
                </a>
              </li>
              <li>
                <a href="#application" onClick={toggleMobileMenu}>
                  Application
                </a>
              </li>
              {/* Media menu item is hidden on mobile */}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
