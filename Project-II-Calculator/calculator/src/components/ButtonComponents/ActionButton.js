import React from 'react';

import './Button.css';

const ActionButton = props => {
  return <button class="action-button">{props.children}</button>
};

export default ActionButton;
