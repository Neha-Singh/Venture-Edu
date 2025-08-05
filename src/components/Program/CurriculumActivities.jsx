import React from "react";

import icon1 from "../../assets/program-images/curriculum/bigbluevector.png";
import icon2 from "../../assets/program-images/curriculum/biglightvector.svg";
import icon3 from "../../assets/program-images/curriculum/inverteditriangle-navyblue.png";
import icon4 from "../../assets/program-images/curriculum/invertedtriangleblue.png";

import "../../styles/Program/curriculumactivities.css";

const CurriculumActivities = () => (
  <section className="curriculum-activities">
    <div className="curriculum-activities__wrapper">
      {/* Left Panel */}
      <div className="curriculum-activities__panel curriculum-activities__panel--left">
        <h2 className="curriculum-activities__title">
          Ancillary Activities Mission
        </h2>
        <p className="curriculum-activities__intro">
          Immersive 14-month program
        </p>
        <ul className="curriculum-activities__list">
          <li>
            Mixers and fireside chats with startup founders and investors.
          </li>
          <li>1:1 mentorship session with industry leaders.</li>
        </ul>
        <h3 className="curriculum-activities__subheading">Challenges</h3>
        <ul className="curriculum-activities__list">
          <li>Drop shipping and startup advertising campaign challenge.</li>
          <li>No code and lean startup bootcamp.</li>
        </ul>

        {/* Decorative vectors */}
        <img
          src={icon1}
          alt=""
          className="curriculum-activities__vector--bigblue"
          loading="lazy"
        />
        <img
          src={icon2}
          alt=""
          className="curriculum-activities__vector--biglight"
          loading="lazy"
        />
      </div>

      {/* Right Panel */}
      <div className="curriculum-activities__panel curriculum-activities__panel--right">
        <h2 className="curriculum-activities__title curriculum-activities__title--dark">
          Post Program Support
        </h2>

        <h3 className="curriculum-activities__subheading curriculum-activities__subheading--dark">
          Acceleration
        </h3>
        <ul className="curriculum-activities__list curriculum-activities__list--dark">
          <li>
            Refining scale and GTM strategy through Fibonacci X (2% sweat
            equity).
          </li>
        </ul>

        <h3 className="curriculum-activities__subheading curriculum-activities__subheading--dark">
          Assistance
        </h3>
        <ul className="curriculum-activities__list curriculum-activities__list--dark">
          <li>
            Complimentary access to office space as well as tech infrastructure.
          </li>
          <li>Extended mentorship and guidance.</li>
        </ul>

        <h3 className="curriculum-activities__subheading curriculum-activities__subheading--dark">
          Funding
        </h3>
        <ul className="curriculum-activities__list curriculum-activities__list--dark">
          <li>Early-stage capital investment in VenturEdu startups.</li>
        </ul>
      </div>
    </div>
  </section>
);

export default CurriculumActivities;
