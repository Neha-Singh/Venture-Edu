import React, { useState, useRef, useEffect } from "react";
import careerImg from "../../assets/program-images/curriculum/guy.png";
import chevrondownArrow from "../../assets/home-images/yourjourney/chevron-down.svg";
import chevronupArrow from "../../assets/home-images/yourjourney/chevron-up.svg";
import "../../styles/Program/curriculumcontent.css";

const moduleData = [
  {
    number: "Module 1",
    title: "Founder's Toolkit: Decision-Making",
    topics: [
      "Topic 1: First-Principles Thinking",
      "Topic 2: Managerial and Leadership Decision-Making",
    ],
  },
  {
    number: "Module 2",
    title: "Founder's Toolkit: Mental Models",
    topics: [
      "Topic 1: Mental Models",
      "Topic 2: Hypothesis Formulation",
      "Topic 3: What is an Insight and Insight Generation?",
      "Topic 4: Understanding Human Biases",
    ],
  },
  {
    number: "Module 3",
    title: "Founder's Toolkit: Startup Development",
    topics: [
      "Topic 1: Startup Ideation and Early-Stage Development",
      "Topic 2: Product Management and MVP Development",
      "Topic 3: The Art of Pivoting and Real-Time Adaptation",
      "Topic 4: No-Code Startups",
      "Topic 5: Lean Startup Methodologies",
    ],
  },
  {
    number: "Module 4",
    title: "Founder's Toolkit: Mindfulness",
    topics: [
      "Topic 1: Time Management",
      "Topic 2: Emotional Intelligence",
      "Topic 3: Stress and Anxiety Management",
      "Topic 4: Developing Self Awareness",
    ],
  },
  {
    number: "Module 5",
    title: "Sales, Negotiation, and Communication",
    topics: [
      "Topic 1: Mastering Selling Strategies",
      "Topic 2: Negotiation Tactics and Effective Communication",
    ],
  },
  {
    number: "Module 6",
    title: "Finance",
    topics: [
      "Topic 1: Financial Analysis and Accounting",
      "Topic 2: Valuations and M&A",
      "Topic 3: Investment and Portfolio Management",
    ],
  },
  {
    number: "Module 7",
    title: "Business Leadership",
    topics: [
      "Topic 1: Business Strategy",
      "Topic 2: Entrepreneurial Strategy and Business Models",
      "Topic 3: Leadership and Team Management",
    ],
  },
  {
    number: "Module 8",
    title: "Operations and Supply Chain Management",
    topics: [
      "Topic 1: Operational Strategy and Execution",
      "Topic 2: Optimization and Data-Driven Decision-Making",
    ],
  },
  {
    number: "Module 9",
    title: "Technology and Data Science",
    topics: [
      "Topic 1: Data Science and AI in Business",
      "Topic 2: Python, SQL, and Big Data",
    ],
  },
  {
    number: "Module 10",
    title: "Business Economics",
    topics: [
      "Topic 1: Behavioural Economics and Market Trends",
      "Topic 2: Game Theory",
      "Topic 3: Microeconomics",
    ],
  },
  {
    number: "Module 11",
    title: "Marketing and Branding",
    topics: [
      "Topic 1: Marketing Strategy and Brand Building",
      "Topic 2: Consumer Behaviour and Behavioural Science",
      "Topic 3: Data-Driven Marketing and Analytics",
      "Topic 4: Growth Hacking and Digital Marketing",
      "Topic 5: Go-to-Market Strategy",
    ],
  },
  {
    number: "Module 12",
    title: "Fundraising",
    topics: [
      "Topic 1: How to Get Acquired: The Art of Startup Exits",
      "Topic 2: Raising Funds from Angel Investors",
      "Topic 3: Venture Capital, Private Equity, and Startup Funding",
    ],
  },
  {
    number: "Module 13",
    title: "Startup Legalities",
    topics: [
      "Topic 1: Moral Leadership and the Dark Side of Startups: Ethics, Scandals, and Regulatory Risks",
      "Topic 2: Deal Structuring: Legal and Financial Aspects",
      "Topic 3: Understanding CCPS, SHA, Private Placements, and Term Sheets",
    ],
  },
];

const Curriculum = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="curriculum-detailed">
      <div className="curriculum-detailed__wrapper">
        <div className="curriculum-detailed__sidebar">
          <h2 className="curriculum-detailed__title">
            <span className="curriculum-detailed__subtitle">Core</span>
            <span className="curriculum-detailed__main">Curriculum</span>
          </h2>
          <img
            src={careerImg}
            alt=""
            className="curriculum-detailed__img"
            loading="lazy"
          />
        </div>
        <div className="curriculum-detailed__accordion">
          {moduleData.map((mod, i) => (
            <AccordionItem
              key={i}
              mod={mod}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
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
      </div>
    </div>
  );
};

export default Curriculum;
