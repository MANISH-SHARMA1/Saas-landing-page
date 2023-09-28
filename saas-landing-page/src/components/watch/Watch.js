import React from "react";
import "./Watch.css";
import device from "../../assets/device-pile-in.png";

function Watch() {
  return (
    <>
      <div className="division">
        <img src={device} alt="WatchImg" />
        <div className="description">
          <h1>Watch everywhere</h1>
          <h4>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </h4>
        </div>
      </div>
    </>
  );
}

export default Watch;
