import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import { SocialIcon } from "react-social-icons";
import data from "../data.json";
import { Link, Element } from "react-scroll";
// import DownIcon from "../components/DownIcon";

class TitlesAndIcons extends Component {
  state={
    color1:"lightblue" ,
    // color2:"#86cec7"
  }

  changetheme = ()=>{
   this.setState({
     color1: this.state.color1==="lightblue"?"#d8e0bb":"lightblue" ,
    //  color2:this.state.color2==="#86cec7" ? "lightgray" : "#86cec7"
   })
   
  }

  render() {
    return (
      <div>
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
     
     <div 
      style={{backgroundColor: this.state.color1}}
      
      >
        <Fullpage className="first" >
        <Element name="AboutAndIcons" className="element el3"/>
          <div>
            <h1 className="fh1">{data.title}</h1>
          </div>

          <div>
            <h2 className="fh2">{data.subtitle}</h2>
          </div>

          <div>
            {Object.keys(data.links).map(key => {
              return <SocialIcon url={data.links[key]} className="si" />;
            })}
          </div>
         
          <div>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={this.handleSetActive}
          >
            <div className="down">
              <img src={require("../images/down.png")} alt="" />
            </div>
          </Link>
           
          <Element name="about" className="element el"/>
          </div>
        </Fullpage>
        
      </div>
    
      </div>
    );
  }
}
export default TitlesAndIcons;
