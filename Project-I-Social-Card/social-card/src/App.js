import React from 'react';

import HeaderContainer from './components/HeaderComponents/HeaderContainer.js';
import CardContainer from './components/CardComponents/CardContainer.js';

import './App.css';

const App = () => {
  return (
    <div className="card">
      <HeaderContainer />
      <CardContainer />
    </div>
  );
};

export default App;
