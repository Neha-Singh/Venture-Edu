import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import AboutUsTwo from "./components/AboutUsTwo";
import ProgramStructure from "./components/ProgramStructure";

import GlobalReach from "./components/GlobalReach";
import Faqs from "./components/Faqs";
import ApplicationForm from "./components/ApplicationForm";
import ApplicationProcessTimeline from "./components/ApplicationProcess";
import LandingPage from "./components/Landing";
import Footer from "./components/Footer";
import Curriculum from "./components/Curriculum";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <LandingPage />
      <Home />
      <AboutUs />
      <AboutUsTwo />
      <ProgramStructure />
      <Curriculum />
      <GlobalReach />
      <ApplicationProcessTimeline />
      <Faqs />
      <ApplicationForm />
      <Footer />
    </>
  );
}

export default App;
