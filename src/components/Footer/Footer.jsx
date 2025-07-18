import React from "react";
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
import bigLogo from "../../assets/footer-images/big-white-logo.png";

export default function Footer() {
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
          <button className="fv-button">
            Start your Application
            <img src={rightArrow} alt="→" loading="lazy" />
          </button>
        </div>
        {/* bottom-left small arrow */}
        <img
          src={smallVector}
          alt=""
          className="fv-upper-small-bottom"
          loading="lazy"
        />
        {/* top-right small arrow */}
        <img
          src={smallVector}
          alt=""
          className="fv-upper-small-top"
          loading="lazy"
        />
        <img src={bigVector} alt="" className="fv-upper-big" loading="lazy" />
      </section>

      {/* ─── MIDDLE CARD: Connect, Collaborate, Conquer ───────── */}
      <section className="fv-card">
        {/* slanted left corner */}
        <img src={leftVector} alt="" className="fv-card-left" loading="lazy" />

        {/* heading top-left */}
        <h2 className="fv-card-title">
          Connect,
          <br />
          <span className="fv-highlight">Collaborate,</span>
          <br />
          Conquer.
        </h2>

        {/* logo  avatars container */}
        {/* <div className="fv-card-graphic">
          <img
            src={logoVector}
            alt=""
            className="fv-card-logo-vector"
            loading="lazy"
          />
          <img src={blazerGuy} alt="" className="avatar a1" loading="lazy" />
          <img src={curlyGirl} alt="" className="avatar a2" loading="lazy" />
          <img
            src={spectaclesGuy}
            alt=""
            className="avatar a3"
            loading="lazy"
          />
          <img src={yellowGirl} alt="" className="avatar a4" loading="lazy" />
        </div> */}

        {/* centered body panel */}
        <div className="fv-card-body">
          <p className="fv-card-text">
            Being part of VenturEdu means more than just education—it means
            joining a thriving community of ambitious, like-minded innovators
            and disruptors. Benefit from a slew of knowledge resources,
            exclusive events, digital collaboration spaces, and a growing
            network that supports you long after graduation.
          </p>
          <button className="fv-card-cta">Join the Community</button>
        </div>

        {/* slanted triangle top-right */}
        <img
          src={invertedTriangle}
          alt=""
          className="fv-card-triangle"
          loading="lazy"
        />
      </section>

      {/* ─── LOWER: Contact Form / Links / Address ────────────── */}
      <section className="fv-lower">
        {/* Contact form */}
        <div className="fv-form">
          <h3>Get in touch</h3>
          <form>
            <div className="row">
              <div className="form-group">
                <label htmlFor="firstName">Name</label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="secondName">Second Name</label>
                <input
                  id="secondName"
                  type="text"
                  placeholder="Enter your second name"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group">
                <label htmlFor="email">Email ID</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email ID"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input id="phone" type="tel" placeholder="Ex. 00000 00000" />
              </div>
            </div>
            <button type="submit" className="fv-form-submit">
              Submit
            </button>
          </form>
        </div>

        {/* Navigation links */}
        <div className="fv-links">
          <a href="#">Home</a>
          <a href="#">About VenturEdu</a>
          <a href="#">The Program</a>
          <a href="#">Faculty & Mentor</a>
          <a href="#">Admissions</a>
          <a href="#">Success Stories</a>
        </div>

        {/* Address & social */}
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

      {/* ─── BRAND LOGO ───────────────────────────────────────── */}
      <div className="fv-logo">
        <img src={bigLogo} alt="VenturEdu Logo" loading="lazy" />
        <span className="fv-logo-text">VenturEdu</span>
      </div>
    </footer>
  );
}
