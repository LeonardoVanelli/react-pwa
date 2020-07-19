import React from 'react';
import logo from './logo.svg';
import './App.css';

import AddToHomescreen from 'react-add-to-homescreen';

function App() {

  const handleAddToHomescreenClick = () => {
    alert(`
      1. Open Share menu
      2. Tap on "Add to Home Screen" button`);
  };

  return (
    <div className="App">
      <AddToHomescreen onAddToHomescreenClick={handleAddToHomescreenClick} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
