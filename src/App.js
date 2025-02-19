import Header from "./components/Header";
import Home from "./components/Home";
import AboutUsText from "./components/AboutUsText";
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
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <HeaderOnScroll />
      <Home />
      <AboutUsText />
      <AboutUs />
      <ProgramStructure />
      <AdvisoryBoard />
      <FounderFaculty />
      <InvestorFaculty />
      <TraditionalFaculty />
      <GlobalReach />
      <ApplicationProcess />
      <FAQs />
      <ApplicationForm />
      <Footer />
    </div>
  );
}

export default App;
