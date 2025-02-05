import React from "react";
import image1 from "../../src/assets/advisory-images/image-1.png";
import image2 from "../../src/assets/advisory-images/image-3.png";
import image3 from "../../src/assets/advisory-images/image-2.png";
import image4 from "../../src/assets/advisory-images/image-4.png";

const AdvisoryBoard = () => {
  return (
    <>
      <div className="advisory-background">
        <div className="advisory-heading">Advisory Board</div>
        <div className="advisory-container">
          <div className="advisory-box">
            {" "}
            <img src={image1} alt="Card 1" className="card-image" />
            <div className="card-text">
              <div className="card-name">Pooja Mehta</div>
              <div className="card-designation">
                Founder and CEO, SparksCube
              </div>
            </div>
          </div>
          <div className="advisory-box">
            {" "}
            <img src={image2} alt="Card 1" className="card-image" />
            <div className="card-text">
              <div className="card-name">Rahul Sharma</div>
              <div className="card-designation">CTO, InnovateX</div>
            </div>
          </div>
          <div className="advisory-box">
            {" "}
            <img src={image3} alt="Card 1" className="card-image" />
            <div className="card-text">
              <div className="card-name">Anita Desai</div>
              <div className="card-designation">
                Head of Marketing, BrightWave
              </div>
            </div>
          </div>
          <div className="advisory-box">
            {" "}
            <img src={image4} alt="Card 1" className="card-image" />
            <div className="card-text">
              <div className="card-name">Ashwini Ahuja</div>
              <div className="card-designation">CPO, TechEra Solutions</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdvisoryBoard;
