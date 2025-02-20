import React, { useEffect, useRef } from "react";
import image1 from "../../src/assets/advisory-images/image-1.png";
import image2 from "../../src/assets/advisory-images/image-3.png";
import image3 from "../../src/assets/advisory-images/image-2.png";
import image4 from "../../src/assets/advisory-images/image-4.png";
import "../styles/founderfaculty.css";

const facultyData = [
  { name: "Pooja Mehta", designation: "Founder and CEO, SparksCube" },
  { name: "Rahul Sharma", designation: "CTO, InnovateX" },
  { name: "Anita Desai", designation: "Head of Marketing, BrightWave" },
  { name: "Ashwini Ahuja", designation: "CPO, TechEra Solutions" },
];

function FounderFaculty() {
  const boxesRef = useRef([]);

  // Helper: add each card element to the boxesRef array
  const addToRefs = (el) => {
    if (el && !boxesRef.current.includes(el)) {
      boxesRef.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Use a lower threshold so the card reveals sooner
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-in");
          } else {
            entry.target.classList.remove("slide-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    boxesRef.current.forEach((box) => {
      if (box) observer.observe(box);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="founder-faculty-background">
      {/* New curriculum heading */}
      <div className="curriculum-heading">
        Our curriculum is built and delivered by those who have walked the talk
        — renowned founders, seasoned investors, and visionary academics.
      </div>
      {/* Founder Faculty heading */}
      <div className="founder-faculty-heading moved-up">Venture builders</div>
      <div className="founder-faculty-container with-gap">
        {facultyData.map((faculty, index) => (
          <div key={index} className="faculty-box" ref={addToRefs}>
            <img
              src={
                index === 0
                  ? image1
                  : index === 1
                  ? image2
                  : index === 2
                  ? image3
                  : image4
              }
              alt={`Faculty ${index + 1}`}
              className="faculty-image"
            />
            <p className="faculty-name">{faculty.name}</p>
            <p className="faculty-title">{faculty.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FounderFaculty;
