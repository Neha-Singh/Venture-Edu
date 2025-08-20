import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import imageOne from "../../assets/home-images/landing/imageone.png";
import imageTwo from "../../assets/home-images/landing/imagetwo.png";
import imageThree from "../../assets/home-images/landing/imagethree.png";
import rightArrow from "../../assets/header-images/rightarrow.svg";

import "../../styles/Home/landing.css";

export default function LandingPage() {
  const navigate = useNavigate();

  // your original slider list
  const images = [imageOne, imageTwo, imageThree];
  const [currentIndex, setCurrentIndex] = useState(0);

  // keep your original auto-advance timing
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((p) => (p + 1) % images.length);
    }, 3000);
    return () => clearInterval(id);
  }, [images.length]);

  const translateX = `-${currentIndex * 100}%`;

  return (
    <div className="landing-page">
      <div className="landing-container">
        {/* original track */}
        <div
          className="slider"
          style={{ transform: `translateX(${translateX})` }}
        >
          {images.map((src, idx) => (
            <div className="slide-wrapper" key={idx}>
              <img src={src} alt={`Slide ${idx + 1}`} className="slide" />

              {/* ---- keep your existing overlay structure/content ---- */}
              {idx === 0 && (
                <div className="overlay-text">
                  <p>India's Most Ambitious</p>
                  <p>Startup School</p>
                  <p className="overlay-subtitl-first">
                    14-month residential program
                  </p>

                  <button className="overlay-button" type="button">
                    PGP in Entrepreneurship
                  </button>

                  <button
                    className="overlay-knowmore"
                    type="button"
                    onClick={() => navigate("/aboutus")}
                  >
                    Know More
                    <img
                      src={rightArrow}
                      alt="arrow"
                      className="knowmore-icon"
                    />
                  </button>
                </div>
              )}

              {idx === 1 && (
                <div className="overlay-text">
                  <p>Where Entrepreneurial</p>
                  <p>Minds Take Flight</p>
                  <p className="overlay-subtitle">
                    Empower your dream at India's first venture school.
                  </p>

                  <button
                    className="overlay-knowmore"
                    type="button"
                    onClick={() => navigate("/aboutus")}
                  >
                    Know More
                    <img
                      src={rightArrow}
                      alt="arrow"
                      className="knowmore-icon"
                    />
                  </button>
                </div>
              )}

              {idx === 2 && (
                <div className="overlay-text">
                  <p>Stop Dreaming</p>
                  <p>Start Building</p>
                  <p className="overlay-subtitle">
                    VenturEdu is where aspiring founders transform bold
                  </p>
                  <p className="overlay-subtitle">
                    ideas into real, investor-ready ventures.
                  </p>

                  <button
                    className="overlay-knowmore"
                    type="button"
                    onClick={() => navigate("/aboutus")}
                  >
                    Know More
                    <img
                      src={rightArrow}
                      alt="arrow"
                      className="knowmore-icon"
                    />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ---- new: indicators (stick without changing layout) ---- */}
        <div className="hero-indicators-wrap">
          <div
            className="hero-indicators"
            role="tablist"
            aria-label="Slide navigation"
          >
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`hero-dot ${i === currentIndex ? "active" : ""}`}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === currentIndex ? "true" : undefined}
                onClick={() => setCurrentIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
