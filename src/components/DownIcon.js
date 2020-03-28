import React, {Component} from "react";
import { Link, Element } from "react-scroll";

class DownIcon extends Component{
    render(){
        return(
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
        )
    }
}

export default DownIcon;