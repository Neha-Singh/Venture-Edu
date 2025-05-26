import React from "react";
import "../styles/applicationprocess.css";

import step1 from "../../src/assets/illustrations/timeline-illustrations/step1.jpg";
import step2 from "../../src/assets/illustrations/timeline-illustrations/step2.jpg";
import step3 from "../../src/assets/illustrations/timeline-illustrations/step3.jpg";
import step4 from "../../src/assets/illustrations/timeline-illustrations/step4.jpg";
import step5 from "../../src/assets/illustrations/timeline-illustrations/step5.jpg";
import step6 from "../../src/assets/illustrations/timeline-illustrations/step6.jpg";

const steps = [
  {
    title: (
      <span>
        Join our wait list via
        <br />
        <a href="#application-form" className="ghost-button-inline">
          Apply
        </a>
      </span>
    ),
    illustration: step1,
  },
  { title: "Attend Weekly Orientation", illustration: step2 },
  { title: "Fill out the application form", illustration: step3 },
  {
    title: "Admissions committee fitness assessment",
    illustration: step4,
  },
  {
    title: "In-person interview for shortlisted candidates",
    illustration: step5,
  },
  { title: "Invitation to join the program", illustration: step6 },
];

export default function ApplicationProcess() {
  return (
    <div className="horizontal-timeline-page">
      <h1 className="program-heading" id="application-process">
        Application Process
      </h1>
      <h2 className="timeline-header">
        Less than 1% of the candidates are selected for the program
      </h2>

      <div className="timeline-container">
        {steps.map((step, i) => (
          <div key={i} className="timeline-item">
            <div className="timeline-icon-wrapper">
              <img
                src={step.illustration}
                alt={`Step ${i + 1}`}
                className="timeline-icon"
              />
              <span className="timeline-step">Step {i + 1}</span>
            </div>
            <h3 className="timeline-title">{step.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
