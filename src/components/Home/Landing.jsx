import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import imageOne from "../../assets/home-images/landing/imageone.png";
import imageTwo from "../../assets/home-images/landing/imagetwo.png";
import imageThree from "../../assets/home-images/landing/imagethree.png";

/* 👉 Optional: add a tighter crop for mobile (left blank space removed) */
import imageOneMobile from "../../assets/home-images/landing/imageone-mobile.png";

import rightArrow from "../../assets/header-images/rightarrow.svg";
import "../../styles/Home/landing.css";

export default function LandingPage() {
  const navigate = useNavigate();

  const images = [
    { src: imageOne, alt: "Founders on campus", mobileSrc: imageOneMobile }, // slide 1
    { src: imageTwo, alt: "Team building a product" },
    { src: imageThree, alt: "Pitch night" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;
    const id = setInterval(
      () => setCurrentIndex((p) => (p + 1) % images.length),
      3000
    );
    return () => clearInterval(id);
  }, [images.length]);

  // --- if you already added swipe earlier, keep that code; otherwise, simple translate: ---
  const translateX = `-${currentIndex * 100}%`;

  return (
    <div className="landing-page">
      <div className="landing-container">
        <div
          className="slider"
          style={{ transform: `translateX(${translateX})` }}
        >
          {images.map((itm, idx) => (
            <div className="slide-wrapper" key={idx}>
              {/* Art-direction for the FIRST slide only (uses mobileSrc on phones if present) */}
              {idx === 0 && itm.mobileSrc ? (
                <picture>
                  <source media="(max-width: 480px)" srcSet={itm.mobileSrc} />
                  <img
                    src={itm.src}
                    alt={itm.alt}
                    className="slide"
                    loading={idx === 0 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={idx === currentIndex ? "high" : "low"}
                  />
                </picture>
              ) : (
                <img
                  src={itm.src}
                  alt={itm.alt}
                  className="slide"
                  loading={idx === 0 ? "eager" : "lazy"}
                  decoding="async"
                  fetchPriority={idx === currentIndex ? "high" : "low"}
                />
              )}

              {/* overlays (unchanged)… */}
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
                    onClick={() => navigate("/aboutus")}
                  >
                    Know More{" "}
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
                    onClick={() => navigate("/aboutus")}
                  >
                    Know More{" "}
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
