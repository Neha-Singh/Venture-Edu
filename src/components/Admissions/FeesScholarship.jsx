import React from "react";
import "../../styles/Admissions/admissionsfees.css";

export default function FeesScholarship() {
  return (
    <section className="ad-fees">
      <div className="ad-fees-wrap">
        {/* Left — Blue card with cut corner */}
        <div className="ad-fee-card fee-blue">
          {/* Force the line break exactly as per design */}
          <h3 className="fee-heading">
            <span>Fees &amp;</span>
            <span>Scholarship</span>
          </h3>

          <div className="fee-amount">₹29,50,000</div>
          <p className="fee-caption">
            for the entire 14-month PGP in
            <br /> Entrepreneurship course
          </p>
        </div>

        {/* Right — White scholarship details */}
        <div className="ad-fee-card fee-white">
          <h3 className="sch-title">Scholarship</h3>
          <ul className="sch-list">
            <li>
              VenturEdu is committed to making quality education accessible to
              top talent.
            </li>
            <li>
              We offer a limited number of 100% scholarships for exceptional
              candidates who demonstrate outstanding merit, leadership, and
              entrepreneurial potential.
            </li>
            <li>
              We also offer partial scholarships for high-potential candidates
              based on merit and fitment.
            </li>
            <li>
              Scholarships are awarded immediately after the VenturEdu Entrance
              Test — before the interview stage — based on performance. We
              encourage applicants to apply early for the best chances of
              securing financial aid.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
