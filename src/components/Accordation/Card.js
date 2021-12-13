import React from "react";
import './Card.css'
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import FacebookIcon from '@mui/icons-material/Facebook';
import { motion } from "framer-motion";

const Card = (props) => {
  return (
    <div 
      className="card"
      
    >
      <motion.div className="circleBorder"
        animate={{
          rotate:360,

        }}
        transition={{
          type:"spring",
          stiffness:100,
          damping:200,
          yoyo:Infinity
        }}

      >
        <div className="cardImage"></div>
      </motion.div>
      <div className="cardName">{props.name}</div>
      <div className="cardTitle">UI / UX & Graphic design Team Lead</div>
      <div className="cardSocial">
        <a>
          {/* <GitHubIcon/> */}
        </a>

        <a>
          {/* <InstagramIcon/> */}
        </a>
        <a>
          {/* <TwitterIcon/> */}
        </a>
        <a>
          {/* <LinkedInIcon/> */}
        </a>
        <a>
          {/* <FacebookIcon/> */}
        </a>    
      </div>

      <div className="cardSmallTitles"> 
        <div className="cardSmallTitle title1">UI/UX</div>
        <div className="cardSmallTitle title2">Web Dev</div>

      </div>
    </div>
  );
};

export default Card;
