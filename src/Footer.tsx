/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { settings } from './config/defaults'

const styles = css({
    minHeight: '1vh',
    backgroundColor: 'darkolivegreen',
    width: '100%',
    color: 'white',
    
});

const Footer: React.FC = () => {
    return(
        <div css={styles} data-testid='footer'>
            {settings.footer}
        </div>
    );
}

export default Footer;