import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Explore from "./Components/Explore";
import Who from "./Components/Who";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Who />
      <Explore />
    </React.Fragment>
  );
}

export default App;
