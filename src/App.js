import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import LandingBody from "./components/LandingBody";
import Events from "./components/Events";
import Project from "./components/Project";
import Member from "./components/Member";
import Form from "./components/Form/Form ";
import Dashboard from "./components/Dashboard/Dashboard";
import DashboardForm from "./components/Dashboard/DashboardForm";
import DashboardMember from "./components/Dashboard/DashboardMember";
import DashboardAccount from "./components/Dashboard/DashboardAccount";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { isAuth } from "./actions/auth";
import AdminLogin from "./components/Auth/AdminLogin";

const App = () => {
  const [isAdmin, setIsAdmin] = useState(0);
  const [firstload, setFirstload] = useState(1);

  useEffect(() => {
    if (isAuth()) {
      setIsAdmin(1);
    } else {
      setIsAdmin(0);
    }
  }, [firstload]);

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
          <Route
            path="/Dashboard"
            exact
            render={() =>
              !isAdmin ? (
                <div className="main_title_error">401 : Page Not Found</div>
              ) : (
                <Dashboard />
              )
            }
          />
          <Route
            path="/Dashboard/Form"
            exact
            render={() =>
              !isAdmin ? (
                <div className="main_title_error">401 : Page Not Found</div>
              ) : (
                <DashboardForm />
              )
            }
          />
          <Route
            path="/Dashboard/Member"
            exact
            render={() =>
              !isAdmin ? (
                <div className="main_title_error">401 : Page Not Found</div>
              ) : (
                <DashboardMember />
              )
            }
          />
          <Route
            path="/Dashboard/Account"
            exact
            render={() =>
              !isAdmin ? (
                <div className="main_title_error">401 : Page Not Found</div>
              ) : (
                <DashboardAccount />
              )
            }
          />
          <Route
            render={() => (
              <div className="main_title_error">404 : Page Not Found</div>
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
