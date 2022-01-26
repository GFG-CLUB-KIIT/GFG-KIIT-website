import React, { Component } from 'react'
import Slider from 'react-slick'
import './main-events.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./text-container.css"
import YouTubeIcon from '@material-ui/icons/YouTube';

export default class PastEvents extends Component {
   render() {
      let intViewportWidth = window.innerWidth;
      let flag = intViewportWidth <= 1000 ? false : true;
      const settings={
         dots: true,
         infinite: false,
         speed: 500,
         slidesToShow: 1,
         slidesToScroll: 1,
         vertical:flag,
      };
      return (
         <div id="event-slider-main" onLoad={this.createHandler}>
            <Slider {...settings}>
               <section className="ask-me-anything1 event">
                  <div className="flex-container">
                     <div className="text-container">
                        <h4 style={{fontFamily:"Roboto", color:"#aaa"}}>January 15th, 2022</h4>
                        <div>
                           <h2>
                              Ask Me 
                              <span style={{color: '#575962'}}> Anything</span>
                           </h2>
                           <h3>feat. Chaudhary Hamdan & Swarna Anand</h3>
                        </div>
                        <p>
                           Greetings! GFG KIIT had an amazing AMA Session. Our panelists have cracked internships at the American multinational investment bank and financial services firm, "Goldman Sachs."
                           Chaudhary Hamdan and Swarna Anand had some amazing tips for all the students out there
                           looking to crack their dream companies.
                        </p>
                     </div>
                     <div className="img-container askMeAnything"></div>
                  </div>
               </section>
               <section className="gfg-i-knack event">
                  <div className="flex-container">
                     <div className="text-container">
                        <h4 style={{fontFamily:"Roboto", color:"#aaa"}}>12th March, 2021 - 14th March,2021</h4>
                        <div>
                           <h2>Geek-I-Knack</h2>
                        </div>
                        <p>
                           GFG-KIIT, with other GFG chapters across India, had come up with a super cool innovative event: “Geek-I-Knack”. Geek-i-Knack was a 3-day full-fledged Placement Interview-Drive (from Coding round to HR interview), designed just for Computer Science Geeks, to give them an authentic aid for the much-feared company placements, with help of industry experts, which might ultimately help them in achieving their utmost goal: To bag a dream job in FAANG.
                        </p>
                        {/* <a href="https://practice.geeksforgeeks.org/courses/geek-I-knack" id="register_button" target="_blank" rel="noopener noreferrer">Register Now</a> */}
                     </div>
                     <div className="img-container geekIknack"></div>
                  </div>
               </section>
               <section className="google-hashcode-2021 event">
                  <div className="flex-container">
                     <div className="text-container">
                        <h4 style={{fontFamily:"Roboto", color:"#aaa"}}>24th February, 2021</h4>
                        <div>
                           <h2><span style={{fontWeight : "700"}}>
                              <lable style={{color: "#4285F4"}}>G</lable>
                              <lable style={{color: "#DB4437"}}>O</lable>
                              <lable style={{color: "#F4B400"}}>O</lable>
                              <lable style={{color: "#4285F4"}}>G</lable>
                              <lable style={{color: "#0F9D58"}}>L</lable>
                              <lable style={{color: "#DB4437"}}>E</lable></span>
                              <span style={{fontStyle:"italic",fontWeight:"500"}}>Hashcode</span> <span style={{fontWeight: 500}} className="part-heading">2021</span></h2>
                        </div>
                        <p>
                           GFG KIIT hosting the flagship event, GOOGLE HASHCODE. Starting from registration and ending with the results, all the teams, as well as the participants had fun & a great learning experience.
                           62 teams consisting of 170 students as a whole participated in the Hashcode and bagged scores, culminating in a score that made KIIT-GFG Hub stand 93rd internationally in Hashcode Rankings making all of us proud.
                           We also got the answer to #WhoWillTopTheHashTable, TEAM GRAFF VIVID with a score of  9,271,728 topped the Hash Table of KIIT-GFG Hub.
                           The other teams also performed exceptionally well and proved their sense of team spirit.
                        </p>
                     </div>
                     <div className="img-container google-hashcode-2021"></div>
                  </div>
               </section>
               <section className="dev-cast-ep-3 event">
                  <div className="flex-container">
                     <div className="text-container">
                        <h4 style={{fontFamily:"Roboto", color:"#aaa"}}>31st January, 2021</h4>
                        <div>
                           <h2>Dev<span style={{color: "#4AF686"}}>Cast</span> <span style={{fontWeight: 500}} className="part-heading">E03</span></h2>
                           <h3>feat. Samridhi Mehta</h3>
                        </div>
                        <p>
                           The third episode of our much renowned DevCast series, DevCast E03 was streamed on 31st January 2021. Stealing the limelight was fabulous Samridhi Mehta, a Cloud Engineer at Google. The session saw her share some profound knowledge and experiences about her rollercoaster journey of making it to Google. The live event was a colossal success, all thanks to our viewers for making it clock around 400+ views in total.
                        </p>
                        <button className="youtube-btn">
                           <a href="https://www.youtube.com/watch?v=WaVfNalbTg4" target="_blank" rel="noopener noreferrer">
                              <div className="hover-bg"></div>
                              <YouTubeIcon className="youtube-icon"></YouTubeIcon>
                              <h5>Watch on YouTube</h5>
                           </a>
                        </button>
                     </div>
                     <div className="img-container dev-cast-ep-3-img"></div>
                  </div>
               </section>
               <section className="code-rush-1-2 event">
                  <div className="flex-container">
                     <div className="text-container">
                        <h4 style={{fontFamily:"Roboto", color:"#aaa"}}>23rd January, 2021</h4>
                        <div>
                           <h2>Code<span style={{fontStyle:"italic"}}>Rush</span> <span style={{fontWeight: 500}} className="part-heading">1.2</span></h2>
                        </div>
                        <p>
                           We conducted the sequel of Code Rush on the 23rd of January, 2021.  It helped students brush up their coding skills and understand their position among the other competing coders. They also got a glimpse of their weaknesses and could take measures to work on them.  The top rankers were considered for appearing in the community members' interview of GFG KIIT. It was also a great success for us, and we got the opportunity to expand our team and welcome talented minds
                        </p>
                        <button className="otherEvent-btn">
                           <a href="https://www.codechef.com/RUSH2021   " target="_blank" rel="noopener noreferrer">
                              <div className="hover-bg"></div>
                              <i class="fas fa-code otherEvent-icon"></i>
                              <h5>View Event</h5>
                           </a>
                        </button>
                     </div>
                     <div className="img-container code-rush-1-2-img"></div>
                  </div>
               </section>
               <section className="dev-cast-ep-2 event">
                  <div className="flex-container">
                     <div className="text-container">
                        <h4 style={{fontFamily:"Roboto", color:"#aaa"}}>27th December, 2020</h4>
                        <div>
                           <h2>Dev<span style={{color: "#4AF686"}}>Cast</span> <span style={{fontWeight: 500}} className="part-heading">E02</span></h2>
                           <h3>feat. Shashank Pathak</h3>
                        </div>
                        <p>
                           Our second episode of the DevCast series, DevCast E02 was streamed on 27th December 2020. This time we invited the ex-GeeksforGeeks mentor, Shashank Mishra. The show well really well as the audience got to know everything related to placements and competitive coding. They even got to know his college routine or time management skills. Our viewers also supported us in this endeavor as we got 400+ views on that episode.
                        </p>
                        <button className="youtube-btn">
                           <a href="https://www.youtube.com/watch?v=I6Q1v3D4gyw&t=1195s" target="_blank" rel="noopener noreferrer">
                              <div className="hover-bg"></div>
                              <YouTubeIcon className="youtube-icon"></YouTubeIcon>
                              <h5>Watch on YouTube</h5>
                           </a>
                        </button>
                     </div>
                     <div className="img-container dev-cast-ep-2-img"></div>
                  </div>
               </section>
               <section className="dev-cast-ep-1 event">
                  <div className="flex-container">
                     <div className="text-container">
                        <h4 style={{fontFamily:"Roboto", color:"#aaa"}}>20th December, 2020</h4>
                        <div>
                           <h2>Dev<span style={{color: "#4AF686"}}>Cast</span> <span style={{fontWeight: 500}} className="part-heading">E01</span></h2>
                           <h3>feat. Harsha Singh & Himanshu Tanwar</h3>
                        </div>
                        <p>
                        We streamed our first episode of the DevCast series, DevCast E01 on 20th December 2020. DevCast is a short Talk & QnA session streamed live on our YouTube channel.  We invite renowned coders/engineers who share their journey, experience in the software industry and have an interactive QnA with the audience to clarify their queries. We have invited two of the most recent alumni of KIIT for the session, Harsha Singh and Himanshu Tanwar.
                        </p>
                        <button className="youtube-btn">
                           <a href="https://www.youtube.com/watch?v=w1Fv5JkyI8g" target="_blank" rel="noopener noreferrer">
                              <div className="hover-bg"></div>
                              <YouTubeIcon className="youtube-icon"></YouTubeIcon>
                              <h5>Watch on YouTube</h5>
                           </a>
                        </button>
                     </div>
                     <div className="img-container dev-cast-ep-1-img"></div>
                  </div>
               </section>
               <section className="code-rush-1-1 event">
                  <div className="flex-container">
                     <div className="text-container">
                        <h4 style={{fontFamily:"Roboto", color:"#aaa"}}>10th December, 2020</h4>
                        <div>
                           <h2>Code<span style={{fontStyle:"italic"}}>Rush</span> <span style={{fontWeight: 500}} className="part-heading">1.1</span></h2>
                        </div>
                        <p>
                           We conducted the sequel of Code Rush on the 10th of December 2020.  It helped students brush up their coding skills and understand their position among the other competing coders. They also got a glimpse of their weaknesses and could take measures to work on them.  The top rankers were considered for appearing in the community members' interview of GFG KIIT. It was also a great success for us, and we got the opportunity to expand our team and welcome talented minds
                        </p>
                        <button className="otherEvent-btn">
                           <a href="https://www.hackerearth.com/challenges/college/CodeRush1_1/problems/" target="_blank" rel="noopener noreferrer">
                              <div className="hover-bg"></div>
                              <i class="fas fa-code otherEvent-icon"></i>
                              <h5>View Event</h5>
                           </a>
                        </button>
                     </div>
                     <div className="img-container code-rush-1-1-img"></div>
                  </div>
               </section>
               <section className="code-rush-1-0 event">
               <div className="flex-container">
                     <div className="text-container">
                        <h4 style={{fontFamily:"Roboto", color:"#aaa"}}>8th November, 2020</h4>
                        <div>
                           <h2>Code<span style={{fontStyle:"italic"}}>Rush</span> <span style={{fontWeight: 500}} className="part-heading">1.0</span></h2>
                        </div>
                        <p>
                           We conducted our first coding competition, Code Rush 1.0 on the 8th of November 2020.  It helped students realize their true potential, where they stand among other coders, and how much extra effort they will need to ace coding. The top 3 winners were awarded an invitation code for the GFG-Placement Preparation Course. More than 270 students registered for the contest. All the participants also were given a Coupon Code worth Rs. 300 on various GFG Courses.
                        </p>
                        <button className="otherEvent-btn">
                           <a href="https://www.codechef.com/CRSH2020" target="_blank" rel="noopener noreferrer">
                              <div className="hover-bg"></div>
                              <i class="fas fa-code otherEvent-icon"></i>
                              <h5>View Event</h5>
                           </a>
                        </button>
                     </div>
                     <div className="img-container code-rush-1-0-img"></div>
                  </div>
               </section>
            </Slider>
         </div>
      )

      
   }
}
// export default PastEvents
