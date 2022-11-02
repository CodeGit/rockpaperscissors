import React from 'react';
import logo from './logo.svg';
import './App.css';
import { settings } from './config/defaults'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>{settings.appName}</div>
      </header>
    </div>
  );
}

export default App;
