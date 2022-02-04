import React, { useState } from "react";
import { api } from "./AccordionAPI";
import MyAccordion from "./MyAccordion";
import "./dashboardHome.css";
import AddEvents from "./AddEvents";
const Accordion = () => {
  const [data, setData] = useState(api);
  console.log(data);
  return (
    <>
      <div className="admin-db-events-title">Manage Events</div>
      {data.map((curElem, index) => {
        return <MyAccordion key={index} data={curElem} />;
      })}
      <div className="admin-db-events-title">Add Events</div>
      {/* <AddEvents/> */}
    </>
  );
};

export default Accordion;
