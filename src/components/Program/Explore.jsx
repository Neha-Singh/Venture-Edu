import React, { useState } from "react";
import Curriculum from "./Curriculum";
import Program from "./Program";
import GlobalImmersion from "./GlobalImmersion";
import "../../styles/Program/explore.css";

const Explore = () => {
  const [activeTab, setActiveTab] = useState("curriculum");

  return (
    <section className="explore">
      <div className="explore__inner">
        {/* Section heading */}
        <h2 className="explore__heading">Ready to explore?</h2>

        {/* Tabs */}
        <div className="explore__tabs">
          <button
            className={`explore__tab ${
              activeTab === "curriculum" ? "explore__tab--active" : ""
            }`}
            onClick={() => setActiveTab("curriculum")}
          >
            Curriculum
          </button>
          <button
            className={`explore__tab ${
              activeTab === "program" ? "explore__tab--active" : ""
            }`}
            onClick={() => setActiveTab("program")}
          >
            Program Phases
          </button>
          <button
            className={`explore__tab ${
              activeTab === "global" ? "explore__tab--active" : ""
            }`}
            onClick={() => setActiveTab("global")}
          >
            Global Immersion
          </button>
        </div>

        {/* Content for the active tab */}
        <div className="explore__content">
          {activeTab === "curriculum" && <Curriculum />}
          {activeTab === "program" && <Program />}
          {activeTab === "global" && <GlobalImmersion />}
        </div>
      </div>
    </section>
  );
};

export default Explore;
