import React, { Component } from 'react'
import logo from '../img/img-3.jpg';
// import '../img/style.png';
import '../css/projectSection.css';

class ProjectSection extends Component {
   render() {
      return (
         <div>
            <h1 id="upcomingEvent">Upcoming Event</h1>
            <div id="event">
               <div id="event_img">
                  <img src={logo} />
               </div>
               <div id="event_context">
                     <div id="event_content">
                        <div id="event_title">Event Title</div>
                        <div id="event_desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam ducimus, amet voluptates, impedit iusto natus cupiditate, dolor, similique quaerat ut magni soluta libero asperiores laudantium obcaecati accusantium. Eligendi, ipsa, expedita! Lorem ipsum dolor sit amet, consectetur adipisicing elit. In amet eaque distinctio porro totam, facilis eos velit dignissimos, aspernatur quisquam deleniti quaerat id alias temporibus dolor ipsum maxime? Animi, dicta!</div>
                     </div>
                     <a href="#" id="event_button">Register Now</a>
               </div>
            </div>
         </div>
      )
   }
}
export default ProjectSection;