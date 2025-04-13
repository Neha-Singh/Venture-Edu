import React, { useState } from "react";
import {
  FaBook,
  FaCalendarAlt,
  FaBriefcase,
  FaLightbulb,
} from "react-icons/fa";
import CurriculumPage from "./Curriculum"; // Adjust the import path as needed
import OutOfClassActivities from "./OutOfClassActivities";
import InternshipPage from "./InternshipPage";
import VenturePage from "./VenturePage";
import "../styles/programoverview.css";

const App = () => {
  // "curriculum" is active by default so that the Curriculum component renders on load.
  const [activeTab, setActiveTab] = useState("curriculum");

  return (
    <div className="container">
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
        {/* Additional components for other tabs can be rendered here conditionally */}
        {activeTab === "activities" && <OutOfClassActivities />}
        {/* Additional components for other tabs can be rendered here conditionally */}
        {activeTab === "internship" && <InternshipPage />}
        {/* Additional components for other tabs can be rendered here conditionally */}
        {activeTab === "venture" && <VenturePage />}
        {/* Additional components for other tabs can be rendered here conditionally */}
      </div>
    </div>
  );
};

export default App;
