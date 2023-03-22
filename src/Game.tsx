/** @jsxImportSource @emotion/react */
import { gameType, gameModes } from './gameType';


const Game: React.FC<{mode?: gameType}> = ({mode}) => {
    return(
        <div data-testid='game'>
            <h1>{mode ? mode.desc : gameModes[0].desc}</h1>
        </div>
    );
}

export default Game;