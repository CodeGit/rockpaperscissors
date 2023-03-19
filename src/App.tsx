/** @jsxImportSource @emotion/react */
import React from 'react';
import logo from './assets/logo.svg';
import ReactDOM from "react-dom/client";
import { Routes, Route } from 'react-router-dom';
import { css, jsx } from '@emotion/react';

import { settings } from './config/defaults'
import Footer from './Footer';
import Header from './Header';
import RPSAppBar from './MenuBar';
import Game from './Game';
import Results from './Results';
import Help from './Help';

const styles = css({
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  fontSize: 'clamp(1rem, 2rem, 4rem)',
});

const App = () => {

  return (
    <div css={styles}>
      <Header />
      <RPSAppBar />
      <Routes>
        <Route path="/" element={ <Game /> }/>
        <Route path="/game" element={ <Game /> }/>
        <Route path="/results" element={ <Results /> }/>
        <Route path="/help" element={ <Help /> }/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
