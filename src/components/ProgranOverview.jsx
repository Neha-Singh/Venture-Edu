import React, { useState } from "react";
import {
  FaBook,
  FaCalendarAlt,
  FaBriefcase,
  FaLightbulb,
  FaRocket,
  FaRupeeSign,
  FaChartLine,
  FaCouch,
  FaBuilding,
  FaChalkboardTeacher,
  FaLightbulb as FaIdea,
  FaSeedling,
  FaCoins,
} from "react-icons/fa";
import CurriculumPage from "./Curriculum";
import OutOfClassActivities from "./OutOfClassActivities";
import InternshipPage from "./InternshipPage";
import VenturePage from "./VenturePage";
import "../styles/programoverview.css";

const ProgramOverview = () => {
  const [view, setView] = useState("overview"); // "overview" or "support"
  const [activeTab, setActiveTab] = useState("curriculum");
  const [supportTab, setSupportTab] = useState("acceleration");

  return (
    <div className="container" id="program-structure">
      {/* Header */}
      <header className="program-header">
        <h1 className="program-title">Program Structure</h1>
      </header>

      {/* Pills + timeline */}
      <div className="line-wrapper">
        <div className="pill-container">
          <div
            className={`term-pill ${view === "overview" ? "active-pill" : ""}`}
            onClick={() => setView("overview")}
          >
            PGP in Entrepreneurship
          </div>
        </div>
        <hr className="timeline-line" />
        <div className="pill-container">
          <div
            className={`term-pill ${view === "support" ? "active-pill" : ""}`}
            onClick={() => {
              setView("support");
              setSupportTab("acceleration");
            }}
          >
            Post Program Support
          </div>
        </div>
      </div>

      {/* Slider container for both panels */}
      <div className="tab-view-slider">
        <div className={`inner-slider ${view}`}>
          {/* ——— Overview Panel (4 tabs) ——— */}
          <div className="view-panel">
            <nav className="navbar">
              <ul className="nav-list">
                <li
                  className={`nav-item ${
                    activeTab === "curriculum" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("curriculum")}
                >
                  <FaBook className="icon" />
                  <span>Core Curriculum</span>
                </li>
                <li
                  className={`nav-item ${
                    activeTab === "activities" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("activities")}
                >
                  <FaCalendarAlt className="icon" />
                  <span>Out Of Class Activities</span>
                </li>
                <li
                  className={`nav-item ${
                    activeTab === "internship" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("internship")}
                >
                  <FaBriefcase className="icon" />
                  <span>Startup Immersion</span>
                </li>
                <li
                  className={`nav-item ${
                    activeTab === "venture" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("venture")}
                >
                  <FaLightbulb className="icon" />
                  <span>Build Your Own Venture</span>
                </li>
              </ul>
            </nav>
            <div className="content">
              {activeTab === "curriculum" && <CurriculumPage />}
              {activeTab === "activities" && <OutOfClassActivities />}
              {activeTab === "internship" && <InternshipPage />}
              {activeTab === "venture" && <VenturePage />}
            </div>
          </div>

          {/* ——— Support Panel (2 tabs) ——— */}
          <div className="view-panel">
            <nav className="navbar">
              <ul className="nav-list">
                <li
                  className={`nav-item ${
                    supportTab === "acceleration" ? "active" : ""
                  }`}
                  onClick={() => setSupportTab("acceleration")}
                >
                  <FaRocket className="icon" />
                  <span>Acceleration</span>
                </li>
                <li
                  className={`nav-item ${
                    supportTab === "funding" ? "active" : ""
                  }`}
                  onClick={() => setSupportTab("funding")}
                >
                  <FaRupeeSign className="icon" />
                  <span>Funding</span>
                </li>
              </ul>
            </nav>
            <div className="content">
              {/* *** Wrap support content in a .support-card *** */}
              <div className="support-card">
                {supportTab === "acceleration" && (
                  <ul className="support-list">
                    <li>
                      <FaChartLine className="item-icon" />
                      Refining scale and GTM strategy through Fibonacci X (2%
                      sweat equity)
                    </li>
                    <li>
                      <FaCouch className="item-icon" />
                      Free co-working space
                    </li>
                    <li>
                      <FaBuilding className="item-icon" />
                      Access to office space & tech infrastructure
                    </li>
                    <li>
                      <FaChalkboardTeacher className="item-icon" />
                      Mentorship & office hours
                    </li>
                    <li>
                      <FaIdea className="item-icon" />
                      Extended guidance from experts & faculties
                    </li>
                  </ul>
                )}
                {supportTab === "funding" && (
                  <ul className="support-list">
                    <li>
                      <FaSeedling className="item-icon" />
                      Investing early-stage capital in VenturEdu startups
                    </li>
                    <li>
                      <FaCoins className="item-icon" />
                      INR 25 Lakhs — Top 5%
                    </li>
                    <li>
                      <FaCoins className="item-icon" />
                      INR 15 Lakhs — Next 5%
                    </li>
                    <li>
                      <FaCoins className="item-icon" />
                      INR 10 Lakhs — Next 10%
                    </li>
                    <li>
                      <FaCoins className="item-icon" />
                      INR 5 Lakhs — Next 10%
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramOverview;
