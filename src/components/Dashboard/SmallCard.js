import React, { useState } from "react";
import "./SmallCard.css";
import { motion } from "framer-motion";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import FacebookIcon from "@mui/icons-material/Facebook";
import memberDetails from "../memberDetails";
import EditIcon from "@mui/icons-material/Edit";
import EditPopup from "./EditPopup";

const SmallCard = ({ name, imageUrl, githubUrl, instaUrl, twitterUrl }) => {
  const [icon, setIcon] = useState(0);
  const [popup, setPopup] = useState(false);
  const edit = ()=>{
    setPopup(!popup);
    console.log(popup);
  }

  return (
    <>
      <div
        className="smallCard"
        style={{
          backgroundImage: `url(${
            imageUrl
              ? imageUrl
              : "https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
          })`,
          backgroundRepeat: "no-repeat",
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
              <EditIcon
                className="smallCardIcon editIcon"
                sx={{ fontSize: 40 }}
                onClick={edit}
              />
              {/* <GitHubIcon  sx={{ fontSize: 30 }} /> */}
            </a>
          </div>
        </div>
        <div className="smallCardName">{name}</div>
      </div>
      {popup ? <EditPopup name={name} imageUrl={imageUrl} setPopup={setPopup} githubUrl={githubUrl} instaUrl={instaUrl} twitterUrl={twitterUrl}/> : ""}
    </>
  );
};

export default SmallCard;
