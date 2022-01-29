import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import "../../css/TextCard.css";
const TextCardUnimportant = ({ title, myId, value, setInputVal, name }) => {
  const handleChange = (e) => {
    setInputVal({
      ...value,
      [name]: e.target.value,
    });
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
              </Typography>
            </CardContent>
            <inputfield className="inputField">
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "41vw" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="Your answer"
                  variant="standard"
                  onChange={handleChange}
color="success" 
                />
              </Box>
            </inputfield>
          </Card>
        </div>
      </div>
    </>
  );
};

export default TextCardUnimportant;
