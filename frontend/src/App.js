import React, { Component } from "react";
import "../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css";

import Navbar from "navbar-react";
import { Carousel } from "react-responsive-carousel";
import Home from "./components/Home";
import Suggestion from "./components/Suggestion";

class App extends Component {
  static defaultProps = {
    navBar: {
      item: [
        { name: "home", href: "#home" },
        { name: "suggestion", href: "#suggestion" },
        { name: "contact us", href: "#contact" },
      ],
      color: "#2F5D62",
      logo: "/image/logo3.png",
    },
  };
  render() {
    return (
      <div className="App">
        <Navbar
          items={this.props.navBar.item}
          color={this.props.navBar.color}
          logo={this.props.navBar.logo}
          hoverColor="#DFEEEA"
          titleColor="#DFEEEA"
          title="หจก. ปัญญาวดี เซอร์วิส แอนด์ คอนซัลแตนท์"
        />
        <Carousel
          autoPlay
          showStatus={false}
          showThumbs={false}
          useKeyboardArrows
          verticalSwipe={"standard"}
          stopOnHover
        >
          <div>
            <img src="/image/carousel1.jpg" alt="" />
          </div>
          <div>
            <img src="/image/carousel2.jpg" alt="" />
          </div>
          <div>
            <img src="/image/carousel3.jpg" alt="" />
          </div>
        </Carousel>
        <div className="background-base">
          <section id="home">
            <Home />
          </section>
          <section id="suggestion">
            <Suggestion />
          </section>
          <section id="contact">section contact us!!!</section>
        </div>
      </div>
    );
  }
}

export default App;
