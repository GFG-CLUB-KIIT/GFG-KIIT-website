import React from "react";
import loadingGif from "../../img/form-submitted-gif.gif";
const FormSubmitted = () => {
  return (
    <>
      <div className="form-submitted">
        <img className="image-unselectable" width="350px" src={loadingGif} />
        <h2 className="aboutUs-slogan">
          Form submitted sucessfully, you can close this window now!
        </h2>
      </div>
    </>
  );
};

export default FormSubmitted;
