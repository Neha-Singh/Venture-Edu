import React from "react";
import logoImage from "../assets/Logo-Home.png";

const Header = () => {
  return (
    <header className="header">
      {/* Logo Section */}
      <div className="logo">
        <img src={logoImage} alt="Drona Logo" className="logo-image" />
      </div>

      {/* Menu Section */}
      <div>
        <nav className="menu">
          <a href="#about">About</a>
          <a href="#eligibility">Program</a>
          <a href="#application">Application</a>
          <a href="#program">Eligibility</a>
          <a href="#help-desk">Support</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
