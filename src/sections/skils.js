import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import { Link, Element } from "react-scroll";


class Skils extends Component {
  render() {
    return (
      <div>
        <Fullpage className="third">
          <br />
         
         
          
          <h1 className="th1">{data.sections[1].title}</h1>
          <p className="col-8 offset-2">
            <p className="tp1 col-2">
              <img
                src={require("../images/js 1.png")}
                className="img1 col-10"
              />
              <p className="tp3 col-12">Javascript</p>
            </p>
            <p className="tp1 col-2">
              <img
                src={require("../images/react 2.png")}
                className="img1 col-10 "
              />
              <p className="tp3 col-12">React</p>
            </p>
            <p className="tp1 col-2">
              <img
                src={require("../images/css 1.png")}
                className="img1 col-10"
              />
              <p className="tp3 col-12">css</p>
            </p>
          </p>

          <p className="col-8 offset-2">
            <p className="tp2 col-2">
              <img src={require("../images/b 1.png")} className="img1 col-10" />
              <p className="tp3 col-12">Bootstrap</p>
            </p>
            <p className="tp2 col-2">
              <img
                src={require("../images/sass1.jpg")}
                className="img1 col-10"
              />
              <p className="tp3 col-12">SASS</p>
            </p>
            <p className="tp2 col-2">
              <img
                src={require("../images/html2.png")}
                className="img1 col-10"
              />
              <p className="tp3 col-12">HTML</p>
            </p>
          </p>
          <div>
          <Link
            activeClass="active"
            to="AboutAndIcons"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={this.handleSetActive}
          >
            <div className="down3">
              <img src={require("../images/up.png")} alt="" />
            </div>
          </Link>
          </div>
          
        </Fullpage>
      </div> 
    );
  }
}
export default Skils;
