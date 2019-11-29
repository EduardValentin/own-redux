import React from 'react';
import './App.css';
import ElementContainer from './ElementContainer';
import TestConnectedContainer from './TestConnectedContainer';

function App() {
  return (
    <div className="App">
      <ElementContainer ownProp="This prop comes from App" />
      <TestConnectedContainer name="test connected" />
      <TestConnectedContainer />
    </div>
  );
}

export default App;
