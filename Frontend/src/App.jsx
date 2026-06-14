import React from "react";
import NavbarL from "./Components/NavbarL";
import LandP_1 from "./Components/LandP_1";
import LandP_2 from "./Components/LandP_2";
import TopStates from "./Components/TopStates";
import FeaturedHotels from "./Components/FeaturedHotels.jsx";
import Footer from "./Components/Footer.jsx";
function App() {
  return (
    <>
      <NavbarL />
      <LandP_1 />
      <LandP_2 />
      <TopStates/>
      <FeaturedHotels />
      <Footer/>
    </>
    );
}
export default App;