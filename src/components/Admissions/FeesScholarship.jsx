import React from "react";
import "../../styles/Admissions/admissionsfees.css";

export default function FeesScholarship() {
  return (
    <section className="ad-fees">
      <div className="ad-fees-wrap">
        {/* Left — Blue card with cut corner */}
        <div className="ad-fee-card fee-blue">
          <h3 className="fee-heading">
            <span>Fees &amp;</span>
            <span>Scholarship</span>
          </h3>

          <div className="fee-amount">₹29,50,000 (Including GST)</div>
          <p className="fee-caption">
            for the entire 14-month PGP in
            <br /> Entrepreneurship course
          </p>
        </div>
        {/* 
        <div className="ad-fee-card fee-white">
          <h3 className="sch-title">Scholarship</h3>

          <p className="sch-p">
            VenturEdu is committed to making venture building knowledge
            accessible to top talent.
          </p>

          <ul className="sch-list">
            <li>
              We offer a 100% fee refund in the form of funding into their
              registered company bank account for the top 10% participants,
              basis rating.
            </li>
            <li>
              We also offer partial refund in the form of funding for the next
              20% participants, based on rating.
            </li>
          </ul>

          <p className="sch-p">
            Rating is a function of performance on internal assessments, demo
            days, and idea potential. Funding is finalized during the last
            module of the program.
          </p>
        </div> */}
      </div>
    </section>
  );
}
