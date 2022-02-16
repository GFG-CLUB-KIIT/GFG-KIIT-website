import React from 'react'
import Himanshu from "../../profile/HimanshuMishra.jpeg";
import DiamondIcon from "@mui/icons-material/Diamond";
import { Link } from 'react-router-dom';

const DashboardNav = ({active}) => {
  return (
    <>
      <div className="admin-db-navigation">
        <div className="admin-db-profilePic">
          <img src={Himanshu} alt="Profile Pic" />
          <div className="admin-db-name">Himanshu Mishra</div>
        </div>

        <ul>
          <li className={active == 1 ? "admin-db-active-li" : ""}>
            <Link to="/dashboard">
              <span className="admin-db-icon">
                <DiamondIcon />
              </span>
              <span className="admin-db-title"> Home</span>
            </Link>
          </li>
          <li className={active == 2 ? "admin-db-active-li" : ""}>
            <Link to="/dashboard/form">
              <span className="admin-db-icon">
                <DiamondIcon />
              </span>
              <span className="admin-db-title">
                <Link to="/dashboard/form">Form</Link>
              </span>
            </Link>
          </li>
          <li className={active == 3 ? "admin-db-active-li" : ""}>
            <Link to="/dashboard/member">
              <span className="admin-db-icon">
                <DiamondIcon />
              </span>
              <span className="admin-db-title">Member</span>
            </Link>
          </li>
          <li className={active == 4 ? "admin-db-active-li" : ""}>
            <Link to="/dashboard/account">
              <span className="admin-db-icon">
                <DiamondIcon />
              </span>
              <span className="admin-db-title">Account</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default DashboardNav