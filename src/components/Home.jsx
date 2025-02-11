import React from "react";
import "../styles/home.css";
import video1 from "../../src/assets/Videos/HomePage/four.mp4";

const Home = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="hero-container" id="home-page">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={video1} type="video/mp4" />
      </video>
      <div className="hero-overlay">
        <div className="hero-content">
          <p className="hero-text">
            Experiential Learning for venture building
          </p>
          <button
            className="apply-button"
            onClick={() => scrollToSection("application-form")}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
