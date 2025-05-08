import React from "react";
import "../styles/landing.css";
import logoImage from "../assets/home-images/home-image.png";

const HeroSection = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="landing-hero-section" id="landing-page">
      <div className="landing-hero-content">
        <div className="landing-hero-text">
          <h1>VentureEdu – India's Most Ambitious Startup School</h1>
          <h2>PGP in Entrepreneurship</h2>

          <h3>14-Month Full Time Residential</h3>
          <h3>Gurgaon</h3>

          <div className="landing-hero-button">
            <button
              type="button"
              onClick={() => scrollToSection("application-form")}
            >
              Apply Now
            </button>
          </div>
        </div>
        <div className="landing-hero-image">
          <img src={logoImage} alt="Hero" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
