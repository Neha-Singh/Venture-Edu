import React from "react";
import "../../styles/Home/aboutus.css";
import image1 from "../../assets/home-images/aboutus/image1.svg";
import image2 from "../../assets/home-images/aboutus/image2.svg";
import image3 from "../../assets/home-images/aboutus/image3.svg";
import image4 from "../../assets/home-images/aboutus/image4.svg";
import vector1 from "../../assets/home-images/aboutus/vector1.svg";
import vector2 from "../../assets/home-images/aboutus/vector2.svg";
import vector3 from "../../assets/home-images/aboutus/vector3.svg";
import rightArrow from "../../assets/header-images/rightarrow.svg";

const AboutUs = () => (
  <section className="aboutus-section">
    <div className="aboutus-content">
      <h2 className="aboutus-title">
        VenturEdu is where aspiring founders transform bold ideas into real,
        investor-ready ventures.
      </h2>
      <ul className="aboutus-list">
        <li>
          <strong>Immersive 14-month program</strong> to take you from concept
          to launch, backed by expert mentorship and a unique opportunity for
          cohort funding.
        </li>
        <li>
          <strong>Experienced faculty</strong> that includes visionary founders,
          seasoned educators, and investors who have been integral to the
          startup world.
        </li>
        <li>
          <strong>Global immersion in Dubai</strong> to expand horizons and
          connect with international investors, successful founders, and
          industry leaders.
        </li>
      </ul>
      <button className="aboutus-button">
        Apply For a Cohort
        <img src={rightArrow} alt="Arrow" className="aboutus-arrow" />
      </button>
    </div>

    <div className="aboutus-images">
      <div className="image-grid">
        <div className="image-item">
          <img src={image1} alt="Team discussion" />
        </div>
        <div className="image-item">
          <img src={image2} alt="Collaboration session" />
        </div>
        <div className="image-item">
          <img src={image3} alt="Mentorship" />
        </div>
        <div className="image-item">
          <img src={image4} alt="Investor meeting" />
        </div>
      </div>
      <img src={vector1} alt="" className="vector vector1" />
      <img src={vector2} alt="" className="vector vector2" />
      <img src={vector3} alt="" className="vector vector3" />
    </div>
  </section>
);

export default AboutUs;
