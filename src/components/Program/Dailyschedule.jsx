// src/components/Program/DailySchedule.jsx
import React from "react";
import "../../styles/Program/dailyschedule.css";

const DailySchedule = () => (
  <section className="daily-schedule">
    {/* Title  Legend */}
    <div className="daily-schedule__header">
      <h2 className="daily-schedule__title">Daily Schedule</h2>
      <ul className="daily-schedule__legend">
        <li>
          <span className="swatch swatch--break"></span>Breaks
        </li>
        <li>
          <span className="swatch swatch--class"></span>Classes & Mentor
          Sessions
        </li>
        <li>
          <span className="swatch swatch--workshop"></span>Workshops & Bootcamps
        </li>
        <li>
          <span className="swatch swatch--discussion"></span>Discussion with
          peers
        </li>
        <li>
          <span className="swatch swatch--industry"></span>Industry Interactions
        </li>
        <li>
          <span className="swatch swatch--sports"></span>Sports & Recreation
        </li>
      </ul>
    </div>

    {/* Schedule Table */}
    <table className="daily-schedule__table">
      <thead>
        <tr>
          <th className="col-timeslot">Time Slot</th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
          <th>Sunday</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="col-timeslot">08:00 - 09:00</td>
          <td colSpan="3"></td>
          <td className="cell--break">Breakfast &amp; Informal Networking</td>
          <td colSpan="3"></td>
        </tr>
        <tr>
          <td className="col-timeslot">09:00 - 12:00</td>
          <td className="cell--workshop">Dropshipping Bootcamp</td>
          <td className="cell--class">
            First-Principles Thinking &amp; Mental Models
          </td>
          <td className="cell--class">
            Business Storytelling &amp; Game Theory
          </td>
          <td className="cell--class">Decision Science &amp; Mental Models</td>
          <td className="cell--workshop">Dropshipping Bootcamp</td>
          <td className="cell--class">1:1 Mentor Sessions</td>
          <td className="cell--sports">Sports &amp; Recreational Activities</td>
        </tr>
        <tr>
          <td className="col-timeslot">12:00 - 13:00</td>
          <td colSpan="3"></td>
          <td className="cell--break">Lunch Break</td>
          <td colSpan="3"></td>
        </tr>
        {/* 13:00 – 14:30 */}
        <tr>
          <td className="col-timeslot">13:00 - 14:30</td>

          {/* span across this row  the one below */}
          <td className="cell--workshop" rowSpan="2">
            Product Prototyping Workshop
          </td>
          <td className="cell--class" rowSpan="2">
            Founder’s Toolkit: Building Startups
          </td>
          <td className="cell--class" rowSpan="2">
            Founder’s Toolkit: Fundraising
          </td>
          <td className="cell--discussion" rowSpan="2">
            Case Study: Reviving Failed Ventures
          </td>

          {/* the rest stay as normal */}
          <td className="cell--discussion">Group Mentorship</td>
          <td className="cell--discussion">
            Panel Discussion: Future of Startups
          </td>
          <td></td>
        </tr>

        {/* 14:30 – 16:00 */}
        <tr>
          <td className="col-timeslot">14:30 - 16:00</td>

          {/* no <td> for Mon–Thu, they’re covered by rowSpan */}

          {/* keep the remaining slots */}
          <td className="cell--sports">Social Hour</td>
          <td className="cell--industry">
            Networking Event: Meet Your Co-Founder
          </td>
          <td></td>
        </tr>
        <tr>
          <td className="col-timeslot">16:00 - 17:00</td>
          <td colSpan="3"></td>
          <td className="cell--break">Coffee Break</td>
          <td colSpan="3"></td>
        </tr>

        <tr>
          <td className="col-timeslot">17:00 - 18:30</td>
          <td className="cell--discussion">Roundtable Discussion with peers</td>
          <td className="cell--discussion">Roundtable Discussion with peers</td>
          <td className="cell--discussion">Investor/Founder Mixer</td>
          <td className="cell--discussion">
            Guest Lecture: Global Startup Ecosystems
          </td>
          <td className="cell--discussion">
            Networking with Founders &amp; Investors
          </td>
          <td className="cell--class">Mentor Q&amp;A</td>
          <td></td>
        </tr>
        <tr>
          <td className="col-timeslot">18:30 - 20:00</td>
          <td colSpan="2"></td>
          <td className="cell--discussion">Roundtable Discussion with peers</td>
          <td></td>
          <td className="cell--sports">Social Hour</td>
          <td className="cell--class">Dinner &amp; Closing Reflections</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </section>
);

export default DailySchedule;
