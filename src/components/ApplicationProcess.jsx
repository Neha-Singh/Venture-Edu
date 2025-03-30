import React, { useEffect, useRef, useState } from "react";
import "../styles/applicationprocess.css";
import step1 from "../../src/assets/illustrations/timeline-illustrations/step1.jpg";
import step2 from "../../src/assets/illustrations/timeline-illustrations/step2.jpg";
import step3 from "../../src/assets/illustrations/timeline-illustrations/step3.jpg";
import step4 from "../../src/assets/illustrations/timeline-illustrations/step4.jpg";
import step5 from "../../src/assets/illustrations/timeline-illustrations/step5.jpg";
import step6 from "../../src/assets/illustrations/timeline-illustrations/step6.jpg";

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const steps = [
  {
    title: (
      <span>
        Join our wait list via{" "}
        <a
          onClick={() => scrollToSection("application-form")}
          className="ghost-button-inline"
        >
          Apply
        </a>
      </span>
    ),
    description: "",
    illustration: step1,
  },
  {
    title: "Attend Weekly Orientation",
    description: "",
    illustration: step2,
  },
  {
    title: "Use directions from orientation to fill application form",
    description: "",
    illustration: step3,
  },
  {
    title: "Admissions committee conducts fitness assessment",
    description: "",
    illustration: step4,
  },
  {
    title: "Shortlisted candidates invited for in person interview",
    description: "",
    illustration: step5,
  },
  {
    title: "Invitation to join the program",
    description: "",
    illustration: step6,
  },
];

const TimelineItem = ({
  alignment,
  stepNumber,
  title,
  description,
  illustration,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observerInstance.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    if (itemRef.current) {
      observer.observe(itemRef.current);
    }
    return () => {
      if (itemRef.current) observer.unobserve(itemRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (itemRef.current) {
      const contentDiv = itemRef.current.querySelector(".timeline-content");
      if (contentDiv) {
        contentDiv.classList.remove("active");
        void contentDiv.offsetWidth;
        contentDiv.classList.add("active");
      }
    }
  };

  return (
    <div
      ref={itemRef}
      className={`timeline-item ${alignment}`}
      onMouseEnter={handleMouseEnter}
    >
      <div className={`timeline-content ${isVisible ? "active" : ""}`}>
        <span className="timeline-step">Step {stepNumber}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        {/* Mobile illustration: visible only on mobile via CSS */}
        <div className="mobile-illustration">
          <img
            src={illustration}
            alt={`Step ${stepNumber} illustration`}
            className="timeline-illustration-icon"
          />
        </div>
      </div>
      {/* Desktop illustration: visible on desktop/tablet */}
      <div className="timeline-icon desktop-illustration">
        <img
          src={illustration}
          alt={`Step ${stepNumber} illustration`}
          className="timeline-illustration-icon"
        />
      </div>
    </div>
  );
};

const ApplicationProcessTimeline = () => {
  return (
    <div className="timeline-page">
      <div className="timeline-container">
        <h1 className="program-heading" id="application-process">
          Application Process
        </h1>
        <h2 className="timeline-header">
          Less than 1% of the candidates are selected for the program
        </h2>
        <div className="timeline">
          {steps.map((step, index) => {
            const alignment = index % 2 === 0 ? "left" : "right";
            return (
              <TimelineItem
                key={index}
                alignment={alignment}
                stepNumber={index + 1}
                title={step.title}
                description={step.description}
                illustration={step.illustration}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ApplicationProcessTimeline;
