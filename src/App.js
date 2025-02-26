import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Explore from "./Components/Explore";
import Who from "./Components/Who";
import Why from "./Components/Why";
import Cards from "./Components/Cards";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Who />
      <Explore />
      <Why />
      <cards />
    </React.Fragment>
  );
}

export default App;
