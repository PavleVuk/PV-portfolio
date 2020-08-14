import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import JS from '../pics/JSp.JPG';
import PHP from '../pics/php.JPG';
import Java from '../pics/Jsve.JPG';
import Lessp from '../pics/Lessp.JPG';
import { Link } from 'react-router-dom'; 
  class Projects extends Component {
  render(){
      return(
        <div className="projects-grid">
        <h1>My recent projects:</h1> 
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle className="card" style={{background: "url("+ JS+") top / cover" }} >Android blog</CardTitle>
          <CardText>
          This was the project of my university exam. It is a website about smartphones. It also has a "recommend me a phone" option I made using Javascript.
            You choose what phone specifications are important to you, and it gives a phone recommendation. 
            Javascript is also used to validate registration form with cookies, and cookies that remember username and password for login form.
          </CardText>
          <CardActions border>
          <Button href="https://github.com/PavleVuk/Android-blog" color="primary">GitHub</Button>
          <Button href="https://bitbucket.org/pavlev/android-blog-js/src/master/" color="primary">BitBucket</Button>
          <Link to="/projectAndroid"><Button color="primary ">Read more</Button></Link>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle className="card" style={{background: "url("+ Lessp +") top / cover"}} >Internship website project</CardTitle>
          <CardText>
         This is an website I created while I was on internship in local IT company. This is a website i created inspired by their current website using less preprocessers language. 
         It is just a simple website, created in minimalistic design. It is also responsive for all devices, 
         including smartwatches which was my first encounter with smartwatch responsiveness.
          </CardText>
          <CardActions border>
          <Button href="https://github.com/PavleVuk/Less" color="primary">GitHub</Button>
          <Button href="https://bitbucket.org/pavlev/less-sajt/src/master/" color="primary">BitBucket</Button>
          <Link to="/projectLess"><Button color="primary ">Read more</Button></Link>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle className="card" style={{background: "url("+ Java +") top / cover"}} >Java PC store</CardTitle>
          <CardText>
          This was the project of my university exam. I used Java and JavaFX library to make database management application for PC store. 
          </CardText>
          <CardActions border>
          <Button href="https://github.com/PavleVuk/Java-prodavnica" color="primary">GitHub</Button>
          <Button href="https://bitbucket.org/pavlev/bootstrap-sajt/src/master/" color="primary">BitBucket</Button>
          <Link to="/projectJava"><Button color="primary ">Read more</Button></Link>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle className="card" style={{background: "url("+ PHP+") top / cover"}} >Mobile repair shop database manager</CardTitle>
          <CardText>
            This was also the project of my university exam.
            I used native PHP with some HTML/CSS and MySQL database for this project. It's like a database manager for mobile phone shop. 
          </CardText>
          <CardActions border>
          <Button href="https://github.com/PavleVuk/PHP-site" color="primary">GitHub</Button>
          <Button href="https://bitbucket.org/pavlev/php2/src/master/" color="primary">BitBucket</Button>
          <Link to="/projectPHP"><Button color="primary ">Read more</Button></Link>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        </div>
      )
    } 
  }
export default Projects;