// ApplicationProcess.jsx
import React, { useRef, useState, useEffect } from "react";
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
  const wrapperRef = useRef(null);
  const [pages, setPages] = useState(window.innerWidth < 769 ? 3 : 2);
  const [currentPage, setCurrentPage] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const wrap = wrapperRef.current;
    const calc = () => {
      const w = wrap.clientWidth;
      const scrollWidth = wrap.scrollWidth;
      const max = scrollWidth - w;
      // determine mobile vs desktop
      const isMobile = window.innerWidth < 769;
      const newPages = isMobile ? 3 : 2;
      setPages(newPages);
      setMaxScroll(max);
      // subdivide into (pages-1) segments
      const step = newPages > 1 ? max / (newPages - 1) : 0;
      const curr = step > 0 ? Math.round(wrap.scrollLeft / step) : 0;
      setCurrentPage(curr);
    };
    calc();
    window.addEventListener("resize", calc);
    wrap.addEventListener("scroll", calc, { passive: true });
    return () => {
      window.removeEventListener("resize", calc);
      wrap.removeEventListener("scroll", calc);
    };
  }, []);

  const goToPage = (idx) => {
    if (!wrapperRef.current) return;
    const step = pages > 1 ? maxScroll / (pages - 1) : 0;
    wrapperRef.current.scrollTo({
      left: step * idx,
      behavior: "smooth",
    });
  };

  return (
    <div className="horizontal-timeline-page">
      <h1 className="program-heading" id="application-process">
        Application Process
      </h1>
      <h2 className="timeline-header">
        Less than 1% of the candidates are selected for the program
      </h2>

      {/* scrollable timeline */}
      <div className="timeline-wrapper" ref={wrapperRef}>
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

      {/* pagination dots (2 on desktop, 3 on mobile) */}
      <div className="timeline-dots">
        {Array.from({ length: pages }, (_, idx) => (
          <span
            key={idx}
            className={"timeline-dot" + (currentPage === idx ? " active" : "")}
            onClick={() => goToPage(idx)}
          />
        ))}
      </div>
    </div>
  );
}
