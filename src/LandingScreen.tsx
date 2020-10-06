import React from 'react'

 import { Link } from "react-router-dom";




import './LandingScreen.css'


const LandingScreen = () => {

  var ReactRotatingText = require("react-rotating-text");
    return (
      <div className="landing__container">
        <div>
          <div className="h3">PROBE</div>
        </div>

        <div>
          <h1>What do you know about </h1>
          <ReactRotatingText
            className="rotating-text"
            items={["Taj Mahal?", "Statue of Liberty?", "Eifiel Tower?"]}
          />
        </div>

        <Link to={{ pathname: "/game" }}>
            <button className="landing__startButton">START GAME</button>
        </Link>
      </div>
    );


};

export default LandingScreen