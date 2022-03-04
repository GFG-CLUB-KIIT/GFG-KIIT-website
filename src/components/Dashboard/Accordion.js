import React, { useState, useEffect } from "react";
import { api } from "./AccordionAPI";
import MyAccordion from "./MyAccordion";
import "./dashboardHome.css";
import AddEvents from "./AddEvents";
import fetch from "isomorphic-fetch"

const Accordion = () => {
  const [data, setData] = useState([]);
  const [firstLoad, setFirstLoad] = useState(1);

  // fetching Data
  useEffect(async () => {
    try {
      const data = await fetch(
      `https://gfgkiit-backend.herokuapp.com/get-all-lists`
    );
    const parsedData = await data.json();
    setData(parsedData);
    console.log(parsedData);
    } catch (error) {
      console.log(error)
    }
    
  }, [firstLoad]);
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
