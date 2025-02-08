import "../styles/programstructure.css";
import { useState } from "react";
import { Button } from "@mui/material";

const sprintData = [
  {
    title: "Foundation",
    duration: "Month 1 – 2",
    focus: "Understanding fundamentals and exploring ideas for your venture",
    goal: "Provide participants with a solid foundation of basics needed to build a venture",
    icon: "📚",
  },
  {
    title: "Immersion",
    duration: "Month 3 – 8",

    focus:
      "Work hands-on with growth stage startups while lightly exploring your venture idea",
    goal: "Develop practical skills and entrepreneurial insight by working directly with founders",
    icon: "🚀",
  },
  {
    title: "Validation",
    duration: "Month 9 – 10",
    focus:
      "Transition into refining and launching your venture and launching your venture",
    goal: "Build momentum for your venture through mentorship with user insights",
    icon: "✅",
  },
  {
    title: "Pitching",
    duration: "Month 11 – 12",
    focus:
      "Refining your product through mentorship, refining and launching your venture",
    goal: "Fully transition to launching your venture with structured support and resources",
    icon: "💡",
  },
];

const ProgramStructure = () => {
  const [hoveredSprint, setHoveredSprint] = useState(null);

  return (
    <div className="program-structure" id="program-structure">
      <div className="title">Program Structure</div>
      <div className="sprint-buttons">
        {sprintData.map((_, index) => (
          <button
            key={index}
            className={`arrow-button ${
              hoveredSprint === index ? "highlight" : ""
            }`}
            onMouseEnter={() => setHoveredSprint(index)}
            onMouseLeave={() => setHoveredSprint(null)}
          >
            Sprint {index + 1}
          </button>
        ))}
      </div>
      <div className="sprint-container">
        {sprintData.map((sprint, index) => (
          <div
            onMouseEnter={() => setHoveredSprint(index)}
            onMouseLeave={() => setHoveredSprint(null)}
            key={index}
            className={`sprint-info ${
              hoveredSprint === index ? "highlight" : ""
            }`}
          >
            <div className="sprint-content">
              <div className="sprint-text">
                <div className="sprint-title">{sprint.title}</div>
                <div className="sprint-duration">{sprint.duration}</div>
                <p className="focus">
                  <strong>Focus:</strong> {sprint.focus}
                </p>
                <p className="focus">
                  <strong>Goal:</strong> {sprint.goal}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramStructure;
