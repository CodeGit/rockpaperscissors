/** @jsxImportSource @emotion/react */
import React from "react";
import { Link } from 'react-router-dom';
import { css, jsx } from '@emotion/react';
import { AppBar, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { settings } from './config/defaults'
import { gameModes } from "./gameType";

const styles = css({
    backgroundColor: 'whitesmoke',
    minHeight: '5vh',
    width: '100%',
    position: 'static',
    color: 'black',
});  

const RPSAppBar: React.FC = () => {
    const [anchorElement, setAnchorElement] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorElement);

    const handlePlayMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElement(event.currentTarget);
    };

    const handlePlayMenuClose = () => {
        setAnchorElement(null);
    };

    return( 
        <AppBar css={styles}>
            <Toolbar>
                <IconButton onClick={handlePlayMenu}>
                    Play...
                </IconButton>
                <Menu 
                    open={open}
                    onClose={handlePlayMenuClose}
                    anchorEl={anchorElement}
                >
                    {
                        gameModes.map((mode) => {
                            return (
                                <MenuItem>
                                    <Button component={Link} to={`/game/${mode}`}>{mode}</Button>
                                </MenuItem>
                            )})
                    }
                </Menu>
                <MenuItem><IconButton component={Link} to="/results">Results</IconButton></MenuItem>
                <MenuItem><IconButton component={Link} to="/help">Help</IconButton></MenuItem>
            </Toolbar>
            
        </AppBar>
    );
}

export default RPSAppBar;