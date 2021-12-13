import React, { useEffect, useState } from "react";
import "./SelfAcc.css";
import { motion } from "framer-motion"; 
import Card from "./Card";
import Part from "./Part";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const SelfAcc = () => {
  const [count, setCount] = useState(0);
  const [allAcc, setAllAcc] = useState({
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
  });
  var normalVal = {
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
  };
  const setAccVal = (key, value) => {
    setAllAcc({
      ...normalVal,
      [key]: value,
    });
  };
  useEffect(() => {
    if (count == 0) {
      setTimeout(() => {
        setAllAcc({
          one: 1,
          two: 0,
          three: 0,
          four: 0,
        });
        setCount(1);
      }, 1500);
    }
  });
  return (
    <div className="myAccord  ">
      <motion.div
        className="accord accord1"
        animate={{
          marginTop: "1rem",
        }}
        initial={{
          marginTop: "-100vh",
        }}
        transition={{
          delay: 0.5,
        }}
      >
        <div className="title rounded-2xl ">
          <div className="titleName font-bold">Competitive Programming</div>
          <div
            className="accordIcon cursor-pointer  "
            onClick={() => setAccVal("one", !allAcc.one)}
          >
            {" "}
            {allAcc.one ? <box-icon name='chevron-down'></box-icon> : <box-icon name='chevron-up'></box-icon>}
          </div>
        </div>

        {allAcc.one ? (
          <motion.div className="details">
            <Part lead="Anubhab Swain" member={["Abhinav Deep","Abhinav Prakash","Piyush","Shreshtha Kochgaway","Abhishek K.","Aditya Anand","Devesh","Eshaan","Himanshu","Hritesh","Naman Gupta","Ritesh","Rohit Pradhan","Saksham","Sejal","Shashi","Shivam","Subhadeep","Snehil Sinha","Nittishna Dhar"]} />
          </motion.div>
        ) : (
          ""
        )}
      </motion.div>

      {/* Accord 2 */}
      <motion.div
        className="accord accord2"
        animate={{
          marginTop: "1rem",
        }}
        initial={{
          marginTop: "-100vh",
        }}
        transition={{
          delay: 0.4,
        }}
      >
        <div className="title rounded-2xl">
          <div className="titleName font-bold">Web Devlopment</div>
          <div
            className="accordIcon cursor-pointer"
            onClick={() => setAccVal("two", !allAcc.two)}
          >
            {" "}
            {allAcc.two ? <box-icon name='chevron-down'></box-icon> : <box-icon name='chevron-up'></box-icon>}
          </div>
        </div>

        {allAcc.two ? (
          <motion.div className="details">
            <Part lead="Om Prakash" member={["Akash Gautum","Aman Singh","Ankit Raj","Anupam Karmakar","Nilabja Saniyal ","Tamoghno Deb","Sourav Dash","Devansh"]} />
          </motion.div>
        ) : (
          ""
        )}
      </motion.div>

      {/* Accord 3 */}
      <motion.div
        className="accord accord3"
        animate={{
          marginTop: "1rem",
        }}
        initial={{
          marginTop: "-100vh",
        }}
        transition={{
          delay: 0.2,
        }}
      >
        <div className="title rounded-2xl">
          <div className="titleName font-bold">UI-UX</div>
          <div
            className="accordIcon cursor-pointer"
            onClick={() => setAccVal("three", !allAcc.three)}
          >
            {" "}
            {allAcc.three ? <box-icon name='chevron-down'></box-icon> : <box-icon name='chevron-up'></box-icon>}
          </div>
        </div>

        {allAcc.three ? (
          <motion.div className="details">
            <Part lead="Shashwat Srijan" member={["Arpit Sahu","Pranjal ","Sanskar","Yash","Anshu Mohanta","Ashish Kumar Mishra","Ritesh Kumar"]} />
          </motion.div>
        ) : (
          ""
        )}
      </motion.div>

      {/* Accord 4    */}
      <motion.div
        className="accord accord3"
        animate={{
          marginTop: "1rem",
        }}
        initial={{
          marginTop: "-100vh",
        }}
        transition={{
          delay: 0.2,
        }}
      >
        <div className="title rounded-2xl">
          <div className="titleName font-bold">Android Development</div>
          <div
            className="accordIcon cursor-pointer"
            onClick={() => setAccVal("four", !allAcc.four)}
          >
            {" "}
            {allAcc.four ? <box-icon name='chevron-down'></box-icon> : <box-icon name='chevron-up'></box-icon>}
          </div>
        </div>

        {allAcc.four ? (
          <motion.div className="details">
            <Part lead="Taranpreet Singh" member={["Sumit Kumar","Soumik","Rupanshi","Mughda Hazra","Avik Rankan Das","Abhishek Dutt","Shishir"]} />
          </motion.div>
        ) : (
          ""
        )}
      </motion.div>

      {/* Accord 5 */}
      <motion.div
        className="accord accord3"
        animate={{
          marginTop: "1rem",
        }}
        initial={{
          marginTop: "-100vh",
        }}
        transition={{
          delay: 0.2,
        }}
      >
        <div className="title rounded-2xl">
          <div className="titleName font-bold">Content Writer</div>
          <div
            className="accordIcon cursor-pointer"
            onClick={() => setAccVal("five", !allAcc.five)}
          >
            {" "}
            {allAcc.five ? <box-icon name='chevron-down'></box-icon> : <box-icon name='chevron-up'></box-icon>}
          </div>
        </div>

        {allAcc.five ? (
          <motion.div className="details">
            <Part lead="Jyotsna Singh " member={["Abir Mishra","Ashwani","Asmita Hobisyashi","Maan Singh","Sayak","Surya"]} />
          </motion.div>
        ) : (
          ""
        )}
      </motion.div>

      {/* Accord 6    */}
      <motion.div
        className="accord accord3"
        animate={{
          marginTop: "1rem",
        }}
        initial={{
          marginTop: "-100vh",
        }}
        transition={{
          delay: 0.2,
        }}
      >
        <div className="title rounded-2xl">
          <div className="titleName font-bold">Marketing</div>
          <div
            className="accordIcon cursor-pointer"
            onClick={() => setAccVal("six", !allAcc.six)}
          >
            {" "}
            {allAcc.six ? <box-icon name='chevron-down'></box-icon> : <box-icon name='chevron-up'></box-icon>}
          </div>
        </div>

        {allAcc.six ? (
          <motion.div className="details">
            <Part lead="Sneha Priyangi " member={["Akansha","Aryan Kumar","Pratyush ","Rupabarna","Samar"]} />
          </motion.div>
        ) : (
          ""
        )}
      </motion.div>

      {/* Accord 7    */}
      <motion.div
        className="accord accord3"
        animate={{
          marginTop: "1rem",
        }}
        initial={{
          marginTop: "-100vh",
        }}
        transition={{
          delay: 0.2,
        }}
      >
        <div className="title rounded-2xl">
          <div className="titleName font-bold">Women-in-tech</div>
          <div
            className="accordIcon cursor-pointer"
            onClick={() => setAccVal("seven", !allAcc.seven)}
          >
            {" "}
            {allAcc.seven ? <box-icon name='chevron-down'></box-icon> : <box-icon name='chevron-up'></box-icon>}
          </div>
        </div>

        {allAcc.seven ? (
          <motion.div className="details">
            <Part lead="Nittishna " member={["Akansha","Asmita Hobisyachi","Ishika ","Jyotsna Singh","Maddhuja Sen","Mughda Hazra","Rimsha Aiman","Rupabarna","Rupanshi","Sejal","Sneha Priyangi"]} />
          </motion.div>
        ) : (
          ""
        )}
      </motion.div>
    </div>
  );
};

export default SelfAcc;
