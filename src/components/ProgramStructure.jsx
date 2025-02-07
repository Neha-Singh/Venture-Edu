import "../styles/programstructure.css";
import { useState } from "react";
import { Button } from "@mui/material";

const sprintData = [
  {
    title: "Foundation building (Month 1 – 2)",
    focus: "Understanding fundamentals and exploring ideas for your venture",
    goal: "Provide participants with a solid foundation of basics needed to build a venture",
    icon: "📚",
  },
  {
    title: "Startup Immersion (Month 3 – 8)",
    focus:
      "Work hands-on with growth stage startups while lightly exploring your venture idea",
    goal: "Develop practical skills and entrepreneurial insight by working directly with founders",
    icon: "🚀",
  },
  {
    title: "Validation and testing (Month 9 – 10)",
    focus: "Transition into refining and launching your venture",
    goal: "Build momentum for your venture through mentorship with user insights",
    icon: "✅",
  },
  {
    title: "Product development and pitching (Month 11 – 12)",
    focus:
      "Refining your product through mentorship, refining and launching your venture",
    goal: "Fully transition to launching your venture with structured support and resources",
    icon: "💡",
  },
];

const ProgramStructure = () => {
  const [selectedSprint, setSelectedSprint] = useState(null);

  return (
    <div className="program-structure">
      <h1 className="title">Program Structure</h1>
      <div className="sprint-buttons">
        {sprintData.map((sprint, index) => (
          <Button
            key={index}
            variant="outlined"
            className="arrow-button"
            onClick={() => setSelectedSprint(sprint)}
          >
            Sprint {index + 1}
          </Button>
        ))}
      </div>
      {selectedSprint && (
        <div className="sprint-info">
          <div className="sprint-text">
            <h2>{selectedSprint.title}</h2>
            <p>
              <strong>Focus:</strong> {selectedSprint.focus}
            </p>
            <p>
              <strong>Goal:</strong> {selectedSprint.goal}
            </p>
          </div>
          <div className="sprint-icon">{selectedSprint.icon}</div>
        </div>
      )}
    </div>
  );
};

export default ProgramStructure;
