import React from "react";
import DashboardNav from "./DashboardNav";
import DashboardSearch from "./DashboardSearch";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import "./dashboardForm.css";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "email",
    headerName: "Email",
    width: 180,
  },
  {
    field: "year",
    headerName: "Year",
    type: "number",
    width: 70,
  },
  {
    field: "domain",
    headerName: "Domain",
    width: 200,
  },
  {
    field: "discord",
    headerName: "Discord ID",
    width: 130,
  },
];

const rows = [
  {
    id: 1,
    name: "Snow",
    email: "JonSmith@gmail.com",
    year: 35,
    domain: "Web Developer",
    discord: "danger#1111",
  },
  {
    id: 2,
    name: "Lannister",
    email: "CerseiSmith@gmail.com",
    year: 42,
    domain: "Web Developer",
    discord: "danger#1111",
  },
  {
    id: 3,
    name: "Lannister",
    email: "JaimeSmith@gmail.com",
    year: 45,
    domain: "Web Developer",
    discord: "danger#1111",
  },
  {
    id: 4,
    name: "Stark",
    email: "AryaSmith@gmail.com",
    year: 16,
    domain: "WD, UI, Andr, CP, CW, Mar, WIT",
    discord: "danger#1111",
  },
  {
    id: 5,
    name: "Targaryen",
    email: "DaenerysSmith@gmail.com",
    year: null,
    domain: "Web Developer",
    discord: "danger#1111",
  },
  {
    id: 6,
    name: "Melisandre",
    email: null,
    year: 150,
    domain: "Web Developer",
    discord: "danger#1111",
  },
  {
    id: 7,
    name: "Clifford",
    email: "FerraraSmith@gmail.com",
    year: 44,
    domain: "Web Developer",
    discord: "danger#1111",
  },
  {
    id: 8,
    name: "Frances",
    email: "RossiniSmith@gmail.com",
    year: 36,
    domain: "Web Developer",
    discord: "danger#1111",
  },
  {
    id: 9,
    name: "Roxie",
    email: "HarveySmith@gmail.com",
    year: 65,
    domain: "Web Developer",
    discord: "danger#1111",
  },
];

const showContent = () => {
  console.log("hi");
};

const DashboardForm = () => {
  return (
    <>
      <DashboardSearch />
      <DashboardNav active={2} />

      <div className="formBox">
        <div className="formContainer">
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
            />
          </div>
        </div>
        <div className="formButton">
          {/* <Button variant="contained" color="success" onClick={showContent}>
            Success
          </Button> */}
          <div ontouchstart="">
            <div className="button">
              <div className="download"> <span>Download</span> </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardForm;
