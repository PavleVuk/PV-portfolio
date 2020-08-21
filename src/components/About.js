import React, { Component } from 'react';
import Less from '../pics/less.jpg';

class About extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
         <center>
          <div className="container about">
          <div className=" languagesrow">
            <h2> More about me: </h2>
            <p>As you may have seen already, I am still a student pursuing masters degree of Informational technology, I am half way done. 
              I am mostly front-end oriented, but I did few back-end projects too. </p>
            <h3>Languages I used so far:</h3>
          <div className="languages">
          <div className="lang">
          <img src="https://img.icons8.com/color/48/000000/html-5.png"alt="html logo" height="44"/>HTML&nbsp; 
          </div>
          <div className="lang">
          <img src="https://img.icons8.com/color/48/000000/css3.png"alt="CSS logo" height="44"/>CSS&nbsp; 
          </div><div className="lang">
          <img src={Less} alt="Less logo" height="44"/>Less&nbsp; 
          </div>
          <div className="lang">
          <img src="https://img.icons8.com/color/48/000000/javascript.png" alt="JS logo" height="44"/>Javascript&nbsp; 
          </div>
          <div className="lang">
          <img src="https://img.icons8.com/color/48/000000/bootstrap.png" alt="Bootstrap logo" height="44"/>Bootstrap&nbsp; 
          </div>
          <div className="lang">
          <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="React logo" height="44"/>React&nbsp; 
          </div>
          <div className="lang">
          <img src="https://img.icons8.com/dusk/64/000000/php-logo.png" alt="PHP logo" height="44"/>PHP&nbsp; 
          </div>
          <div className="lang">
          <img src="https://img.icons8.com/color/48/000000/mysql.png" alt="MySQL logo" height="44"/>MySQL&nbsp; 
          </div>
          <div className="lang">
          <img src="https://img.icons8.com/color/48/000000/c-sharp-logo-2.png" alt="C# logo" height="44"/>C#&nbsp; 
          </div>
          <div className="lang">
          <img src="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png" alt="C++ logo" height="44"/>C++&nbsp; 
          </div>
          <div className="lang">
          <img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png" alt="java logo" height="44"/>Java&nbsp; 
          </div>
          </div>
          <h3 >Dev tools I used:</h3>
          <div className="devtools">
          <div className="lang">
          <img src="https://img.icons8.com/color/48/000000/bitbucket.png"alt="BitBucket logo" height="44"/>BitBucket&nbsp; 
          </div>
          <div className="lang">
          <img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Github logo" height="44"/>Github&nbsp; 
          </div>
          <div className="lang">
          <img src="https://img.icons8.com/color/48/000000/git.png" alt="Git logo" height="44"/>Git&nbsp; 
          </div>
          <div className="lang">
          <img src="https://img.icons8.com/color/48/000000/npm.png" alt="Npm logo" height="44"/>NPM&nbsp; 
          </div>
          <div className="lang">
          <img src="https://img.icons8.com/color/48/000000/visual-studio-code-2019.png"alt="VS Code logo" height="44"/>Visual Studio Code&nbsp; 
          </div>
          <div className="lang">
          <img src="https://img.icons8.com/color/48/000000/visual-studio-2019.png" alt="VS logo" height="44"/>Visual Studio &nbsp; 
          </div>
          </div>
          </div>
          </div>
          </center>
          </div>
    )
  }
}

export default About;
