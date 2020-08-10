import React, { Component } from 'react';
import Social from './Social';
import Avatar from './avatar.png';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import JS from './JSp.JPG';
import Lessj from './less.jpg';
import Lessp from './Lessp.JPG';
import PHP from './php.JPG';
import BS from './bs.JPG';
import { Link } from 'react-router-dom'; 

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',           
        email: '',
        message: '',
  }
}
  datum() {
  var datum = new Date().getDate(); 
  var mesec = new Date().getMonth() + 1; 
  var godina = new Date().getFullYear(); 
  var sat = new Date().getHours(); 
  var minut = new Date().getMinutes(); 
  thi.setState({
    datum:
      datum + '/' + mesec + '/' + godina + ' ' + sat + ':' + minut  
  });
}

  handleFormSubmit(event) {
    
    if(!this.state.name)
    {
      alert("Please type your name");
      event.preventDefault();
    }
    else if(!this.state.email)
    {
      alert("Please type your email");
      event.preventDefault();
    }
    else if(!this.state.message)
    {
      alert("Please type your message");
      event.preventDefault();
    }
    else{
      alert("Thanks "+ this.state.name + " for contacting me!" 
      +"Email " + this.state.email +"Message:  "+ this.state.message + "    "+"Datum:" +  this.state.datum) ;
    }             
  }
  
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
      <p> Hello, I am Pavle, a student of Master Informational Technology who loves technology, computers, smartphones and everything about it. I love programming, both front-end and back-end. I'm mostly front-end oriented currently.</p>
      <Social/>
      </div>
      <About/>
      <div style={{width: '100%', margin: 'auto'}}>
      <center>
       <div className="container about">
       <div className=" languagesrow">
         <h3> More about me:</h3>
         <p>As you may have seen already, I'm still a student pursuing masters degree of Informational technology, i'm at the end of first year, got one more year to go. 
           I'm mostly front-end oriented, but did few back-end projects too. </p>
         <h4>Languages I know:</h4>
       <div className="languages">
       <div className="lang">
       <img src="https://img.icons8.com/color/48/000000/html-5.png"alt="html logo" height="44"/>HTML&nbsp; 
       </div>
       <div className="lang">
       <img src="https://img.icons8.com/color/48/000000/css3.png"alt="CSS logo" height="44"/>CSS&nbsp; 
       </div><div className="lang">
       <img src={Lessj} alt="Less logo" height="44"/>Less&nbsp; 
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
      </div> <h4 >Dev tools I used:</h4> 
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
       <div className="projects-grid">
          <h1>My recent projects:</h1> 
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle className="card" style={{background: "url("+ JS+") top / cover" , filter: "blur(0.4px)"}} >HTML/CSS/JS Project </CardTitle>
            <CardText>
              This is a project for university exam. It's a website about smartphones. It also has a "recommend me a phone" option I made using Javascript.
              You choose what parameters of phone are important for you, and it gives a phone recommendation. 
              Javascript is also used to validate registration form with cookies, and cookies that remember username and password for login form.
            </CardText>
            <CardActions border>
            <Button href="https://bitbucket.org/pavlev/android-blog-js/src/master/" color="primary">BitBucket</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle className="card" style={{background: "url("+ Lessp +") top / cover"}} >Less Project</CardTitle>
            <CardText>
           This is an website I created while I was intern in local IT company. It's theirs website look alike website created using Less preprocessors language. 
           It's just a simple website, created in minimalistic design. It's also responsive for all devices, 
           including smartwatches which was my first encounter with smartwatch responsiveness.
            </CardText>
            <CardActions border>
            <Button href="https://bitbucket.org/pavlev/less-sajt/src/master/" color="primary">BitBucket</Button>
            <Link to="/projectLess"><Button color="primary ">Read more</Button></Link>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle className="card" style={{background: "url("+ BS+") top / cover"}} >Bootstrap project</CardTitle>
            <CardText>
              This is also a project I created for university exam. I used Bootstrap to create replica web site of university. 
            </CardText>
            <CardActions border>
            <Button href="https://bitbucket.org/pavlev/bootstrap-sajt/src/master/" color="primary">BitBucket</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle className="card" style={{background: "url("+ PHP+") top / cover"}} >PHP project</CardTitle>
            <CardText>
              This is also a project I created for university exam. 
              I used native PHP with some HTML/CSS and MySQL database for this project. It's like a database manager for mobile phone shop. 
            </CardText>
            <CardActions border>
            <Button href="https://bitbucket.org/pavlev/php2/src/master/" color="primary">BitBucket</Button>
            <Link to="/projectPHP"><Button color="primary ">Read more</Button></Link>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
        <div className="formdiv">
               <h3> Contact me</h3>
        <form className="form" onSubmit={this.handleSubmit}>
            <label> Name: <br/>
                <input type="text" 
                    name="name" 
                    value={this.state.name} 
                    onChange={e => this.setState({name: e.target.value})}
                    placeholder="Type your name"/></label><br/>
            <label> Email: <br/>
                <input type="text" 
                    name="email" 
                    value={this.state.email} 
                    onChange={e => this.setState({email: e.target.value})}
                    placeholder="Type your email"/></label><br/>
            <label> Message:<br/>
            <textarea 
            name="message"
            value={this.state.message} 
            onChange={e => this.setState({message: e.target.value})}
            placeholder="Type your message. I'm looking forward to read it!"/>
            </label><br/>
            <input type="submit" 
            value="Submit"
            onClick={e => this.handleFormSubmit(e)} />
        </form>
        </div>
       </div>
    // </div>
    )
  }
}
export default Landing;

class About extends Component {
    render() {
      return(
        <div style={{width: '100%', margin: 'auto'}}>
        <center>
         <div className="container about">
         <div className=" languagesrow">
           <h3> More about me:</h3>
           <p>As you may have seen already, I'm still a student pursuing masters degree of Informational technology, i'm at the end of first year, got one more year to go. 
             I'm mostly front-end oriented, but did few back-end projects too. </p>
           <h4>Languages I know:</h4>
         <div className="languages">
         <div className="lang">
         <img src="https://img.icons8.com/color/48/000000/html-5.png"alt="html logo" height="44"/>HTML&nbsp; 
         </div>
         <div className="lang">
         <img src="https://img.icons8.com/color/48/000000/css3.png"alt="CSS logo" height="44"/>CSS&nbsp; 
         </div><div className="lang">
         <img src={Lessj} alt="Less logo" height="44"/>Less&nbsp; 
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
        </div> <h4 >Dev tools I used:</h4> 
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