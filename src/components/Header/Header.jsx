// components/Header/Header.jsx
import React, { Fragment, useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom"; // <-- needed
import homeLogo from "../../assets/Logo-Home.png";
import rightArrow from "../../assets/header-images/rightarrow.svg";
import "../../styles/Header/header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const scrollTop = () =>
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 2);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
              {/* Placeholder until you add a route */}
              <li>
                <NavLink to="/" onClick={scrollTop}>
                  Success Stories
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
        </div>
      </header>

      {/* If you’re using a fixed header in CSS, keep this spacer */}
      <div className="header-offset" aria-hidden="true" />
    </Fragment>
  );
}
