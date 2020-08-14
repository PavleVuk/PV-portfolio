import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './LandingPage.js';
import ProjectPHP from './ProjectPHP.js'
import ProjectLess from './ProjectLess.js'
import ProjectAndroid from './ProjectAndroid.js'
import ProjectJava from './ProjectJava.js'
const Main = () => (
  
  <Switch> {/* Switch pregleda route i prikazuje prvu koja se podudara sa trenutnim URLom*/}
    <Route exact path="/" component={Landing} />
    <Route path="/projectphp" component={ProjectPHP} />
    <Route path="/projectless" component={ProjectLess} />
    <Route path="/projectAndroid" component={ProjectAndroid} />
    <Route path="/projectJava" component={ProjectJava} />
  </Switch>
)
   
  export default Main;
