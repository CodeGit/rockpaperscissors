/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';

import { settings } from './config/defaults'

const styles = css({
    backgroundColor: 'darkolivegreen',
    minHeight: '5vh',
    color: 'white',
    width: '100%'
});

const Header: React.FC = () => {
    return(
        <div css={styles} data-testid='header'>
            {settings.appName}
        </div>
    );
}

export default Header;