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
import { useState, useEffect, useRef } from "react";
import Footer from "../Footer";

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
        .then(() => {
          fetch(`https://gfgkiit-backend.herokuapp.com/sendmail`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              mailId: inputVal.email,
            }),
          }).then(() => {
            localStorage.setItem("gfgreg", "true");
            setIsLoading(false);
            window.scroll(0, 0);
          });
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    }
  };

  // Checking Is Submit

  useEffect(() => {
    if (localStorage.getItem("gfgreg")) {
      setIsSubmit(true);
    }
  }, [isLoading]);

  // Lottie Files for IS Submit

  return (
    <>
      {!isSubmit ? (
        <div className="form-js">
          <div className="designBox">
            <div className="form-design-background"></div>
          </div>
          <div className="formInfo">
            <FormInfo
              title="Recruitment 2022: Phase 1"
              content="Bonjour Geeks! Yet to join the gang of cool and fun geeks in KIIT? We backed you up!  Once again GFG-KIIT is back with recruitments. So steel yourselves and get ready to exert all efforts to be on board! For further updates follow us on:"
              discordLink="https://discord.gg/F5XW7mpa"
              instagramLink="https://www.instagram.com/gfgkiit/"
              linkedinLink="linkedin.com"
            />
          </div>

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
          <div className="discord-style">
            {" "}
            <TextCardUnimportant
              myId="discord"
              title={
                "Discord ID: ( ex: abcdg#1234) (In case you don't have a discord account, please make one. We will be communicating via discord for all team related activities.)"
              }
              value={inputVal}
              setInputVal={setInputVal}
              name="discord"
            />
          </div>

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
