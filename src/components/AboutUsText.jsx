import React, { useEffect, useRef, useState } from "react";
import aboutusImage from "../../src/assets/about-us-images/about-us.jpg";
import "../styles/aboutustext.css";

const cardsData = [
  {
    title: "Who We Are",
    text: "VenturEdu is the school for dreamers who are also believers.",
  },
  {
    title: "Our Mission",
    text: "It is a launchpad for entrepreneurs, both aspiring and semi–experienced, ready to challenge the status quo.",
  },
  {
    title: "Our Approach",
    text: "Here, students are immersed in real–world startup ecosystems, mentored by those who have scaled billion–dollar ventures, and equipped with tools to build businesses that disrupt and endure. We blend experiential learning with global exposure to create leaders ready to take risks, learn from failure, and shape the future of industries.",
  },
  {
    title: "Join Us",
    text: "Whether you are a student, a startup founder, or a professional transitioning into entrepreneurship, VenturEdu offers a platform to refine your craft, scale your vision, and launch your journey.",
  },
];

function AboutUsCardsDynamic() {
  const containerRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState([]);
  const [scrollPos, setScrollPos] = useState(0);

  // Intersection Observer to reveal each card on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.getAttribute("data-index");
          if (entry.isIntersecting) {
            setVisibleCards((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          }
        });
      },
      { threshold: 0.3 }
    );

    const cards = containerRef.current.querySelectorAll(".card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  // Listen to scroll events for dynamic background transitions
  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Compute dynamic background (using only the background image here)
  const backgroundStyle = {
    backgroundImage: `url(${aboutusImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    transition: "background 0.5s ease",
  };

  return (
    <div
      className="aboutus-cards-dynamic-page"
      id="about-section"
      ref={containerRef}
      style={backgroundStyle}
    >
      <h1 className="aboutus-cards-dynamic-heading">About VenturEdu</h1>
      <div className="aboutus-cards-dynamic-container">
        {cardsData.map((card, index) => (
          <div
            key={index}
            data-index={index}
            className={`card ${
              visibleCards.includes(index.toString()) ? "visible" : ""
            }`}
          >
            <h2 className="card-title">{card.title}</h2>
            <p className="card-text">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUsCardsDynamic;
