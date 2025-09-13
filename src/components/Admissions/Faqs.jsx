// Faqs.jsx
import React, { useEffect, useRef, useState } from "react";
import "../../styles/Admissions/faqs.css";

/**
 * For each FAQ, `a` is an array of blocks:
 *   { type: "p",  text: string }
 *   { type: "ul", items: string[] }
 * This lets us render multi-paragraph answers and bullet points cleanly.
 */
const FAQS = [
  {
    q: "Who can apply for the program?",
    a: [
      {
        type: "p",
        text: "The program is open to all, but it is best suited for four founder archetypes:",
      },
      {
        type: "ul",
        items: [
          "Aspiring entrepreneurs who are currently students — undergraduates who want to start building without giving up 2 years in a traditional MBA, while learning business fundamentals and developing a network.",
          "Early-stage founders — those seeking structured business education, access to VCs, marketing and growth professionals, and strategic guidance in one place.",
          "Family business successors — next-generation leaders preparing to professionalize and scale in a high-accountability environment.",
          "Working professionals — individuals with just an idea, little or no business education, and a desire to transition into entrepreneurship without academic-heavy courses.",
        ],
      },
    ],
  },
  {
    q: "Do I need a specific academic background or minimum grades?",
    a: [
      {
        type: "p",
        text: "No. Selection is based on your idea and founder potential, not academic history. The program is open to undergraduates from any discipline, and there are no GPA or grade cut-offs.",
      },
    ],
  },
  {
    q: "Do I need to take CAT/XAT/GRE or other standardized tests?",
    a: [
      {
        type: "p",
        text: "No. The only test we recommend is the VenturEdu Entrance Test (VET), a 60-minute assessment of arithmetic, problem-solving, and communication skills.",
      },
      {
        type: "p",
        text: "If you’ve already taken standardized tests like CAT, XAT, or GRE, you may submit those scores in place of VET. However, these are treated only as a qualifying criterion and carry no weight in the final selection, which is driven entirely by your idea and founder potential.",
      },
      {
        type: "p",
        text: "If you have other standardized scores, you may submit them as proof of basic aptitude, but they will carry no weight in final selection.",
      },
    ],
  },
  {
    q: "How does the admissions process work?",
    a: [
      {
        type: "p",
        text: "Admissions follow a dossier-based method with the heaviest weight on your idea:",
      },
      {
        type: "p",
        text: "Round 1: Consists of two parts",
      },
      {
        type: "ul",
        items: [
          "Part 1: Submission of a 300-word idea thesis + profile review by 30+ investors.",
          "Part 2: A 60-minute qualifying test (reasoning, communication, arithmetic, problem-solving).",
        ],
      },
      {
        type: "p",
        text: "Round 2: In-person presentation/interview to a panel of CXOs, VCs, and academicians.",
      },
      { type: "p", text: "Round 3: Offer letter issued." },
    ],
  },
  {
    q: "Can two people apply together as co-founders?",
    a: [
      {
        type: "p",
        text: "Yes, provided this is explicitly mentioned in the application form.",
      },
    ],
  },
  {
    q: "Is this like an MBA or an accelerator?",
    a: [
      {
        type: "p",
        text: "It combines both. The program integrates academic rigor on par with top B-schools with accelerator-style venture building. Participants receive formal education, hands-on co-building with experts, and direct access to capital.",
      },
    ],
  },
  {
    q: "How long is the program?",
    a: [
      {
        type: "p",
        text: "The program runs full-time for 14 months across two countries (with an immersion sprint in Dubai) and is fully residential.",
      },
    ],
  },
  {
    q: "What makes this different from a traditional MBA?",
    a: [
      {
        type: "p",
        text: "Instead of just learning business theory, participants build and fund their ventures while studying. The outcome is not just a degree but a company, a co-founder network, and access to capital.",
      },
    ],
  },
  {
    q: "Do I need to already have a revenue-generating business to apply?",
    a: [
      {
        type: "p",
        text: "No — you only need a compelling idea. However, having a business with some revenue or traction strengthens your application.",
      },
    ],
  },
  {
    q: "What startup-building resources will I have access to?",
    a: [
      { type: "p", text: "Participants gain:" },
      {
        type: "ul",
        items: [
          "Strategy Capsule: 1:1 access to Fortune 500 advisors and MBB consultants.",
          "Growth Lab: 24/7 access to production studios, design, content, and marketing support.",
          "Capital Access: 3–5 pitch days monthly to provide you access to 100+ investors.",
          "Rigorous Business Education: Core business learning with peer-to-peer and case-based formats, designed and delivered by world-class academicians.",
        ],
      },
    ],
  },
  {
    q: "Are there specific sectors the program focuses on?",
    a: [
      {
        type: "p",
        text: "The program is sector-agnostic, but higher weight is given to domains like AI, deep-tech, climate impact, EV, etc.",
      },
    ],
  },
  {
    q: "What are the possible program outcomes?",
    a: [
      {
        type: "p",
        text: "1. Launch your own VC-backed venture",
      },
      {
        type: "p",
        text: "Every participant gets multiple pitch opportunities to raise from 100+ VC partners, with 3–5 curated pitch days every month during the program.",
      },
      {
        type: "p",
        text: "The top 30% of the cohort receive an assured investment offer from our in-house accelerator fund.",
      },
      {
        type: "p",
        text: "Participants can choose to raise capital from the in-house accelerator, external investor partners, or both.",
      },
      {
        type: "p",
        text: "2. Secure co-founder roles",
      },
      {
        type: "p",
        text: "Structured co-founder matchmaking ensures participants can join other high-potential ventures being incubated on campus.",
      },
      {
        type: "p",
        text: "3. Extended incubation",
      },
      {
        type: "p",
        text: "Participants can stay on campus for up to 6 additional months at no extra cost, retaining access to mentors, infrastructure, and investor connect in case the idea needs more time.",
      },
      {
        type: "p",
        text: "4. Leverage Industry Immersion for Strategic Roles",
      },
      {
        type: "p",
        text: "Participants go through a mandatory 2-month salaried immersion with Series A+ startup CXOs, working on high-stakes business problems.",
      },
      {
        type: "p",
        text: "Performance is formally evaluated, building a credible track record to apply to highly paid Founder’s Office or strategic roles in the host or our 50+ partner startups.",
      },
      {
        type: "p",
        text: "Ideal for participants whose ideas are not immediately funded; it is a way to stay embedded in startup culture with financial stability while preparing to restart venture building.",
      },
    ],
  },
];

/** One FAQ item with smooth slide animation */
function FaqItem({ i, q, a, open, onToggle }) {
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

      {/* Collapsible area: animate max-height via CSS variable */}
      <div
        id={`faq-a-${i}`}
        className="faq-a"
        style={{ ["--h"]: open ? `${h}px` : "0px" }}
      >
        <div ref={wrapRef} className="faq-a-inner">
          {a.map((blk, idx) =>
            blk.type === "ul" ? (
              <ul className="faq-ul" key={idx}>
                {blk.items.map((it, j) => (
                  <li key={j}>{it}</li>
                ))}
              </ul>
            ) : (
              <p key={idx}>{blk.text}</p>
            )
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
