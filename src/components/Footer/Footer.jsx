import React, { useState } from "react";
import "../../styles/Footer/footer.css";

import rightArrow from "../../assets/header-images/rightarrow.svg";
import smallVector from "../../assets/home-images/launch-venture/smallvector.svg";
import bigVector from "../../assets/home-images/launch-venture/bigvector.png";
import leftVector from "../../assets/footer-images/left-vector.svg";
import rightVector from "../../assets/footer-images/right-vector.svg";
import invertedTriangle from "../../assets/footer-images/inverted-triangle.svg";
import homeLogo from "../../assets/Logo-Home.png";

export default function Footer() {
  const [open, setOpen] = useState(false);
  return (
    <footer className="site-footer">
      {/* ─── UPPER: Launch Your Venture ───────────────────────── */}
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
            onClick={() => {
              /* your handler */
            }}
          >
            Start your Application
            <img src={rightArrow} alt="→" loading="lazy" />
          </button>
        </div>
        <img
          src={smallVector}
          alt=""
          className="fv-upper-small"
          loading="lazy"
        />
        <img src={bigVector} alt="" className="fv-upper-big" loading="lazy" />
      </section>

      {/* ─── MIDDLE CARD: Connect, Collaborate, Conquer ───────── */}
      <section className="fv-card">
        <img src={leftVector} alt="" className="fv-card-left" loading="lazy" />
        <div className="fv-card-content">
          <h2>
            Connect,
            <br />
            Collaborate,
            <br />
            Conquer.
          </h2>
          <p>
            Being part of VenturEdu means more than just education—it means
            joining a thriving community of ambitious, like-minded innovators
            and disruptors. Benefit from a slew of knowledge resources,
            exclusive events, digital collaboration spaces, and a growing
            network that supports you long after graduation.
          </p>
          <button className="fv-card-cta">Join the Community</button>
        </div>
        <img
          src={rightVector}
          alt=""
          className="fv-card-right"
          loading="lazy"
        />
        <img
          src={invertedTriangle}
          alt=""
          className="fv-card-triangle"
          loading="lazy"
        />
      </section>

      {/* ─── LOWER: Contact Form / Links / Logo ───────────────── */}
      <section className="fv-lower">
        <div className="fv-form">
          <h3>Get in touch</h3>
          <form>
            <div className="row">
              <input type="text" placeholder="Enter your name" />
              <input type="text" placeholder="Enter your second name" />
            </div>
            <div className="row">
              <input type="email" placeholder="Enter your email ID" />
              <input type="tel" placeholder="Ex. 00000 00000" />
            </div>
            <button type="submit">Submit</button>
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
          <p>WeWork Two Horizon Centre,</p>
          <p>Golf Course Road, 5th Floor,</p>
          <p>DLF Two Horizon Centre, DLF Phase 5,</p>
          <p>Gurugram, HR 122002</p>
          <div className="social">
            {/* replace with real links/icons */}
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-x-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <p className="email">Info@VenturEdu.com</p>
        </div>
      </section>

      {/* Footer Brand Logo */}
      <div className="fv-logo">
        <img src={homeLogo} alt="VenturEdu" loading="lazy" />
      </div>
    </footer>
  );
}
