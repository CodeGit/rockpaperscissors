/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { settings } from './config/defaults'

const styles = css({
    minHeight: '10vh',
    backgroundColor: 'darkolivegreen',
    width: '100%',
});

const Footer: React.FC = () => {
    return(
        <div css={styles} data-testid='footer'>
            {settings.footer}
        </div>
    );
}

export default Footer;