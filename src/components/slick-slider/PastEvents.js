import React, { Component } from 'react'
import Slider from 'react-slick'
import './MainEvents.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
// import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
// import Icon from '@material-ui/core/Icon';

export default class PastEvents extends Component {
   render() {
      const settings={
         dots: true,
         infinite: false,
         speed: 500,
         slidesToShow: 1,
         slidesToScroll: 1,
         vertical:true,
      };
   
      // };
      // document.getElementById('#next').addEventListener("click",()=>{
      //    document.getElementById("#event-slider").slick("slickNext");
      // });
      // document.getElementById('#prev').addEventListener("click",()=>{
      //    document.getElementById("#event-slider").slick("slickPrev");
      // });

      
      return (
         <div className="event-slider-main" onLoad={this.createHandler}>
              {/*Redundant Code may implement in the future  */}
         
               {/* <div className="slider-arrows">
                  <button className="arrow-down arrow" id="next">
                     <ArrowForwardIosIcon style={{fontSize: 30, color: "#999", padding: "5px 5px 0 5px"}} className="arrow-icon "></ArrowForwardIosIcon>
                  </button>
                  <button className="arrow-up arrow" id="prev">
                     <ArrowBackIosIcon style={{fontSize: 30, color: "#999", padding: "5px 0 0 10px"}} className="arrow-icon "></ArrowBackIosIcon>
                  </button>
               </div> */}
               
            <Slider {...settings} id="event-slider">
                  {/*  */}
                  
               <section className="event-1">
                  <div className="flex-container">
                     <div className="text-container">
                        <p>
                           Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                           Reiciendis nesciunt eveniet iusto tenetur, impedit ex
                           obcaecati similique ad molestiae animi vel voluptates quo,
                           dignissimos ullam omnis in dicta et perspiciatis beatae
                           labore deleniti! Voluptatem expedita, enim esse quia
                           nostrum eius, veritatis culpa itaque nihil magni dicta quos
                           soluta maiores deserunt?
                        </p>
                     </div>
                     <div className="img-container one"></div>
                  </div>
               </section>
               <section className="event-2">
                  <div className="flex-container">
                     <div className="text-container">
                        <p>
                           Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                           Reiciendis nesciunt eveniet iusto tenetur, impedit ex
                           obcaecati similique ad molestiae animi vel voluptates quo,
                           dignissimos ullam omnis in dicta et perspiciatis beatae
                           labore deleniti! Voluptatem expedita, enim esse quia
                           nostrum eius, veritatis culpa itaque nihil magni dicta quos
                           soluta maiores deserunt?
                        </p>
                     </div>
                     <div className="img-container two"></div>
                  </div>
               </section>
               <section className="event-3">
                  <div className="flex-container">
                     <div className="text-container">
                        <p>
                           Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                           Reiciendis nesciunt eveniet iusto tenetur, impedit ex
                           obcaecati similique ad molestiae animi vel voluptates quo,
                           dignissimos ullam omnis in dicta et perspiciatis beatae
                           labore deleniti! Voluptatem expedita, enim esse quia
                           nostrum eius, veritatis culpa itaque nihil magni dicta quos
                           soluta maiores deserunt?
                        </p>
                     </div>
                     <div className="img-container three"></div>
                  </div>
               </section>
            </Slider>
         </div>
      )

      
   }
}
// export default PastEvents
