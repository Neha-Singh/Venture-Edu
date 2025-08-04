import React, { useState, useRef, useEffect } from "react";
import careerImg from "../../assets/home-images/aboutus/image2.svg";
import chevrondownArrow from "../../assets/home-images/yourjourney/chevron-down.svg";
import chevronupArrow from "../../assets/home-images/yourjourney/chevron-up.svg";
import "../../styles/Program/curriculumcontent.css";

const moduleData = [
  {
    number: "Phase 1",
    title: "Founder Toolkit (Months 1–6)",
    topics: [
      "Core modules and labs",
      "Founder skill-building sprints",
      "Peer-to-peer feedback circles",
    ],
    explanation:
      "This initial phase is a deep dive into the core fundamentals of entrepreneurship. It functions as an intensive startup bootcamp, meticulously designed to build confidence from the ground up and equip participants with essential skills. Participants engage in immersive modules covering critical areas such as strategic planning, in-depth market analysis, effective communication, and dynamic leadership. The goal is to gain a solid grip on these essentials, including understanding complex markets and mastering the art of compelling storytelling for a venture. The expected outcome is a robust foundational understanding of entrepreneurial principles, coupled with the essential tools and mindset required to confidently embark on the venture-building journey.",
  },
  {
    number: "Phase 2",
    title: "Venture Immersion (Months 7–8)",
    topics: [
      "On-site residencies with partner ventures",
      "Live consulting projects",
      "Weekly mentor roundtables",
    ],
    explanation: `This phase is designed for practical application, where participants "get their hands dirty" by plunging into the real world through intensive hands-on startup experiences within active companies. Participants step directly into real startup environments, closely shadow experienced teams, observe effective scaling strategies in action, work on solving live business challenges, and witness the intricate dynamics of venture building in real time. This phase reveals what it truly takes to grow a venture. The expected outcome is invaluable practical exposure to startup operations, enhanced problem-solving skills in live, dynamic settings, and a deeper, experiential understanding of venture scaling and team dynamics.`,
  },
  {
    number: "Phase 3",
    title: "Idea Validation (Months 9–10)",
    topics: [
      "Design thinking workshops",
      "MVP prototyping clinics",
      "Data-driven iteration loops",
    ],
    explanation: `For those with a business idea, this phase focuses on rigorously pressure-testing and validating the business concept directly with potential customers. Participants engage directly with real customers, run quick, iterative experiments, and fine-tune their business idea through continuous feedback loops and dedicated mentor-led sessions. The emphasis is on sharpening the concept based on genuine market realities and customer needs. The expected outcome is a thoroughly validated business concept, significantly refined based on authentic customer insights and market feedback, ensuring it is robust and ready for product development.`,
  },
  {
    number: "Phase 4",
    title: "MVP & Investor Readiness (Months 11–14)",
    topics: [
      "MVP finalization & soft launch",
      "Investor-pitch bootcamps",
      "Demo Day before a panel of top-tier investors",
    ],
    explanation: `This final, intensive phase is where concepts become tangible. It is dedicated to refining the venture, building a Minimum Viable Product (MVP), and meticulously preparing investor-ready pitches. Participants actively develop their MVP, polish their pitch deck to perfection, and rigorously prepare to confidently face investors. This phase is expertly designed to transition participants seamlessly into the world of investment and sustainable growth. The expected outcome is a tangible, functional MVP, a compelling and polished investor pitch, and the crucial momentum required to secure funding and successfully launch the venture. Upon completion, participants will not just have an idea—they will have momentum.`,
  },
];

const Curriculum = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <>
      <section className="curriculum">
        <div className="curriculum__inner">
          <div className="curriculum__heading">
            <h2>Program Phases</h2>
          </div>
          <div className="curriculum__content">
            <p>
              The 14-month entrepreneurship program in India is meticulously
              structured into four progressive phases, each building upon the
              last to ensure a cohesive and comprehensive learning experience.
              This journey is designed to systematically guide participants from
              foundational knowledge to venture launch and investor readiness.
            </p>
          </div>
        </div>
      </section>
      <section className="curriculum-detailed">
        <div className="curriculum-detailed__wrapper">
          <div className="curriculum-detailed__sidebar">
            <h2 className="curriculum-detailed__title">
              <span className="curriculum-detailed__main">Phases</span>
            </h2>
            <img
              src={careerImg}
              alt=""
              className="curriculum-detailed__img"
              loading="lazy"
            />
          </div>
          <div
            className="curriculum-detailed__list-wrapper"
            style={{ height: `${height}px`, transition: "height 0.35s ease" }}
          >
            {/* Wrap both list  explanation in the ref’d node */}
            <div ref={contentRef} className="curriculum-detailed__inner">
              <ul className="curriculum-detailed__list">…</ul>
              {mod.explanation && (
                <div className="curriculum-detailed__explanation">…</div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const AccordionItem = ({ mod, isOpen, onToggle }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div
      className={`curriculum-detailed__module ${isOpen ? "open" : "closed"}`}
    >
      <button className="curriculum-detailed__header" onClick={onToggle}>
        <span className="curriculum-detailed__modnum">{mod.number}</span>
        <span className="curriculum-detailed__modtitle">{mod.title}</span>
        <img
          src={isOpen ? chevronupArrow : chevrondownArrow}
          alt=""
          className="curriculum-detailed__toggle"
          loading="lazy"
        />
      </button>
      <div
        className="curriculum-detailed__list-wrapper"
        style={{ height: `${height}px`, transition: "height 0.35s ease" }}
      >
        <ul ref={contentRef} className="curriculum-detailed__list">
          {mod.topics.map((t, j) => (
            <li key={j}>{t}</li>
          ))}
        </ul>

        <div className="curriculum-detailed__explanation">
          <p>{mod.explanation}</p>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
