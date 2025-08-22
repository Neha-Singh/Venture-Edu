import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import LandingPage from "./components/Home/Landing.jsx";
import AboutUsHome from "./components/Home/AboutUs.jsx";
import AboutUsPage from "./components/AboutUs/Landing.jsx";
import YourJourney from "./components/Home/YourJourney.jsx";
import VentureduFor from "./components/Home/VentureduFor.jsx";
import MissionVision from "./components/AboutUs/MissionVision.jsx";
import VentureDifference from "./components/AboutUs/VentureEduDifference.jsx";
import MentorSection from "./components/AboutUs/MentorSection.jsx";
import ProgramLandingPage from "./components/Program/ProgramLanding.jsx";
import Faculty from "./components/Faculty/FacultyandMentor.jsx";
import Facultyandmentortwo from "./components/Faculty/FacultyandMentortwo.jsx";
import FacultyPeople from "./components/Faculty/FacultyPeople.jsx";
import Admissions from "./components/Admissions/AdmissionLanding.jsx";
import AdmissionsProcess from "./components/Admissions/AdmissionsProcess.jsx";
import FeesScholarship from "./components/Admissions/FeesScholarship.jsx";
import FAQS from "./components/Admissions/Faqs.jsx";
import CommunityLanding from "./components/Community/CommunityLanding.jsx";
import CommunityEvents from "./components/Community/CommunityEvents.jsx";
import ContactUS from "./components/ContactUs/ContactUs.jsx";
import ScrollToTop from "../src/components/Global/ScrollTop.jsx";
import Explore from "./components/Program/Explore.jsx";

function App() {
  return (
    <Router>
      <ScrollToTop />
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
        <Route
          path="/aboutus"
          element={
            <>
              <AboutUsPage />
              <MissionVision />
              <VentureDifference />
              <MentorSection />
            </>
          }
        />
        <Route
          path="/program"
          element={
            <>
              <ProgramLandingPage />
              <Explore />
            </>
          }
        />
        <Route
          path="/faculty"
          element={
            <>
              <Faculty />
              <Facultyandmentortwo />
              <FacultyPeople />
            </>
          }
        />
        <Route
          path="/admissions"
          element={
            <>
              <Admissions />
              <AdmissionsProcess />
              <FeesScholarship />
              <FAQS />
            </>
          }
        />
        <Route
          path="/community"
          element={
            <>
              <CommunityLanding />
              <CommunityEvents />
            </>
          }
        />
        <Route
          path="/contactus"
          element={
            <>
              <ContactUS />
            </>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
