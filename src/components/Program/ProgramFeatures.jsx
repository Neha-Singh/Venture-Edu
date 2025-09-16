// ProgramFeatures.jsx (new)
import React, { useEffect, useRef, useState } from "react";
import "../../styles/Program/programfeatures.css";

/** Program features content */
const FEATURES = [
  {
    q: "Rigorous Business Education — Learn from globally recognised academicians",
    a: [
      "Get exposure to business theories and concepts",
      "Designed to give a knowledge base equivalent to formal B-schools",
    ],
  },
  {
    q: "Capital Access — Raise whenever you are ready (3 to 5 pitch days every month)",
    a: [
      "Top 30% of the cohort will get a preferential investment offer from our in-house accelerator fund",
      "Beyond our fund, get face time with 100+ VCs during the program; we curate 3–5 pitch days every month",
      "You can raise from the in-house accelerator, our Investment partners, or both",
    ],
  },
  {
    q: "A paid 2-month start-up immersion — Hands-on venture building experience",
    a: [
      "Work directly with founders (who have raised at least Series A) on problem statements sourced from them",
      "Alternate track to step into full-time, high-paying Founder’s Office roles—measured by results, not a 30-minute interview",
    ],
  },
  {
    q: "Growth Lab — Fundraising is only a start, expansion comes next",
    a: [
      "Get 24/7 free access to our in-house production studio and marketing agency",
      "Absolutely free access to design, content, and campaign execution",
      "Everything you need to build and launch without bottlenecks",
      "A growth agency built into the campus to help you scale faster",
    ],
  },
  {
    q: "Strategy Capsule — 1:1 access to Fortune 500 advisors and sector specialists",
    a: [
      "Develop GTM with MBB consultants",
      "Learn from thematic experts who know your industry’s nuances",
      "Navigate financial/legal compliances with in-house CAs and lawyers",
      "Work with VCs to plan your fundraise(s) and exits",
    ],
  },
  {
    q: "Flexible Attendance — Spend more time building",
    a: [
      "Option to reduce classroom time and focus more on venture-building, especially after raising funds",
      "Flexibility to test out of subjects you already know and earn credits upfront",
    ],
  },
  {
    q: "Global learning",
    a: [
      "4-week immersion in Dubai focused on building an international investor network",
      "Mandatory bootcamps with global industry leaders, followed by graded assignments",
    ],
  },
];

/* Single accordion row with smooth height animation */
function Row({ i, q, a, open, onToggle }) {
  const wrapRef = useRef(null);
  const [h, setH] = useState(0);

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
    <article className={`pf-item ${open ? "open" : ""}`} role="listitem">
      <button
        type="button"
        className="pf-q"
        aria-expanded={open}
        aria-controls={`pf-a-${i}`}
        onClick={onToggle}
      >
        <span className="pf-q-text">{q}</span>
        <span className="pf-toggle" aria-hidden="true" />
      </button>

      <div
        id={`pf-a-${i}`}
        className="pf-a"
        style={{ ["--h"]: open ? `${h}px` : "0px" }}
      >
        <div ref={wrapRef} className="pf-a-inner">
          <ul className="pf-ul">
            {a.map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default function ProgramFeatures() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="pf">
      {/* rail-to-rail, enclosed box */}
      <div className="pf-wrap">
        <div className="pf-left">
          <h2 className="pf-title">Program Features</h2>
        </div>

        <div className="pf-right">
          <div className="pf-list" role="list">
            {FEATURES.map((f, i) => (
              <Row
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
