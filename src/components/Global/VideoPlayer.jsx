import React from "react";

const VideoPlayer = React.memo(({ videoSrc, className, children }) => {
  return (
    <div className="video-wrapper">
      <video
        className={className}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {children}
    </div>
  );
});

export default VideoPlayer;
