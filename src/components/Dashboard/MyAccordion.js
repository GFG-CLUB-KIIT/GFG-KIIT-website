import React, { useState, useEffect } from "react";
import "./dashboardHome.css";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import Loading from "../Form/Loading";
import fetch from "isomorphic-fetch";

const MyAccordion = ({ data }) => {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [firstLoad, setFirstLoad] = useState(1);

  const [inputVals, setInputVals] = useState({
    image: data.image,
    title: data.title,
    link: data.link,
  });

  useEffect(() => {
    console.log(data._id);

    setInputVals({
      image: data.image,
      title: data.title,
      link: data.link,
    });
  }, [firstLoad]);

  // Link and Title Input handler
  const inputHandler = (e) => {
    setInputVals({
      ...inputVals,
      [e.target.name]: e.target.value,
    });
  };

  // Save Button
  const saveData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://gfgkiit-backend.herokuapp.com/update-list/${data._id}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputVals),
        }
      );
      if (response) {
        console.log(response);
        setIsLoading(false);
      }
    } catch (error) {
      if (error) {
        setIsLoading(false);

        console.log(error);
      }
    }
  };
  return (
    <>
      <div className="admin-accordion-container">
        <div className="admin-accordion-item">
          <div
            onClick={() => setShow(!show)}
            className="admin-accordion-item-header"
          >
            <div>{data.title}</div>
            <div>{show ? "-" : "+"}</div>
          </div>

          <div className={`accordion-body-container ${show ? "" : "hidden"}`}>
            <div className="admin-accordion-item-body">
              <img src={data.image} alt="Image" />
            </div>
            <div className="admin-accordion-item-update-link">
              <input
                type="text"
                name="title"
                value={inputVals.title}
                placeholder="Change Title"
                onChange={inputHandler}
              />
              <div className="admin-accordion-item-body-logo">
                <AddAPhotoIcon />
              </div>
              <input
                type="text"
                name="link"
                value={inputVals.link}
                placeholder="Update Link"
                onChange={inputHandler}
              />
            </div>
            <div className="admin-accordion-item-save" onClick={saveData}>
              Save
            </div>
            <div className="admin-accordion-item-delete">Delete</div>
          </div>
        </div>
      </div>

      {isLoading ? <Loading /> : ""}
    </>
  );
};

export default MyAccordion;
