import React from "react";
import "./dashboardHome.css";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
const AddEvents = () => {
  return (
    <>
      <div className="admin-db-addEvents-container">
        <div className="admin-db-addevents-addPoster">
          <AddAPhotoIcon sx={{ fontSize: "50px" }} />
        </div>
        <div className="admin-db-addEvents-link">
          <input type="text" placeholder="Add Title" />
          <input type="text" placeholder="Add a Link" />
        </div>

        <div className="admin-db-addEvents-save">Save</div>
      </div>
    </>
  );
};

export default AddEvents;
