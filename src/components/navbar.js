import React, { Component } from "react";
import logo from "../img/logo.jpeg"

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <input type="checkbox" id="check" />
          <label for="check" className="checkbtn">
            <i className="fas fa-bars"></i>
          </label>
          <label className="logo"></label>
          <ul>
            <li>
              <a href="/home" className="home">
                Home
              </a>
            </li>
            <li>
              <a href="/events" className="event">
                Event
              </a>
            </li>
            <li>
              <a href="/projects" className="projects">
                Projects
              </a>
            </li>
            <li>
              <a href="/about" className="about">
                About Us
              </a>
            </li>
          </ul>
          <a href="#">
            <img src={logo} id="gfglogo" width="120" height="80" />
          </a>
        </nav>
      </div>
    );
  }
}

export default Navbar;
