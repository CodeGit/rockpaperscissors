/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import { useContext } from 'react';
import { GameModeContext } from './App';

const styles = css({
    backgroundColor: 'darkolivegreen',
    minHeight: '5vh',
    color: 'white',
    width: '100%'
});

const Header: React.FC = () => {
    const { selectedMode } = useContext(GameModeContext);

    return(
        <div css={styles} data-testid='header'>
                {selectedMode}
        </div>
    );
}

export default Header;