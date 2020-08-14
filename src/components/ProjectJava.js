import React, { Component } from 'react';
import {  Button} from 'react-mdl';
import img1 from '../pics/Jlogin.JPG';
import img2 from '../pics/Jsve.JPG';
import img3 from '../pics/Jzaposleni.JPG';
class Projectimg extends Component {
    render(){
        return(
            <div className="project">
                <h1 className="h1notop"> PC store database manager</h1>
                <p>This is a simple application I made for university exam. I used Java and JavaFX library to create simple database management application with login form. As for managing data, administrator user can insert, update and delete data from database while ordinary employee can only delete data from database and view data.
                     </p>
                     <p>You can check the code here : 
                         <Button href="https://github.com/PavleVuk/Java-prodavnica" color="primary" className="belodugme">GitHub</Button>
                        <Button href="https://bitbucket.org/pavlev/prodavnica/src/master/" color="primary" className="belodugme">BitBucket</Button></p>
               <div className="containerpr">
                    <div className="leftp">
                        <h3>Login form</h3><br/>
                            <p>There are two types of employees: administrator and ordinary employee that can only delete and view data.</p>
                    </div> 
                            <div><img src={img1} className="img3, img5" alt=""/></div>
                </div>
            
            <div className="containerpl">
                <div><img src={img2} className="img4, img5" alt=""/></div>
                    <div className="rightp">
                        <h3>Administrator window</h3><br/>
                         <p>Administrator can insert, update and delete data from database.I managed this simply by putting roles in login table in database. </p>
                     </div>
            </div>
            <div className="containerpr">
                    <div className="leftp">
                        <h3>Ordinary employee window</h3><br/>
                            <p>Ordinary employee can only delete and see data from database. But as my exam had some requirements I made employee can also open full control window by clicking the last button. </p>
                    </div> 
                            <div><img src={img3} className="img3, img5" alt=""/></div>
                </div>
            </div>
        )
        } 
      }
    export default Projectimg;