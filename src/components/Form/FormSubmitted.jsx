import React,{useRef} from "react";
import lottie from 'lottie-web'
const FormSubmitted = () => {

  // Lottie Files for IS Submit
  
  const container = useRef(null); 
  const [firstLoad, setFirstLoad] = React.useState(1);

  React.useEffect(() => {
    lottie.loadAnimation(
      {
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../../json/Submit.json"),
      }
    );
  },[firstLoad]);
  return (
    <>
      <div className="form-submitted">
        <div className="submitGif" ref={container}></div>
        <h2 className="aboutUs-slogan">
          Form submitted sucessfully, you can close this window now!
        </h2>
      </div>
    </>
  );
};

export default FormSubmitted;
