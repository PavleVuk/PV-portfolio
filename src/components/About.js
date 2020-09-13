import React, { Component } from "react";
import Avatar from "../pics/avatar.png";
import Social from "./Social";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faBitbucket,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileDownload } from "@fortawesome/free-solid-svg-icons";
class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="aboutleft">
          <h1> About me</h1>
          <p>
            Hello, I am Pavle, a student of Master Informational Technology who
            loves technology, computers, smartphones and everything about it. I
            love programming, both front-end and back-end. As a student, I am
            trying to learn as much as I can and get some coding experience. I
            love challenges and I am always ready for them!
          </p>
          <br />
          <p>You can contact me or take a look at my work:</p>
          <br />
          <div className="aboutsocial">
            <a href="https://github.com/PavleVuk" className="github social">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              href="https://bitbucket.org/pavlev/"
              className="bitbucket social"
            >
              <FontAwesomeIcon icon={faBitbucket} size="2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/pavle-vukajlovic-532b54174/"
              className="linkedin social"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="mailto:pavlevuk7@gmail.com" className="mail social">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
            <a
              href="https://drive.google.com/file/d/15guqRszGizFDP_YgEXbhgNbvjRtBHHsm/view?usp=sharing"
              className="mail social"
            >
              <FontAwesomeIcon icon={faFileDownload} size="2x" />
            </a>
          </div>
        </div>
        <div className="aboutright">
          <img src={Avatar} alt="avatar" className="avatar" />
        </div>
      </div>
    );
  }
}
export default About;
