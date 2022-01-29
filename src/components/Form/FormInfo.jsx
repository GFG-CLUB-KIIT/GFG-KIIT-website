import React, { useState } from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import InstagramIcon from "@mui/icons-material/Instagram";
import Instagram from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const FormInfo = ({
  title,
  content,
  discordLink,
  instagramLink,
  linkedinLink,
}) => {
  return (
    <>
      <div id="card-div">
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
              <a href="{discordLink}">Discord</a>
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              fontSize="15px"
            >
              <a href="{instagramLink}">
                <InstagramIcon />
              </a>
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              fontSize="15px"
            >
              <a href="{linkedinLink}">
                <LinkedInIcon />
              </a>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default FormInfo;
