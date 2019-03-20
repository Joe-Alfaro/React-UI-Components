import React from 'react';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import NumberButton from './components/ButtonComponents/NumberButton.js';

import './App.css';

const App = () => {
  return (
    <div className="container">
      <CalculatorDisplay />
      <div className="row" id="row1">
        <ActionButton>clear</ActionButton>
        <ActionButton>/</ActionButton>
      </div>
      <div className="row" id="row2">
        <NumberButton>7</NumberButton>
        <NumberButton>8</NumberButton>
        <NumberButton>9</NumberButton>
        <ActionButton>*</ActionButton>
      </div>
      <div className="row" id="row3">
        <NumberButton>4</NumberButton>
        <NumberButton>5</NumberButton>
        <NumberButton>6</NumberButton>
        <ActionButton>-</ActionButton>
      </div>
      <div className="row" id="row4">
        <NumberButton>1</NumberButton>
        <NumberButton>2</NumberButton>
        <NumberButton>3</NumberButton>
        <ActionButton>+</ActionButton>
      </div>
      <div className="row" id="row5">
        <NumberButton>0</NumberButton>
        <ActionButton>=</ActionButton>
      </div>
    </div>
  );
};

export default App;
