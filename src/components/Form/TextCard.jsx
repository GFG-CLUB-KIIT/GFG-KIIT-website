import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import "../../css/TextCard.css";
const TextCard = ({ title, myId, value, setInputVal, name }) => {
  const handleChange = (e) => {
    setInputVal({
      ...value,
      [name]: e.target.value,
    });
    console.log();
    if (!value[name]) {
      // document.getElementsByClassName("name")
      document.getElementById(myId).classList.add("error");
    } else {
      document.getElementById(myId).classList.remove("error");
    }
  };
  return (
    <>
      <div id="card-div">
        <div id={myId}>
          <Card id="card" sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography
                className="card-title"
                gutterBottom
                variant="h5"
                component="div"
              >
                {title}
                <span style={{ color: "red" }}> *</span>
              </Typography>
            </CardContent>
            <inputfield className="inputField">
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="Your answer"
                  variant="standard"
                  onChange={handleChange}
                />
              </Box>
            </inputfield>
          </Card>
        </div>
      </div>
    </>
  );
};

export default TextCard;
