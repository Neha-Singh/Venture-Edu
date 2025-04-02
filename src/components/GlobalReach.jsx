import React, { lazy } from "react";
import {
  FaHandshake,
  FaBullhorn,
  FaRocket,
  FaGraduationCap,
} from "react-icons/fa";
import "../styles/globalreach.css";
import globalVideo from "../../src/assets/Videos/brj.mp4";

// Lazy load the VideoPlayer component for optimal performance
const VideoPlayer = lazy(() => import("../components/Global/VideoPlayer"));

const VideoBackground = () => {
  return (
    <div className="video-background-container" id="global-support">
      <VideoPlayer videoSrc={globalVideo} className="video-background">
        <div className="video-overlay">
          <div className="global-reach-text">
            <h1>Global Immersion</h1>
            <p>
              Designed for aspiring entrepreneurs ready to expand their
              horizons.
            </p>
            <p>
              Travelling to Dubai, students will engage in a dynamic startup
              ecosystem, connecting with global investors, successful founders,
              and industry leaders.
            </p>
            <h2>Program Highlights</h2>
            <div className="highlights-grid">
              <div className="highlight-box">
                <FaHandshake className="highlight-icon" />
                <span>Investor Mixer</span>
              </div>
              <div className="highlight-box">
                <FaBullhorn className="highlight-icon" />
                <span>Demo Day</span>
              </div>
              <div className="highlight-box">
                <FaRocket className="highlight-icon" />
                <span>Local Startup Immersion</span>
              </div>
              <div className="highlight-box">
                <FaGraduationCap className="highlight-icon" />
                <span>Expert Sessions</span>
              </div>
            </div>
          </div>
        </div>
      </VideoPlayer>
    </div>
  );
};

export default VideoBackground;
