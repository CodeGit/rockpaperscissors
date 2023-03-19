/** @jsxImportSource @emotion/react */
import React from 'react';

import mainCss from './MainStyle';
import { settings } from './config/defaults'

const Help: React.FC = () => {
    return(
        <div css={mainCss} data-testid='help'>
            <h1>Help</h1>
        </div>
    );
}

export default Help;