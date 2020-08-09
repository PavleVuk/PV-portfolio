import React, {Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faBitbucket,
    faGithub
  } from "@fortawesome/free-brands-svg-icons";

class Social extends Component {
    render() {
      return(
          <div className="Social-link">
            <a href="https://www.linkedin.com/in/pavle-vukajlovic-532b54174/"className="linkedin social">
            <FontAwesomeIcon icon={faLinkedin} size="3x" /></a>
            <a href="https://bitbucket.org/pavlev/"className="bitbucket social">
            <FontAwesomeIcon icon={faBitbucket} size="3x" /></a>
            <a href="https://github.com/PavleVuk"className="github social">
            <FontAwesomeIcon icon={faGithub} size="3x" /></a>
          </div>
          
      )
    }
}
export default Social;