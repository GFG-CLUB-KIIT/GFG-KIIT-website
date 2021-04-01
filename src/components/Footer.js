import React from 'react'
import '../css/footer.css'

function FooterLanding(props) {
   return (
      <div class="parent-element">
         <div className={`footer ${props.bgColor}`}>
            <div class="grid-container">
               <div class="wanna-talk-to-us"><h1>Wanna talk to us?</h1></div>
                  <div class="write-to-us">
                     <form id="contact-us">
                        <input type="email" id="email" name="email" placeholder="Email"></input>
                        <textarea type="text" id="message" name="messsage" placeholder="Start typing!"></textarea>
                        <div className="send-btn-container"><input type="submit" value="Send" className="send"></input></div>
                     </form>
                  </div>
                  <div class="links">
                        <ul class="footer-links flex-container">
                           <li><a href="https://www.linkedin.com/company/geeksforgeeks-kiit" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a></li>
                           <li><a href="https://youtube.com/channel/UC281oAcZl0asjjuvmnXh2PQ" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube"></i></a></li>
                           <li><a href="https://github.com/GFG-CLUB-KIIT"  target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a></li>
                           <li><a href="https://twitter.com/ClubGfg?s=08" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter" ></i></a></li>
                           <li><a href="https://instagram.com/gfg_kiit_club?igshid=rnewwd09app3" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a></li>
                        </ul>
                  </div>
                  <div class="footer-info">
                     <div class="desc">
                        <div class="description1">
                           <p class = "contact strong">Feel free to contact us</p>
                           <br></br>
                           <p>GFG KIIT</p>
                           <br></br>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

   )
}

export default FooterLanding