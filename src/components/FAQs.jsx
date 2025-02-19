import React, { useState } from "react";
import "../styles/faqs.css";

const faqGroups = {
  "Program Experience": [
    {
      question: "What does a typical day at VenturEdu look like?",
      answer:
        "At VenturEdu, your day is split between hands-on work with startups, engaging classroom sessions, and mentor interactions. Expect a dynamic mix of learning, problem-solving, and collaboration tailored to equip you with real-world entrepreneurial skills.",
    },
    {
      question: "What are the benefits of the 12-month program?",
      answer:
        "Our 12-month program offers foundational skills, real-world startup immersion, and mentorship from experienced founders, culminating in building and pitching your own venture. It’s a transformative journey designed to bridge the gap between learning and execution.",
    },
  ],
  Admissions: [
    {
      question: "What is the typical student profile?",
      answer:
        "Our participants are aspiring entrepreneurs or innovators, often with diverse backgrounds in business, technology, or the arts. Whether you’re a fresh graduate or a professional with a few years of experience, we value ambition, creativity, and a problem-solving mindset.",
    },
    {
      question: "Is there a minimum GPA required for admission?",
      answer:
        "We don’t have a minimum GPA requirement. Admission is based on a holistic evaluation of your application, including your entrepreneurial mindset, creativity, and vision.",
    },
    {
      question: "Is there an age limit for admission?",
      answer:
        "No, there is no age limit. We welcome anyone with a passion for entrepreneurship.",
    },
    {
      question: "Can applicants without a UG degree apply?",
      answer:
        "Yes, applicants without a formal degree can be considered if they demonstrate a strong entrepreneurial mindset and relevant experience.",
    },
    {
      question: "How many years of work experience are required to apply?",
      answer:
        "Work experience is not mandatory, but prior experience can be an advantage. We evaluate candidates based on their passion for entrepreneurship and their ability to contribute to and benefit from the program.",
    },
    {
      question:
        "Can applicants who just completed or are completing their UG studies apply?",
      answer:
        "Absolutely. If you’re passionate about building your own venture and eager to gain hands-on startup experience, VenturEdu is a great fit for fresh graduates.",
    },
  ],
  "Admission Process": [
    {
      question: "Are all applicants interviewed?",
      answer:
        "Yes, all shortlisted applicants undergo an interview to assess their fit for the program and their entrepreneurial potential.",
    },
    {
      question: "Can applicants defer their admission for the next year?",
      answer:
        "We allow deferrals on a case-by-case basis. You’ll need to provide a valid reason and deferment request during the admissions process.",
    },
    {
      question: "Can students request a callback from VenturEdu?",
      answer:
        "Yes, you can schedule a callback to discuss your application or queries about the program.",
    },
  ],
  "Additional FAQs": [
    {
      question: "How are applicants graded during the program?",
      answer:
        "Assessment is based on a combination of classroom performance, contributions to startup, and the progress of your venture idea. Real-world impact and learning are our key focus areas.",
    },
    {
      question: "Will students receive a degree upon completion?",
      answer:
        "No, VenturEdu does not offer a traditional degree. Instead, you’ll gain a certificate of completion and, more importantly, the skills, network, and experience to build a successful venture.",
    },
    {
      question:
        "Can students leave the program to join the startup they work with?",
      answer:
        "We encourage students to complete the program but support those who receive exceptional opportunities to join startups. Terms will be discussed individually.",
    },
    {
      question: "What is the refund policy?",
      answer:
        "Refunds are available based on our cancellation policy. Please refer to our detailed refund terms on the website or reach out to admissions for clarity.",
    },
    {
      question:
        "How much equity does a startup incubated in VenturEdu need to give to the holding company of VenturEdu?",
      answer:
        "Startups that receive funding from VenturEdu will give 3 – 5% equity to the holding company of VenturEdu.",
    },
    {
      question: "Who is the ideal VenturEdu candidate?",
      answer:
        "We’re looking for passionate, driven individuals who are eager to solve real-world problems, have a strong vision for the future, and are ready to immerse themselves in an entrepreneurial journey.",
    },
    {
      question:
        "What happens if I want to pivot my venture idea during the program?",
      answer:
        "We encourage flexibility and innovation. Mentors will guide you through pivoting to ensure alignment with your goals and market needs.",
    },
    {
      question:
        "Can students receive partial funding for their venture during the program?",
      answer:
        "Yes, select startups from the cohort may receive funding support through our advisory board and investor network.",
    },
    {
      question: "Are living expenses covered during the program?",
      answer:
        "Living expenses are not covered. However, we can assist in connecting students with affordable housing options near the program location.",
    },
    {
      question: "Can international students apply?",
      answer:
        "Yes, VenturEdu welcomes applications from international students passionate about entrepreneurship.",
    },
    {
      question:
        "What kind of support is provided post-program for launching or scaling ventures?",
      answer:
        "Post-program, we offer continued mentorship, investor connections, and incubation opportunities to help you scale your venture.",
    },
    {
      question:
        "Are startups built during the program eligible for equity investment by VenturEdu?",
      answer:
        "Yes, startups demonstrating significant potential may receive equity investment or other forms of support from VenturEdu’s network.",
    },
  ],
};

function FAQs() {
  const [activeTab, setActiveTab] = useState("Program Experience");
  const [openFAQ, setOpenFAQ] = useState(null);

  const tabs = Object.keys(faqGroups);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="faq-container" id="faq">
      <h1 className="faq-heading">Frequently Asked Questions</h1>
      <div className="faq-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`faq-tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => {
              setActiveTab(tab);
              setOpenFAQ(null); // close any open FAQ when tab changes
            }}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="faq-list">
        {faqGroups[activeTab].map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span className="faq-question-text">{faq.question}</span>
              <span className="faq-toggle-icon">
                {openFAQ === index ? "-" : "+"}
              </span>
            </div>
            <div className={`faq-answer ${openFAQ === index ? "open" : ""}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQs;
