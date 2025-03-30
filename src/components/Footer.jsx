import React, { useState } from "react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import PrivacyPolicyModal from "./PrivacyPolicyModal"; // Adjust the path as needed
import TermsOfUseModal from "./TermsOfService";
import "../styles/footer.css";

function Footer() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setisTermsOpen] = useState(false);

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          {/* Navigation Links */}
          <div className="footer-links">
            <a
              onClick={() => setIsPrivacyOpen(true)}
              className="footer-link privacy-button"
            >
              Privacy Policy
            </a>
            <a
              onClick={() => setisTermsOpen(true)}
              className="footer-link privacy-button"
            >
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
      {/* Privacy Policy Modal */}
      <PrivacyPolicyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />
      {/* Privacy Policy Modal */}
      <TermsOfUseModal
        isOpen={isTermsOpen}
        onClose={() => setisTermsOpen(false)}
      />
    </>
  );
}

export default Footer;
