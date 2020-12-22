import React, { Component } from 'react'
import '../css/landingBody.css';

class ProjectSection extends Component {
   render() {
      return (
         <div className="set-pos">
            <h1 class="upcomingEvent">Upcoming Event</h1>
            <div className="flex-container">
               <div className="img-container"></div>
               <div className="event-context">
                  <h1 className="event_title">Event Title</h1>
                  <p className="event_desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam ducimus, amet voluptates, impedit iusto natus cupiditate, dolor, similique quaerat ut magni soluta libero asperiores laudantium obcaecati accusantium. Eligendi, ipsa, expedita! Lorem ipsum dolor sit amet, consectetur adipisicing elit. In amet eaque distinctio porro totam, facilis eos velit dignissimos, aspernatur quisquam deleniti quaerat id alias temporibus dolor ipsum maxime? Animi, dicta!</p>
                  <button id="event_button"><a href="#">Register Now</a></button>
               </div>
            </div>
         </div>
      )
   }
}
export default ProjectSection;