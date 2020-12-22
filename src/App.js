import React from 'react';
import './App.css';
import './css/footer.css'
import BackgroundClipped from './components/BackgroundClipped';
import FooterLanding from './components/FooterLanding';
import BackgroundBlurred from './components/BackgroundBlurred';
import LandingBody from './components/LandingBody';
// import ProjectSection from './components/ProjectSection';
import RegistrationForm from './components/RegistrationForm'

class App extends React.Component {
  render() {
    return (
       <div>
          <BackgroundClipped></BackgroundClipped>
          <LandingBody></LandingBody>
          {/* The Below Form Will be Linked with Events Section */}
          {/* <RegistrationForm></RegistrationForm> */}
          <FooterLanding></FooterLanding>
       </div>
    );
  }
}

export default App;
