import React from "react";
import "../styles/venturepage.css";

const VenturePage = () => {
  return (
    <div className="venture-page">
      <div className="venture-card">
        <h1 className="venture-heading">BYOV (Building Your Own Venture)</h1>
        <p className="venture-text">
          14-month long ongoing venture building sprint where participants
          identify real problems, validate them, and build solutions through
          brainstorming and mentor-led problem-solving sessions.
        </p>
        <p className="venture-text">
          Commit to building your own venture from day one—starting with a
          problem you deeply care about and turning it into a scalable business.
        </p>
        <p className="venture-text">
          Finding co-founder, pivot and help each revenue generation stage with
          notable traction.
        </p>
        <p className="venture-text">
          Graduate not with a certificate, but with a venture you own, a team
          you believe in, and the clarity to raise capital, scale, or bootstrap
          your next bold move.
        </p>
      </div>
    </div>
  );
};

export default VenturePage;
