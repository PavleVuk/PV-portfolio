import React, { Component } from "react";
import { Button } from "react-mdl";
import img1 from "../pics/Anaslovna.png";
import img2 from "../pics/Auredjaji.png";
import img3 from "../pics/Apixel.png";
import img4 from "../pics/Aregistracija.png";
import img5 from "../pics/Apreporuka.png";
class Projectimg extends Component {
  render() {
    return (
      <div className="project">
        <h1 className="h1notop"> "Android blog" university exam website</h1>
        <p>
          This is website of my university exam I created. It features parallax,
          as main way of displaying content.It has few simple pages, most of
          them have parallax. It also features registration and login form, and
          "recommend me a phone" form. Besides that, I used cookies for saving
          registration form entries and automatically display them in login form
          after sucessfull registration.
        </p>
        <p>
          You can check the code here :
          <Button
            href="https://github.com/PavleVuk/Android-blog"
            color="primary"
            className="belodugme"
          >
            GitHub
          </Button>
          <Button
            href="https://bitbucket.org/pavlev/android-blog-js/src/master/"
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
            <img src={img1} className="img3" alt="" />
          </div>
        </div>

        <div className="containerpl">
          <div>
            <img src={img2} className="img4" alt="" />
          </div>
          <div className="rightp">
            <h3>Devices page</h3>
            <br />
            <p></p>
          </div>
        </div>
        <div className="containerpr">
          <div className="leftp">
            <h3>Pixel 2 page</h3>
            <br />
            <p> </p>
          </div>
          <div>
            <img src={img3} className="img3" alt="" />
          </div>
        </div>

        <div className="containerpl">
          <div>
            <img src={img4} className="img4" alt="" />
          </div>
          <div className="rightp">
            <h3>Registration form </h3> <br />
            <p> </p>
          </div>
        </div>

        <div className="containerpr">
          <div className="leftp">
            <h3>"Recommend me a phone" page</h3>
            <br />
            <p> </p>
          </div>
          <div>
            <img src={img5} className="img3" alt="" />
          </div>
        </div>
      </div>
    );
  }
}
export default Projectimg;
