import React, { Component } from 'react'

class BackgroundClipped extends Component {
   render() {
      return (
         <div class="parent-element">
            <div class="blend-mode landing-clipping-mask"></div>
            <canvas id="stage" class="landing-clipping-mask"></canvas>
         </div>
      );
   }
}

export default BackgroundClipped
