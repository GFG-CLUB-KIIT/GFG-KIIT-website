import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./domainAdd.css"

const CheckCard = ({ title, value, setInputVal, myId }) => {
  // const [Marketing, setMarketing] = useState(false);
  // const [Content, setContent] = useState(false);
  // const [UIUX, setUIUX] = useState(false);
  // const [CompetitiveProgramming, setCompetitiveProgramming] = useState(false);
  // const [WomenInTech, setWomenInTech] = useState(false);
  // const [AndroidDevelopment, setAndroidDevelopment] = useState(false);
  // const [WebDevlopment, setWebDevlopment] = useState(false);



  // Fucntion For Changing Input value
  // const inputHandler = () => {
  //   let array = [];
  //   if (Marketing) array.push("Marketing");
  //   if (Content) array.push("Content");
  //   if (UIUX) array.push("UI/UX");

  //   setInputVal({
  //     ...value,
  //     [name]: dom,
  //   });
  // };


  const [dom, setDom] = useState('');
  const [check, setCheck] = useState(1);

  const handleChange = (event) => {
    setDom(event.target.value);
    setInputVal({
      ...value,
      [myId]: event.target.value,
    });

  };

  // Use Effect Depended On CheckBox
  // React.useEffect(() => {
  //   inputHandler();
  // }, [Marketing, Content, UIUX]);

  return (
    <>
      <div id="domain-card-div">
        <div id="domainAdd">
          <FormControl
            variant="standard"
            sx={{ m: 1, width: "45vw", height: "40px", marginTop: "2rem" }}
          >
            <InputLabel id="demo-simple-select-standard-label">
              Choose a domain
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={dom}
              onChange={handleChange}
              label="Choose a domain"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Web Development">Web Development</MenuItem>
              <MenuItem value="Android Development">
                Android Development
              </MenuItem>
              <MenuItem value="UI-UX">UI-UX</MenuItem>
              <MenuItem value="Competitive Programming">
                Competitive Programming
              </MenuItem>
              <MenuItem value="Content Writer">Content Writer</MenuItem>
              <MenuItem value="Marketing">Marketing</MenuItem>
              <MenuItem value="Women-in-tech">Women-in-tech</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </>
  );
};

export default CheckCard;
