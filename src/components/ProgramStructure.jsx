import React, { useState, useEffect, useRef } from "react";
import "../styles/programstructure.css";
import illustration1 from "../../src/assets/illustrations/program-structure-illustrations/illustration1.jpg";
import illustration2 from "../../src/assets/illustrations/program-structure-illustrations/illustration2.jpg";
import illustration3 from "../../src/assets/illustrations/program-structure-illustrations/illustration3.jpg";
import illustration4 from "../../src/assets/illustrations/program-structure-illustrations/illustration4.jpg";

const sprintData = [
  {
    heading: "Founder toolkit",
    duration: "Month 1 – 6",
    text: "Understanding fundamentals and exploring ideas for your venture. Provide participants with a solid foundation of basics needed to build a venture.",
    illustration: illustration1,
  },
  {
    heading: "Immersion",
    duration: "Month 7 – 8",
    text: "Work hands-on with growth stage startups while lightly exploring your venture idea. Develop practical skills and entrepreneurial insight by working directly with founders.",
    illustration: illustration2,
  },
  {
    heading: "Validation",
    duration: "Month 9 – 10",
    text: "Transition into refining and launching your venture. Build momentum for your venture through mentorship with user insights.",
    illustration: illustration3,
  },
  {
    heading: "Investor readiness",
    duration: "Month 11 – 12",
    text: "Refining your product through mentorship and preparing to launch your venture. Fully transition to launching your venture with structured support and resources.",
    illustration: illustration4,
  },
];

function ProgramStructure() {
  const [activeSprint, setActiveSprint] = useState(0);
  const [animate, setAnimate] = useState(false);
  const detailsRef = useRef(null);

  // Trigger animation when the sprint-details container comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );
    if (detailsRef.current) {
      observer.observe(detailsRef.current);
    }
    return () => {
      if (detailsRef.current) {
        observer.unobserve(detailsRef.current);
      }
    };
  }, []);

  // Hover handler that retriggers the animation
  const handleHover = (index) => {
    if (index !== activeSprint && detailsRef.current) {
      setActiveSprint(index);
      setAnimate(false);
      // Force a reflow
      void detailsRef.current.offsetWidth;
      // Re-add the animation class after a short delay
      setTimeout(() => setAnimate(true), 50);
    }
  };

  return (
    <div className="program-structure" id="program-structure">
      <h1 className="program-heading">Program Structure</h1>
      <div className="tabs">
        {sprintData.map((sprint, index) => (
          <button
            key={index}
            className={`tab ${activeSprint === index ? "active" : ""}`}
            onMouseEnter={() => handleHover(index)}
          >
            Sprint {index + 1}
          </button>
        ))}
      </div>
      <div
        ref={detailsRef}
        className={`sprint-details ${animate ? "animate-content" : ""}`}
      >
        <div className="sprint-content">
          <div className="sprint-text">
            <h2 className="sprint-heading">
              {sprintData[activeSprint].heading}
            </h2>
            <p className="sprint-duration">
              {sprintData[activeSprint].duration}
            </p>
            <p className="sprint-description">
              {sprintData[activeSprint].text}
            </p>
          </div>
          <div className="sprint-illustration">
            <img
              src={sprintData[activeSprint].illustration}
              alt={`Illustration for ${sprintData[activeSprint].heading}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgramStructure;
