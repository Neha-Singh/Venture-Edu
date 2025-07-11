import React, { useState, useEffect } from "react";
import imageOne from "../../assets/home-images/landing/imageone.png";
import imageTwo from "../../assets/home-images/landing/imagetwo.png";
import imageThree from "../../assets/home-images/landing/imagethree.png";
import rightArrow from "../../assets/header-images/rightarrow.svg";
import "../../styles/Home/landing.css";

export default function LandingPage() {
  const images = [imageOne, imageTwo, imageThree];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const translateX = `-${currentIndex * 100}%`;

  return (
    <div className="landing-page">
      <div className="landing-container">
        <div
          className="slider"
          style={{ transform: `translateX(${translateX})` }}
        >
          {images.map((src, idx) => (
            <div className="slide-wrapper" key={idx}>
              <img src={src} alt={`Slide ${idx + 1}`} className="slide" />

              {idx === 0 && (
                <div className="overlay-text">
                  <p>India Most Ambitious</p>
                  <p>Startup School</p>
                  <p className="overlay-subtitl-first">
                    14-month residential program
                  </p>
                  <button className="overlay-button">
                    PGP in Entrepreneurship
                  </button>
                  <button className="overlay-knowmore">
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
                  <button className="overlay-knowmore">
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
                    ideas into real,investor ready ventures
                  </p>
                  <button className="overlay-knowmore">
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
      </div>
    </div>
  );
}
