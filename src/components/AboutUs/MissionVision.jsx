import React from "react";
import "../../styles/AboutUs/missionvision.css";
import missionImg from "../../assets/about-us-images/missionvision/targetface.png";
import visionImg from "../../assets/about-us-images/missionvision/vigilanteye.png";
import invertedTri from "../../assets/about-us-images/inverted-triangle.png";

const MissionVision = () => (
  <section className="missionvision">
    <div className="missionvision__inner">
      {/* Mission Block */}
      <div className="missionvision__block missionvision__block--mission">
        <div className="missionvision__header">
          <h2 className="missionvision__title">
            <span>Our</span>
            <br />
            <span>Mission</span>
          </h2>
          <img
            src={missionImg}
            alt="Target graphic"
            className="missionvision__header-img"
          />
        </div>
        <p className="missionvision__text missionvision__mission-text">
          To create a venture school where idea-stage founders co-build with the
          world’s best minds to build culturally resonant, consumer-first, and
          investment-friendly brands
        </p>
        <img src={invertedTri} alt="" className="missionvision__cutout" />
      </div>

      {/* Vision Block */}
      <div className="missionvision__block missionvision__block--vision">
        <div className="missionvision__header">
          <h2 className="missionvision__title">
            <span>Our</span>
            <br />
            <span>Vision</span>
          </h2>
          <img
            src={visionImg}
            alt="Eye graphic"
            className="missionvision__header-img"
          />
        </div>
        <p className="missionvision__text missionvision__vision-text">
          Creation of a comprehensive venture building ecosystem where
          early-stage founders can transform their contrarian ideas into
          scalable and enduring companies
        </p>
        <img src={invertedTri} alt="" className="missionvision__cutout" />
      </div>
    </div>
  </section>
);

export default MissionVision;
