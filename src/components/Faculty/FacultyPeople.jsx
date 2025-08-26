import React from "react";
import "../../styles/Faculty/facultypeople.css";

import img1 from "../../assets/about-us-images/advisorysection/Sorabh.png";
import img2 from "../../assets/about-us-images/advisorysection/Vimal.png";
import bgVector from "../../assets/about-us-images/advisorysection/backgroundvector.png";

const mentors = [
  { name: "Sorab Agarwal", photo: img1 },
  { name: "Amit Dharod", photo: img2 },
  { name: "Amit Dharod", photo: img2 },
  { name: "Sorab Agarwal", photo: img1 },
  { name: "Amit Dharod", photo: img2 },
  { name: "Amit Dharod", photo: img2 },
];

export default function AdvisoryGrid() {
  return (
    <section className="advisory-section">
      <div className="advisory-grid">
        {mentors.map((m, i) => (
          <article className="mentor-card" key={`${m.name}-${i}`}>
            {/* background vector */}
            <img
              src={bgVector}
              alt=""
              className="mentor-card__bg"
              loading="lazy"
            />

            {/* name */}
            <h3 className="mentor-card__name">{m.name}</h3>

            {/* person image */}
            <img
              src={m.photo}
              alt={m.name}
              className="mentor-card__photo"
              loading="lazy"
            />
          </article>
        ))}
      </div>
    </section>
  );
}
