import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import LandingPage from "../src/components/home/Landing";
import AboutUs from "../src/components/Home/AboutUs.jsx";
import YourJourney from "../src/components/Home/YourJourney.jsx";
import VentureduFor from "../src/components/Home/VentureduFor.jsx";
import LaunchVenture from "../src/components/Home/LaunchVenture.jsx";
import Footer from "../src/components/Footer/Footer.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <LandingPage />
      <AboutUs />
      <YourJourney />
      <VentureduFor />
      <Footer />
    </>
  );
}

export default App;
