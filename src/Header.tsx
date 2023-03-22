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
    const mode = useContext(GameModeContext);

    return(
        <div css={styles} data-testid='header'>
                {mode.desc}
        </div>
    );
}

export default Header;