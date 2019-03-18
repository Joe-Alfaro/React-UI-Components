import React from 'react';

import HeaderTitle from './HeaderTitle.js';
import HeaderContent from './HeaderContent.js';

const HeaderContentContainer = () => {
  return (
    <div className="header-content-container">
      <HeaderTitle />
      <HeaderContent />
    </div>
  );
};

export default HeaderContentContainer;
