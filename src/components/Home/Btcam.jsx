// Btcam.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

import rightArrow from "../../assets/header-images/rightarrow.svg";
import img1 from "../../assets/home-images/aboutus/btcmp1.jpg";
import img2 from "../../assets/home-images/aboutus/btcmp2.jpg";
import img3 from "../../assets/home-images/aboutus/btcmp3.jpg";
import img4 from "../../assets/home-images/aboutus/btcmp4.jpg";
import vector1 from "../../assets/home-images/aboutus/vector1.svg";
import vector2 from "../../assets/home-images/aboutus/vector2.svg";
import vector3 from "../../assets/home-images/aboutus/vector3.svg";
import "../../styles/Home/aboutus.css";

export default function Btcam() {
  const navigate = useNavigate();

  return (
    <section className="aboutus-section">
      <div className="aboutus-inner btcam-swap">
        {/* ⬅️ Images left */}
        <div className="aboutus-images">
          <div className="image-item">
            <img src={img1} alt="" loading="lazy" decoding="async" />
          </div>
          <div className="image-item">
            <img src={img2} alt="" loading="lazy" decoding="async" />
          </div>
          {/* <div className="image-item">
            <img src={img3} alt="" loading="lazy" decoding="async" />
          </div>
          <div className="image-item">
            <img src={img4} alt="" loading="lazy" decoding="async" />
          </div> */}
        </div>

        {/* ➡️ Text right */}
        <div className="aboutus-content">
          <h1 className="aboutus-title">
            1 month bootcamp
            <span className="aboutus-subtitle-home">
              Designed to help professional and founders with family business
              background to validate ideas against investors.
            </span>
          </h1>

          <ul className="aboutus-list">
            <li>
              <strong>Funding Clarity</strong> : Determine whether your idea is
              best suited for venture capital, angel investment, or strategic
              funding.
            </li>

            <li>
              <strong>Work-Compatible Format</strong> : Weekend in-person
              sessions, weekday online modules, and project-based progression.
            </li>
            <li>
              <strong>Investor-Ready Outputs</strong> : Develop a financial
              model, business plan, and pitch deck aligned with investors
              expectations
            </li>

            <li>
              <strong>Risk-Free Validation</strong> : Assess if your idea
              deserves a full-time commitment before resigning or committing
              significant resources
            </li>
          </ul>

          <a href="/bootcamp" className="aboutus-cta">
            <span>Explore More</span>
            <img src={rightArrow} alt="" className="aboutus-cta__icon" />
          </a>
        </div>
      </div>

      {/* Decorative vectors */}
      <img className="vector vector1" src={vector1} alt="" loading="lazy" />
      <img className="vector vector2" src={vector2} alt="" loading="lazy" />
      <img className="vector vector3" src={vector3} alt="" loading="lazy" />
    </section>
  );
}
