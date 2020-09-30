import React, { Component } from "react";
import { Link, HashRouter } from "react-router-dom";
import {
  Layout,
  Header,
  Navigation,
  Content,
  Footer,
  FooterLinkList,
} from "react-mdl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faBitbucket,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileDownload } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import Main from "./components/main.js";
import ScrollToTop from "./components/ScrollToTop.js";

class App extends Component {
  render() {
    return (
      <HashRouter>
        {/*koristi URL hash, i nije limitiran za pojedine pregledače i nije ograničen na single page aplikacije */}
        <ScrollToTop />
        <div style={{ height: "300px", position: "relative" }}>
          <Layout fixedHeader>
            <Header
              className="header-color"
              title={
                <span>
                  <span style={{ color: "#ddd" }}> </span>
                  <strong> &lt; Pavle V. / &gt;</strong>
                </span>
              }
            >
              <Navigation>
                <Link to="/">Home</Link>
                <Link to="/projectphp">PHP Project</Link>
                <Link to="/projectless/">Less Project</Link>
                <Link to="/projectAndroid/">Android project</Link>
                <Link to="/projectJava/">Java project</Link>
              </Navigation>
            </Header>
            <Content>
              <Main />
              <Footer size="mini">
                <div className=" footersocial">
                  <a
                    href="https://github.com/PavleVuk"
                    className="github social"
                  >
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                  </a>
                  <a
                    href="https://bitbucket.org/pavlev/"
                    className="bitbucket social"
                  >
                    <FontAwesomeIcon icon={faBitbucket} size="2x" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/pavle-vukajlovic-532b54174/"
                    className="linkedin social"
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </a>
                  <a href="mailto:pavlevuk7@gmail.com" className="mail social">
                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                  </a>
                  <a
                    href="https://drive.google.com/file/d/15guqRszGizFDP_YgEXbhgNbvjRtBHHsm/view?usp=sharing"
                    className="mail social"
                  >
                    <FontAwesomeIcon icon={faFileDownload} size="2x" />
                  </a>
                </div>
                <FooterLinkList>
                  <Navigation>
                    <Link to="/">Home</Link>
                    <Link to="/projectphp">PHP Project</Link>
                    <Link to="/projectless/">Less Project</Link>
                    <Link to="/projectAndroid/">Android project</Link>
                    <Link to="/projectJava/">Java project</Link>
                  </Navigation>
                </FooterLinkList>
              </Footer>
            </Content>
          </Layout>
        </div>
      </HashRouter>
    );
  }
}
export default App;
