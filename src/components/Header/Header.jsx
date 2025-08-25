// components/Header/Header.jsx
import React, { Fragment, useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import homeLogo from "../../assets/Logo-Home.png";
import rightArrow from "../../assets/header-images/rightarrow.svg";
import "../../styles/Header/header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const scrollTop = () =>
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  // Detect scroll for shadow/blur accent
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 2);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    if (menuOpen) setMenuOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // Close on Esc
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Prevent body scroll while menu is open (mobile)
  useEffect(() => {
    if (menuOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Keep menu closed if resized to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1024 && menuOpen) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [menuOpen]);

  return (
    <Fragment>
      <header className={`sticky-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="header-container">
          {/* Logo → Home */}
          <Link
            to="/"
            onClick={scrollTop}
            className="header-logo-link"
            aria-label="VenturEdu Home"
          >
            <img src={homeLogo} alt="VenturEdu Logo" className="header-logo" />
          </Link>

          {/* Desktop Nav */}
          <nav className="header-nav" aria-label="Primary">
            <ul>
              <li>
                <NavLink to="/" end onClick={scrollTop}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/aboutus" onClick={scrollTop}>
                  AboutVenturEdu
                </NavLink>
              </li>
              <li>
                <NavLink to="/program" onClick={scrollTop}>
                  The Program
                </NavLink>
              </li>
              <li>
                <NavLink to="/faculty" onClick={scrollTop}>
                  Faculty &amp; Mentor
                </NavLink>
              </li>
              <li>
                <NavLink to="/admissions" onClick={scrollTop}>
                  Admissions
                </NavLink>
              </li>

              <li>
                <Link
                  to="/admissions"
                  onClick={scrollTop}
                  className="join-button"
                >
                  Join VenturEdu
                  <img
                    src={rightArrow}
                    alt=""
                    className="join-button-icon"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen ? "true" : "false"}
            aria-controls="mobileMenu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
          </button>
        </div>

        {/* Backdrop */}
        <div
          className={`mobile-backdrop ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(false)}
          aria-hidden={!menuOpen}
        />

        {/* Mobile Drawer */}
        <nav
          id="mobileMenu"
          className={`mobile-drawer ${menuOpen ? "open" : ""}`}
          aria-label="Mobile Primary"
        >
          <ul>
            <li>
              <NavLink to="/" end onClick={scrollTop}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/aboutus" onClick={scrollTop}>
                AboutVenturEdu
              </NavLink>
            </li>
            <li>
              <NavLink to="/program" onClick={scrollTop}>
                The Program
              </NavLink>
            </li>
            <li>
              <NavLink to="/faculty" onClick={scrollTop}>
                Faculty &amp; Mentor
              </NavLink>
            </li>
            <li>
              <NavLink to="/admissions" onClick={scrollTop}>
                Admissions
              </NavLink>
            </li>

            <li className="mobile-join">
              <Link
                to="/admissions"
                onClick={scrollTop}
                className="join-button"
              >
                Join VenturEdu
                <img
                  src={rightArrow}
                  alt=""
                  className="join-button-icon"
                  aria-hidden="true"
                />
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Offset for fixed header */}
      <div className="header-offset" aria-hidden="true" />
    </Fragment>
  );
}
