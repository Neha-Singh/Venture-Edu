// AboutUs.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

import rightArrow from "../../assets/header-images/rightarrow.svg";
import img1 from "../../assets/home-images/aboutus/image1.svg";
import img2 from "../../assets/home-images/aboutus/image2.svg";
import img3 from "../../assets/home-images/aboutus/image3.svg";
import img4 from "../../assets/home-images/aboutus/image4.svg";
import vector1 from "../../assets/home-images/aboutus/vector1.svg";
import vector2 from "../../assets/home-images/aboutus/vector2.svg";
import vector3 from "../../assets/home-images/aboutus/vector3.svg";
import "../../styles/Home/aboutus.css";
// ...other imports and component code unchanged...

export default function AboutUs() {
  const navigate = useNavigate();

  return (
    <section className="aboutus-section">
      <div className="aboutus-inner">
        <div className="aboutus-content">
          <h1 className="aboutus-title">
            A 14 Month Residency Program
            <span className="aboutus-subtitle-home">
              Apply with an Idea and graduate with a funded startup
            </span>
          </h1>

          <ul className="aboutus-list">
            <li>
              <strong>Investment Access</strong>- Assured investment offer to
              top 30% of the class, via in house accelerator
            </li>
            <li>
              <strong>Investor network </strong>-Pitch you idea to 100+ VCs in a
              1:1 fashion demo days every month
            </li>
            <li>
              <strong>Immersion </strong>-Work alongside Series A+ founders for
              2 months to practice hands on venture building
            </li>
          </ul>

          {/* CTA — now uses rightArrow image */}
          <a href="/program" className="aboutus-cta">
            <span>Explore More </span>
            <img src={rightArrow} alt="" className="aboutus-cta__icon" />
          </a>
        </div>

        {/* Right column images – unchanged structure */}
        <div className="aboutus-images">
          <div className="image-item">
            <img src={img1} alt="" loading="lazy" decoding="async" />
          </div>
          <div className="image-item">
            <img src={img2} alt="" loading="lazy" decoding="async" />
          </div>
          <div className="image-item">
            <img src={img3} alt="" loading="lazy" decoding="async" />
          </div>
          <div className="image-item">
            <img src={img4} alt="" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>

      {/* Decorative vectors (keep as you had them) */}
      <img
        className="vector vector1"
        src={vector1}
        alt=""
        loading="lazy"
        decoding="async"
      />
      <img
        className="vector vector2"
        src={vector2}
        alt=""
        loading="lazy"
        decoding="async"
      />
      <img
        className="vector vector3"
        src={vector3}
        alt=""
        loading="lazy"
        decoding="async"
      />
    </section>
  );
}
