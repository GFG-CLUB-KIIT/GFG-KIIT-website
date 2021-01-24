import React, { Component } from 'react';
import logo from './resources/logo-3.svg';
import './navbar.css';

class Navbar extends Component {

   componentDidMount(){
      let navbar= document.getElementById("navbar");
      let footer= document.querySelector(".footer");
      let burgerMenu=document.getElementById("burger-menu");

      let navbarItems= document.querySelectorAll("nav ul li a");
      window.onscroll = () => {
         let vpwidth=window.innerWidth;
         let gfglogo= document.getElementById("nav_gfglogo");

         if(window.scrollY > 50 && footer.getBoundingClientRect().top>1){
            navbar.classList.add("sticky");
            if(vpwidth<500){
               gfglogo.classList.remove("makeBigger");
               gfglogo.classList.add("makeSmaller");
               for(let i=0;i< navbarItems.length; i++)
                  navbarItems[i].style.color="#fefefe";
               
            }
            else{
               for(let i=0;i< navbarItems.length; i++)
                  navbarItems[i].style.color="#333";
            }
            burgerMenu.style.color="#333";

            
         }
         else if(footer.getBoundingClientRect().top<1){
            navbar.classList.remove("sticky");
            burgerMenu.style.color="#fefefe";
            for(let i=0;i< navbarItems.length; i++)
               navbarItems[i].style.color="#fefefe";
         }
         else{
            navbar.classList.remove("sticky");
            if(vpwidth<500){
               gfglogo.classList.remove("makeSmaller");
               gfglogo.classList.add("makeBigger");
            }
            else{
               for(let i=0;i< navbarItems.length; i++)
                  navbarItems[i].style.color="#333";
            }
            burgerMenu.style.color="#333";
         }
         
      }

      let navCheck= document.getElementById("nav_check");
      navCheck.addEventListener("click", ()=>{
         let burger=document.getElementById("burger-menu");
         if(burger.classList.contains("fa-bars")===true){
            if(footer.getBoundingClientRect().top<1){
               burger.style.color="#fefefe";
            }
            else
               burger.style.color="#333";
               burger.classList.remove("fa-bars");
               burger.classList.add("fa-times");
         }
         else if(burger.classList.contains("fa-times")){
            if(footer.getBoundingClientRect().top<1){
               burger.style.color="#fefefe";
            }
            else
               burger.style.color="#333";
               burger.classList.remove("fa-times");
             burger.classList.add("fa-bars");
         }
      });
   } 
   render() {
      return (
         <nav id="navbar"  >
            <input type="checkbox" id = "nav_check" />
            <label className = "logo"><a href="/"><img alt="images" src = {logo} id = "nav_gfglogo" /></a></label>
            <ul>
               <li><a href="/" className = "nav_home">Home</a></li>
               <li><a href="/Events" className = "nav_event">Events </a></li>
               <li><a href="/Projects" className = "nav_projects">Projects </a></li>
               <li><a href="/Member" className= "nav_about">Members </a></li>
            </ul>
            <label for = "nav_check" className="nav_checkbtn" >
               {/* <span class="material-icons" id="burger-menu">
                  menu
               </span> */}
               <i class="fas fa-bars" id="burger-menu"></i>
            </label>
         </nav>
      )
   }
}

export default Navbar;