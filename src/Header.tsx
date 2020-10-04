import React from 'react'

// Custom CSS
import './Header.css';

// Importing icons from material UI
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from "@material-ui/icons/Forum";

import IconButton from "@material-ui/core/IconButton"

const Header = () => {
    return (
      <div className="header">
        
        <IconButton>
          <PersonIcon  className="header__icon" />
        </IconButton>
        
        <img
          className="header__logo"
          src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
          alt="Tinder"
        ></img>

        <IconButton>
          <ForumIcon  className="header__icon" />
        </IconButton>

      </div>
    );
}

export default Header