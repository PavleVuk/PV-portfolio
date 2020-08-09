import React, { Component } from 'react';
import Social from './Social';
import Avatar from '../pics/avatar.png';
import About from './About.js';
import Projects from './Projects.js';
import Contact from './Contact.js';

class Landing extends Component {
  render() {
    return(
      <div className="landing"style={{width: '100%', margin: 'auto'}}>
      <img 
      src={Avatar}
      alt="avatar"
      className="avatar"
      />
      <div className="banner-text">
      <h1> IT student / Tech enthusiast</h1>
      <p> I am a student of Informational Technology, currently working on getting Master degree in IT. 
           Technology, computers and smartphones are my hobbies since I was a kid. </p>
      <Social/>
      </div>
      <About/>
      <Projects/>
      <Contact/>
        </div>
    )
  }
}
export default Landing;

