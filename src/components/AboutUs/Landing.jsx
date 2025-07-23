import "../../styles/AboutUs/landing.css";
import Breadcrumb from "../../components/Header/Breadcrumbs";
import heroImage from "../../assets/about-us-images/about-us-team.png";
import vector1 from "../../assets/about-us-images/vector1.png";
import vector2 from "../../assets/about-us-images/vector2.png";
import vector3 from "../../assets/about-us-images/vector3.png";
import invertedTriangle from "../../assets/about-us-images/inverted-triangle.png";

const AboutUs = () => (
  <section className="about-us">
    <Breadcrumb
      links={[
        { label: "Home", url: "/" },
        { label: "About Us", url: "/aboutus" },
      ]}
      currentPath={window.location.pathname}
    />
    <div className="about-us__top">
      <div className="about-us__heading">
        <h1>About VenturEdu</h1>
        <div className="decorators">
          <img src={vector1} alt="decor" className="decor decor1" />
          <img src={vector2} alt="decor" className="decor decor2" />
        </div>
      </div>
      <div className="about-us__text">
        <p className="intro">
          VenturEdu is India’s first venture school—a launchpad for dreamers who
          are believers, innovators who take action, and change makers ready to
          shape tomorrow’s industries
        </p>
        <p>
          <span className="dimmed">Here,</span>
          <br />
          <span className="blue">ideas meet execution,</span>
          <br />
          <span className="blue">real ventures meet bold experimentation,</span>
          <br />
          <span className="blue">and every founder finds their tribe.</span>
        </p>
      </div>
    </div>

    <div className="about-us__hero">
      <img src={heroImage} alt="Team" className="hero-image" />
      <img src={invertedTriangle} alt="triangle" className="triangle" />
      <img src={vector3} alt="decor" className="decor decor3" />
    </div>
  </section>
);

export default AboutUs;
