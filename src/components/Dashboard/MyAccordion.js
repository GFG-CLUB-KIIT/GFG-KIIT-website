import React, { useState, useEffect } from "react";
import "./dashboardHome.css";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import Loading from "../Form/Loading";
import fetch from "isomorphic-fetch";
import { uploadPhoto } from "../../actions/image";

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

  // Handle Photo
  const handlePhoto = (e) => {
    setIsLoading(1);
    let formFile = new FormData();
    formFile.append("image", e.target.files[0]);

    uploadPhoto(formFile)
      .then((data,err) => {
        if (err) {
          setIsLoading(0);
          // setHideButton(false);
        } else {
          // localStorage.setItem("addProdImage", JSON.stringify(data.data[0].url));
          // setPhoto(loc
          setInputVals({
            ...inputVals,
            image: data.data[0].url,
          });

          // formData.set("photo", JSON.parse(localStorage.getItem("image")));
          // setHideButton(false);
          // alert("done");
          setIsLoading(0);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(0);

      });
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
            <div>
              {show ? (
                <box-icon name="chevron-up"></box-icon>
              ) : (
                <box-icon name="chevron-down"></box-icon>
              )}
            </div>
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
              <label className="addImage">
                <div className="admin-accordion-item-body-logo">
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handlePhoto}
                  />
                  <AddAPhotoIcon />
                </div>
              </label>
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
