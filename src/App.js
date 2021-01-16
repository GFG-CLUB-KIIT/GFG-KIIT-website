import React from 'react';
import Navbar from './components/Navbar/Navbar';
import LandingBody from './components/LandingBody';
import Events from './components/Events';
import Project from './components/Project';
import Member from './components/Member';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import {BrowserRouter, Route , Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
       <div>
         <Navbar></Navbar>
         <BrowserRouter>
            <Switch>
              <Route path="/" exact component={LandingBody} />
              <Route path="/Events" exact component={Events} />
              <Route path="/Projects" exact component={Project} />
              <Route path="/Member" exact component={Member} />
              <Route path="/RegistrationForm" exact component={RegistrationForm} />
              <Route render={()=><div className="main_title_error">404 : Page Not Found</div>} />
            </Switch>
         </BrowserRouter>
       </div>
    );
  }
}

export default App;
