/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
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
import { gameModes, gameType } from './gameType';

interface GameModeContextData {
  selectedMode: gameType,
  setSelectedMode: (selected: gameType) => void;
};

const gameModeContextDefault: GameModeContextData = {
  selectedMode: gameModes[0],
  setSelectedMode: () => null
};

export const GameModeContext = React.createContext<GameModeContextData>(gameModeContextDefault)

const styles = css({
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  fontSize: 'clamp(1rem, calc(1em + 2vw), 4rem)',
  //fontSize: "calc(1em + 2vw)",
});

const App = () => {
  const [selectedMode, setSelectedMode] = useState(gameModes[0]);
  gameModeContextDefault.selectedMode = selectedMode;
  gameModeContextDefault.setSelectedMode = setSelectedMode;

  return (
    <div css={styles}>
      <GameModeContext.Provider value={gameModeContextDefault}>
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
      </GameModeContext.Provider>
    </div>
  );
}

export default App;
