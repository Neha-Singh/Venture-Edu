import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ already used for CTA
import "../../styles/Footer/footer.css";

import rightArrow from "../../assets/header-images/rightarrow.svg";
import smallVector from "../../assets/home-images/launch-venture/smallvector.svg";
import bigVector from "../../assets/home-images/launch-venture/bigvector.png";
import leftVector from "../../assets/footer-images/left-vector.svg";
import logoVector from "../../assets/footer-images/right-vector.svg";
import blazerGuy from "../../assets/footer-images/blazer-guy.svg";
import curlyGirl from "../../assets/footer-images/curly-hair-girl.svg";
import spectaclesGuy from "../../assets/footer-images/spectacles-guy.svg";
import yellowGirl from "../../assets/footer-images/yellow-tee-girl.svg";
import invertedTriangle from "../../assets/footer-images/inverted-triangle.svg";
import fbIcon from "../../assets/footer-images/fb.png";
import xIcon from "../../assets/footer-images/x.png";
import youtubeIcon from "../../assets/footer-images/youtube.png";
import igIcon from "../../assets/footer-images/ig.png";
import linkedinIcon from "../../assets/footer-images/linkedin.png";
import bigLogo from "../../assets/footer-images/logo1.png";

/* community cluster graphic for the middle card (right side) */
import communityImg from "../../assets/footer-images/community.png";

