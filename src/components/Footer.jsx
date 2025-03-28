import React from "react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Navigation Links */}
        <div className="footer-links">
          <a href="/about" className="footer-link">
            About Us
          </a>
          <a href="/contact" className="footer-link">
            Contact
          </a>
          <a href="/privacy" className="footer-link">
            Privacy Policy
          </a>
          <a href="/terms" className="footer-link">
            Terms of Service
          </a>
        </div>
        {/* Social Media Icons */}
        <div className="footer-social">
          <a
            href="https://www.instagram.com/venturedu_"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/venturedu/"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://m.youtube.com/@VenturEdu"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
        </div>
        {/* Copyright Notice */}
        <div className="footer-copy">
          <p>
            &copy; {new Date().getFullYear()} VenturEdu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
