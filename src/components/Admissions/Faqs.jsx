import React, { useEffect, useRef, useState } from "react";
import "../../styles/Admissions/faqs.css";

const FAQS = [
  {
    q: "Is there a minimum GPA required for admission?",
    a: "We do not impose a minimum GPA for admission. While academic performance is considered, we review every application holistically, prioritizing entrepreneurial spirit, innovative thinking, and long–term vision over raw grades.",
  },
  {
    q: "Can I apply while still in college?",
    a: "Yes. You can apply in your final year, and admission can be aligned with your graduation timeline.",
  },
  {
    q: "Is there an age limit for admission?",
    a: "No. We evaluate motivation, readiness, and fit rather than age.",
  },
  {
    q: "How many years of work experience are required to apply?",
    a: "Work experience is not mandatory. We admit both fresh graduates and experienced professionals.",
  },
  {
    q: "Can applicants defer their admission for the next year?",
    a: "Deferral requests are reviewed on a case-by-case basis.",
  },
  {
    q: "Will candidates receive a degree upon completion?",
    a: "You complete a PGP program. Certification details are shared upon enrollment.",
  },
];

/** One FAQ item with smooth slide animation */
function FaqItem({ i, q, a, open, onToggle }) {
  const wrapRef = useRef(null);
  const [h, setH] = useState(0);

  // Measure the inner content height
  const measure = () => {
    if (wrapRef.current) setH(wrapRef.current.scrollHeight);
  };
  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <article className={`faq-item ${open ? "open" : ""}`} role="listitem">
      <button
        type="button"
        className="faq-q"
        aria-expanded={open}
        aria-controls={`faq-a-${i}`}
        onClick={onToggle}
      >
        <span className="faq-q-text">{q}</span>
        <span className="faq-toggle" aria-hidden="true" />
      </button>

      {/* Collapsible area: we animate max-height using a CSS var */}
      <div
        id={`faq-a-${i}`}
        className="faq-a"
        style={{ ["--h"]: open ? `${h}px` : "0px" }} // sets max-height
      >
        <div ref={wrapRef} className="faq-a-inner">
          <p>{a}</p>
        </div>
      </div>
    </article>
  );
}

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faqs">
      <div className="faqs-wrap">
        {/* Left title panel */}
        <div className="faqs-left">
          <h2 className="faqs-title">FAQs</h2>
        </div>

        {/* Right accordion panel */}
        <div className="faqs-right">
          <div className="faq-list" role="list">
            {FAQS.map((f, i) => (
              <FaqItem
                key={i}
                i={i}
                q={f.q}
                a={f.a}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
