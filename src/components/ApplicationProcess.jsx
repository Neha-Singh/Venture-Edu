import React, { useEffect, useRef, useState } from "react";
import "../styles/applicationprocess.css";
import {
  FaPaperPlane,
  FaChalkboardTeacher,
  FaRegFileAlt,
  FaHeartbeat,
  FaComments,
  FaCheckCircle,
} from "react-icons/fa";

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
    description:
      "Submit your application to join our wait list and get started with our process.",
    icon: <FaPaperPlane />,
  },
  {
    title: "Attend Weekly Orientation",
    description:
      "Join our weekly orientation sessions to understand the program and its requirements.",
    icon: <FaChalkboardTeacher />,
  },
  {
    title: "Use directions from orientation to fill application form",
    description:
      "Follow the guidelines provided during orientation to complete your application form accurately.",
    icon: <FaRegFileAlt />,
  },
  {
    title: "Admission committee conducts fitness assessment",
    description:
      "Our admissions committee evaluates your fitness through a comprehensive assessment.",
    icon: <FaHeartbeat />,
  },
  {
    title: "Shortlisted candidates invited in person interviews",
    description:
      "If you are shortlisted, you will be invited for an in-person interview with our team.",
    icon: <FaComments />,
  },
  {
    title: "Final invitation to join program",
    description:
      "Successful candidates will receive a final invitation to join our program.",
    icon: <FaCheckCircle />,
  },
];

/**
 * TimelineItem Component
 * Uses IntersectionObserver to add an "active" class
 * when the item scrolls into view.
 */
const TimelineItem = ({ alignment, stepNumber, title, description, icon }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Optionally, unobserve after the item is visible
            observerInstance.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3, // Adjust threshold as needed
      }
    );
    if (itemRef.current) {
      observer.observe(itemRef.current);
    }
    return () => {
      if (itemRef.current) observer.unobserve(itemRef.current);
    };
  }, []);

  return (
    <div ref={itemRef} className={`timeline-item ${alignment}`}>
      <div className={`timeline-content ${isVisible ? "active" : ""}`}>
        <span className="timeline-step">Step {stepNumber}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="timeline-icon">{icon}</div>
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
          We are highly selective and only &lt;1% of the candidates are selected
          for the program
        </h2>
        <div className="timeline">
          {steps.map((step, index) => {
            // Even-indexed items: content on the left; odd-indexed items: content on the right.
            const alignment = index % 2 === 0 ? "left" : "right";
            return (
              <TimelineItem
                key={index}
                alignment={alignment}
                stepNumber={index + 1}
                title={step.title}
                description={step.description}
                icon={step.icon}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ApplicationProcessTimeline;
