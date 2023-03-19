/** @jsxImportSource @emotion/react */
import React from "react";

import mainCss from "./MainStyle";
import { settings } from './config/defaults'

const Game: React.FC = () => {
    return(
        <div css={mainCss} data-testid='game'>
            <h1>Game</h1>
        </div>
    );
}

export default Game;