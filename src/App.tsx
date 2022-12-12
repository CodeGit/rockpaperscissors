import React from 'react';
import logo from './assets/logo.svg';
import './styles/App.css';
import { settings } from './config/defaults'
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>{settings.appName}</div>
      </header>
      <div className='App-main'>
        Main
      </div>
      <Footer msg="I'm the footer"></Footer>
    </div>
  );
}

export default App;
