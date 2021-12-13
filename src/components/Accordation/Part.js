import Card from "./Card";
import React from "react";
import SmallCard from "./SmallCard";
import "./Part.css";
import { motion } from "framer-motion";

const Part = ({ lead, member }) => {

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
        <Card name={lead} />
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
        {member?member.map((e) => {
          return <SmallCard name={e} />;
        }):""}
      </motion.div>
    </div>
  );
};

export default Part;
