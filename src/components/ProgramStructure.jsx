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
    text: `Traditional business pillars along with founder’s toolkit offered through founder mode and mental model. <strong class="sprint-bold-heading">Foundation building:</strong> Gain a well-rounded understanding of business functions by working on real-world case studies, hands-on projects, and live start-up challenges.<br><strong class="sprint-bold-heading">Founder’s toolkit:</strong> Enable founder mode and mental models and help develop an entrepreneurial mindset by adopting first-principles thinking, rapid experimentation, and resilience in problem-solving.`,
    illustration: illustration1,
  },
  {
    heading: "Immersion",
    duration: "Month 7 – 8",
    text: `Work hands-on with startups while starting BYOV. <strong class="sprint-bold-heading">Startup immersion:</strong> Work with the founding team at early-stage startups to solve real challenges and observe scaling strategies.<br><strong class="sprint-bold-heading">BYOV (Build Your Own Venture):</strong> Start developing a rough business framework and validating ideas supported by exposure through the founder’s toolkit.`,
    illustration: illustration2,
  },
  {
    heading: "Validation",
    duration: "Month 9 – 10",
    text: `Transition into launching and refining your venture. <strong class="sprint-bold-heading">User insights:</strong> Engage with customers and refine your product based on their feedback.<br><strong class="sprint-bold-heading">Market fit:</strong> Achieve real revenue targets through various activities like drop shipping challenges.<br><strong class="sprint-bold-heading">Mentor support:</strong> Refine your pitch and business model through dedicated mentor sessions.`,
    illustration: illustration3,
  },
  {
    heading: "Investor readiness",
    duration: "Month 11 – 14",
    text: `Build and refine the venture for investment and scaling. <strong class="sprint-bold-heading">Demo day:</strong> Prepare investor-ready decks and pitch to investors.`,
    illustration: illustration4,
  },
];

function ProgramStructure() {
  const [activeSprint, setActiveSprint] = useState(0);
  const [animate, setAnimate] = useState(false);
  const detailsRef = useRef(null);

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
      if (detailsRef.current) observer.unobserve(detailsRef.current);
    };
  }, []);

  const handleHover = (index) => {
    if (index !== activeSprint && detailsRef.current) {
      setActiveSprint(index);
      setAnimate(false);
      void detailsRef.current.offsetWidth;
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
        <div
          className={`sprint-content ${activeSprint === 0 ? "sprint-one" : ""}`}
        >
          <div className="sprint-text">
            <h2 className="sprint-heading">
              {sprintData[activeSprint].heading}
            </h2>
            <p className="sprint-duration">
              {sprintData[activeSprint].duration}
            </p>
            <p
              className="sprint-description"
              dangerouslySetInnerHTML={{
                __html: sprintData[activeSprint].text,
              }}
            />
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
