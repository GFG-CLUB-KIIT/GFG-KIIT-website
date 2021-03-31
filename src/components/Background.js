import React from 'react'



function Background(props) {
   if(window.innerWidth > 480)
   {
      return (
         <div className="parent-element">
            <div className={`blend-mode ${props.clipType} ${props.overlayColor}`}></div>
            <canvas id="stage" className={`${props.clipType}`}></canvas>
         </div>
      )
   }
   else{
      return(
         <div className="parent-element" id="bg-overlay">
            <div className={`mobile-view ${props.clipType} ${props.overlayColor}`}></div>
         </div>
      )
   }
}
export default Background;