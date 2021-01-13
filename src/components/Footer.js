import React, { Component } from 'react'
import '../css/Footer.css'
function Footer(props){
   return ( 
      <div class="parent-element">
         <div className={`footer ${props.bgColor}`}>
            <div class="grid-container">
               <div class="wanna-talk-to-us"><h1>Wanna talk to us?</h1></div>
                  <div class="write-to-us">
                     <form id="contact-us" action="#">
                        <input type="email" id="email" name="email" placeholder="Email"></input>
                        <textarea type="text" id="message" name="messsage" placeholder="Start typing!"></textarea>
                        {/* TODO: style the button */}
                        <div className="send-btn-container"><input type="submit" value="send" className="send"></input></div>
                     </form>
                  </div>
                  <div class="links">
                        <ul class="footer-links flex-container">
                           <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                           <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                           <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                           <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                           <li><a href="#"><i class="fab fa-github"></i></a></li>
                        </ul>
                  </div>
                  <div class="footer-info">
                     <div class="desc">
                        <div class="description1">
                           <p class = "contact strong">Feel free to contact us</p>
                           <br></br>
                           <p>School of Computer</p>
                           <p>Engineering, KIIT</p>
                           <p>University, Bhubaneswar</p>
                           <p>751024</p>
                           <p>Email:  gfgkiit@gmail.com</p>
                           <p>Phone: +91 00000 00000</p>
                           <p>(Veer Sharma)</p>
                           </div>
                        <div>
                        <div class="description2">
                           <p class = "community strong">Community</p>
                           <br></br>
                           <p>asdadsddada</p>
                           <p>GFG KIIT</p>
                           <p>asdas</p>
                        </div>
                        <div class="description3">
                           <p class = "guideline strong">General Guidelines</p>
                           <br></br>
                           <p>Code of</p>
                           <p>Conduct</p>
                           <p></p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>   
         </div>
      </div>

   )
}

export default Footer