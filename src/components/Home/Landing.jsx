import React from "react";
import { useNavigate } from "react-router-dom";

import imageOne from "../../assets/home-images/landing/imageone.png";
import imageTwo from "../../assets/home-images/landing/imagetwo.png";
import imageThree from "../../assets/home-images/landing/imagethree.png";

/* 👉 Mobile-only tighter crop for slide 1 */
import imageOneMobile from "../../assets/home-images/landing/imageone-mobile.png";

import rightArrow from "../../assets/header-images/rightarrow.svg";

import useSwipeSlider from "../../components/Global/useSwipeSlider.jsx";
import "../../styles/Home/landing.css";

export default function LandingPage() {
  const navigate = useNavigate();

  // Robust, capture-phase navigation handler that beats swipe listeners
  const goAbout = (e) => {
    if (e) {
      // Prevent default anchor behavior only if JS is active
      e.preventDefault();
      // Stop React bubbling
      e.stopPropagation();
      // Stop any other native listeners (like swipe/drag handlers) from firing
      if (
        e.nativeEvent &&
        typeof e.nativeEvent.stopImmediatePropagation === "function"
      ) {
        e.nativeEvent.stopImmediatePropagation();
      }
    }
    // Navigate via React Router
    navigate("/aboutus");
  };

  // note: slide 1 includes a mobileSrc for phones
  const slides = [
    { src: imageOne, mobileSrc: imageOneMobile, alt: "Founders on campus" },
    { src: imageTwo, mobileSrc: null, alt: "Team building a product" },
    { src: imageThree, mobileSrc: null, alt: "Pitch night" },
  ];

  const {
    sliderRef,
    currentIndex,
    setCurrentIndex,
    translateX,
    gestureHandlers,
  } = useSwipeSlider(slides.length, 8000);

  return (
    <div className="landing-page">
      <div className="landing-container">
        {/* track */}
        <div
          ref={sliderRef}
          className="slider"
          style={{
            transform: `translateX(${translateX})`,
            touchAction: "pan-y",
          }}
          {...gestureHandlers}
        >
          {slides.map((s, idx) => (
            <div className="slide-wrapper" key={idx}>
              {/* Art-direction: if slide 1 has a mobileSrc, use it on phones */}
              {idx === 0 && s.mobileSrc ? (
                <picture>
                  <source media="(max-width: 480px)" srcSet={s.mobileSrc} />
                  <img
                    src={s.src}
                    alt={s.alt}
                    className="slide"
                    loading={idx === 0 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={idx === currentIndex ? "high" : "low"}
                  />
                </picture>
              ) : (
                <img
                  src={s.src}
                  alt={s.alt}
                  className="slide"
                  loading={idx === 0 ? "eager" : "lazy"}
                  decoding="async"
                  fetchPriority={idx === currentIndex ? "high" : "low"}
                />
              )}

              {/* overlays */}
              {idx === 0 && (
                <div className="overlay-text">
                  <p>A venture school that co-builds</p>
                  <p>and funds your ideas</p>
                  <p className="overlay-subtitl-first">
                    We help students build challenger brands <br></br>and we
                    invest in the brands through our in-house <br></br>
                    accelarator fund and partner VCs
                  </p>
                  {/* 
                  <button className="overlay-button" type="button">
                    PGP in Entrepreneurship
                  </button> */}

                  {/* Anchor + capture-phase handler + programmatic nav */}
                  <a
                    href="/aboutus"
                    className="overlay-knowmore"
                    onMouseDownCapture={goAbout}
                    onTouchStartCapture={goAbout}
                    onClickCapture={goAbout}
                    onKeyDownCapture={(e) => {
                      if (e.key === "Enter" || e.key === " ") goAbout(e);
                    }}
                  >
                    Know More
                    <img
                      src={rightArrow}
                      alt="arrow"
                      className="knowmore-icon"
                    />
                  </a>
                </div>
              )}

              {idx === 1 && (
                <div className="overlay-text">
                  <p>Where Entrepreneurial</p>
                  <p>Minds Take Flight</p>
                  <p className="overlay-subtitle">
                    Empower your dream at India&apos;s first venture school
                  </p>
                  <a
                    href="/aboutus"
                    className="overlay-knowmore"
                    onMouseDownCapture={goAbout}
                    onTouchStartCapture={goAbout}
                    onClickCapture={goAbout}
                    onKeyDownCapture={(e) => {
                      if (e.key === "Enter" || e.key === " ") goAbout(e);
                    }}
                  >
                    Know More{" "}
                    <img
                      src={rightArrow}
                      alt="arrow"
                      className="knowmore-icon"
                    />
                  </a>
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
                    ideas into real, investor-ready ventures
                  </p>
                  <a
                    href="/aboutus"
                    className="overlay-knowmore"
                    onMouseDownCapture={goAbout}
                    onTouchStartCapture={goAbout}
                    onClickCapture={goAbout}
                    onKeyDownCapture={(e) => {
                      if (e.key === "Enter" || e.key === " ") goAbout(e);
                    }}
                  >
                    Know More{" "}
                    <img
                      src={rightArrow}
                      alt="arrow"
                      className="knowmore-icon"
                    />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* indicators */}
        <div className="hero-indicators-wrap">
          <div
            className="hero-indicators"
            role="tablist"
            aria-label="Slide navigation"
          >
            {slides.map((_, i) => (
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
