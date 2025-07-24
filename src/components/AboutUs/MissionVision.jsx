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
          Empower driven individuals with the skills, mindset, and network
          needed to turn bold ideas into scalable,<br></br> investor-ready
          ventures.
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
          We envision a world where entrepreneurship isn’t just an aspiration
          but a proven pathway to inclusive growth and positive change.<br></br>
          <br></br> By cultivating a global community of fearless founders, we
          aim to democratize access to startup know-how, foster sustainable
          ventures, and spark an innovation revolution that transcends borders.
        </p>
        <img src={invertedTri} alt="" className="missionvision__cutout" />
      </div>
    </div>
  </section>
);

export default MissionVision;
