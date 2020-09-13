import React, { Component } from "react";
import Social from "./Social";
import Avatar from "../pics/avatar.png";
import Skills from "./Skills.js";
import Projects from "./Projects.js";
import About from "./About.js";
import Contact from "./Contact.js";

class Landing extends Component {
  render() {
    return (
      <div className="landing" style={{ width: "100%", margin: "auto" }}>
        {/*<img 
      src={Avatar}
      alt="avatar"
      className="avatar"
      />*/}
        <div className="banner-text">
          <div className="line">
            Hi, I am <span>Pavle Vukajlovic</span>{" "}
          </div>
          <div className="line">
            <h1>I Strive To Get Better At Coding</h1>
          </div>
          <Social />
          <div className="line">
            Tech Enthusiast / <span>IT Student</span>{" "}
          </div>
          <h2></h2>
          {/*<h1> IT student / Tech enthusiast</h1>
      <p>Hello, I am Pavle, a student of Master Informational Technology who loves technology, computers, smartphones and everything about it. I love programming, both front-end and back-end. I'm mostly front-end oriented currently.</p>
      <p>You can contact me or take a look at my work:</p>
      */}
        </div>
        <Projects />
        <About />
        <Skills />
        <Contact />
      </div>
    );
  }
}
export default Landing;
