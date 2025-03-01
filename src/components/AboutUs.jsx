import React, { useEffect, useRef, useState } from "react";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";
import { GiBrickWall } from "react-icons/gi";
import "../styles/aboutus.css";

function AboutUs() {
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);
  // headingKey is used to force re-render the heading so animations re-trigger
  const [headingKey, setHeadingKey] = useState(Date.now());

  const headingText =
    "We help By empowering aspiring entrepreneurs to turn ideas into scalable ventures through: ";
  const words = headingText.split(" ");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Whenever the section enters the viewport, set inView to true and update the heading key.
          if (entry.isIntersecting) {
            setInView(true);
            setHeadingKey(Date.now());
          } else {
            setInView(false);
          }
        });
      },
      { threshold: 0.2 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div className="experience-section" id="about-section" ref={containerRef}>
      <h1
        key={headingKey}
        className={`experience-heading ${inView ? "animate-heading" : ""}`}
      >
        {words.map((word, index) => (
          <span key={index} style={{ animationDelay: `${index * 0.2}s` }}>
            {word}{" "}
          </span>
        ))}
      </h1>
      <div className={`experience-box-container ${inView ? "in-view" : ""}`}>
        <div className="experience-box">
          <div className="icon-and-heading">
            <h2 className="box-heading">Experience</h2>
            <FaClockRotateLeft style={{ fontSize: "50px" }} />
          </div>
          <p className="box-text">
            Providing 6 month long focused startup exposure
          </p>
        </div>
        <div className="experience-box">
          <div className="icon-and-heading">
            <h2 className="box-heading">Learn</h2>
            <FaGraduationCap style={{ fontSize: "50px" }} />
          </div>
          <p className="box-text">
            Empowering founders with the necessary skills to build a founder
            mindset
          </p>
        </div>
        <div className="experience-box">
          <div className="icon-and-heading">
            <h2 className="box-heading">Build</h2>
            <GiBrickWall style={{ fontSize: "50px" }} />
          </div>
          <p className="box-text">
            Converting your idea into reality by building your own venture
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
