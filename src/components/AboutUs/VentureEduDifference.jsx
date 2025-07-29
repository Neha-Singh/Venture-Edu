// src/components/AboutUs/VentureDifference.jsx
import React from "react";
import "../../styles/AboutUs/venturedudifference.css";

import vector from "../../assets/about-us-images/venturedudifference/vector.png";
import immersionIcon from "../../assets/about-us-images/venturedudifference/real-world-immersion.png";
import cohortIcon from "../../assets/about-us-images/venturedudifference/cohort.png";
import toolkitIcon from "../../assets/about-us-images/venturedudifference/founder-toolkit.png";
import exposureIcon from "../../assets/about-us-images/venturedudifference/global-exposure.png";
import communityIcon from "../../assets/about-us-images/venturedudifference/life-long-community.png";

const VentureDifference = () => (
  <section className="venture-difference">
    <div className="venture-difference__inner">
      {/* Intro cell */}
      <div className="venture-difference__cell venture-difference__cell--intro">
        <img
          src={vector}
          alt=""
          className="venture-difference__vector"
          loading="lazy"
        />
      </div>

      {/* Top row */}
      <div className="venture-difference__cell">
        <img
          src={immersionIcon}
          alt=""
          className="venture-difference__icon"
          loading="lazy"
        />
        <h3 className="venture-difference__card-title">
          Real-World Immersion:
        </h3>
        <p className="venture-difference__card-text">
          Collaborate with active startups, tackle genuine challenges, and
          experience the ups and downs of scaling—long before you graduate.
        </p>
      </div>
      <div className="venture-difference__cell">
        <img
          src={cohortIcon}
          alt=""
          className="venture-difference__icon"
          loading="lazy"
        />
        <h3 className="venture-difference__card-title">
          Cohort-Based Learning & Funding:
        </h3>
        <p className="venture-difference__card-text">
          Learn alongside peers, pitch to a panel of investors, and secure
          direct seed capital from VenturEdu’s built-in cohort fund.
        </p>
      </div>

      {/* Bottom row */}
      <div className="venture-difference__cell">
        <img
          src={toolkitIcon}
          alt=""
          className="venture-difference__icon"
          loading="lazy"
        />
        <h3 className="venture-difference__card-title">Founder Toolkit:</h3>
        <p className="venture-difference__card-text">
          Master strategy, leadership, marketing, finance, and storytelling
          through live workshops, case studies, and 1:1 mentor sessions.
        </p>
      </div>
      <div className="venture-difference__cell">
        <img
          src={exposureIcon}
          alt=""
          className="venture-difference__icon"
          loading="lazy"
        />
        <h3 className="venture-difference__card-title">Global Exposure:</h3>
        <p className="venture-difference__card-text">
          Experience the innovation ecosystem in Dubai, connecting with
          international VCs, serial entrepreneurs, and innovation hubs.
        </p>
      </div>
      <div className="venture-difference__cell">
        <img
          src={communityIcon}
          alt=""
          className="venture-difference__icon"
          loading="lazy"
        />
        <h3 className="venture-difference__card-title">Lifelong Community:</h3>
        <p className="venture-difference__card-text">
          Gain access to exclusive events, digital collaboration spaces, and an
          ever-growing network of alumni, mentors, and angel investors.
        </p>
      </div>
    </div>
  </section>
);

export default VentureDifference;
