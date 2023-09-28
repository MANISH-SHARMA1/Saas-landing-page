import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <>
      {/* This is the hero section of the landing page */}
      <div className="background">
        {/* This division contains the Navbar of page */}
        <div className="top">
          <h1 id="netflix">NETFLIX</h1>
          <div className="r-side">
            <select name="language" id="language">
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
            </select>
            <button id="btnn">Sing In</button>
          </div>
        </div>
        {/* This shows heading related to the landing page */}
        <div className="down">
          <h1>Unlimited movies, TV shows and more</h1>
          <h5>Watch anywhere. Cancel anytime</h5>
          <input type="email" placeholder="Email address" id="email" />
          <button id="bttnn">Get Started</button>
        </div>
      </div>
    </>
  );
}

export default Hero;
