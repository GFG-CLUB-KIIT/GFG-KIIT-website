import React from 'react';
<<<<<<< HEAD
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import BackgroundClipped from './components/BackgroundClipped';
import FooterLanding from './components/FooterLanding';
import BackgroundBlurred from './components/BackgroundBlurred';
import LandingBody from './components/LandingBody';
// import ProjectSection from './components/ProjectSection';
import Background from './components/Background';
import Events from './components/Events';
import Projects from './components/Projects';
import AboutUs from './components/AboutUs';
import Landing from './components/Landing';
=======
// import './App.css';
import './css/footer.css';
import './css/navbar.css';
import BackgroundClipped from './components/BackgroundClipped';
import FooterLanding from './components/FooterLanding';
import BackgroundBlurred from './components/BackgroundBlurred';
import LandingBody from './components/LandingBody';
import Navbar from './components/navbar';
import {  BrowserRouter, Route, Switch } from "react-router-dom";

>>>>>>> upstream/master
class App extends React.Component {
  render() {
    return (
       <div>
<<<<<<< HEAD
          <BrowserRouter>
            <Switch>
              <Route path="/" component={Landing} exact />
              <Route path="/home" component={Landing}/>
              <Route path="/about" component={AboutUs} />
              <Route path="/events" component={Events} />
              <Route path="/projects" component={Projects} />
            </Switch>
          </BrowserRouter>
=======
          <Navbar></Navbar>
          <BackgroundClipped></BackgroundClipped>
          <BrowserRouter>
            <Switch>
              <Route path="/home" component={LandingBody} />
              <Route path="/" exact component={LandingBody} />
              <Route render={() => <h1>404: page not found</h1>} />
            </Switch>
          </BrowserRouter>
          <FooterLanding></FooterLanding>
>>>>>>> upstream/master
       </div>
    );
  }
}

export default App;
