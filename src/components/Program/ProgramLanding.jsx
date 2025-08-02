import React from "react";
import Breadcrumb from "../../components/Header/Breadcrumbs";
import vector1 from "../../assets/program-images/vector1.png";
import vector2 from "../../assets/program-images/vector2.png";
import bgImage from "../../assets/program-images/blue-background-image.png";
import rightArrow from "../../assets/header-images/rightarrow.svg";
import "../../styles/Program/programlanding.css";

const ProgramLanding = () => (
  <section className="program-landing">
    {/* Breadcrumb */}
    <Breadcrumb
      links={[
        { label: "Home", url: "/" },
        { label: "Program", url: "/program" },
      ]}
      currentPath={window.location.pathname}
    />

    {/* Top intro */}
    <div className="program-landing__top">
      <div className="program-landing__heading">
        <h1>The Program</h1>
        <div className="program-landing__vectors">
          <img src={vector1} alt="" className="vector1" loading="lazy" />
          <img src={vector2} alt="" className="vector2" loading="lazy" />
        </div>
      </div>
      <div className="program-landing__intro">
        <p>
          Welcome to VenturEdu’s flagship 14-month PGP in Entrepreneurship—a
          hands-on, outcomes-driven journey that takes you from spark to scale.
          Master the startup lifecycle through expert-designed modules,
          real-world venture projects, and an immersive global experience in
          Dubai.
        </p>
      </div>
    </div>

    {/* Subtitle + top grid stroke */}
    <p className="program-landing__subtitle">
      Our program is built on three pillars:
    </p>

    {/* Three-column pillars */}
    <div className="program-landing__grid">
      <div className="program-landing__grid-item">
        <h3>01</h3>
        <p>Deep-dive courses, labs & mentor clinics.</p>
      </div>
      <div className="program-landing__grid-item">
        <h3>02</h3>
        <p>Four progressive stages aligned with startup milestones.</p>
      </div>
      <div className="program-landing__grid-item">
        <h3>03</h3>
        <p>Two-week deep dive into Dubai’s innovation ecosystem.</p>
      </div>
    </div>

    {/* Bottom CTA */}
    <div className="program-landing__cta">
      <img
        src={bgImage}
        alt=""
        className="program-landing__cta-bg"
        loading="lazy"
      />
      <div className="program-landing__cta-content">
        <h2 className="program-landing__cta-title">
          Transform your
          <br />
          entrepreneurial dreams into reality.
        </h2>
        <button className="program-landing__cta-button">
          Apply for the Next Cohort
          <img
            src={rightArrow}
            alt=""
            className="program-landing__cta-arrow"
            loading="lazy"
          />
        </button>
      </div>
    </div>
  </section>
);

export default ProgramLanding;
