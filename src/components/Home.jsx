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
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-page" id="home-page">
      <Suspense fallback={<div>Loading video...</div>}>
        <VideoPlayer videoSrc={homeVideo} className="home-video" />
      </Suspense>
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-heading">
            Venture is a contrarian way of living life.
          </h1>
          <h2 className="hero-subheading">
            The input – output model for venture building is complex.
            Entrepreneurship cannot be taught; it must take root in your mind.
            Possessing a founder's toolkit and the right mental models increases
            your probability of success.
          </h2>
          <i className="quote">
            “Chance favors the prepared mind” – Louis Pasteur
          </i>
          <button className="explore-btn">Explore Now</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
