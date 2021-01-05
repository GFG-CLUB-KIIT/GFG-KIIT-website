import React, { Component } from 'react'
import '../css/RegistrationForm.css'

export default class RegistrationForm extends Component {
    render() {
        return (
            <div>
               <div class="container animated bounceInDown">
                  <h1 class="brand "><span><img
                     src="https://raw.githubusercontent.com/bitraylee/GFG-KIIT-web-design/0fb2e7dec9201f8557903436a3e3677525ff6212/gfg-logo.svg"
                     alt="GFG|KIIT"></img></span><span>GeeksforGeeks</span> | KIIT Chapter </h1>

                  <div class="contact">
                     <h1><em class="fas fa-envelope"></em> Register Now!</h1>
                     <form method="" action="">
                           <p>
                              <label>Full Name</label>
                              <input type="text" name="name" placeholder="Enter Name" spellCheck="false"></input>
                           </p>
                           <p>
                              <label>Contact Number</label>
                              <input type="text" name="phone" placeholder="Enter Number" spellCheck="false"></input>
                           </p>
                           <p>
                              <label>Branch</label>
                              <input type="text" name="domain" placeholder="Enter Branch" spellCheck="false"></input>
                           </p>
                           <p>
                              <label>KIIT Mail Id</label>
                              <input type="email" name="email" placeholder="Enter KIIT mail address" spellCheck="false"></input>
                           </p>
                           
                           <p class="full">
                           <label >CodeChef Username</label>
                              <input type="text" name="codechefid" placeholder="Enter CodeChef Username" spellCheck="false"/>
                           </p>
                           <p class="full">
                              <button type="submit">Submit</button>
                           </p>
                     </form>
                  </div>
               </div>
            </div>
        )
    }
}
