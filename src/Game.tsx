/** @jsxImportSource @emotion/react */

import { settings } from './config/defaults'
import { gameType } from './gameType';

const Game: React.FC<{mode?: gameType}> = ({mode}) => {
    return(
        <div data-testid='game'>
            <h1>Game</h1>
        </div>
    );
}

export default Game;