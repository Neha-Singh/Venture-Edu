import React, { useState, useEffect, Suspense, lazy } from "react";
import "../styles/home.css";
import homeVideo from "../../src/assets/Videos/HomePage/Cliff.mp4";

// Lazy load the VideoPlayer component
const VideoPlayer = lazy(() => import("../components/Global/VideoPlayer"));

const Home = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000); // 2 seconds splash
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hero-container" id="home-page">
      <Suspense fallback={<div>Loading video...</div>}>
        <VideoPlayer videoSrc={homeVideo} className="hero-video" />
      </Suspense>
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-heading">
            Venture is a contrarian way of living life.
          </h1>
          <h2 className="hero-subheading">
            The input – output model for venture building is complex.
          </h2>
          <p className="hero-paragraph">
            Entrepreneurship cannot be taught; it must take root in your mind.
            Possessing a founder's toolkit and the right mental models increases
            your probability of success.
            <span className="quote">
              “Chance favors the prepared mind” – Louis Pasteur
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
