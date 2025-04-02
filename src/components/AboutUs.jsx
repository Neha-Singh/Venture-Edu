import React, { useState, useEffect, useRef } from "react";
import aboutusImage from "../../src/assets/about-us-images/about-us.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import "../styles/aboutus.css";

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
    text: "Here, candidates are immersed in real–world startup ecosystems, mentored by those who have scaled billion–dollar ventures, and equipped with tools to build businesses that disrupt and endure. We blend experiential learning with global exposure to create leaders ready to take risks, learn from failure, and shape the future of industries.",
  },
  {
    heading: "Join Us",
    text: "Whether you are a student, a startup founder, or a professional transitioning into entrepreneurship, VenturEdu offers a platform to refine your craft, scale your vision, and launch your journey.",
  },
];

function AboutVenturEdu() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideAnim, setSlideAnim] = useState(false);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  // Auto-slide interval
  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  useEffect(() => {
    if (!paused) {
      startAutoSlide();
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused]);

  // Trigger slide animation on slide change
  useEffect(() => {
    setSlideAnim(true);
    const timer = setTimeout(() => {
      setSlideAnim(false);
    }, 500); // matches CSS animation duration
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const handleNext = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setPaused(false);
  };

  const handlePrev = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setPaused(false);
  };

  const handleMouseEnter = () => {
    setPaused(true);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    setPaused(false);
  };

  return (
    <div className="aboutventuredu-page" id="about-section">
      {/* Lazy loaded background image */}
      <img
        src={aboutusImage}
        alt="About VenturEdu"
        className="aboutus-bg"
        loading="lazy"
      />
      <div
        className="slider-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button className="slider-arrow left-arrow" onClick={handlePrev}>
          <FaChevronLeft />
        </button>
        <div className={`slide ${slideAnim ? "slide-change" : ""}`}>
          <h2 className="slide-heading">{slides[currentSlide].heading}</h2>
          <p className="slide-text">{slides[currentSlide].text}</p>
        </div>
        <button className="slider-arrow right-arrow" onClick={handleNext}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default AboutVenturEdu;
