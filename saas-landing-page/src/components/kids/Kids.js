import React from "react";
import "../style.css";
import children from "../../assets/kid.png";

function Kids() {
  return (
    <>
      <div className="div">
        <img src={children} alt="enjoyImg" />
        <div className="text">
          <h1>Create profiles for kids</h1>
          <h4>
            Send children on adventure with their favourite characters in a
            space made just for them - free with your membership.
          </h4>
        </div>
      </div>
    </>
  );
}

export default Kids;
