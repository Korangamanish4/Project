import React from "react";
import Loader from "react-js-loader";

function Spinner() {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        position: "fixed",
        justifyContent: "center",
        display: "flex",
        backgroundColor: "rgba(0, 0, 0, 0.219)",
        zIndex: '99999'
      }}
    >
      <Loader type="spinner-cub" bgColor={'#FF4500'} size={100} />
    </div>
  );
}

export default Spinner;
