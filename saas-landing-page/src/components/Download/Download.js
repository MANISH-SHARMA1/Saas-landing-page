import React from "react";
import "../style.css";
import mobileImg from "../../assets/mobile-0819.jpg";

function Download() {
  return (
    <>
      <div className="div">
        <img src={mobileImg} alt="enjoyImg" />
        <div className="text">
          <h1>Download your shows</h1>
          <h1>to watch offline</h1>
          <h4>
            Save your favourites easily and always have something to watch.
          </h4>
        </div>
      </div>
    </>
  );
}

export default Download;
