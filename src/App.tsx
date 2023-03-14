import React from 'react';
import logo from './assets/logo.svg';
import './styles/App.css';
import ReactDOM from "react-dom/client";
import { Routes, Route } from 'react-router-dom';

import { settings } from './config/defaults'
import Footer from './Footer';
import Header from './Header';
import MenuBar from './MenuBar';
import Game from './Game';
import Results from './Results';
import Error from './Error';
import Help from './Help';


function App() {
  return (
    <div className="App">
      <Header />
      <MenuBar />
      <Routes>
        <Route path="/" element={ <Game /> }/>
        <Route path="/game" element={ <Game /> }/>
        <Route path="/results" element={ <Results /> }/>
        <Route path="/error" element={ <Error message="" /> }/>
        <Route path="/help" element={ <Help /> }/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
