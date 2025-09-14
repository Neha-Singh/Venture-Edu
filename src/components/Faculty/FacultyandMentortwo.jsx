import React from "react";
import "../../styles/Faculty/facultyandmentortwo.css";

import image1 from "../../assets/home-images/aboutus/image1.jpg";
import image2 from "../../assets/home-images/aboutus/image2.jpg";

import vector1 from "../../assets/home-images/aboutus/vector1.svg";
import vector2 from "../../assets/home-images/aboutus/vector2.svg";
import vector3 from "../../assets/home-images/aboutus/vector3.svg";

export default function FacultyIntro() {
  return (
    <section className="faculty-intro">
      {/* decorative vertical strokes */}
      <div className="fi-strokes" aria-hidden="true" />

      {/* vectors */}
      <img src={vector1} alt="" className="fi-vector v1" loading="lazy" />
      <img src={vector2} alt="" className="fi-vector v2" loading="lazy" />
      <img src={vector3} alt="" className="fi-vector v3" loading="lazy" />

      <div className="fi-wrap">
        {/* Left copy */}
        <div className="fi-copy">
          <h2>
            Our faculty is uniquely structured to combine academic rigor with
            practical, real-world experience.
          </h2>

          <p className="fi-lead">
            Our program’s strength lies in its three-pillared faculty approach,
            supported by strong governance and an expert advisory board.
          </p>

          <ul className="fi-list">
            <li>
              <strong>Immersive 14-month program</strong> to take you from
              concept to launch, backed by expert mentorship and a unique
              opportunity for cohort funding.
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
        </div>

        {/* Right images */}
        <div className="fi-images">
          <div className="fi-photo left" style={{ height: 680 }}>
            <img src={image1} alt="" loading="lazy" />
          </div>
          <div className="fi-photo right" style={{ height: 680 }}>
            <img src={image2} alt="" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
