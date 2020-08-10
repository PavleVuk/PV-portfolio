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
      <p>Hello, I am Pavle, a student of Master Informational Technology who loves technology, computers, smartphones and everything about it. I love programming, both front-end and back-end. I'm mostly front-end oriented currently.</p>
     
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

