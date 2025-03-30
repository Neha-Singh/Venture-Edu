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
      question: "What are the benefits of the 14-month program?",
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
        "How much equity a startup incubated in VenturEdu need to give to the holding company of VenturEdu?",
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
  ],
  "Entrance and Eligibility": [
    {
      question: "What is the admissions process at VenturEdu?",
      answer:
        "We follow a holistic evaluation process that considers multiple factors beyond just test scores. Our admissions process includes submission of an application form, review of entrance test scores (CAT / GMAT / GRE), completion of the VenturEdu Entrance Test, and a personal interview to assess entrepreneurial mental model and leadership potential.",
    },
    {
      question: "What is VenturEdu Entrance Test?",
      answer:
        "The VenturEdu Entrance Test is an MCQ-based assessment designed to evaluate critical thinking and problem-solving skills, logical reasoning and analytical ability, and business acumen based on real-world start-up mental models.",
    },
    {
      question: "Is the VenturEdu Entrance Test mandatory for all applicants?",
      answer:
        "While we accept standardized test scores, we believe that traditional exams don’t fully assess start-up mindset and problem-solving abilities. Our test is uniquely crafted to identify candidates with entrepreneurial instincts and real-world decision-making skills.",
    },
    {
      question: "What does the interview process involve?",
      answer:
        "The interview is designed to assess your problem-solving abilities, critical thinking, real-world experiences that demonstrate initiative and leadership, and your vision for the future. Expect case-based discussions, behavioral questions, and situational problem-solving scenarios.",
    },
    {
      question: "Do I need prior business experience to apply?",
      answer:
        "No! We welcome aspiring founders, career changers, and innovators from all backgrounds. If you have a passion for building, scaling, or disrupting industries, VenturEdu is the right place for you.",
    },
    {
      question: "How competitive is the admissions process?",
      answer:
        "VenturEdu looks for high-potential individuals who are ready to challenge the status quo. While we receive many applications, our process is about fit rather than competition. If you are driven, curious, and entrepreneurial, you stand a strong chance.",
    },
    {
      question: "Can I apply while still in college?",
      answer:
        "Absolutely! We encourage applications from final-year college students looking to fast-track their entrepreneurial journey.",
    },
    {
      question: "Is there a minimum GPA or academic requirement?",
      answer:
        "No! While academic performance is considered, we care more about your mental model, skills, and potential to innovate.",
    },
    {
      question: "When are admissions open, and how can I apply?",
      answer:
        "Admissions are rolling throughout the year, but we recommend applying early. You can start your application on the website.",
    },
  ],
  Scholarship: [
    {
      question: "Does VenturEdu offer scholarships?",
      answer:
        "Yes! We are committed to making quality education accessible to top talent. We offer 100% scholarships for exceptional candidates who demonstrate outstanding merit, leadership, and entrepreneurial potential, as well as partial scholarships for high-potential students based on merit and fitment.",
    },
    {
      question: "How is the scholarship awarded?",
      answer:
        "Scholarships are awarded immediately after the VenturEdu Entrance Test based on performance. Candidates who score exceptionally well will receive an instant scholarship offer before proceeding to the interview stage.",
    },
    {
      question: "Do I need to submit a separate application for scholarships?",
      answer:
        "No! Your VenturEdu Entrance Test score automatically qualifies you for scholarship consideration. No separate application is needed.",
    },
    {
      question: "How many scholarships are awarded each year?",
      answer:
        "We offer a limited number of 100% and partial scholarships based on merit and fitment to ensure we support the most promising talent. We encourage applicants to apply early for the best chances of securing financial aid.",
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
      <div className="faq-content">
        <div className="faq-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`faq-tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => {
                setActiveTab(tab);
                setOpenFAQ(null);
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
    </div>
  );
}

export default FAQs;
