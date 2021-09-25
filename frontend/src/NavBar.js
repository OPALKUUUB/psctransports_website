import React, { Component } from "react";
import { nanoid } from "nanoid";

class NavBar extends Component {
    render() {
        const obj = this.props.obj;
        return (
            <section className="NavBar">
                <ul>
                    <li>{obj.logo}</li>
                    {obj.option.map(item=>(<li key={nanoid()}>{item}</li>))}
                </ul>
            </section>
        );
    }
}

export default NavBar;