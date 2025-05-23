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
          <div className="footer-content">
            {/* Logo + Address */}
            <div className="footer-logo-section">
              <img src="/logo.png" alt="Logo" className="footer-logo" />
              <p className="footer-address">
                WeWork Two Horizon Centre, Golf Course Road, 5th Floor, DLF Two
                Horizon Centre, DLF Phase 5, Gurugram, HR 122002
              </p>
            </div>
            {/* Navigation Links */}
            <div className="footer-links">
              <button
                type="button"
                onClick={() => setIsPrivacyOpen(true)}
                className="footer-link privacy-button"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => setisTermsOpen(true)}
                className="footer-link privacy-button"
              >
                Terms of Service
              </button>
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
            {/* Copyright */}
            <div className="footer-copy">
              <p>
                &copy; {new Date().getFullYear()} VenturEdu. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* Modals */}
      <PrivacyPolicyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />
      <TermsOfUseModal
        isOpen={isTermsOpen}
        onClose={() => setisTermsOpen(false)}
      />
    </>
  );
}

export default Footer;
