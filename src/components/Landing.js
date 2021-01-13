import React from 'react'
// import Background from './components/Background';
import Background from './Background';
import FooterLanding from './FooterLanding';


function Landing() {
   return (
      <div>
         <Background clipType="clipping-landing" overlayColor="bgcolor-landing"></Background>
          <FooterLanding bgColor="footer-landing"></FooterLanding>
      </div>
   )
}
export default Landing;