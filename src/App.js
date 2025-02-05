import Header from "./components/Header";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import AdvisoryBoard from "./components/AdvisoryBoard";
import HeaderOnScroll from "./components/HeaderOnScroll";
import FounderFaculty from "./components/FounderFaculty";
// import InvestorFaculty from "./components/InvestorFaculty";
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
      {/* <InvestorFaculty /> */}
    </div>
  );
}

export default App;
