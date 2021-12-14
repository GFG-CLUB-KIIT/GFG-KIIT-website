import React, { useEffect, useState } from "react";
import "./SelfAcc.css";
import { motion } from "framer-motion";
import Card from "./Card";
import Part from "./Part";
import ShashiKiran from '../../profile/ShashiKiran.png';

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
          <div className="titleName font-bold">Web Devlopment</div>
          <div
            className="accordIcon cursor-pointer  "
            onClick={() => setAccVal("one", !allAcc.one)}
          >
            {" "}
            {allAcc.one ? (
              <box-icon name="chevron-up"></box-icon>
            ) : (
              <box-icon name="chevron-down"></box-icon>
            )}
          </div>
        </div>

        {allAcc.one ? (
          <motion.div className="details">
            <Part
              lead="Om Prakash"
              domain="Web Development lead"
              member={[
                {name:"Akash Gautum",urlImage:""},
                {name:"Aman Singh",urlImage:""},
                {name:"Ankit Raj",urlImage:""},
                {name:"Anupam Karmakar",urlImage:""},
                {name:"Nilabja Saniyal ",urlImage:""},
                {name:"Tamoghno Deb",urlImage:""},
                {name:"Sourav Dash",urlImage:""},
                {name:"Devansh",urlImage:""},
              ]}
            />
            
          </motion.div>
        ) : (
          ""
        )}
      </motion.div>

      {/* Accord 2 */}
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
            {allAcc.four ? (
              <box-icon name="chevron-up"></box-icon>
            ) : (
              <box-icon name="chevron-down"></box-icon>
            )}
          </div>
        </div>

        {allAcc.four ? (
          <motion.div className="details">
            <Part
              lead="Taranpreet Singh"
              domain="Android Development lead"
              member={[
                {name:"Sumit Kumar",urlImage:""},
                {name:"Soumik",urlImage:""},
                {name:"Rupanshi",urlImage:""},
                {name:"Mughda Hazra",urlImage:""},
                {name:"Avik Rankan Das",urlImage:""},
                {name:"Abhishek Dutt",urlImage:""},
                {name:"Shishir",urlImage:""},
              ]}
            />
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
            {allAcc.three ? (
              <box-icon name="chevron-up"></box-icon>
            ) : (
              <box-icon name="chevron-down"></box-icon>
            )}
          </div>
        </div>

        {allAcc.three ? (
          <motion.div className="details">
            <Part
              lead="Shashwat Srijan"
              domain="UI-UX lead"
              member={[
                { name: "Arpit Sahu", urlImage: "" },
                { name: "Pranjal ", urlImage: "" },
                { name: "Sanskar", urlImage: "" },
                { name: "Yash", urlImage: "" },
                { name: "Anshu Mohanta", urlImage: "" },
                { name: "Ashish Kumar Mishra", urlImage: "" },
                { name: "Ritesh Kumar", urlImage: "" },
              ]}
            />
          </motion.div>
        ) : (
          ""
        )}
      </motion.div>

      {/* Accord 4    */}
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
          <div className="titleName font-bold">Competitive Programming</div>
          <div
            className="accordIcon cursor-pointer"
            onClick={() => setAccVal("two", !allAcc.two)}
          >
            {" "}
            {allAcc.two ? (
              <box-icon name="chevron-up"></box-icon>
            ) : (
              <box-icon name="chevron-down"></box-icon>
            )}
          </div>
        </div>

        {allAcc.two ? (
          <motion.div className="details">
            <Part
              lead="Anubhab Swain"
              domain="Competitive Programming Lead"
              member={[
                { name: "Abhinav Deep", urlImage: {ShashiKiran} },
                { name: "Abhinav Prakash", urlImage: "" },
                { name: "Piyush", urlImage: "" },
                { name: "Shreshtha Kochgaway", urlImage: "" },
                { name: "Abhishek K.", urlImage: "" },
                { name: "Aditya Anand", urlImage: "" },
                { name: "Devesh", urlImage: "" },
                { name: "Eshaan", urlImage: "" },
                { name: "Himanshu", urlImage: "" },
                { name: "Hritesh", urlImage: "" },
                { name: "Naman Gupta", urlImage: "" },
                { name: "Ritesh", urlImage: "" },
                { name: "Rohit Pradhan", urlImage: "" },
                { name: "Saksham", urlImage: "" },
                { name: "Sejal", urlImage: "" },
                { name: "Shashi", urlImage: "" },
                { name: "Shivam", urlImage: "" },
                { name: "Subhadeep", urlImage: "" },
                { name: "Snehil Sinha", urlImage: "" },
                { name: "Nittishna Dhar", urlImage: "" },
              ]}
            />
            
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
            {allAcc.five ? (
              <box-icon name="chevron-up"></box-icon>
            ) : (
              <box-icon name="chevron-down"></box-icon>
            )}
          </div>
        </div>

        {allAcc.five ? (
          <motion.div className="details">
            <Part
              lead="Jyotsna Singh "
              domain="Content Writer Lead"
              member={[
                {name:"Abir Mishra",urlImage:""},
                {name:"Ashwani",urlImage:""},
                {name:"Asmita Hobisyashi",urlImage:""},
                {name:"Maan Singh",urlImage:""},
                {name:"Sayak",urlImage:""},
                {name:"Surya",urlImage:""},
              ]}
            />
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
            {allAcc.six ? (
              <box-icon name="chevron-up"></box-icon>
            ) : (
              <box-icon name="chevron-down"></box-icon>
            )}
          </div>
        </div>

        {allAcc.six ? (
          <motion.div className="details">
            <Part
              lead="Sneha Priyangi "
              domain="Marketing Lead"
              member={[
                {name:"Akansha",urlImage:""},
                {name:"Aryan Kumar",urlImage:""},
                {name:"Pratyush ",urlImage:""},
                {name:"Rupabarna",urlImage:""},
                {name:"Samar",urlImage:""},
              ]}
            />
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
            {allAcc.seven ? (
              <box-icon name="chevron-up"></box-icon>
            ) : (
              <box-icon name="chevron-down"></box-icon>
            )}
          </div>
        </div>

        {allAcc.seven ? (
          <motion.div className="details">
            <Part
              lead="Nittishna "
              domain="Women-in-tech Lead"
              member={[
                {name:"Akansha",urlImage:""},
                {name:"Asmita Hobisyachi",urlImage:""},
                {name:"Ishika ",urlImage:""},
                {name:"Jyotsna Singh",urlImage:""},
                {name:"Maddhuja Sen",urlImage:""},
                {name:"Mughda Hazra",urlImage:""},
                {name:"Rimsha Aiman",urlImage:""},
                {name:"Rupabarna",urlImage:""},
                {name:"Rupanshi",urlImage:""},
                {name:"Sejal",urlImage:""},
                {name:"Sneha Priyangi",urlImage:""},
              ]}
            />
          </motion.div>
        ) : (
          ""
        )}
      </motion.div>
    </div>
  );
};

export default SelfAcc;
