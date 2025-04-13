import React from "react";
import {
  FaLightbulb,
  FaBullseye,
  FaUsers,
  FaGraduationCap,
} from "react-icons/fa";
import "../styles/venturepage.css";

const VenturePage = () => {
  return (
    <div className="venture-page">
      <div className="venture-card">
        <p className="venture-text">
          <span className="icon-wrapper">
            <FaLightbulb />
          </span>
          <span className="text-content">
            14-month long ongoing venture building sprint where participants
            identify real problems, validate them, and build solutions through
            brainstorming and mentor-led problem-solving sessions.
          </span>
        </p>
        <p className="venture-text">
          <span className="icon-wrapper">
            <FaBullseye />
          </span>
          <span className="text-content">
            Commit to building your own venture from day one—starting with a
            problem you deeply care about and turning it into a scalable
            business.
          </span>
        </p>
        <p className="venture-text">
          <span className="icon-wrapper">
            <FaUsers />
          </span>
          <span className="text-content">
            Finding co-founder, pivot and help each revenue generation stage
            with notable traction.
          </span>
        </p>
        <p className="venture-text">
          <span className="icon-wrapper">
            <FaGraduationCap />
          </span>
          <span className="text-content">
            Graduate not with a certificate, but with a venture you own, a team
            you believe in, and the clarity to raise capital, scale, or
            bootstrap your next bold move.
          </span>
        </p>
      </div>
    </div>
  );
};

export default VenturePage;
