import "../../css/Form.css";
import TextCard from "./TextCard";
import TextCardUnimportant from "./TextCardUnimportant";
import ToggleCard from "./ToggleCard";
import Button from "@mui/material/Button";
import CheckCard from "./CheckCard";
import Loading from "./Loading";
import FormSubmitted from "./FormSubmitted";
import FormInfo from "./FormInfo";
import Alert from "@mui/material/Alert";
import fetch from "isomorphic-fetch";
import { useState, useEffect } from "react";
import Footer from '../Footer';
// const Form = () => {
//   return <div>Hi there!</div>;
// };
function Form() {
  const [inputVal, setInputVal] = useState({
    name: "",
    email: "",
    year: "First Year",
    domain: [],
    discord: "",
  });
  const [isSucess, setIsSucess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmit, setIsSubmit] = useState("");

  const submit = () => {
    setIsLoading(true);
    let flag = true;
    if (!inputVal.name) {
      // document.getElementsByClassName("name")
      document.getElementById("name").classList.add("error");
      flag = false;
      setIsLoading(false);
      document.getElementById("name").scrollIntoView({
        behavior: "smooth",
      });
    
      return;
    }
    if (!inputVal.email) {
      // document.getElementsByClassName("name")
      document.getElementById("form-email").classList.add("error");
      flag = false;
      setIsLoading(false);
      document.getElementById("form-email").scrollIntoView({
        behavior: "smooth",
      });
    

      return;
    }
    if (inputVal.domain.length == 0) {
      // document.getElementsByClassName("name")
      document.getElementById("domain").classList.add("error");
      flag = false;
      setIsLoading(false);
      document.getElementById("domain").scrollIntoView({
        behavior: "smooth",
      });
      

      return;
    }
    // if (!inputVal.discord) {
    //   document.getElementById("discord").classList.add("error");
    //   flag = false;
    //   setIsLoading(false);
    // }
    if (!flag) {
      setIsSucess(false);
      setIsLoading(false);
    }

    if (flag) {

      fetch(`https://gfgkiit-backend.herokuapp.com/upload-form`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: inputVal.name,
          email: inputVal.email,
          year: inputVal.year,
          domain: inputVal.domain,
          discord: inputVal.discord,
        }),
      })
        .then((response) => {
          localStorage.setItem("gfgreg", "true");
          setIsSucess(true);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
      // console.log(inputVal);
    }
  };

 

  // Checking Is Submit

  useEffect(() => {
    if (localStorage.getItem("gfgreg")) {
      setIsSubmit(true);
    }
  }, [isLoading]);

  return (
    <>
      <div id="form-sucess" className={isSucess ? "" : "form-hidden"}>
        <Alert
          onClose={() => {
            setIsSucess(false);
          }}
        >
          Thanks for your submission!
        </Alert>
      </div>
      {!isSubmit ? (
        <div className="Form-js">
          <div className="designBox">
            <div className="form-design-background"></div>
          </div>
          <FormInfo
            title="Recruitment 2022: Phase 1"
            content="Bonjour Geeks! Yet to join the gang of cool and fun geeks in KIIT? We backed you up!  Once again GFG-KIIT is back with recruitments. So steel yourselves and get ready to exert all efforts to be on board! For further updates follow us on:"
            discordLink="https://discord.gg/F5XW7mpa"
            instagramLink="instagram.com"
            linkedinLink="linkedin.com"
          />
          <TextCard
            myId="name"
            title={"Name"}
            value={inputVal}
            setInputVal={setInputVal}
            name="name"
          />
          <TextCard
            myId="form-email"
            title={"Email"}
            value={inputVal}
            setInputVal={setInputVal}
            name="email"
          />
          <ToggleCard
            myId="year"
            title={"Year"}
            value={inputVal}
            setInputVal={setInputVal}
            name="year"
          />
          <CheckCard
            myId="domain"
            title={"Domain"}
            value={inputVal}
            setInputVal={setInputVal}
            name="domain"
          />
          <TextCardUnimportant
            myId="discord"
            title={
              "Discord ID: ( ex: abcdg#1234) (In case you don't have a discord account, please make one. We will be communicating via discord for all team related activities.)"
            }
            value={inputVal}
            setInputVal={setInputVal}
            name="discord"
          />
          <div className="form-submit-button">
            <Button onClick={submit} variant="contained" color="success">
              Submit
            </Button>
          </div>
          {isLoading ? <Loading /> : ""}
        </div>
      ) : (
        <>
          <div className="form-submitted">
            <FormSubmitted />
          </div>
        </>
      )}
      <Footer bgColor="footer-landing"></Footer>
    </>
  );
}

export default Form;
