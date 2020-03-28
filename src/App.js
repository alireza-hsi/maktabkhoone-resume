import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import { SocialIcon } from "react-social-icons";
// import data from "./data.json";
// import Fullpage from "./components/Fullpage";
import TitlesAndIcons from "./sections/TitlesAndIcons";
import About from "./sections/About";
import Skils from "./sections/skils";
// import Nav from "./sections/Nav"



function App() {
  return (
    <div className="App">
      {/* <Nav/> */}
      <TitlesAndIcons />
      <About />
      <Skils />
    </div>
  );
}

export default App;
