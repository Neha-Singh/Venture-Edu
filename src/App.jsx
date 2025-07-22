import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import LandingPage from "./components/Home/Landing.jsx";
import AboutUsHome from "./components/Home/AboutUs.jsx";
import AboutUsPage from "./components/AboutUs/Landing.jsx";
import YourJourney from "./components/Home/YourJourney.jsx";
import VentureduFor from "./components/Home/VentureduFor.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <LandingPage />
              <AboutUsHome />
              <YourJourney />
              <VentureduFor />
            </>
          }
        />
        <Route path="/aboutus" element={<AboutUsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
