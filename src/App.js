import React from 'react';
import Navbar from './components/Navbar/Navbar';
import LandingBody from './components/LandingBody';
import Events from './components/Events';
import Project from './components/Project';
import Member from './components/Member';
import Form from "./components/Form/Form ";
import Dashboard from "./components/Dashboard/Dashboard";
import './App.css'; 
import {BrowserRouter, Route , Switch } from 'react-router-dom';


const App = () => {
  const [isAuth, setIsAuth] = React.useState(0);
  return (
    <div className="mainBody">
        <Navbar></Navbar>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={LandingBody} />
            <Route path="/Events" exact component={Events} />
            <Route path="/Projects" exact component={Project} />
            <Route path="/Member" exact component={Member} />
            <Route path="/Form" exact component={Form} />
            <Route path="/Dashboard" exact render={() => isAuth? ( 
                <div className="main_title_error">401 : Page Not Found</div>
              ): <Dashboard/> }/>
            <Route
              render={() => (
                <div className="main_title_error">404 : Page Not Found</div>
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
  )
}



export default App;