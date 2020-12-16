import React, { Component } from 'react'

class BackgroundBlurred extends Component {
   render() {
      return (
         <div>

            <div class="blend-mode landing-blurred"></div>
            <canvas id="stage"></canvas>
         </div>
      );
   }
}

export default BackgroundBlurred