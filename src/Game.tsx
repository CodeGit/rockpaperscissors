/** @jsxImportSource @emotion/react */
import { GameMode } from './gameType';
import { GameModeContext } from './App';
import { useContext } from 'react';
import ButtonCircle from './components/ButtonCircle';
const Game: React.FC<{mode?: GameMode}> = ({mode}) => {
    const { selectedMode, setSelectedMode } = useContext(GameModeContext);
    mode = mode ? mode : selectedMode;
    setSelectedMode(mode);

    return(
        <div data-testid='game'>
           <ButtonCircle mode={mode} />
        </div>
    );
}

export default Game;