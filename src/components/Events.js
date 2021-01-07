import React from 'react'
import Background from './Background';
import FooterLanding from './FooterLanding';
import Navbar from './navbar';
import PastEvents from './slick-slider/PastEvents'

function Events() {
   return (
      <div>
         {/* <Navbar></Navbar> */}
         <Background clipType="clipping-events" overlayColor="bgcolor-events"></Background>
         <PastEvents></PastEvents>
         <FooterLanding bgColor="footer-events"></FooterLanding>
      </div>
   )
}
export default Events;