import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import LandingPage from "./components/Home/Landing.jsx";
import AboutUsHome from "./components/Home/AboutUs.jsx";
import AboutUsPage from "./components/AboutUs/Landing.jsx";
import YourJourney from "./components/Home/YourJourney.jsx";
import VentureduFor from "./components/Home/VentureduFor.jsx";
import MissionVision from "./components/AboutUs/MissionVision.jsx";
import VentureDifference from "./components/AboutUs/VentureEduDifference.jsx";
// import MentorSection from "./components/AboutUs/MentorSection.jsx";
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
import Btcam from "./components/Home/Btcam.jsx";
import BootCamp from "./components/BootCamp/bootcamp.jsx";

/* Route → meta map (your exact copies) */
const META = {
  "/": {
    title: "VenturEdu | India’s First Venture Mentorship for Entrepreneurs",
    description:
      "Launch your startup with VenturEdu’s 14-month PGP in Entrepreneurship. Get hands-on mentorship for entrepreneurs, real-world experience, funding, and global exposure.",
  },
  "/program": {
    title: "PGP in Entrepreneurship - Launch & Scale Your Startup | VenturEdu",
    description:
      "Join VenturEdu’s 14-month PGP in Entrepreneurship. Master startup tools, build your MVP, pitch to investors & explore global ecosystems like Dubai. Apply now!",
  },
  "/aboutus": {
    title: "VenturEdu - India’s 1st Platform for Startup Mentorship in India",
    description:
      "Join VenturEdu - India’s first venture school. Learn by doing, pitch for funding, build global networks & launch your startup with real-world mentorship.",
  },
  "/admissions": {
    title: "VenturEdu Admissions Open - Build Your Startup From Day One",
    description:
      "Apply to VenturEdu’s 14-month PGP in Entrepreneurship - admission open now. No GPA or experience required. Launch your venture with expert-led support.",
  },
  "/faculty": {
    title: "Meet the Faculty & Mentors Behind VenturEdu’s Edge",
    description:
      "Learn from founders, VCs, and domain experts at VenturEdu. Real-world mentors guide your startup journey with hands-on support and personalized coaching.",
  },
  "/community": {
    title:
      "Join the VenturEdu Startup Community | Founders, Innovators & Changemakers",
    description:
      "Join VenturEdu’s private startup community - connect with founders, mentors, and innovators shaping the future of entrepreneurship.",
  },
  "/contactus": {
    title:
      "Join the VenturEdu Startup Community | Founders, Innovators & Changemakers",
    description:
      "Join VenturEdu’s private startup community - connect with founders, mentors, and innovators shaping the future of entrepreneurship.",
  },
};

/* Final guard: remove any stale <meta name="description"> and set the correct one per route.
   This runs AFTER all children (Header, pages, Footer), so it always wins. */
