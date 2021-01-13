import React, { Component } from 'react';
import logo from '../img/logo.png';
import menu from '../img/menu.png';
import '../css/Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <input type="checkbox" id = "nav_check" />
                <label for = "nav_check" className="nav_checkbtn">
                    <img src={menu} className="fa-bars"/>
                </label>
                <label className = "logo"></label>
                <ul>
                    <li><a href="/" className = "nav_home">Home</a></li>
                    <li><a href="/Events" className = "nav_event">Events </a></li>
                    <li><a href="/Projects" className = "nav_projects">Projects </a></li>
                    <li><a href="/AboutUs" className= "nav_about">About Us </a></li>
                </ul>
                <a href="/"><img src = {logo} id = "nav_gfglogo" /></a>
            </nav>
        )
    }
}

export default Navbar;





