import React from 'react'

import IconButton from "@material-ui/core/IconButton";


import './LandingScreen.css'
import { CenterFocusStrong } from '@material-ui/icons';


const LandingScreen = () => {

  var ReactRotatingText = require("react-rotating-text");
    return (
      <div className="landing__container">
        <div>
          <div className="h3">
            PROBE
          </div>
        </div>

        <div>
          <h1>What do you know about </h1>
          <ReactRotatingText
            className="rotating-text"
            items={["Taj Mahal?", "Statue of Liberty?", "Eifiel Tower?"]}
          />
        </div>
        <IconButton className="button">
          <button className="landing__startButton">START GAME</button>
        </IconButton>
      </div>
    );


};

export default LandingScreen