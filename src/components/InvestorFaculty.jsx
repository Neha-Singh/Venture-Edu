import React, { useEffect, useRef } from "react";
import "../styles/founderfaculty.css";

const facultyData = [
  { name: "Arjun Rao", designation: "Founder & CEO", company: "SparkCube" },
  { name: "Pooja Mehta", designation: "Co-Founder", company: "TechNest" },
  { name: "Prayag Sharma", designation: "Founder", company: "InnoWave" },
  { name: "Rohan Kapoor", designation: "CEO", company: "NextGen Labs" },
  {
    name: "Aditi Joshi",
    designation: "Founder & CTO",
    company: "Bright Minds",
  },
  {
    name: "Karan Patel",
    designation: "Managing Director",
    company: "InnovateX",
  },
  { name: "Sneha Verma", designation: "Founder", company: "GreenFuture" },
  { name: "Vikram Desai", designation: "CEO", company: "Quantum Leap" },
];

const InvestorFaculty = () => {
  const boxesRef = useRef([]);

  // Add each box element to the ref array
  const addToRefs = (el) => {
    if (el && !boxesRef.current.includes(el)) {
      boxesRef.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When the box is at least 30% visible, add "slide-in"
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-in");
          } else {
            entry.target.classList.remove("slide-in");
          }
        });
      },
      { threshold: 0.3 }
    );

    boxesRef.current.forEach((box) => {
      if (box) observer.observe(box);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="founder-faculty-background">
      <div className="founder-faculty-heading moved-up">Investor Faculty</div>
      <div className="founder-faculty-container with-gap">
        {facultyData.map((faculty, index) => (
          <div key={index} className="faculty-box smaller-box" ref={addToRefs}>
            <img
              src={require(`../../src/assets/founder-images/image-${
                index + 1
              }.jpg`)}
              alt={`Faculty ${index + 1}`}
              className="faculty-image"
            />
            <p className="faculty-name">{faculty.name}</p>
            <p className="faculty-title">
              {faculty.designation}, {faculty.company}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestorFaculty;
