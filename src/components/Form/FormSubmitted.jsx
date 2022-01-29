import React from "react";
import loadingGif from "../Images/form-submitted-gif.gif";
const FormSubmitted = () => {
  return (
    <>
      <div className="form-submitted">
        <img className="image-unselectable" width="350px" src={loadingGif} />
        <h2>Form submitted sucessfully, you can close this window now!</h2>
      </div>
    </>
  );
};

export default FormSubmitted;
