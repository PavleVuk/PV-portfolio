import React, { Component } from "react";
import { Button } from "react-mdl";
import Less1 from "../pics/Lessindex.png";
import Less2 from "../pics/Lessservis.png";
import Less3 from "../pics/Lesskasa.png";
import Less4 from "../pics/Lesshosting.png";
import Less5 from "../pics/Lesskontakt.png";
import Less6 from "../pics/Lessregi.png";
import Less7 from "../pics/Lesspopravka.png";
import Less8 from "../pics/Lesskonf.png";
class ProjectLess extends Component {
  render() {
    return (
      <div className="project">
        <h1 className="h1notop">Internship website project</h1>
        <p>
          This is a simple project I made for university exam as intern in local
          IT company. It is a website inspired by current website of this IT
          company written using HTML/Less. This website is smartwatch
          responsive.
        </p>
        <p>
          You can check the code here :
          <Button
            href="https://github.com/PavleVuk/Less"
            color="primary"
            className="belodugme"
          >
            GitHub
          </Button>
          <Button
            href="https://bitbucket.org/pavlev/less-sajt/src/master/"
            color="primary"
            className="belodugme"
          >
            BitBucket
          </Button>
        </p>
        <div className="containerpr">
          <div className="leftp">
            <h3>Home page</h3>
            <br />
            <p> </p>
          </div>
          <div>
            <img src={Less1} className="img3" alt="" />
          </div>
        </div>

        <div className="containerpl">
          <div>
            <img src={Less2} className="img4" alt="" />
          </div>
          <div className="rightp">
            <h3>Service page</h3>
            <br />
            <p></p>
          </div>
        </div>
        <div className="containerpr">
          <div className="leftp">
            <h3>Cash register page</h3>
            <br />
            <p> </p>
          </div>
          <div>
            <img src={Less3} className="img3" alt="" />
          </div>
        </div>

        <div className="containerpl">
          <div>
            <img src={Less4} className="img4" alt="" />
          </div>
          <div className="rightp">
            <h3>Hosting page </h3> <br />
            <p> </p>
          </div>
        </div>

        <div className="containerpr">
          <div className="leftp">
            <h3>Contact page</h3>
            <br />
            <p> </p>
          </div>
          <div>
            <img src={Less5} className="img3" alt="" />
          </div>
        </div>

        <div className="containerpl">
          <div>
            <img src={Less6} className="img4" alt="" />
          </div>
          <div className="rightp">
            <h3>Registration page </h3> <br />
            <p>I created simple registration form for this website. </p>
          </div>
        </div>

        <div className="containerpr">
          <div className="leftp">
            <h3>Repair calculator</h3>
            <br />
            <p>
              For this calculator, I used JS to pass options in html option tags
              and to calculate prices of certain computer problems. Depending on
              service user chooses, price is automatically displayed.
            </p>
          </div>
          <div>
            <img src={Less7} className="img3" alt="" />
          </div>
        </div>

        <div className="containerpl">
          <div>
            <img src={Less8} className="img4" alt="" />
          </div>
          <div className="rightp">
            <h3>Configuration page </h3> <br />
            <p>
              I also used JS to create objects for every html option tag and to
              display their prices in html p tags and to calculate price of all
              components in last input field.{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default ProjectLess;
