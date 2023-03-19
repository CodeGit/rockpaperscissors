/** @jsxImportSource @emotion/react */
import React from 'react';

import mainCss from './MainStyle';
// import { settings } from './config/defaults'

const Results: React.FC = () => {
    return(
        <div css={mainCss} data-testid='results'>
            <h1>Results</h1>
        </div>
    );
}

export default Results;