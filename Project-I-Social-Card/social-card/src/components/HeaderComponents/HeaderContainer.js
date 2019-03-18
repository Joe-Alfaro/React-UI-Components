import React from 'react';

import HeaderContentContainer from './HeaderContentContainer.js'
import ImageThumbnail from './ImageThumbnail.js'

import './Header.css';

const HeaderContainer = () => {
  return (
    <div className="header-container">
      <ImageThumbnail />
      <HeaderContentContainer />
    </div>
  )
};

export default HeaderContainer;
