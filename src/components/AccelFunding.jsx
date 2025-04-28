import React, { useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaRocket,
  FaRupeeSign,
  FaChartLine,
  FaCouch,
  FaBuilding,
  FaChalkboardTeacher,
  FaLightbulb,
  FaSeedling,
  FaCoins,
} from "react-icons/fa";
import "../styles/accelfunding.css";

const AccelFundingOverview = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState("acceleration");

  return (
    <div className="container" id="accel-fund">
      <header className="program-header">
        <h1 className="program-title">Program Structure</h1>
        <div className="nav-capsule">
          <div className="capsule-half" onClick={onBack}>
            <FaArrowLeft className="capsule-icon" />
          </div>
          <div className="capsule-half">
            <FaArrowRight className="capsule-icon" />
          </div>
        </div>
      </header>

      <div className="line-wrapper">
        {/* horizontal rule removed */}
        <div className="pill-container">
          <div className="term-pill">Post Program Support</div>
        </div>
      </div>

      <nav className="navbar">
        <ul className="nav-list">
          <li
            className={`nav-item ${
              activeTab === "acceleration" ? "active" : ""
            }`}
            onClick={() => setActiveTab("acceleration")}
          >
            <FaRocket className="tab-icon" />
            <span>Acceleration</span>
          </li>
          <li
            className={`nav-item ${activeTab === "funding" ? "active" : ""}`}
            onClick={() => setActiveTab("funding")}
          >
            <FaRupeeSign className="tab-icon" />
            <span>Funding</span>
          </li>
        </ul>
      </nav>

      <div className="content">
        {activeTab === "acceleration" && (
          <div className="acceleration-content">
            <ul>
              <li>
                <FaChartLine className="item-icon" />
                Refining scale and GTM strategy through Fibonacci X (in exchange
                for 2% sweat equity)
              </li>
              <li>
                <FaCouch className="item-icon" />
                Free co-working space
              </li>
              <li>
                <FaBuilding className="item-icon" />
                Access to office space, tech infrastructure, and a collaborative
                ecosystem
              </li>
              <li>
                <FaChalkboardTeacher className="item-icon" />
                Mentorship and office hours
              </li>
              <li>
                <FaLightbulb className="item-icon" />
                Extended guidance from subject experts and founder/investor
                faculties
              </li>
            </ul>
          </div>
        )}

        {activeTab === "funding" && (
          <div className="funding-content">
            <ul>
              <li>
                <FaSeedling className="item-icon" />
                Investing early-stage capital in startups built at VenturEdu
              </li>
              <li>
                <FaCoins className="item-icon" />
                INR 25 Lakhs — Top 5% of the cohort
              </li>
              <li>
                <FaCoins className="item-icon" />
                INR 15 Lakhs — Next 5% of the cohort
              </li>
              <li>
                <FaCoins className="item-icon" />
                INR 10 Lakhs — Next 10% of the cohort
              </li>
              <li>
                <FaCoins className="item-icon" />
                INR 5 Lakhs — Next 10% of the cohort
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccelFundingOverview;
