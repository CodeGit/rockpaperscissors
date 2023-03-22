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
import ContentContainer from './Content';
import { gameModes } from './gameType';

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
        <Route path="/" element={ <ContentContainer><Game /></ContentContainer> }/>
        <Route path="/game" element={ <ContentContainer><Game /></ContentContainer> }/>
        <Route path="/results" element={ <ContentContainer><Results /></ContentContainer> }/>
        <Route path="/help" element={ <ContentContainer><Help /></ContentContainer> }/>
        {
          gameModes.map((mode) => { 
            return(
              <Route path={`/game/${mode.code}`} element={ <ContentContainer><Game mode={mode}/></ContentContainer> }/> 
          )})
        }
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