export default function Footer() {
  const navigate = useNavigate();

  // ---------------- Form State ----------------
  const [values, setValues] = useState({
    firstName: "",
    secondName: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    secondName: "",
    email: "",
    phone: "",
  });

  // ---------------- Validation Helpers ----------------
  const validateField = (name, value) => {
    // Trim value for validation but keep original in input
    const v = String(value || "").trim();

    switch (name) {
      case "firstName":
        if (!v) return "Name is required.";
        if (!/^[A-Za-z\s'.-]{2,}$/.test(v)) {
          return "Please enter a valid name (min 2 letters).";
        }
        return "";
      case "secondName":
        if (!v) return "Second name is required.";
        if (!/^[A-Za-z\s'.-]{2,}$/.test(v)) {
          return "Please enter a valid second name (min 2 letters).";
        }
        return "";
      case "email":
        if (!v) return "Email is required.";
        // Basic, lenient email check
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) {
          return "Please enter a valid email address.";
        }
        return "";
      case "phone":
        if (!v) return "Phone number is required.";
        // Accept digits, spaces, dashes, parentheses; must contain 10–15 digits
        const digits = v.replace(/\D/g, "");
        if (digits.length < 10 || digits.length > 15) {
          return "Please enter a valid phone number (10–15 digits).";
        }
        return "";
      default:
        return "";
    }
  };

  const validateAll = (vals) => {
    const nextErrors = Object.keys(vals).reduce((acc, key) => {
      acc[key] = validateField(key, vals[key]);
      return acc;
    }, {});
    setErrors(nextErrors);
    // Return boolean validity
    return Object.values(nextErrors).every((msg) => !msg);
  };

  // ---------------- Handlers ----------------
  const onChange = (e) => {
    const { id, value } = e.target;
    setValues((prev) => ({ ...prev, [id]: value }));
  };

  const onBlur = (e) => {
    const { id, value } = e.target;
    setErrors((prev) => ({ ...prev, [id]: validateField(id, value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateAll(values)) {
      // You can wire this to your API here
      console.log("Form submitted:", values);
      // Simple UX: clear form and show a lightweight acknowledgement
      setValues({ firstName: "", secondName: "", email: "", phone: "" });
      alert("Thanks! We’ll get back to you soon.");
    }
  };

  // Utility to bind aria props for accessibility
  const ariaFor = (field) => ({
    "aria-invalid": errors[field] ? "true" : "false",
    "aria-describedby": errors[field] ? `${field}-error` : undefined,
  });

  return (
    <footer className="site-footer">
      {/* ─── UPPER: Launch Your Venture ─────────────────────── */}
      <section className="fv-upper">
        <div className="fv-upper-text">
          <span className="small">Ready to</span>
          <h2>Launch Your Venture?</h2>
          <p>
            If you're passionate, driven, and ready to build something
            impactful, VenturEdu provides the roadmap, resources, and support to
            make it happen.
          </p>
          <p>Take the first step towards becoming a VenturEdu founder.</p>
          <button
            className="fv-button"
            type="button"
            onClick={() => navigate("/contactus")}
          >
            Start your Application
            <img src={rightArrow} alt="→" loading="lazy" />
          </button>
        </div>
        <img
          src={smallVector}
          alt=""
          className="fv-upper-small-bottom"
          loading="lazy"
        />
        <img
          src={smallVector}
          alt=""
          className="fv-upper-small-top"
          loading="lazy"
        />
        <img src={bigVector} alt="" className="fv-upper-big" loading="lazy" />
      </section>

      {/* ─── MIDDLE CARD: Connect / Collaborate / Conquer ───── */}
      <section className="fv-card">
        <img src={leftVector} alt="" className="fv-card-left" loading="lazy" />

        <div className="fv-card-grid">
          <h2 className="fv-card-title">
            Connect,
            <br />
            <span className="fv-highlight">Collaborate,</span>
            <br />
            Conquer.
          </h2>

          <div className="fv-card-body">
            <p className="fv-card-text">
              Being part of VenturEdu means more than just education — it means
              joining a thriving community of ambitious, like-minded innovators
              and disruptors. Benefit from a slew of knowledge resources,
              exclusive events, digital collaboration spaces, and a growing
              network that supports you long after graduation.
            </p>

            <button className="fv-card-cta" type="button">
              Join the Community
            </button>
          </div>
        </div>

        <img
          src={communityImg}
          alt=""
          className="fv-card-community"
          loading="lazy"
        />

        <img
          src={invertedTriangle}
          alt=""
          className="fv-card-triangle"
          loading="lazy"
        />
      </section>

      {/* ─── LOWER: Contact & links ─────────────────────────── */}
      <section className="fv-lower">
        <div className="fv-form">
          <h3>Get in touch</h3>

          {/* Form with controlled inputs + custom validation */}
          <form noValidate onSubmit={handleSubmit}>
            <div className="row">
              <div
                className={`form-group ${errors.firstName ? "has-error" : ""}`}
              >
                <label htmlFor="firstName">Name</label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="Enter your name"
                  value={values.firstName}
                  onChange={onChange}
                  onBlur={onBlur}
                  {...ariaFor("firstName")}
                />
                {errors.firstName && (
                  <small id="firstName-error" className="fv-error-text">
                    {errors.firstName}
                  </small>
                )}
              </div>

              <div
                className={`form-group ${errors.secondName ? "has-error" : ""}`}
              >
                <label htmlFor="secondName">Second Name</label>
                <input
                  id="secondName"
                  type="text"
                  placeholder="Enter your second name"
                  value={values.secondName}
                  onChange={onChange}
                  onBlur={onBlur}
                  {...ariaFor("secondName")}
                />
                {errors.secondName && (
                  <small id="secondName-error" className="fv-error-text">
                    {errors.secondName}
                  </small>
                )}
              </div>
            </div>

            <div className="row">
              <div className={`form-group ${errors.email ? "has-error" : ""}`}>
                <label htmlFor="email">Email ID</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email ID"
                  value={values.email}
                  onChange={onChange}
                  onBlur={onBlur}
                  {...ariaFor("email")}
                />
                {errors.email && (
                  <small id="email-error" className="fv-error-text">
                    {errors.email}
                  </small>
                )}
              </div>

              <div className={`form-group ${errors.phone ? "has-error" : ""}`}>
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Ex. 00000 00000"
                  value={values.phone}
                  onChange={onChange}
                  onBlur={onBlur}
                  {...ariaFor("phone")}
                />
                {errors.phone && (
                  <small id="phone-error" className="fv-error-text">
                    {errors.phone}
                  </small>
                )}
              </div>
            </div>

            <button type="submit" className="fv-form-submit">
              Submit
            </button>
          </form>
        </div>

        <div className="fv-links">
          <a href="#">Home</a>
          <a href="#">About VenturEdu</a>
          <a href="#">The Program</a>
          <a href="#">Faculty & Mentor</a>
          <a href="#">Admissions</a>
          <a href="#">Success Stories</a>
        </div>

        <div className="fv-address">
          <h3>Address</h3>
          <p>WeWork Two Horizon Centre,</p>
          <p>Golf Course Road, 5th Floor,</p>
          <p>DLF Two Horizon Centre, DLF Phase 5,</p>
          <p>Gurugram, HR 122002</p>

          <div className="fv-social-icons">
            <a href="#">
              <img src={fbIcon} alt="Facebook" />
            </a>
            <a href="#">
              <img src={xIcon} alt="X" />
            </a>
            <a href="#">
              <img src={youtubeIcon} alt="YouTube" />
            </a>
            <a href="#">
              <img src={igIcon} alt="Instagram" />
            </a>
            <a href="#">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
          </div>

          <p className="email">Info@VenturEdu.com</p>
        </div>
      </section>

      <div className="fv-logo">
        <img src={bigLogo} alt="VenturEdu Logo" loading="lazy" />
        <span className="fv-logo-text">VenturEdu</span>
      </div>
    </footer>
  );
}
