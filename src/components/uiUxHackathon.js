import React from 'react'
import FooterLanding from './Footer';
import {Helmet} from 'react-helmet';
import { render } from '@testing-library/react';
import background from '../img/uiux/background.png';
import hand from '../img/uiux/hand.png';
import design from '../img/uiux/Vector.png';
import '../css/uiux.css'
class uiUxHackathon extends React.Component {
    render()
    {
        return (
           
            <div className="background">
            
              <div className="wrapper">
                <img className="hand" src={hand} alt=""/>
                <div className="wrapper">
                    <div className="head">Geeks Design Hackathon</div>
                    <div className="subhead">A design Hackathon exclusively for KIIT students </div>
                    <button className="btn">Register Now</button>
                </div>
                <img className="design" src={design} alt=""/>
              </div>
            </div>
           
        )
    }
   
}

export default uiUxHackathon;
