import React, { useState } from "react";
import "../styles/curriculum.css";

const curriculumData = [
  {
    subject: "Founder's Toolkit: Decision-Making",
    topics: [
      "First-Principles Thinking",
      "Managerial & Leadership Decision-Making",
    ],
  },
  {
    subject: "Founder's Toolkit: Mental Models",
    topics: [
      "Mental Models",
      "Hypothesis Formulation",
      "What is an insight and insight generation?",
      "Human biases",
    ],
  },
  {
    subject: "Founder's Toolkit: Startup Development",
    topics: [
      "Startup Ideation & Early Stage Development",
      "Product Management & MVP Development",
      "Art of Startup Pivoting & Real-Time Adaptation",
      "No code startups",
      "Lean startups",
    ],
  },
  {
    subject: "Founder's Toolkit: Mindfulness",
    topics: [
      "Time Management",
      "Emotional Intelligence",
      "Stress & Anxiety Management",
      "Self Awareness",
    ],
  },
  {
    subject: "Sales, Negotiation and Communication",
    topics: ["Mastering Selling Strategies", "Negotiation and Communication"],
  },
  {
    subject: "Finance",
    topics: [
      "Financial Analysis & Accounting",
      "Valuations & M&A",
      "Investment & Portfolio Management",
    ],
  },
  {
    subject: "Business Leadership",
    topics: [
      "Business Strategy",
      "Entrepreneurial Strategy & Business Models",
      "Leadership & Team Management",
    ],
  },
  {
    subject: "Operations & Supply Chain Management",
    topics: ["Business Strategy", "Optimization & Data-Driven Decision-Making"],
  },
  {
    subject: "Technology and Data Science",
    topics: ["Data Science & AI in Business", "Python, SQL, and Big Data"],
  },
  {
    subject: "Business Economics",
    topics: [
      "Behavioral Economics & Market Trends",
      "Game Theory",
      "Microeconomics",
    ],
  },
  {
    subject: "Marketing & Branding",
    topics: [
      "Marketing Strategy & Brand Building",
      "Consumer Behaviour & Behavioural Science",
      "Data Driven Marketing & Analytics",
      "Growth Hacking & Digital Marketing",
      "Go-to-Marketing Strategy",
    ],
  },
  {
    subject: "Fundraising",
    topics: [
      "How to Get Acquired: The Art of Startup Exits",
      "Fundraising from Angels",
      "Venture Capital, Private Equity & Startup Funding",
    ],
  },
  {
    subject: "Startup Legalities",
    topics: [
      "Moral Leadership / Dark Side of Startups: Ethics, Scandals & Regulatory Risk",
      "Deal Structure, Legal and Financial aspects of deals",
      "CCPS, SHA, Private Placement and Term Sheet",
    ],
  },
];

const Accordion = ({ moduleNumber, subject, topics }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <button className="module-button">Module {moduleNumber}</button>
        <span className="accordion-title">{subject}</span>
        <span className={`accordion-arrow ${isOpen ? "open" : ""}`}>▼</span>
      </div>
      <div className={`accordion-content ${isOpen ? "open" : ""}`}>
        <ul>
          {topics.map((topic, index) => (
            <li key={index}>
              <strong>Topic {index + 1}:</strong> {topic}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const CurriculumPage = () => {
  return (
    <div className="curriculum-page" id="program-structure">
      {curriculumData.map((item, index) => (
        <Accordion
          key={index}
          moduleNumber={index + 1}
          subject={item.subject}
          topics={item.topics}
        />
      ))}
    </div>
  );
};

export default CurriculumPage;
