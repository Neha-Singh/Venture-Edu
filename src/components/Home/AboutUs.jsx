// AboutUs.jsx
import React from "react";
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
  return (
    <section className="aboutus-section">
      <div className="aboutus-inner">
        <div className="aboutus-content">
          <h1 className="aboutus-title">
            VenturEdu is where aspiring founders transform bold ideas into real,
            investor-ready ventures.
          </h1>

          <ul className="aboutus-list">
            <li>
              <strong>Immersive 14-month entrepreneurship training</strong> to
              take you from concept to launch, backed by expert mentorship and a
              unique opportunity for cohort funding.
            </li>
            <li>
              <strong>Experienced faculty</strong> that includes visionary
              founders, seasoned educators, and investors who have been integral
              to the startup world.
            </li>
            <li>
              <strong>Global immersion in Dubai</strong> to expand horizons and
              connect with international investors, successful founders, and
              industry leaders.
            </li>
          </ul>

          {/* CTA — now uses rightArrow image */}
          <a href="/contactus" className="aboutus-cta">
            <span>Apply For a Cohort</span>
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
