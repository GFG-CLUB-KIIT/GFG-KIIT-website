import React from 'react';
// import './App.css';
import './css/footer.css';
import './css/navbar.css';
import BackgroundClipped from './components/BackgroundClipped';
import FooterLanding from './components/FooterLanding';
import BackgroundBlurred from './components/BackgroundBlurred';
import LandingBody from './components/LandingBody';
import Navbar from './components/navbar';
import {  BrowserRouter, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
       <div>
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
       </div>
    );
  }
}

export default App;
