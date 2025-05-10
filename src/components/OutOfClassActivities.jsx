import React from "react";
import { FaUsers, FaTrophy } from "react-icons/fa";
import "../styles/outofclassactivities.css";

const activitiesData = [
  {
    title: "Industry Interaction",
    items: [
      "Founder / Investor mixers",
      "Fireside chats",
      "1:1 mentorship sessions with industry leaders",
    ],
  },
  {
    title: "Challenges & Bootcamp",
    items: [
      "Demo Days",
      "Drop shipping Challenges",
      "Startup advertising campaign challenge",
      "No code startup bootcamp",
      "Lean startup bootcamp",
    ],
  },
];

const ActivitiesPage = () => {
  return (
    <div className="activities-page">
      <div className="activities-grid">
        {activitiesData.map((group, index) => (
          <div key={index} className="activity-group">
            <h2 className="activity-title">
              {group.title === "Industry Interaction" && (
                <FaUsers className="activity-icon" />
              )}
              {group.title === "Challenges & Bootcamp" && (
                <FaTrophy className="activity-icon" />
              )}
              {group.title}
            </h2>
            <ul className="activity-list">
              {group.items.map((item, idx) => (
                <li key={idx} className="activity-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivitiesPage;
