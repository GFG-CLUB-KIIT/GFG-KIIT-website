import React from 'react'
import Background from './Background';
import FooterLanding from './Footer';
import PastEvents from './slick-slider/PastEvents';
import {Helmet} from 'react-helmet';

function Events() {
   return (
      <div>
         {/* <!-- Dynamic Title --> */}
         <Helmet>
               <title>Geeksforgeeks | KIIT - Events</title>
         </Helmet>
         <Background clipType="clipping-events" overlayColor="bgcolor-events"></Background>
         <div id="Events_title">
            <div style={{fontWeight: "600", fontSize: "35px"}}>Events</div><br></br>
            Events are what make a club flourish, connect people, and provide an individual the opportunity to assert their identities.
         </div>
         <PastEvents></PastEvents>
         <FooterLanding bgColor="footer-events"></FooterLanding>
      </div>
   )
}
export default Events;