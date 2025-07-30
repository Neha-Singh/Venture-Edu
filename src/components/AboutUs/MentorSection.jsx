// src/components/AboutUs/MentorSection.jsx
import React from "react";
import "../../styles/AboutUs/mentorsection.css";

import bgVector from "../../assets/about-us-images/advisorysection/backgroundvector.png";
import decor1 from "../../assets/about-us-images/advisorysection/decorativevector1.png";
import decor2 from "../../assets/about-us-images/advisorysection/decorativevector2.png";
import decor3 from "../../assets/about-us-images/advisorysection/decorativevector3.png";
import decor4 from "../../assets/about-us-images/advisorysection/decorativevector4.png";
import overlap from "../../assets/about-us-images/advisorysection/overlappingbackgroundvector.png";
import liIcon from "../../assets/about-us-images/advisorysection/linkedInvector.png";
import img1 from "../../assets/about-us-images/advisorysection/mentorimage1.png";
import img2 from "../../assets/about-us-images/advisorysection/mentorimage2.png";

const mentors = [
  {
    name: "Shashank Jaiswal",
    bio: [
      "Business Head at Bolt Earth",
      "25 years of experience in automotive, technology, and enterprise sales",
    ],
    img: img1,
  },
  {
    name: "Yugal Yadav",
    bio: [
      "Director at OakNorth Credit Intelligence",
      "15 years of experience in private consulting and risk management",
    ],
    img: img2,
  },
  {
    name: "Niyant Maru",
    bio: [
      "CFO of Vistara TATA SIA Airlines",
      "25 years of experience spanning hospitality, real estate, and aviation",
    ],
    img: img1,
  },
  {
    name: "Yaduraj Joshi",
    bio: [
      "Partner at Shree Balaji Ayurveda Bhavan",
      "A 2-time founder with 10 years of experience in hospitality, food, and Ayurveda",
    ],
    img: img2,
  },
  {
    name: "Manish Verma",
    bio: [
      "Co-founder & CEO at AlphaBeta Holdings",
      "25+ years of experience in retail banking and capital markets",
    ],
    img: img1,
  },
  {
    name: "Ashish Nayyar",
    bio: [
      "Co-founder & Head – India at OneWealth",
      "25 years of experience in private markets, M&A, and business consulting",
    ],
    img: img2,
  },
  {
    name: "Sameer Nayak",
    bio: [
      "Board member at Wasana Engineering and Nice Code Solutions",
      "5 years of experience in research and finance",
    ],
    img: img1,
  },
  {
    name: "Hemang Sheth",
    bio: [
      "Head of Risks at First Abu Dhabi Bank, Oman",
      "25 years of experience in credit, risk, and compliance management",
    ],
    img: img2,
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
            <ul className="advisory__card-bio">
              {m.bio.map((line, j) => (
                <li key={j}>{line}</li>
              ))}
            </ul>
            <img
              src={liIcon}
              alt="LinkedIn"
              className="advisory__card-linkedin"
              loading="lazy"
            />
          </div>
          <img
            src={m.img}
            alt={m.name}
            className="advisory__card-img"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  </section>
);

export default MentorSection;
