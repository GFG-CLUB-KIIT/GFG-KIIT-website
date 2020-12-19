import React, { Component } from 'react'
import logo from '../img/img-3.jpg';
import style from '../img/style.png';
import '../css/landingBody.css';

class LandingBody extends Component {
   render() {
      return (
         <div class="parent-element">
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
          <h1 id="upcomingEvent">Projects</h1>
          <div id="projects">
              <a href="#" class="project_card">
                  <div class="project_img">
                      <img src={logo} />
                  </div>
                  <div class="project_title">Project Title</div>
                  <div class="project_desc">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi alias natus impedit beatae et! Corporis reprehenderit, quam optio quidem illo.
                  </div>
              </a>
              <a href="#" class="project_card">
                  <div class="project_img">
                      <img src={logo} />
                  </div>
                  <div class="project_title">Project Title</div>
                  <div class="project_desc">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi alias natus impedit beatae et! Corporis reprehenderit, quam optio quidem illo.
                  </div>
              </a>
              <a href="#" class="project_card">
                  <div class="project_img">
                      <img src={logo} />
                  </div>
                  <div class="project_title">Project Title</div>
                  <div class="project_desc">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi alias natus impedit beatae et! Corporis reprehenderit, quam optio quidem illo.
                  </div>
              </a>
          </div>
          <div id="landing_page_style">
            <img src={style} />
          </div>
      </div>
      )
   }
}
export default LandingBody;