import React, { Component } from 'react'
// import Slider from 'react-slick'
import './upcoming-events.module.css'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

class UpcomingEvents extends Component {
   render() {
      // const settings={
      //    dots: true,
      //    infinite: false,
      //    speed: 500,
      //    slidesToShow: 1,
      //    slidesToScroll: 1,
      //    vertical:true,
      // };
   
      
      return (
         <div id="landing">
            {/* <Slider {...settings} id="event-slider">
               
            </Slider> */}
            <section className="landing-event" id="levent-1">
               <div className="img-container"></div>
               <div className="text-container">
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum, justo ut imperdiet luctus, augue massa ornare enim, eget dignissim nulla turpis nec sapien. Duis sed turpis sollicitudin, tempus tortor non, mollis eros. Nam interdum efficitur massa sit amet tristique. Donec eleifend elit vel libero tempor lobortis. Donec molestie eget mauris sit amet varius. 
                  </p>
               </div>
            </section>
         </div>
      )

      
   }
}

export default UpcomingEvents;