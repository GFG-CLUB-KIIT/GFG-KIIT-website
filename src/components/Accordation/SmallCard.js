import React, { useState } from "react";
import "./SmallCard.css";
import { motion } from "framer-motion";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import FacebookIcon from "@mui/icons-material/Facebook";
import memberDetails from "../memberDetails";

const SmallCard = ({ name, urlImage }) => {
  const [icon, setIcon] = useState(0);

  return (
    <div
      className="smallCard"
      style={{
        backgroundImage: `url(${
          urlImage  ? urlImage : "https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
        })`,
        backgroundRepeat: "no-repeat"
      }}
    >
      <div
        className="socialDetails"

        // initial={{
        //   scale :3,
        //   opacity:0
        // }}
        // whileHover={{
        //   opacity: 2.2,
        //   scale: 1.2 ,
        //   padding:4

        // }}
        // transition={{
        //   type: "spring",
        //   stiffness: 1000,
        //   damping:100
        // }}
      >
        <div className="smallCardTitle">
          <div className="webTitle titleSmall">Web</div>
          <div className="uiTitle titleSmall">UI UX</div>
        </div>
        <div className="smallCardSocial">
          <a>
            <box-icon type="logo" name="github" className="smallCardIcon githubIcon" ></box-icon>

            {/* <GitHubIcon  sx={{ fontSize: 30 }} /> */}
          </a>

          <a>
          <box-icon name='instagram' type='logo' className="smallCardIcon instaIcon" ></box-icon>
            {/* <InstagramIcon className="smallCardIcon instaIcon" sx={{ fontSize: 30 }} /> */}
          </a>
          <a>
          <box-icon name='twitter' type='logo' className="smallCardIcon linkedIcon" ></box-icon>
            {/* <LinkedInIcon className="smallCardIcon linkedIcon" sx={{ fontSize: 30 }} /> */}
          </a>
          
        </div>
      </div>
      <div className="smallCardName">{name}</div>
    </div>
  );
};

export default SmallCard;
