import React, { useState } from "react";
import {
  FaBook,
  FaCalendarAlt,
  FaBriefcase,
  FaLightbulb,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import CurriculumPage from "./Curriculum";
import OutOfClassActivities from "./OutOfClassActivities";
import InternshipPage from "./InternshipPage";
import VenturePage from "./VenturePage";
import AccelFundingOverview from "./AccelFunding"; // <–– new import
import "../styles/programoverview.css";

const ProgramOverview = () => {
  // view: "overview" shows the 4-tab view; "accelFunding" shows the 2-tab view
  const [view, setView] = useState("overview");
  const [activeTab, setActiveTab] = useState("curriculum");

  const goPrev = () => {
    // if we're in accelFunding, go back to overview
    if (view === "accelFunding") {
      setView("overview");
    }
  };
  const goNext = () => {
    // clicking forward arrow takes you to the Acceleration & Funding view
    setView("accelFunding");
  };

  // Render the two-tab Acceleration & Funding component when in that view
  if (view === "accelFunding") {
    return <AccelFundingOverview onBack={goPrev} />;
  }

  // Otherwise render your original 4-tab Program Structure
  return (
    <div className="container" id="program-structure">
      <header className="program-header">
        <h1 className="program-title">Program Structure</h1>
        <div className="nav-capsule">
          <div className="capsule-half" onClick={goPrev}>
            <FaArrowLeft className="capsule-icon" />
          </div>
          <div className="capsule-half" onClick={goNext}>
            <FaArrowRight className="capsule-icon" />
          </div>
        </div>
      </header>

      <div className="line-wrapper">
        <hr className="program-line" />
        <div className="pill-container">
          <div className="term-pill">PGP in Enterprenuership</div>
        </div>
      </div>

      <nav className="navbar">
        <ul className="nav-list">
          <li
            className={`nav-item ${activeTab === "curriculum" ? "active" : ""}`}
            onClick={() => setActiveTab("curriculum")}
          >
            <FaBook className="icon" />
            <span>Core Curriculum</span>
          </li>
          <li
            className={`nav-item ${activeTab === "activities" ? "active" : ""}`}
            onClick={() => setActiveTab("activities")}
          >
            <FaCalendarAlt className="icon" />
            <span>Out Of Class Activities</span>
          </li>
          <li
            className={`nav-item ${activeTab === "internship" ? "active" : ""}`}
            onClick={() => setActiveTab("internship")}
          >
            <FaBriefcase className="icon" />
            <span>Startup Immersion</span>
          </li>
          <li
            className={`nav-item ${activeTab === "venture" ? "active" : ""}`}
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
  );
};

export default ProgramOverview;
