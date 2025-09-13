import React from "react";
import Breadcrumb from "../../components/Header/Breadcrumbs";
import vector1 from "../../assets/program-images/vector1.png";
import vector2 from "../../assets/program-images/vector2.png";
import bgImage from "../../assets/program-images/blue-background-image.png";
import rightArrow from "../../assets/header-images/rightarrow.svg";
import ProgramFeatures from "./ProgramFeatures.jsx";
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
        <h1>Program Overview</h1>
        <div className="program-landing__vectors">
          <img src={vector1} alt="" className="vector1" loading="lazy" />
          <img src={vector2} alt="" className="vector2" loading="lazy" />
        </div>
      </div>
      <div className="program-landing__intro">
        <p>
          You bring the idea We bring the world-class resources to build it from
          the ground up, academic rigour at par with top B-schools,
          accelerator-style training from industry leaders, and a 24×7 access to
          strategy, growth, tech, legal,creative and capital.
        </p>
        <span className="aboutus-subtitle">
          Exhaustive, intense, and rigorous because building a company demands
          nothing less.
        </span>
      </div>
    </div>
    <ProgramFeatures />
    {/* Subtitle + top grid stroke */}
    <p className="program-landing__subtitle">
      How to join the cohort ?{" "}
      <span className="aboutus-subtitle-2">
        We have dossier based admissions method with the heaviest weight
        assigned to your idea
      </span>
    </p>

    {/* Three-column pillars */}
    <div className="program-landing__grid">
      <div className="program-landing__grid-item">
        <h1>Round 1</h1>
        <h1>Consists of two components</h1>
        <p>
          1st: Submit a 300-word thesis of your idea, to be reviewed by a pool
          of 30+ VCs with a profile form
        </p>
        <p>
          2nd: Take a qualifying assessment on critical reasoning,
          communication, high school grade arthmetic and problem-solving{" "}
        </p>
        <p>
          (scores are not used for selection; advancement depends only on your
          idea and it's scalability potential
        </p>
      </div>
      <div className="program-landing__grid-item">
        <h1>Round 2</h1>
        <p>
          Once you qualify round 1. You’ll pitch your idea and present your deck
          in person to a panel of CXOs, VCs, and academic heads
        </p>
      </div>
      <div className="program-landing__grid-item">
        <h1>Round 3</h1>
        <p>- Offer letter roll-out</p>
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
