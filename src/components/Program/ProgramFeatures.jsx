import React, { useEffect, useRef, useState } from "react";
import "../../styles/Program/rogramfeautures.css";

const FAQS = [
  {
    q: "Rigorous Business Education - Learn from globally recognised academicians",
    a: [
      "-Get exposure to business theories and concepts",
      "-Designed to give a knowledge base equivalent to formal B schools",
    ],
  },
  {
    q: "Capital Access - Raise whenever you are ready (3 to 5 pitch days every month)",
    a: [
      "-Top 40% of the cohort will get a preferential investment offer from our in-house accelerator fund",
      "-Beyond our fund get face time with 100+ VCs in the course duration; we have curated 3 to 5 pitch days every month",
      "-A student can raise from the in-house accelerator fund or our VC partners or both",
    ],
  },
  {
    q: "A paid 2 month start-up immersion - Hands on venture building experience",
    a: [
      "-Work directly with CXOs (who have raised at least series A) on problem statements sourced directly from them",
      "-Alternate track to step into full-time, high-paying Founder’s Office roles, where your impact is measured by results, not by a 30-minute interview",
      "-Work in campus companies",
    ],
  },
  {
    q: "Growth Lab - Fundraising is only a start, expansion comes next",
    a: [
      "-Get a free 24/7 access to our in-house production studio and a marketing agency",
      "-Absolutely free access to design, content, and campaign execution",
      "-Everything you need to build and launch without bottlenecks",
      "-A growth agency built into the campus to help you scale faster",
    ],
  },
  {
    q: "Strategy Capsule - 1:1 access to Fortune 500 advisors and sector specialists",
    a: [
      "-Develop GTM with MBB consultants",
      "-Learn from thematic experts who know your industry’s nuances",
      "-Navigate through financial/legal compliances with in-house CAs and Lawyers",
      "-VCs to plan your fund raise(s), exits",
      "-Get your own board of advisors you can access in campus itself without paying hefty billables",
    ],
  },
  {
    q: "Flexible Attendance - Spend more time in building",
    a: [
      "-Option to reduce classroom time and focus more on venture-building, especially after raising funds",
      "-Flexibility to test out of subjects you already know and earn credits upfront",
      "-For instance, a CA can test out of Accounting 101 and focus on the venture",
    ],
  },
  {
    q: "Global learning",
    a: [
      "-4 week immersion in Dubai with focus on building international VC network",
      "-Mandatory bootcamps with global industry leaders, followed by graded assignments",
    ],
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
          {Array.isArray(a) ? (
            a.map((line, idx) => <p key={idx}>{line}</p>)
          ) : (
            <p>{a}</p>
          )}
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
          <h2 className="faqs-title">Program Features</h2>
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
