import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Home/venturedufor.css";

import image1 from "../../assets/home-images/venturedu-for/graduate.svg";
import image2 from "../../assets/home-images/venturedu-for/careertransitioner.svg";
import image3 from "../../assets/home-images/venturedu-for/nonbussinesspro.svg";
import image4 from "../../assets/home-images/venturedu-for/legacybuilder.svg";
import cardVector from "../../assets/home-images/venturedu-for/vector.svg";

import rightArrow from "../../assets/header-images/rightarrow.svg";

export default function VentureduFor() {
  const navigate = useNavigate();

  // Capture-phase nav; stops any parent/overlay handlers and falls back to hard redirect
  const goAbout = (e) => {
    try {
      if (e) {
        e.preventDefault?.();
        e.stopPropagation?.();
        if (e.nativeEvent?.stopImmediatePropagation) {
          e.nativeEvent.stopImmediatePropagation();
        }
      }
    } catch {}
    try {
      navigate("/aboutus");
    } catch {
      // ignore
    }
    // Fallback in case router is blocked
    window.location.assign("/aboutus");
  };

  const cards = [
    {
      src: image1,
      alt: "The Aspiring Graduate",
      label: "The Aspiring Graduate",
    },
    {
      src: image2,
      alt: "The Career Transitioner",
      label: "The Career Transitioner",
    },
    { src: image3, alt: "The Non-Business Pro", label: "The Non-Business Pro" },
    { src: image4, alt: "The Legacy Builder", label: "The Legacy Builder" },
  ];

  return (
    <div className="venturedufor-page">
      {/* Header */}
      <section className="vdf-header" style={{ position: "relative" }}>
        <h2 className="vdf-title">
          Who is <span className="vdf-title-line2">VenturEdu for ?</span>
        </h2>
        <p className="vdf-subtitle">
          VenturEdu is designed for driven individuals at various stages of
          their entrepreneurial journey.
        </p>

        {/* Click-safe wrapper to ensure on-top & clickable */}
        <div
          style={{
            position: "relative",
            zIndex: 1000,
            pointerEvents: "auto",
            display: "inline-block",
          }}
        >
          {/* Anchor styled as button; capture-phase handlers */}
          <a
            href="/aboutus"
            className="vdf-button"
            role="button"
            tabIndex={0}
            onMouseDownCapture={goAbout}
            onTouchStartCapture={goAbout}
            onClickCapture={goAbout}
            onKeyDownCapture={(e) => {
              if (e.key === "Enter" || e.key === " ") goAbout(e);
            }}
            style={{
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              pointerEvents: "auto",
              position: "relative",
              zIndex: 1001,
            }}
          >
            See if VenturEdu is The Right Fit For You
            <img src={rightArrow} alt="→" />
          </a>
        </div>
      </section>

      {/* Cards Row */}
      <section className="vdf-cards" style={{ position: "relative" }}>
        {cards.map((c, i) => (
          <React.Fragment key={i}>
            {i === 2 && (
              <img
                src={cardVector}
                alt=""
                className="vdf-cards-vector"
                draggable="false"
                // Prevent decorative vector from blocking clicks
                style={{ pointerEvents: "none" }}
              />
            )}
            <div className="vdf-card">
              <img src={c.src} alt={c.alt} draggable="false" />
            </div>
          </React.Fragment>
        ))}
      </section>
    </div>
  );
}
