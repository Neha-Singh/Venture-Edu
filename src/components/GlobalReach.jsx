import React from "react";
import "../styles/globalreach.css";
import video1 from "../../src/assets/Videos/brj.mp4";

const VideoBackground = () => {
  return (
    <div className="video-background-container" id="global-support">
      <video
        className="video-background"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={video1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay">
        <h2>Learn from innovators and investors around the world</h2>
      </div>
    </div>
  );
};

export default VideoBackground;
