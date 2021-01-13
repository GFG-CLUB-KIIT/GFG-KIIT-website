import React from 'react'
// import Background from './components/Background';
import Background from './Background';
import FooterLanding from './FooterLanding';

function Projects() {
   return (
      <div>
         <Background clipType="clipping-projects" overlayColor="bgcolor-projects"></Background>
         <FooterLanding bgColor="footer-projects"></FooterLanding>
      </div>
   )
}
export default Projects;