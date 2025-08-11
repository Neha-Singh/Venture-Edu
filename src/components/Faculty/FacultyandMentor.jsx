import React from "react";
import "../../styles/Faculty/FacultyandMentor.css";
import Breadcrumb from "../../components/Header/Breadcrumbs";

// decorative vectors
import vector2 from "../../assets/program-images/vector1.png";
import vector1 from "../../assets/program-images/vector2.png";

// mentor icons
import immersionIcon from "../../assets/about-us-images/venturedudifference/real-world-immersion.png";
import cohortIcon from "../../assets/about-us-images/venturedudifference/cohort.png";
import toolkitIcon from "../../assets/about-us-images/venturedudifference/founder-toolkit.png";
import exposureIcon from "../../assets/about-us-images/venturedudifference/global-exposure.png";

const Faculty = () => (
  <section className="faculty">
    <Breadcrumb
      links={[
        { label: "Home", url: "/" },
        { label: "Faculty", url: "/faculty" },
      ]}
      currentPath={window.location.pathname}
    />
    {/* Hero */}
    <div className="faculty__hero">
      <div className="faculty__hero-left">
        <h1 className="faculty__title">Faculty & Mentors</h1>

        {/* ← new vectors injected here */}
        <div className="faculty__decorators">
          <img
            src={vector1}
            alt=""
            className="faculty__vector faculty__vector--1"
            loading="lazy"
          />
          <img
            src={vector2}
            alt=""
            className="faculty__vector faculty__vector--2"
            loading="lazy"
          />
        </div>
      </div>

      <div className="faculty__hero-right">
        <p className="faculty__subtitle">
          At VenturEdu, we bring together traditional educators, seasoned
          founders, growth-stage investors, domain experts, and strategic
          advisers to guide you as you build — and scale — your venture.
        </p>
      </div>
    </div>

    {/* Four Icon Grid */}
    <div className="faculty__grid-wrap">
      <div className="faculty__grid">
        <div className="faculty__item">
          <img
            src={immersionIcon}
            alt="Real-World Startup Immersion"
            loading="lazy"
          />
          <h3>Real-World Startup Immersion</h3>
          <p>
            Collaborate with active startups and experience the thrill of
            scaling a business firsthand.
          </p>
        </div>
        <div className="faculty__item">
          <img src={cohortIcon} alt="Diverse Perspectives" loading="lazy" />
          <h3>Diverse Perspectives</h3>
          <p>
            From bootstrapped startups to VC-backed unicorns, our roster covers
            the full spectrum.
          </p>
        </div>
        <div className="faculty__item">
          <img src={toolkitIcon} alt="Hands-On Guidance" loading="lazy" />
          <h3>Hands-On Guidance</h3>
          <p>
            Office hours, live case studies, and one-on-one mentorship ensure
            you apply lessons in real time.
          </p>
        </div>
        <div className="faculty__item">
          <img src={exposureIcon} alt="Network Effects" loading="lazy" />
          <h3>Network Effects</h3>
          <p>
            Join a tight-knit community of peers, alumni, and mentors whose
            connections become your springboard.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Faculty;
