import React from 'react';

import './Button.css';

const NumberButton = props => {
  return <button class="number-button">{props.children}</button>
};

export default NumberButton;
