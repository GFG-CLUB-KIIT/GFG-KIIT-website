import React from 'react'


function Background(props) {
   console.log(props);
   return (
      <div className="parent-element">
         <div className={`blend-mode ${props.clipType} ${props.overlayColor}`}></div>
         <canvas id="stage" className={`${props.clipType}`}></canvas>
      </div>
   )
}
export default Background;