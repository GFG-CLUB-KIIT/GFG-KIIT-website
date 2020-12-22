import React from 'react';
import './App.css';


import BackgroundClipped from './components/BackgroundClipped';
import FooterLanding from './components/FooterLanding';
import BackgroundBlurred from './components/BackgroundBlurred';
import LandingBody from './components/LandingBody';
import ProjectSection from './components/ProjectSection';

class App extends React.Component {
  render() {
    return (
       <div>
          <BackgroundClipped></BackgroundClipped>
          <FooterLanding></FooterLanding>
       </div>
    );
  }
}

export default App;
