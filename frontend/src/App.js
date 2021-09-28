import React, { Component } from "react";
import "../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css";

import NavBar from "./components/NavBar";
import { Carousel } from "react-responsive-carousel";
import Home from "./components/Home";

const navObj = {
  logo: "PSC",
  option: ["home", "suggestion", "contact"],
};
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar obj={navObj} />
        <div style={{ marginTop: "-5px" }}>
          <Carousel
            autoPlay
            showStatus={false}
            showThumbs={false}
            useKeyboardArrows
            verticalSwipe={"standard"}
            stopOnHover>
            <div>
              <img src="/image/img1.1.1.jpg" />
            </div>
            <div>
              <img src="/image/img3.3.3.jpg" />
            </div>
            <div>
              <img src="/image/img2.2.2.jpg" />
            </div>
          </Carousel>
        </div>
        <div className="background-base">
          <section id="home">
            <Home />
          </section>
          <section id="suggestion">test suggestion</section>
          <section id="contact">test contact</section>
        </div>
      </div>
    );
  }
}

export default App;
