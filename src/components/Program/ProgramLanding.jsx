import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Admissions/admissionsprocess.css";

import bannerImg from "../../assets/Admissions/banner.png";
import rightArrow from "../../assets/header-images/rightarrow.svg"; // ✅ updated arrow

import icon1 from "../../assets/Admissions/applicationform.svg";
import icon2 from "../../assets/Admissions/checklist.svg";
import icon3 from "../../assets/Admissions/clipboard.svg";
import icon4 from "../../assets/Admissions/notification.svg";
import arrowRight from "../../assets/Admissions/arrow-right.svg";

const STEPS = [
  { icon: icon1, label: "Application Form" },
  {
    icon: icon2,
    label: "Review of Competitive\nTest Scores (CAT / GMAT / GRE)",
  },
  { icon: icon3, label: "VenturEdu Entrance Test" },
  { icon: icon4, label: "Personal Interview" },
];

export default function AdmissionsProcess() {
  const navigate = useNavigate();

  return (
    <section className="ad-proc">
      {/* ===== Banner ===== */}
      <div className="adproc-banner">
        <img
          src={bannerImg}
          alt="Admissions banner"
          className="adproc-banner-img"
        />
        <div className="adproc-banner-content">
          <h1 className="adproc-banner-title">
            Take the first step towards becoming a VenturEdu founder
          </h1>
          <button
            className="adproc-banner-cta"
            type="button"
            onClick={() => navigate("/contactus")}
          >
            Start your application
            <img src={rightArrow} alt="" className="adproc-banner-arrow" />
          </button>
        </div>
      </div>

      {/* Headline + intro */}
      <div className="adproc-head">
        <h2 className="adproc-title">Admission Process</h2>
        <p className="adproc-intro">
          VenturEdu follows a holistic evaluation process for PGP admission that
          considers multiple factors beyond just test scores.
        </p>
      </div>

      {/* Four steps row */}
      <div className="adproc-steps" role="list">
        {STEPS.map((s, i) => (
          <div className="adproc-step" role="listitem" key={i}>
            <img className="adproc-icon" src={s.icon} alt="" loading="lazy" />
            <h4 className="adproc-step-label">
              {s.label.split("\n").map((ln, k) => (
                <span key={k} className="line">
                  {ln}
                </span>
              ))}
            </h4>

            {/* arrow between steps (except after the last) */}
            {i < STEPS.length - 1 && (
              <img
                className="adproc-arrow"
                src={arrowRight}
                alt=""
                aria-hidden="true"
              />
            )}
          </div>
        ))}
      </div>

      {/* Details row */}
      <div className="adproc-details">
        <div className="adproc-col">
          <h5>Entrance Test</h5>
          <ul>
            <li>
              The VenturEdu Entrance Test is uniquely crafted to identify
              candidates with entrepreneurial instincts and real-world
              decision-making skills.
            </li>
            <li>
              It is an MCQ-based assessment designed to evaluate critical
              thinking and problem-solving skills, logical reasoning and
              analytical ability, and business acumen based on real-world
              start-up mental models.
            </li>
          </ul>
        </div>

        <div className="adproc-col">
          <h5>Interview</h5>
          <ul>
            <li>
              The interview process is designed to assess your problem-solving
              abilities, critical thinking, real-world experiences that
              demonstrate initiative and leadership, and your vision for the
              future.
            </li>
            <li>
              Expect case-based discussions, behavioural questions, and
              situational problem-solving scenarios.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
