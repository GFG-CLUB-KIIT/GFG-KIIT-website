import React, { useState } from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";

const CheckCard = ({ title, value, setInputVal, name, myId }) => {
  const [Marketing, setMarketing] = useState(false);
  const [Content, setContent] = useState(false);
  const [UIUX, setUIUX] = useState(false);

  // Fucntion For Changing Input value
  const inputHandler = () => {
    let array = [];
    if (Marketing) array.push("Marketing");
    if (Content) array.push("Content");
    if (UIUX) array.push("UI/UX");

    setInputVal({
      ...value,
      [name]: array,
    });
  };

  // Use Effect Depended On CheckBox
  React.useEffect(() => {
    inputHandler();
  }, [Marketing, Content, UIUX]);

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
                <div className="check-list">
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Marketing"
                      onChange={(e) => setMarketing(e.target.checked)}
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      defaultChecked={false}
                      label="Content"
                      onChange={(e) => setContent(e.target.checked)}
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      // checked={UIUX}
                      label="UI/UX"
                      onChange={(e) => setUIUX(e.target.checked)}
                    />
                  </FormGroup>
                </div>
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default CheckCard;
