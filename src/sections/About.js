import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import DownIcon from "../components/DownIcon";
import TitlesAndIcons from "./TitlesAndIcons";
import { Link, Element } from "react-scroll";


class About extends Component {
  render() {
    return (
      <div>
        <Fullpage className="second">
        <h3 className="sh1">{data.sections[0].title}</h3>
        <p className="sp1">{data.sections[0].items[0].content}</p>
       

       <div className="">
       <Link
            activeClass="active"
            to="skils"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={this.handleSetActive}
          >
            <div className="down2">
              <img src={require("../images/down.png")} alt="" />
            </div>
          </Link>
           
          <Element name="skils" className="element el2"/>
       </div>
        </Fullpage>
      </div>
    );
  }
}
export default About;
