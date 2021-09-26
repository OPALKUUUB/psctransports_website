import React, { Component } from "react"
import NavBar from "./components/NavBar"
import { Carousel } from "react-responsive-carousel"
import "../node_modules/react-responsive-carousel/lib/styles/carousel.min.css"
import "./App.css"

const navObj = {
  logo: "PSC",
  option: ["home", "suggestion", "contact"],
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar obj={navObj} />
        <Carousel
          autoPlay
          showStatus={false}
          showThumbs={false}
          showArrows
          useKeyboardArrows
          verticalSwipe={"standard"}
          stopOnHover
        >
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
        <div id="home">test home</div>
        <div id="suggestion">test suggestion</div>
        <div id="contact">test contact</div>
      </div>
    )
  }
}

export default App
