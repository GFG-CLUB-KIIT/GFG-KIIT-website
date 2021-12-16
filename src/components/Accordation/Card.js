import React from "react";
import './Card.css'
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import FacebookIcon from '@mui/icons-material/Facebook';
import { motion } from "framer-motion";

const Card = ({name, leadImageUrl, domain}) => {
  return (
    <div 
      className="card"
      
    >
      <div className="circleBorder">
        <div className="cardImage" style={{backgroundImage: `url(${leadImageUrl  ? leadImageUrl : "https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}></div>
      </div>
      <div className="cardName">{name}</div>
      <div className="cardTitle">{domain}</div>
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

      <div className="cardSmallTitles "> 
      <box-icon type='logo' name='github'></box-icon>
      <box-icon name='twitter' type='logo' ></box-icon>
      <box-icon name='instagram' type='logo'  ></box-icon>

      </div>
    </div>
  );
};

export default Card;
