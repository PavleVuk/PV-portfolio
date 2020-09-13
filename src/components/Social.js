import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faBitbucket,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileDownload } from "@fortawesome/free-solid-svg-icons";

class Social extends Component {
  render() {
    return (
      <div className="Social-link">
        <a href="https://github.com/PavleVuk" className="github social">
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </a>
        <a href="https://bitbucket.org/pavlev/" className="bitbucket social">
          <FontAwesomeIcon icon={faBitbucket} size="3x" />
        </a>
        <a
          href="https://www.linkedin.com/in/pavle-vukajlovic-532b54174/"
          className="linkedin social"
        >
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </a>
        <a href="mailto:pavlevuk7@gmail.com" className="mail social">
          <FontAwesomeIcon icon={faEnvelope} size="3x" />
        </a>
        <a
          href="https://drive.google.com/file/d/15guqRszGizFDP_YgEXbhgNbvjRtBHHsm/view?usp=sharing"
          className="mail social"
        >
          <FontAwesomeIcon icon={faFileDownload} size="3x" />
        </a>
      </div>
    );
  }
}
export default Social;
