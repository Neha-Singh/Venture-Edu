// DailySchedule.jsx
import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../styles/dailyschedule.css";

export default function DailySchedulePage() {
  const tableWrapRef = useRef(null);

  const scrollLeft = () => {
    if (tableWrapRef.current) {
      tableWrapRef.current.scrollBy({
        left: -tableWrapRef.current.clientWidth * 0.8,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (tableWrapRef.current) {
      tableWrapRef.current.scrollBy({
        left: tableWrapRef.current.clientWidth * 0.8,
        behavior: "smooth",
      });
    }
  };

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const firstRow = {
    time: "08:00 - 09:00",
    Monday: "Breakfast & Informal Networking",
  };
  const classSession = {
    Monday: "Lean Startup Workshop",
    Tuesday: "First-Principles Thinking & Mental Models",
    Wednesday: "Business Storytelling & Game Theory",
    Thursday: "Decision Science & Mental Models",
    Saturday: "1:1 Mentor Sessions",
  };

  return (
    <div className="daily-container">
      <div className="daily-header">
        <h1 className="daily-heading">Daily Schedule</h1>
        <div className="nav-controls">
          <button className="nav-btn" onClick={scrollLeft}>
            <FaChevronLeft />
          </button>
          <button className="nav-btn" onClick={scrollRight}>
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div className="table-wrap" ref={tableWrapRef}>
        <table className="schedule-table">
          <thead>
            <tr>
              <th>Time Slot</th>
              {days.map((day) => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* 08:00–09:00 */}
            <tr>
              <td className="time-cell">{firstRow.time}</td>
              <td className="break-cell" colSpan={6}>
                {firstRow.Monday}
              </td>
              <td></td>
            </tr>

            {/* 09:00–12:00 */}
            <tr>
              <td className="time-cell">09:00 - 12:00</td>
              {days.map((day) => {
                if (day === "Monday" || day === "Friday") {
                  return (
                    <td key={day} className="workshop-cell">
                      Dropshipping Bootcamp
                    </td>
                  );
                } else if (classSession[day]) {
                  return (
                    <td key={day} className="class-cell">
                      {classSession[day]}
                    </td>
                  );
                } else if (day === "Sunday") {
                  return (
                    <td key={day} className="sports-cell">
                      Sports & Recreational Activities
                    </td>
                  );
                } else {
                  return <td key={day}></td>;
                }
              })}
            </tr>

            {/* 12:00–13:00 */}
            <tr>
              <td className="time-cell">12:00 - 13:00</td>
              <td className="break-cell" colSpan={6}>
                Lunch Break
              </td>
              <td></td>
            </tr>

            {/* 13:00–14:30 */}
            <tr>
              <td className="time-cell">13:00 - 14:30</td>
              <td className="workshop-cell" rowSpan={2}>
                Product Prototyping Workshop
              </td>
              <td className="class-cell" rowSpan={2}>
                Founder's Toolkit: Building Startups
              </td>
              <td className="class-cell" rowSpan={2}>
                Founder's Toolkit: Fundraising
              </td>
              <td className="case-study-cell" rowSpan={2}>
                Case Study: Reviving Failed Ventures
              </td>
              <td className="class-cell">Group Mentorship</td>
              <td className="case-study-cell">
                Panel Discussion: Future of Startups
              </td>
              <td></td>
            </tr>

            {/* 14:30–16:00 */}
            <tr>
              <td className="time-cell">14:30 - 16:00</td>
              <td className="industry-cell">
                Fireside Chat with an Industry Leader
              </td>
              <td className="industry-cell">
                Networking Event: Meet Your Co-Founder
              </td>
              <td></td>
            </tr>

            {/* 16:00–17:00 */}
            <tr>
              <td className="time-cell">16:00 - 17:00</td>
              <td className="break-cell" colSpan={6}>
                Coffee Break
              </td>
              <td></td>
            </tr>

            {/* 17:00–18:30 */}
            <tr>
              <td className="time-cell">17:00 - 18:30</td>
              <td className="case-study-cell">
                Roundtable Discussion with peers
              </td>
              <td className="case-study-cell">
                Roundtable Discussion with peers
              </td>
              <td className="industry-cell">Investor/Founder Mixer</td>
              <td className="industry-cell">
                Guest Lecture: Global Startup Ecosystems
              </td>
              <td className="industry-cell">
                Networking with Founders & Investors
              </td>
              <td className="class-cell">Mentor Q&amp;A</td>
              <td></td>
            </tr>

            {/* 18:30–20:00 */}
            <tr>
              <td className="time-cell">18:30 - 20:00</td>
              <td></td>
              <td></td>
              <td className="case-study-cell">Open Discussion Dinner</td>
              <td></td>
              <td className="sports-cell">Social Hour</td>
              <td className="case-study-cell">
                Dinner &amp; Closing Reflections
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="legend-section">
        <div className="legend-items">
          <div className="legend-item">
            <span className="swatch break-swatch"></span>
            <span>Breaks</span>
          </div>
          <div className="legend-item">
            <span className="swatch class-swatch"></span>
            <span>Classes & Mentor Sessions</span>
          </div>
          <div className="legend-item">
            <span className="swatch workshop-swatch"></span>
            <span>Workshops & Bootcamps</span>
          </div>
          <div className="legend-item">
            <span className="swatch case-study-swatch"></span>
            <span>Discussion with peers</span>
          </div>
          <div className="legend-item">
            <span className="swatch industry-swatch"></span>
            <span>Industry Interactions</span>
          </div>
          <div className="legend-item">
            <span className="swatch sports-swatch"></span>
            <span>Sports & Recreation</span>
          </div>
        </div>
      </div>
    </div>
  );
}
