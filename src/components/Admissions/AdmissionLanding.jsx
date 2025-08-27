import React from "react";
import "../../styles/Admissions/admissionslanding.css";

/* Same breadcrumb used elsewhere */
import Breadcrumb from "../../components/Header/Breadcrumbs";

/* People tiles */
import img1 from "../../assets/home-images/venturedu-for/graduate.svg";
import img2 from "../../assets/home-images/venturedu-for/careertransitioner.svg";
import img3 from "../../assets/home-images/venturedu-for/nonbussinesspro.svg";
import img4 from "../../assets/home-images/venturedu-for/legacybuilder.svg";

/* Decorative vectors */
import vector2 from "../../assets/program-images/vector1.png";
import vector1 from "../../assets/program-images/vector2.png";

const cards = [
  { title: "", img: img1 },
  { title: "", img: img2 },
  { title: "", img: img3 },
  { title: "", img: img4, cut: true },
];

export default function AdmissionsLanding() {
  return (
    <section className="admissions-landing">
      {/* Hero / header (kept as <div> to avoid conflicts) */}
      <div className="ad-head" role="region" aria-label="Admissions hero">
        <div>
          <Breadcrumb
            links={[
              { label: "Home", url: "/" },
              { label: "Admissions", url: "/admissions" },
            ]}
            currentPath={window.location.pathname}
          />{" "}
        </div>

        <div className="ad-top">
          <h1 className="ad-title">Admission</h1>
          <p className="ad-sub">
            VenturEdu is designed for driven individuals at various stages of
            their entrepreneurial journey.
          </p>
        </div>

        <img className="ad-v v1" src={vector1} alt="" loading="lazy" />
        <img className="ad-v v2" src={vector2} alt="" loading="lazy" />
      </div>

      {/* 2×2 Cards grid */}
      <div className="ad-grid">
        {cards.map((c, i) => (
          <article className={`ad-card ${c.cut ? "cut-corner" : ""}`} key={i}>
            <img src={c.img} alt={c.title} loading="lazy" />
            <div className="ad-label">{c.title}</div>
          </article>
        ))}
      </div>

      {/* Bottom copy section */}
      <section className="ad-bottom">
        <div className="ad-bottom-wrap">
          {/* left column intentionally empty to mirror the layout */}
          <div aria-hidden="true" />
          <div className="ad-bottom-copy">
            <p>
              Our participants are driven individuals from diverse fields such
              as business, technology, or the arts. We value ambition,
              creativity, and problem-solving skills in both fresh graduates and
              experienced professionals.
            </p>
            <p>
              If you’re passionate, driven, and ready to build something
              impactful, VenturEdu provides the roadmap, resources, and support
              to make it happen.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
