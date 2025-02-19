import React, { useState, useEffect } from "react";
import aboutusImage from "../../src/assets/about-us-images/about-us.jpg";
import "../styles/aboutustext.css";

const slides = [
  {
    heading: "Who We Are",
    text: "VenturEdu is the school for dreamers who are also believers.",
  },
  {
    heading: "Our Mission",
    text: "It is a launchpad for entrepreneurs, both aspiring and semi–experienced, ready to challenge the status quo.",
  },
  {
    heading: "Our Approach",
    text: "Here, students are immersed in real–world startup ecosystems, mentored by those who have scaled billion–dollar ventures, and equipped with tools to build businesses that disrupt and endure. We blend experiential learning with global exposure to create leaders ready to take risks, learn from failure, and shape the future of industries.",
  },
  {
    heading: "Join Us",
    text: "Whether you are a student, a startup founder, or a professional transitioning into entrepreneurship, VenturEdu offers a platform to refine your craft, scale your vision, and launch your journey.",
  },
];

function AboutVenturEdu() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideAnim, setSlideAnim] = useState(false);

  // Automatically cycle slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Trigger the slide animation each time currentSlide changes
  useEffect(() => {
    setSlideAnim(true);
    const timer = setTimeout(() => {
      setSlideAnim(false);
    }, 500); // Match this duration to your CSS animation duration
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Background style using the background image only
  const backgroundStyle = {
    backgroundImage: `url(${aboutusImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    transition: "background 0.5s ease",
  };

  return (
    <div
      className="aboutventuredu-page"
      style={backgroundStyle}
      id="about-section"
    >
      <h1 className="aboutventuredu-heading">About Ventur Edu</h1>
      <div className="slider-container">
        <button className="slider-arrow left-arrow" onClick={handlePrev}>
          &larr;
        </button>
        <div className={`slide ${slideAnim ? "slide-change" : ""}`}>
          <h2 className="slide-heading">{slides[currentSlide].heading}</h2>
          <p className="slide-text">{slides[currentSlide].text}</p>
        </div>
        <button className="slider-arrow right-arrow" onClick={handleNext}>
          &rarr;
        </button>
      </div>
    </div>
  );
}

export default AboutVenturEdu;
