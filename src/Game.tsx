import React from "react";
import './styles/App.css';
import { settings } from './config/defaults'

const Game: React.FC = () => {
    return(
        <div className="App-main" data-testid='game'>
            <h1>Game</h1>
        </div>
    );
}

export default Game;