import React, { lazy } from "react";
import { FaCircle } from "react-icons/fa";
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
            <ul className="highlights-list">
              <li>
                <FaCircle className="highlight-icon" /> Investor mixer
              </li>
              <li>
                <FaCircle className="highlight-icon" /> Demo day
              </li>
              <li>
                <FaCircle className="highlight-icon" /> Local startup immersion
              </li>
              <li>
                <FaCircle className="highlight-icon" /> Expert sessions
              </li>
            </ul>
          </div>
        </div>
      </VideoPlayer>
    </div>
  );
};

export default VideoBackground;
