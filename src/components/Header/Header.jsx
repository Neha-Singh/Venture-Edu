import React from "react";
import homeLogo from "../../assets/Logo-Home.png";
import rightArrow from "../../assets/header-images/rightarrow.svg";
import "../../styles/Header/header.css";

export default function Header() {
  return (
    <header className="sticky-header">
      <div className="header-container">
        <img src={homeLogo} alt="VenturEdu Logo" className="header-logo" />
        <nav className="header-nav">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">AboutVenturEdu</a>
            </li>
            <li>
              <a href="#program">The Program</a>
            </li>
            <li>
              <a href="#faculty">Faculty & Mentor</a>
            </li>
            <li>
              <a href="#admissions">Admissions</a>
            </li>
            <li>
              <a href="#success">Success Stories</a>
            </li>
            <li>
              <button className="join-button">
                Join VenturEdu
                <img
                  src={rightArrow}
                  alt="Right Arrow"
                  className="join-button-icon"
                />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
