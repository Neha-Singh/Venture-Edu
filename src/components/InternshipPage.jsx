import React from "react";
import {
  FaRocket,
  FaHandshake,
  FaTools,
  FaGraduationCap,
} from "react-icons/fa";
import "../styles/internship.css";

const InternshipPage = () => {
  return (
    <div className="internship-page">
      <div className="internship-card">
        <p className="internship-text">
          <span className="icon-wrapper">
            <FaRocket />
          </span>
          <span className="text-content">
            Work directly with early-stage startups to experience the real
            hustle and chaos of venture building.
          </span>
        </p>
        <p className="internship-text">
          <span className="icon-wrapper">
            <FaHandshake />
          </span>
          <span className="text-content">
            Collaborate with founders, source their biggest problem statements,
            and contribute meaningfully to their growth.
          </span>
        </p>
        <p className="internship-text">
          <span className="icon-wrapper">
            <FaTools />
          </span>
          <span className="text-content">
            Solve real problems that matter—no simulations, just live challenges
            that create actual impact.
          </span>
        </p>
        <p className="internship-text">
          <span className="icon-wrapper">
            <FaGraduationCap />
          </span>
          <span className="text-content">
            Learn how to adapt, execute, and stay sharp while tackling
            ground-level startup issues under real pressure.
          </span>
        </p>
      </div>
    </div>
  );
};

export default InternshipPage;
