import React, { useState } from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";


const FormInfo = ({
  title,
  content,
  discordLink,
  instagramLink,
  linkedinLink,
}) => {
  return (
    <>
      <div style={{marginTop:'100px'}} id="card-div">
        <Card id="card" sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography
              className="card-title"
              gutterBottom
              variant="h5"
              component="div"
              fontSize="37px"
            >
              {title}
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              fontSize="15px"
            >
              {content}
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              fontSize="20px"
            >
              Our Links:
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              fontSize="15px"
            >
              <a target="_blank" href={discordLink}>
                Discord
              </a>
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              fontSize="15px"
            >
              <a target="_blank" href={instagramLink}>
                Instagram
              </a>
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              fontSize="15px"
            >
              <a target="_blank" href={linkedinLink}>
                LinkedIn
              </a>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default FormInfo;
