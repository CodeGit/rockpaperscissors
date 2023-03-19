/** @jsxImportSource @emotion/react */
import React from "react";
import { Link } from 'react-router-dom';
import { css, jsx } from '@emotion/react';

import { settings } from './config/defaults'

const styles = css({
    backgroundColor: 'whitesmoke',
    minHeight: '5vh',
    width: '100%',
});  

const MenuBar: React.FC = () => {
    
    return( 
        <nav css={styles}>
            <ul>
                <li><Link to="/game">Play</Link></li>
                <li><Link to="/results">Results</Link></li>
                <li><Link to="/help">Help</Link></li>
            </ul>
        </nav>
    );
}

export default MenuBar;