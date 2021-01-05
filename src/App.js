import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import BackgroundClipped from './components/BackgroundClipped';
// import FooterLanding from './components/FooterLanding';
// import BackgroundBlurred from './components/BackgroundBlurred';
// import LandingBody from './components/LandingBody';
// import ProjectSection from './components/ProjectSection';
// import Background from './components/Background';
import Events from './components/Events';
import Projects from './components/Projects';
import AboutUs from './components/AboutUs';
import Landing from './components/Landing';
import PastEvents from './components/slick-slider/PastEvents';
// import RegistrationForm from './compgitonents/RegistrationForm';
class App extends React.Component {
  render() {
    return (
       <div>
          {/* <BrowserRouter>
            <Switch>
              <Route path="/" component={Landing} exact />
              <Route path="/home" component={Landing}/>
              <Route path="/about" component={AboutUs} />
              <Route path="/events" component={Events} />
              <Route path="/projects" component={Projects} />
            </Switch>
          </BrowserRouter> */}
         <PastEvents></PastEvents>
         </div>
    );
  }
}

export default App;
