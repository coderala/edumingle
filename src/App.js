import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Explore from "./Components/Explore";
import Who from "./Components/Who";
import Why from "./Components/Why";
import Cards from "./Components/Cards";

import Stay from "./Components/Stay";
import Have from "./Components/Have";
import Footer from "./Components/Footer";
import What from "./Components/What";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Header />{/*complete*/}
      <Hero />{/*complete*/}
      <Who />{/*complete*/}
      <Explore />{/*complete*/}
      <Why />{/*complete*/}
      <Cards />{/*complete*/}
      <What />
      <Stay />
      <Have />
      <Footer />
    </React.Fragment>
  );
}

export default App;
