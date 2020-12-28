import React from 'react'
// import Background from './components/Background';
import Background from './Background';
import FooterLanding from './FooterLanding';


function AboutUs() {
   return (
      <div>
         <Background clipType="clipping-aboutUs" overlayColor="bgcolor-aboutUs"></Background>
         <FooterLanding></FooterLanding>
      </div>
   )
}
export default AboutUs;