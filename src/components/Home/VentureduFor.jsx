import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import imageOne from "../../assets/home-images/landing/imageone.png";
import imageTwo from "../../assets/home-images/landing/imagetwo.png";
import imageThree from "../../assets/home-images/landing/imagethree.png";
import rightArrow from "../../assets/header-images/rightarrow.svg";

import "../../styles/Home/landing.css";

export default function LandingPage() {
  const navigate = useNavigate();

  const images = [imageOne, imageTwo, imageThree];
  const [currentIndex, setCurrentIndex] = useState(0);

  // ----- autoplay (pauses during drag) -----
  const autoplayRef = useRef(null);
  const startAutoplay = () => {
    stopAutoplay();
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    autoplayRef.current = setInterval(() => {
      setCurrentIndex((p) => (p + 1) % images.length);
    }, 3000);
  };
  const stopAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = null;
  };
  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ----- swipe/drag via Pointer Events -----
  const sliderRef = useRef(null);
  const dragging = useRef(false);
  const startX = useRef(0);
  const startY = useRef(0);
  const dragPx = useRef(0);
  const [dragOffsetPx, setDragOffsetPx] = useState(0);

  const getSliderWidth = () =>
    sliderRef.current
      ? sliderRef.current.offsetWidth
      : Math.max(1, window.innerWidth);
  const thresholdPx = 50;

  const onPointerDown = (e) => {
    // only left mouse / touch / pen
    if (e.pointerType === "mouse" && e.button !== 0) return;

    dragging.current = true;
    startX.current = e.clientX;
    startY.current = e.clientY;
    dragPx.current = 0;
    setDragOffsetPx(0);

    // capture all subsequent pointer events for reliable tracking
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch (_) {}

    stopAutoplay();
    // add dragging class to disable transition while dragging
    sliderRef.current?.classList.add("is-dragging");
  };

  const onPointerMove = (e) => {
    if (!dragging.current) return;

    const dx = e.clientX - startX.current;
    const dy = e.clientY - startY.current;

    // ignore mostly-vertical gestures to keep page scroll working
    if (Math.abs(dy) > Math.abs(dx)) return;

    // prevent browser horizontal panning
    if (e.cancelable) e.preventDefault();

    dragPx.current = dx;
    setDragOffsetPx(dx);
  };

  const onPointerUp = (e) => {
    if (!dragging.current) return;
    dragging.current = false;

    // release capture if held
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch (_) {}

    const width = getSliderWidth();
    const moved = dragPx.current;

    if (moved <= -thresholdPx && currentIndex < images.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else if (moved >= thresholdPx && currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
    }

    setDragOffsetPx(0);
    sliderRef.current?.classList.remove("is-dragging");
    startAutoplay();
  };

  const dragPercent = (dragOffsetPx / Math.max(1, getSliderWidth())) * 100;
  const translateX = `calc(${-currentIndex * 100}% + ${dragPercent}%)`;

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
          }} // guarantee on right node
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          {[imageOne, imageTwo, imageThree].map((src, idx) => (
            <div className="slide-wrapper" key={idx}>
              <img
                src={src}
                alt={`Slide ${idx + 1}`}
                className="slide"
                loading={idx === 0 ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={idx === currentIndex ? "high" : "low"}
              />

              {/* overlays (keep your content) */}
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

        {/* indicators */}
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
