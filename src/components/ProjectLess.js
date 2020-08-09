import React, { Component } from 'react';
import Less1 from '../pics/Lessindex.png';
import Less2 from '../pics/Lessservis.png';
import Less3 from '../pics/Lesskasa.png';
import Less4 from '../pics/Lesshosting.png';
import Less5 from '../pics/Lesskontakt.png';
class ProjectLess extends Component {
    render(){
        return(
            <div className="project">
                <h1 className="h1notop">Less Project</h1>
                <p>This is a simple project I made for university exam as intern in local IT company.
                   It is a website inspired by current website of this IT company written using HTML/Less.
                     </p>
               <div className="containerpr">
                    <div className="leftp">
                        <h3>Home page</h3><br/>
                            <p> </p>
                    </div> 
                            <div><img src={Less1} className="img3" alt=""/></div>
                </div>
            
            <div className="containerpl">
                <div><img src={Less2} className="img4" alt=""/></div>
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
                            <div><img src={Less3} className="img3" alt=""/></div>
                </div>

                <div className="containerpl">
                <div><img src={Less4} className="img4" alt=""/></div>
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
                            <div><img src={Less5} className="img3" alt=""/></div>
                </div>
            </div>
               
            
            
        )
        } 
      }
    export default ProjectLess;