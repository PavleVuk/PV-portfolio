import React, { Component } from 'react';
import PHP1 from '../pics/Registracija.JPG';
import PHP2 from '../pics/Logout.JPG';
import PHP3 from '../pics/Unos.JPG';
import PHP4 from '../pics/Izmena.JPG';
import PHP5 from '../pics/Pretraga.JPG';
import PHP6 from '../pics/Brisanje.JPG';
class ProjectPHP extends Component {
    render(){
        return(
            <div className="project">
                <h1 className="h1notop">Mobile repair shop database manager</h1>
                <p>This was the simple project of my university exam  I created.
                    It is database of mobile phones clients of mobile repair shop brought for repair. For every mobile phone, there is some information attached to it, 
                    as clients name and ID, mail adress, manufacturer and model of the phone and some more additional informations.
                    I used HTML/CSS, PHP with MySQL database for this project.
                     </p>
               <div className="containerpr">
                    <div className="leftp">
                        <h3>Admin registration page</h3><br/>
                            <p>This is the form for new employs to register their accounts so they can use this software.  </p>
                    </div> 
                            <div><img src={PHP1} className="img3" alt="Aministrator registration form"/></div>
                </div>
             
            <div className="containerpl">
                <div><img src={PHP2} className="img4" alt="Welcome apge"/></div>
                    <div className="rightp">
                        <h3>Welcome page</h3><br/>
                         <p>This is welcome page after employees login, where they can logout if needed to switch to other account.</p>
                     </div>
            </div>
            <div className="containerpr">
                    <div className="leftp">
                        <h3>Input page</h3><br/>
                            <p> This is the main form for input of clients information and mobile phone information for easier tracking. </p>
                    </div> 
                            <div><img src={PHP3} className="img3" alt="Main input form"/></div>
                </div>

                <div className="containerpl">
                <div><img src={PHP4} className="img4" alt=""/></div>
                    <div className="rightp">
                        <h3>Edit page</h3><br/>
                         <p> This page allows employs to edit mobile phone information if it's incorrect.</p>
                     </div>
            </div>

            <div className="containerpr">
                    <div className="leftp">
                        <h3>Search page</h3><br/>
                            <p> Employs can use this page to search for either clients or mobile phones. </p>
                    </div> 
                            <div><img src={PHP5} className="img3" alt="Search form"/></div>
                </div>

                <div className="containerpl">
                <div><img src={PHP6} className="img4" alt=""/></div>
                    <div className="rightp">
                        <h3>Delete page</h3><br/>
                         <p>This is where employees can delete all tables connected to either mobile phone or client.</p>
                     </div>
            </div>
            </div>
        )
        } 
      }
    export default ProjectPHP;