import "./dashboard.css";


import Accordion from "./Accordion";
import AddEvents from "./AddEvents";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import DashboardNav from "./DashboardNav";
import DashboardSearch from "./DashboardSearch";
import Blob from "../../img/blob-haikei.svg"
//  background: rgba(0, 188, 54, 0.15);
//   box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
//   backdrop-filter: blur(1.5px);
//   -webkit-backdrop-filter: blur(1.5px);
//   border-left: 10px solid rgba(27, 77, 4, 0.514);


function Dashboard() {
  return (
    <>
      <div className="admin-db-container">
        {/* <div className="admin-db-gfg-vertical-line1"></div>
        <div className="admin-db-gfg-vertical-line2"></div>
        <div className="admin-db-gfg-vertical-line3"></div>
        <div className="admin-db-gfg-vertical-line4"></div>
        <div className="admin-db-gfg-vertical-line5"></div>
        <div className="admin-db-gfg-vertical-line6"></div>
        <div className="admin-db-gfg-vertical-line7"></div>
        <div className="admin-db-gfg-vertical-line8"></div>
        <div className="admin-db-gfg-vertical-line9"></div>
        <div className="admin-db-gfg-vertical-line10"></div> */}
        <DashboardSearch/>
        <DashboardNav active={1}/>

        <Accordion />

        <AddEvents />
        
        
      </div>
    </>
  );
}

export default Dashboard;
