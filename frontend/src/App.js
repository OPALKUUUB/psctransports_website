import React, { Component } from "react";
import NavBar from "./components/NavBar";
import './App.css';

const navObj = {
  logo: "PSC",
  option: [ "home", "suggestion", "contact" ]
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar 
          obj={navObj}
        />
        <div id="home">test home</div>
        <div id="suggestion">test suggestion</div>
        <div id="contact">test contact</div>
      </div>
    );
  }
}

export default App;
