import React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const ToggleCard = ({ title, value, setInputVal, name }) => {
  const handleChange = (e) => {
    setInputVal({
      ...value,
      [name]: e.target.value,
    });
  };
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
            >
              {title}
              <span style={{ color: "red" }}> *</span>
              <div className="toggle-list">
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="First Year"
                  name="radio-buttons-group"
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="First Year"
                    control={<Radio />}
                    label="First Year"
                  />
                  <FormControlLabel
                    value="Second Year"
                    control={<Radio />}
                    label="Second Year"
                  />
                  <FormControlLabel
                    value="Third Year"
                    control={<Radio />}
                    label="Third Year"
                  />
                  <FormControlLabel
                    value="Fourth Year"
                    control={<Radio />}
                    label="Fourth Year"
                  />
                </RadioGroup>
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ToggleCard;
