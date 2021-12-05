import React, { Component } from 'react';
import logo from './resources/logo-3.svg';
import './navbar.css';
import { Toggle } from '../ToggleSwitch'

class Navbar extends Component {
   componentDidMount(){
      const body = document.querySelector("body");
      const navbar = document.getElementById("navbar-main");
      const menu = document.querySelector(".menu-list");
      const menuBtn = document.getElementById("burger-menu");
   
      const logo= document.querySelector(".gfg-logo");
      // var listItem=menu.querySelectorAll(".list-item");
      window.onscroll = ()=>{
         if (window.scrollY > 20){
            // navbar.classList.add("sticky");
            logo.classList.add("make-smaller");
            // listItem.style.color="#fefefe";
         }
         else{
            // navbar.classList.remove("sticky");
            logo.classList.remove("make-smaller");
            // listItem.style.color="#343434";
         }
      }

      //Animation for the menu btn
      var currentState="menu";
      let line1= document.getElementById("line-1");
      let line2= document.getElementById("line-2");
      let line2Container=document.getElementById("line-2-container");
      let line3= document.getElementById("line-3");
      
      menuBtn.addEventListener("click",()=>{
         if(currentState==="menu"){
            line1.classList.add("cross-state-1");
            line2Container.classList.add("cross-state-2");
            line2.classList.add("cross-state-2");
            line3.classList.add("cross-state-3");
            
            menu.classList.add("active");
            menuBtn.classList.add("hide");
            body.classList.add("disabledScroll");
            currentState="cross"
         }
         else{
            line1.classList.remove("cross-state-1");
            line2Container.classList.remove("cross-state-2");
            line2.classList.remove("cross-state-2");
            line3.classList.remove("cross-state-3");
            menu.classList.remove("active");
            menuBtn.classList.remove("hide");
            body.classList.remove("disabledScroll");
            currentState="menu";
         }
      
      });

   }
   render() {
      return (
         <nav class="navbar" id="navbar-main">
            <div class="content">
              <div class="logo"><a href="/"><img className="gfg-logo" src={logo} alt="logo"></img></a></div>
                  <ul class="menu-list"> 
                     <li><a href="/" className = "nav_home list-item">Home</a></li>
                     <li><a href="/Events" className = "nav_event list-item">Events </a></li>
                     <li><a href="/Projects" className = "nav_projects list-item">Projects </a></li>
                     <li><a href="/Member" className= "nav_about list-item">Members </a></li>
                     {/* <li>/></li> */}
                     <Toggle />
                     {/* <li> <label class="switch"><input type="checkbox"></input><span class="slider round"></span></label></li> */}
                     
                  </ul>
               <div class="burger-menu" id="burger-menu">
                  <div class="line-1" id="line-1"></div>
                  <div class="line-2-container" id="line-2-container">
                     <div class="line-2" id="line-2"></div>
                  </div>
                  <div class="line-3" id="line-3"></div>
               </div>
            </div>
         </nav>
      )
   }
}

export default Navbar;