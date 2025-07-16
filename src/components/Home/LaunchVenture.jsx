import React from "react";
import "../../styles/Home/launchventure.css";

import rightArrow from "../../assets/header-images/rightarrow.svg";
import smallVector from "../../assets/home-images/launch-venture/smallvector.svg";
import bigVector from "../../assets/home-images/launch-venture/bigvector.png";

export default function LaunchVenture() {
  return (
    <div className="launch-venture-page">
      <section className="launch-hero">
        <div className="launch-text">
          <span className="small">Ready to</span>
          <h2>Launch Your Venture?</h2>
          <p>
            If you're passionate, driven, and ready to build something
            impactful, VenturEdu provides the roadmap, resources, and support to
            make it happen.
          </p>
          <p>Take the first step towards becoming a VenturEdu founder.</p>
          <button className="launch-button">
            Start your Application
            <img src={rightArrow} alt="→" />
          </button>
        </div>
        <img src={smallVector} alt="" className="vector small" />

        {/* Hero Image Vector on the right */}
        <img
          src={bigVector}
          alt="Decorative launch vector"
          className="vector big"
        />
      </section>
    </div>
  );
}
