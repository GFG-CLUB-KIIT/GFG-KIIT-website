import React from "react";
import loadingGif from "../Images/loading-gif.gif";

const Loading = () => {
  return (
    <div className="form-loading">
      <img className="image-unselectable" width="170px" src={loadingGif} />
    </div>
  );
};

export default Loading;
