import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { nanoid } from "nanoid";
import "./NavBar.css";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class: "NavBar",
    };
    this.responsive = this.responsive.bind(this);
  }
  responsive = () => {
    var x = document.getElementById("nav");
    if (x.className === "NavBar") {
      this.setState({
        class: "NavBar responsive",
      });
    } else {
      this.setState({
        class: "NavBar",
      });
    }
  };
  render() {
    const obj = this.props.obj;
    return (
      <div className="NavBar-sticky">
        <nav id="nav" className={this.state.class}>
          <a href="/#" className="logo">
            {obj.logo}
          </a>
          {obj.option.map((item) => (
            <a key={nanoid()} href={`#${item}`} className="option">
              {item}
            </a>
          ))}
          <a href="/#" className="hamburger" onClick={this.responsive}>
            <FontAwesomeIcon icon={faBars} />
          </a>
        </nav>
      </div>
    );
  }
}

export default NavBar;
