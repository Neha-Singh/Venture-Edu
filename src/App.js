import Header from "./components/Header";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import AdvisoryBoard from "./components/AdvisoryBoard";
import HeaderOnScroll from "./components/HeaderOnScroll";
import FounderFaculty from "./components/FounderFaculty";
import InvestorFaculty from "./components/InvestorFaculty";
import TraditionalFaculty from "./components/TraditionalFaculty";
import ProgramStructure from "./components/ProgramStructure";
import ApplicationProcess from "./components/ApplicationProcess";
import GlobalReach from "./components/GlobalReach";
import ApplicationForm from "./components/ApplicationForm";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <HeaderOnScroll />
      <Home />
      <AboutUs />
      <AdvisoryBoard />
      <FounderFaculty />
      <InvestorFaculty />
      <TraditionalFaculty />
      <GlobalReach />
      <ProgramStructure />
      <ApplicationProcess />
      <ApplicationForm />
    </div>
  );
}

export default App;
