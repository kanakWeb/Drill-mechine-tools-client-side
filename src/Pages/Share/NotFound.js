import React from "react";
import NotFoundImage from "../../Assets/img/200.gif";
const NotFound = () => {
  return (
    <div
      style={{
        background: `url(${NotFoundImage})`,
        backgroundSize: "cover",
      }}
      className=" mx-auto flex lg:min-h-screen sm:h-80"
    >
      
    </div>
  );
};

export default NotFound;
