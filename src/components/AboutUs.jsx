import { FaClockRotateLeft } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";
import { GiBrickWall } from "react-icons/gi";

function AboutUs() {
  return (
    <div className="experience-section" id="about-section">
      <h1 className="experience-heading">
        We empower aspiring entrepreneurs to turn ideas into scalable ventures
        through
      </h1>
      <div className="experience-box-container">
        <div className="experience-box">
          <div className="icon-and-heading">
            <h2 className="box-heading">Experience</h2>
            <FaClockRotateLeft style={{ fontSize: "50px" }} />
          </div>
          <p className="box-text">
            Providing 6 month long focused startup exposure
          </p>
        </div>
        <div className="experience-box">
          <div className="icon-and-heading">
            <h2 className="box-heading">Learn</h2>
            <FaGraduationCap style={{ fontSize: "50px" }} />
          </div>
          <p className="box-text">
            Empowering founders with the necessary skills to build a founder
            mindset{" "}
          </p>
        </div>
        <div className="experience-box">
          <div className="icon-and-heading">
            <h2 className="box-heading">Build</h2>
            <GiBrickWall style={{ fontSize: "50px" }} />
          </div>
          <p className="box-text">
            Converting your idea into reality by building your own venture{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
