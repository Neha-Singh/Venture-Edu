// src/components/AboutUs/MentorSection.jsx
import React from "react";
import "../../styles/AboutUs/mentorsection.css";

import bgVector from "../../assets/about-us-images/advisorysection/backgroundvector.png";
import decor1 from "../../assets/about-us-images/advisorysection/decorativevector1.png";
import decor2 from "../../assets/about-us-images/advisorysection/decorativevector2.png";
import decor3 from "../../assets/about-us-images/advisorysection/decorativevector3.png";
import decor4 from "../../assets/about-us-images/advisorysection/decorativevector4.png";
import overlap from "../../assets/about-us-images/advisorysection/overlappingbackgroundvector.png";
import linkedinIcon from "../../assets/about-us-images/advisorysection/linkedInvector.png";
import img4 from "../../assets/about-us-images/advisorysection/Amit.png";
import img2 from "../../assets/about-us-images/advisorysection/Sorabh.png";
import img3 from "../../assets/about-us-images/advisorysection/Vimal.png";
import img1 from "../../assets/about-us-images/advisorysection/Aditya.png";

const mentors = [
  {
    name: "Aditya Vikram Jain",
    bio: [
      "Executive Director & Global Head of Research, Boston Consulting Group (BCG)",
      "25+ years of experience incubating and scaling global businesses, leading diverse teams",
      "Expert in large-scale change management, strategic agenda and operational excellence",
    ],
    img: img1,
    linkedin: "https://www.linkedin.com/in/adityavjain/",
  },
  {
    name: "Sorabh Agarwal",
    bio: [
      "Investor in over 100 startups",
      "Founder at AngelBay",
      "20+ years of experience in M&A and private markets",
    ],
    img: img2,
    linkedin: "https://www.linkedin.com/in/sorabh-agarwal-52277a1/",
  },
  {
    name: "Vimal Kumar",
    bio: [
      "25+ years of experience in Data, Analytics, and Digital Transformation",
      "Executive Director, Global Head of Reconciliation Utility (firm-wide) at JPMorgan Chase & Co.x",
      "Expert in AI-driven strategy, transformation, and data governance",
    ],
    img: img3,
    linkedin: "https://www.linkedin.com/in/vimalgoyal/",
  },
  {
    name: "Amit Dharod",
    bio: [
      "Partner at Shree Balaji Ayurveda Bhavan",
      "A 2-time founder with 10 years of experience in hospitality, food, and Ayurveda",
    ],
    img: img4,
    linkedin: "https://www.linkedin.com/in/amit-dharod-b7698b5/",
  },
];

const MentorSection = () => (
  <section className="advisory">
    {/* background vector, header & decorations */}
    <img src={bgVector} alt="" className="advisory__bg-vector" loading="lazy" />
    <div className="advisory__header">
      <h2 className="advisory__title">
        Advisory
        <br />
        Board
      </h2>
      <p className="advisory__subtitle">
        We are backed by a distinguished group of Advisory Board who are an
        active part of our ecosystem, offering mentorship and invaluable
        insights to our student founders.
      </p>
      <img
        src={decor1}
        alt=""
        className="advisory__decor advisory__decor1"
        loading="lazy"
      />
      <img
        src={decor2}
        alt=""
        className="advisory__decor advisory__decor2"
        loading="lazy"
      />
      <img
        src={decor3}
        alt=""
        className="advisory__decor advisory__decor3"
        loading="lazy"
      />
      <img
        src={decor4}
        alt=""
        className="advisory__decor advisory__decor4"
        loading="lazy"
      />
    </div>

    {/* 2×4 mentor grid */}
    <div className="advisory__grid">
      {mentors.map((m, i) => (
        <div key={i} className="advisory__card">
          <img
            src={overlap}
            alt=""
            className="advisory__card-bg"
            loading="lazy"
          />
          <div className="advisory__card-content">
            <h3 className="advisory__card-name">{m.name}</h3>
            <div className="advisory__card-bio">
              <ul>
                {m.bio.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
            {m.linkedin && (
              <a
                className="advisory__card-social"
                href={m.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open LinkedIn profile of ${m.name}`}
              >
                <img src={linkedinIcon} alt="" loading="lazy" />
              </a>
            )}
          </div>
          <img
            src={m.img}
            alt={m.name}
            className="advisory__card-img"
            loading="lazy"
            decoding="async"
          />
        </div>
      ))}
    </div>
  </section>
);

export default MentorSection;
