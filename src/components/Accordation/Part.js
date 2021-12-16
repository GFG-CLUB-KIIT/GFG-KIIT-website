import Card from "./Card";
import React from "react";
import SmallCard from "./SmallCard";
import "./Part.css";
import { motion } from "framer-motion";
import memberDetails from "../memberDetails";

const Part = ({ lead, leadImageUrl, domain, member }) => {

  return (
    <div className="webAccord">
      <motion.div
        className="webCard"
        animate={{
          marginLeft: 0,
        }}
        initial={{
          marginLeft: "-100vw",
        }}
        transition={{
          delay: 0,
        }}
      >
        <Card name={lead} leadImageUrl={leadImageUrl} domain={domain} />
      </motion.div>

      <motion.div
        className="allMembers"
        animate={{
          marginRight: 0,
        }}
        initial={{
          marginRight: "-100vw",
        }}
        transition={{
          delay: 0.2,
        }}
      >
        {/* {member?member.map((e) => {
          return <SmallCard name={e.name} image={e.urlImage} />;
        }):""} */}
        {member.map((user)=>{
          return <SmallCard name={user.name}  urlImage={user.urlImage} />;
        })}
      </motion.div>
    </div>
  );
};

export default Part;
