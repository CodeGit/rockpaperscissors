/** @jsxImportSource @emotion/react */
import { gameType, gameModes } from './gameType';
import { GameModeContext } from './App';
import { useContext } from 'react';


const Game: React.FC<{mode?: gameType}> = ({mode}) => {
    const { selectedMode, setSelectedMode } = useContext(GameModeContext);
    mode = mode ? mode : selectedMode;
    setSelectedMode(mode);

    return(
        <div data-testid='game'>
            <h1>{selectedMode.desc}</h1>
        </div>
    );
}

export default Game;