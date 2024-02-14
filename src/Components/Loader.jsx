import React from "react";
import loader from "../Assets/loading.gif";

const Loader = () => {
  return (
    <>
      <div style={{ marginTop: 300 }}>
        <img src={loader} alt="Loader not found" className="d-block m-auto" style={{ width: "100px" }}/>
      </div>
    </>
  );
};

export default Loader;
