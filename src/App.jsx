import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import AboutUsTwo from "./components/AboutUsTwo";
import GlobalReach from "./components/GlobalReach";
import Faqs from "./components/Faqs";
import ApplicationForm from "./components/ApplicationForm";
import ApplicationProcessTimeline from "./components/ApplicationProcess";
import LandingPage from "./components/Landing";
import Footer from "./components/Footer";
import ProgramOverview from "./components/ProgranOverview";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <LandingPage />
      <Home />
      <AboutUs />
      <AboutUsTwo />
      <ProgramOverview />
      <GlobalReach />
      <ApplicationProcessTimeline />
      <Faqs />
      <ApplicationForm />
      <Footer />
    </>
  );
}

export default App;
