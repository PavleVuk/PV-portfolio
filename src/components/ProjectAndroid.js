import React, { Component } from 'react';
import img1 from '../pics/Anaslovna.png';
import img2 from '../pics/Auredjaji.png';
import img3 from '../pics/Apixel.png';
import img4 from '../pics/Aregistracija.png';
import img5 from '../pics/Apreporuka.png';
class Projectimg extends Component {
    render(){
        return(
            <div className="project">
                <h1 className="h1notop">Internship website project</h1>
                <p>This is a simple project I made for university exam as intern in local IT company.
                   It is a website inspired by current website of this IT company written using HTML/img.
                     </p>
               <div className="containerpr">
                    <div className="leftp">
                        <h3>Home page</h3><br/>
                            <p> </p>
                    </div> 
                            <div><img src={img1} className="img3" alt=""/></div>
                </div>
            
            <div className="containerpl">
                <div><img src={img2} className="img4" alt=""/></div>
                    <div className="rightp">
                        <h3>Service page</h3><br/>
                         <p></p>
                     </div>
            </div>
            <div className="containerpr">
                    <div className="leftp">
                        <h3>Cash register page</h3><br/>
                            <p>  </p>
                    </div> 
                            <div><img src={img3} className="img3" alt=""/></div>
                </div>

                <div className="containerpl">
                <div><img src={img4} className="img4" alt=""/></div>
                    <div className="rightp">
                        <h3>Hosting page </h3> <br/>
                         <p> </p>
                     </div>
            </div>

            <div className="containerpr">
                    <div className="leftp">
                        <h3>Contact page</h3><br/>
                            <p>  </p>
                    </div> 
                            <div><img src={img5} className="img3" alt=""/></div>
                </div>
            </div>
               
            
            
        )
        } 
      }
    export default Projectimg;