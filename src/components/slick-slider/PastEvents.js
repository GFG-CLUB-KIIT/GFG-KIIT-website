import React, { Component } from 'react'
import Slider from 'react-slick'
import './main-events.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./text-container.css"
import YouTubeIcon from '@material-ui/icons/YouTube';
// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
// import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
// import Icon from '@material-ui/core/Icon';

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

      // };
      // document.getElementById('#next').addEventListener("click",()=>{
      //    document.getElementById("#event-slider").slick("slickNext");
      // });
      // document.getElementById('#prev').addEventListener("click",()=>{
      //    document.getElementById("#event-slider").slick("slickPrev");
      // });

      
      return (
         <div id="event-slider-main" onLoad={this.createHandler}>
              {/*Redundant Code may implement in the future  */}
         
               {/* <div className="slider-arrows">
                  <button className="arrow-down arrow" id="next">
                     <ArrowForwardIosIcon style={{fontSize: 30, color: "#999", padding: "5px 5px 0 5px"}} className="arrow-icon "></ArrowForwardIosIcon>
                  </button>
                  <button className="arrow-up arrow" id="prev">
                     <ArrowBackIosIcon style={{fontSize: 30, color: "#999", padding: "5px 0 0 10px"}} className="arrow-icon "></ArrowBackIosIcon>
                  </button>
               </div> */}
               
            <Slider {...settings}>
                  {/*  */}
                  
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
               <section className="code-rush-1-0 event">
               <div className="flex-container">
                     <div className="text-container">
                        <h4 style={{fontFamily:"Roboto", color:"#aaa"}}>8th November, 2020</h4>
                        <div>
                           <h2>Code<span style={{fontStyle:"italic"}}>Rush</span> <span style={{fontWeight: 500}} className="part-heading">1.0</span></h2>
                           {/* <h3>feat. Shashank Pathak</h3> */}
                        </div>
                        <p>
                           We conducted our first coding competition, Code Rush 1.0 on the 8th of November 2020.  It helped students realize their true potential, where they stand among other coders, and how much extra effort they will need to ace coding. The top 3 winners were awarded an invitation code for the GFG-Placement Preparation Course. More than 270 students registered for the contest. All the participants also were given a Coupon Code worth Rs. 300 on various GFG Courses.
                        </p>

                        {/* <button className="youtube-btn">
                           <a href="https://www.youtube.com/watch?v=I6Q1v3D4gyw&t=1195s" target="_blank" rel="noopener noreferrer">
                              <div className="hover-bg"></div>
                              <YouTubeIcon className="youtube-icon"></YouTubeIcon>
                              <h5>Watch on YouTube</h5>
                           </a>
                        </button> */}
                     
                     </div>
                     <div className="img-container code-rush-1-0-img"></div>
                  </div>
               </section>
               <section className="code-rush-1-1 event">
                  <div className="flex-container">
                     <div className="text-container">
                        <h4 style={{fontFamily:"Roboto", color:"#aaa"}}>10th December, 2020</h4>
                        <div>
                           <h2>Code<span style={{fontStyle:"italic"}}>Rush</span> <span style={{fontWeight: 500}} className="part-heading">1.1</span></h2>
                           {/* <h3>feat. Shashank Pathak</h3> */}
                        </div>
                        <p>
                           We conducted the sequel of Code Rush on the 10th of December 2020.  It helped students brush up their coding skills and understand their position among the other competing coders. They also got a glimpse of their weaknesses and could take measures to work on them.  The top rankers were considered for appearing in the community members' interview of GFG KIIT. It was also a great success for us, and we got the opportunity to expand our team and welcome talented minds
                        </p>

                        {/* <button className="youtube-btn">
                           <a href="https://www.youtube.com/watch?v=I6Q1v3D4gyw&t=1195s" target="_blank" rel="noopener noreferrer">
                              <div className="hover-bg"></div>
                              <YouTubeIcon className="youtube-icon"></YouTubeIcon>
                              <h5>Watch on YouTube</h5>
                           </a>
                        </button> */}
                     
                     </div>
                     <div className="img-container code-rush-1-1-img"></div>
                  </div>
               </section>
            </Slider>
         </div>
      )

      
   }
}
// export default PastEvents
