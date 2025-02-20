import React from "react";
import "../styles/globalreach.css";
import VideoPlayer from "../components/Global/VideoPlayer";
import globalVideo from "../../src/assets/Videos/brj.mp4";

const VideoBackground = () => {
  return (
    <div className="video-background-container" id="global-support">
      <VideoPlayer videoSrc={globalVideo} className="video-background">
        <div className="video-overlay">
          <h2>Learn from innovators and investors around the world</h2>
        </div>
      </VideoPlayer>
    </div>
  );
};

export default VideoBackground;
