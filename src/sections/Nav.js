import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import { Link, Element } from "react-scroll";



class Nav extends Component {
  changetheme = () => {
    this.state={
      color:"#d8e0bb"
    }

    this.setState({
      color1: "white",
      color2: "blue",
      color3: "black"
    });
  };
  render() {
    return (
      <div className="nav">
        <section className="menu1">
          <nav>
            <ul>
              <li>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onSetActive={this.handleSetActive}
                >
                  <p className="li1">About</p>
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="skils"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onSetActive={this.handleSetActive}
                >
                  <p className="li2">Skils</p>
                </Link>
              </li>
            </ul>
          </nav>
        </section>
        <section className="menu2">
          <p
            className="colorme"
            onClick={() => {
              this.changetheme();
            }}
          >
            color me!
          </p>
        </section>
      </div>
    );
  }
}
export default Nav;