function MetaEnforcer() {
  const { pathname } = useLocation();
  const meta = META[pathname];

  useEffect(() => {
    // 1) Remove ALL existing route descriptions
    const descTags = Array.from(
      document.head.querySelectorAll('meta[name="description"]')
    );
    descTags.forEach(
      (node) => node.parentNode && node.parentNode.removeChild(node)
    );

    const ogDescTags = Array.from(
      document.head.querySelectorAll('meta[property="og:description"]')
    );
    ogDescTags.forEach(
      (node) => node.parentNode && node.parentNode.removeChild(node)
    );

    // 2) Insert the desired one for this route
    if (meta?.description) {
      const tag = document.createElement("meta");
      tag.setAttribute("name", "description");
      tag.setAttribute("content", meta.description);
      tag.setAttribute("data-route", pathname);
      document.head.appendChild(tag);

      const og = document.createElement("meta");
      og.setAttribute("property", "og:description");
      og.setAttribute("content", meta.description);
      og.setAttribute("data-route", pathname);
      document.head.appendChild(og);
    }

    // 3) Safety: keep title in sync too (in case any shared Helmet overrides)
    if (meta?.title) {
      document.title = meta.title;
    }
  }, [pathname, meta]);

  return null;
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Helmet>
                  <title>
                    VenturEdu | India’s First Venture Mentorship for
                    Entrepreneurs
                  </title>
                  <meta
                    name="description"
                    content="Launch your startup with VenturEdu’s 14-month PGP in Entrepreneurship. Get hands-on mentorship for entrepreneurs, real-world experience, funding, and global exposure."
                  />
                </Helmet>
                <LandingPage />
                <AboutUsHome />
                <Btcam />
                <YourJourney />
                <VentureduFor />
              </>
            }
          />
          <Route
            path="/aboutus"
            element={
              <>
                <Helmet>
                  <title>
                    VenturEdu - India’s 1st Platform for Startup Mentorship in
                    India
                  </title>
                  <meta
                    name="description"
                    content="Join VenturEdu - India’s first venture school. Learn by doing, pitch for funding, build global networks & launch your startup with real-world mentorship."
                  />
                </Helmet>
                <AboutUsPage />
                <MissionVision />
                <VentureDifference />
                {/* <MentorSection /> */}
              </>
            }
          />
          <Route
            path="/program"
            element={
              <>
                <Helmet>
                  <title>
                    PGP in Entrepreneurship - Launch & Scale Your Startup |
                    VenturEdu
                  </title>
                  <meta
                    name="description"
                    content="Join VenturEdu’s 14-month PGP in Entrepreneurship. Master startup tools, build your MVP, pitch to investors & explore global ecosystems like Dubai. Apply now!"
                  />
                </Helmet>
                <ProgramLandingPage />
                <Explore />
              </>
            }
          />
          <Route
            path="/faculty"
            element={
              <>
                <Helmet>
                  <title>
                    Meet the Faculty & Mentors Behind VenturEdu’s Edge
                  </title>
                  <meta
                    name="description"
                    content="Learn from founders, VCs, and domain experts at VenturEdu. Real-world mentors guide your startup journey with hands-on support and personalized coaching."
                  />
                </Helmet>
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
                <Helmet>
                  <title>
                    VenturEdu Admissions Open - Build Your Startup From Day One
                  </title>
                  <meta
                    name="description"
                    content="Apply to VenturEdu’s 14-month PGP in Entrepreneurship - admission open now. No GPA or experience required. Launch your venture with expert-led support."
                  />
                </Helmet>
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
                <Helmet>
                  <title>
                    Join the VenturEdu Startup Community | Founders, Innovators
                    &amp; Changemakers
                  </title>
                  <meta
                    name="description"
                    content="Join VenturEdu’s private startup community - connect with founders, mentors, and innovators shaping the future of entrepreneurship."
                  />
                </Helmet>
                <CommunityLanding />
                <CommunityEvents />
              </>
            }
          />
          <Route
            path="/contactus"
            element={
              <>
                <Helmet>
                  <title>
                    Join the VenturEdu Startup Community | Founders, Innovators
                    &amp; Changemakers
                  </title>
                  <meta
                    name="description"
                    content="Join VenturEdu’s private startup community - connect with founders, mentors, and innovators shaping the future of entrepreneurship."
                  />
                </Helmet>
                <ContactUS />
              </>
            }
          />
          <Route
            path="/bootcamp"
            element={
              <>
                <Helmet>
                  <title>
                    Join the VenturEdu Startup Community | Founders, Innovators
                    &amp; Changemakers
                  </title>
                  <meta
                    name="description"
                    content="Join VenturEdu’s private startup community - connect with founders, mentors, and innovators shaping the future of entrepreneurship."
                  />
                </Helmet>
                <BootCamp />
              </>
            }
          />
        </Routes>
        <Footer />
        {/* Enforce the correct meta AFTER all components so it always wins */}
        <MetaEnforcer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
