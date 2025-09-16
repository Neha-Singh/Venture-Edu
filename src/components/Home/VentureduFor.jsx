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

  const goAbout = (e) => {
    if (e) {
      // keep it simple—no optional chaining
      e.preventDefault();
      e.stopPropagation();
    }
    navigate("/aboutus");
  };

  return (
    <div className="venturedufor-page">
      {/* Header */}
      <section className="vdf-header">
        <h2 className="vdf-title">
          <span className="vdf-title-line2">VenturEdu is designed for </span>
        </h2>
        <p className="vdf-subtitle">
          VenturEdu is designed for driven individuals at various stages of
          their entrepreneurial journey.
        </p>
        <button className="vdf-button" type="button" onClick={goAbout}>
          See if VenturEdu is The Right Fit For You
          <img src={rightArrow} alt="→" />
        </button>
      </section>

      {/* Cards Row */}
      <section className="vdf-cards">
        {cards.map((c, i) => (
          <React.Fragment key={i}>
            {i === 2 && (
              <img src={cardVector} alt="" className="vdf-cards-vector" />
            )}
            <div className="vdf-card">
              <img src={c.src} alt={c.alt} />
            </div>
          </React.Fragment>
        ))}
      </section>
    </div>
  );
}
