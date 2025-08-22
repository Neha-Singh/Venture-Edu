// components/YourJourney/JourneyDetails.jsx
import React, { useState } from "react";
import "../../styles/Home/yourjourney-details.css";

import bluevector from "../../assets/home-images/yourjourney/blue-vector.svg";
import greyvector from "../../assets/home-images/yourjourney/grey-vector.svg";
import image1 from "../../assets/home-images/yourjourney/people-discussing.svg";
import chevrondownArrow from "../../assets/home-images/yourjourney/chevron-down.svg";
import chevronupArrow from "../../assets/home-images/yourjourney/chevron-up.svg";
import rightArrow from "../../assets/header-images/rightarrow.svg";

export default function JourneyDetails({ phases = [] }) {
  const [openIndex, setOpenIndex] = useState(0);
  const toggle = (i) => setOpenIndex(openIndex === i ? -1 : i);

  return (
    <section className="yj-details">
      {/* Upper hero strip (blue) */}
      <div className="yj-hero">
        <div className="yj-hero-text">
          <span className="yj-small">Your</span>
          <h2>Journey with VenturEdu</h2>
        </div>
        <button className="yj-hero-btn" type="button">
          Explore the full program
          <img src={rightArrow} alt="" />
        </button>

        {/* decorative vectors */}
        <img src={bluevector} alt="" className="yj-vector yj-blue" />
        <img src={greyvector} alt="" className="yj-vector yj-grey" />
      </div>

      {/* Lower: accordion + image */}
      <div className="yj-lower">
        <div className="yj-accordion">
          {phases.map((p, i) => (
            <div
              key={i}
              className={`yj-acc-item ${openIndex === i ? "open" : ""}`}
            >
              <button
                className="yj-acc-title"
                onClick={() => toggle(i)}
                type="button"
              >
                <span className="yj-acc-index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="yj-phase-label">{p.phaseLabel}</span>
                <h4>{p.title}</h4>
                <img
                  className="yj-acc-chevron"
                  src={openIndex === i ? chevronupArrow : chevrondownArrow}
                  alt=""
                  aria-hidden="true"
                />
              </button>
              <div className="yj-acc-content">
                <p>{p.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="yj-hero-image">
          <img src={image1} alt="Group discussing" />
        </div>
      </div>
    </section>
  );
}
