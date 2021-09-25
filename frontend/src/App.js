import React, { Component } from "react";
import NavBar from "./NavBar";
import './App.css';

const navObj = {
  logo: "PSC",
  option: [ "home", "suggestion", "contact us" ]
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar 
          obj={navObj}
        />
      </div>
    );
  }
}

export default App;
