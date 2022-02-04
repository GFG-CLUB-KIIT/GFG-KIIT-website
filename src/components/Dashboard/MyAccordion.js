import React, { useState } from "react";
import "./dashboardHome.css";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
const MyAccordion = ({ key, data }) => {
  const [show, setShow] = useState(false);
  const showHandler = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="admin-accordion-container">
        <div className="admin-accordion-item">
          <div onClick={showHandler} className="admin-accordion-item-header">
            <div>{data.title}</div>
            <div>{show ? "-" : "+"}</div>
          </div>

          <div
            className={`accordion-body-container ${
              show ? "" : "hidden"
            }`}
          >
            <div className="admin-accordion-item-body">
              <img src={data.image} alt="Image" />
            </div>
            <div className="admin-accordion-item-update-link">
              <input type="text" value="" placeholder="Change Title" />
              <div className="admin-accordion-item-body-logo">
                <AddAPhotoIcon />
              </div>
              <input type="text" value="" placeholder="Update Link" />
            </div>
            <div className="admin-accordion-item-save">Save</div>
            <div className="admin-accordion-item-delete">Delete</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccordion;
