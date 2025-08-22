// components/YourJourney/FeaturesGrid.jsx
import React from "react";
import "../../styles/Home/yourjourney-features.css";

export default function YourJourney({ items = [] }) {
  return (
    <section className="yj-features">
      {items.map((f, i) => (
        <div key={i} className="yj-feature-card">
          <img src={f.icon} alt="" className="yj-feature-icon" />
          <h3 className="yj-feature-title">{f.title}</h3>
          <p className="yj-feature-desc">{f.desc}</p>
        </div>
      ))}
    </section>
  );
}
