import React, { useState, memo } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Home/yourjourney.css";

import icon1 from "../../assets/home-images/yourjourney/icon1.svg";
import icon2 from "../../assets/home-images/yourjourney/icon2.svg";
import icon3 from "../../assets/home-images/yourjourney/icon3.svg";
import icon4 from "../../assets/home-images/yourjourney/icon4.svg";
import image1 from "../../assets/home-images/yourjourney/people-discussing.svg";
import bluevector from "../../assets/home-images/yourjourney/blue-vector.svg";
import greyvector from "../../assets/home-images/yourjourney/grey-vector.svg";
import trianglevector from "../../assets/home-images/yourjourney/triangle-vector.svg";
import chevrondownArrow from "../../assets/home-images/yourjourney/chevron-down.svg";
import chevronupArrow from "../../assets/home-images/yourjourney/chevron-up.svg";
import rightArrow from "../../assets/header-images/rightarrow.svg";

const features = [
  {
    icon: icon1,
    title: "Real-World Startup Immersion",
    desc: "Collaborate with active startups and experience the thrill of scaling a business firsthand.",
  },
  {
    icon: icon2,
    title: "The Founder Toolkit",
    desc: "Gain essential skills in strategy, leadership, marketing, and finance while being mentored by seasoned founders and investors.",
  },
  {
    icon: icon3,
    title: "Build your Own Venture (BYOV)",
    desc: "Launch, test, and refine your business idea with guidance from industry experts.",
  },
  {
    icon: icon4,
    title: "Unparalleled Funding Opportunity",
    desc: "Secure direct funds from VenturEdu and gain direct connections to our extensive network of angel investors and VCs.",
  },
];

const phases = [
  {
    phaseLabel: "Phase – Months 1–6",
    title: "Founder Toolkit",
    content:
      "You’ll start by getting a solid grip on the essentials—strategy, markets, storytelling,and leadership. Think of this as your startup bootcamp made to build confidence from the ground up.",
  },
  {
    phaseLabel: "Phase – Months 7–12",
    title: "Venture Immersion",
    content:
      "It’s time to get your hands dirty. Step into real startup environments, shadow experienced teams, tackle live problems, and see what it truly takes to grow a venture.",
  },
  {
    phaseLabel: "Phase – Months 13–18",
    title: "Idea Validation",
    content:
      "Got a business idea? Great. Now let’s pressure-test it. Talk to real customers, run quick experiments, and use feedback to sharpen your concept.",
  },
  {
    phaseLabel: "Phase – Months 19–24",
    title: "MVP & Investor Readiness",
    content:
      "This is where things get real. Build your MVP, polish your pitch, and get ready to face investors with confidence. When you step out, you won’t just have an idea—you’ll have momentum.",
  },
];

// Memoized image column to avoid unnecessary re-renders
const HeroImage = memo(function HeroImage() {
  return (
    <div className="hero-image">
      {/* Add intrinsic size to prevent layout shift; adjust to your actual asset if known */}
      <img
        src={image1}
        alt="Group discussing"
        width={720}
        height={640}
        loading="eager"
        decoding="async"
      />
    </div>
  );
});

export default function YourJourney() {
  const [openIndex, setOpenIndex] = useState(0);
  const toggle = (i) => setOpenIndex(openIndex === i ? -1 : i);

  const navigate = useNavigate();

  return (
    <div className="your-journey-page">
      {/* Top Features */}
      <section className="journey-features">
        <h2 className="features-heading">What sets us apart</h2>
        {features.map((f, i) => (
          <div key={i} className="feature-card">
            <img src={f.icon} alt={f.title} />
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Hero + Accordion */}
      <section className="journey-hero">
        {/* Upper Hero */}
        <div className="hero-top">
          <div className="hero-text">
            <span className="small">Your</span>
            <h2>Journey with VenturEdu</h2>
          </div>
          <button
            className="hero-button"
            type="button"
            onClick={() => navigate("/program")}
          >
            Explore the full program
            <img src={rightArrow} alt="arrow" />
          </button>

          {/* Decorative Vectors */}
          <img src={bluevector} alt="" className="vector blue" />
          <img src={greyvector} alt="" className="vector grey" />
        </div>

        {/* Lower Content */}
        <div className="journey-lower">
          <div className="accordion">
            {phases.map((p, i) => (
              <div
                key={i}
                className={`accordion-item ${openIndex === i ? "open" : ""}`}
              >
                <div className="title-bar" onClick={() => toggle(i)}>
                  <span className="index">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="phase-label">{p.phaseLabel}</span>
                  <h4>{p.title}</h4>
                  <img
                    src={openIndex === i ? chevronupArrow : chevrondownArrow}
                    alt={openIndex === i ? "collapse" : "expand"}
                    className="chevron-icon"
                  />
                </div>
                {/* Render content for CSS-driven animation */}
                <div className="content">
                  <p>{p.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right column image — now stable */}
          <HeroImage />
        </div>
      </section>
    </div>
  );
}
