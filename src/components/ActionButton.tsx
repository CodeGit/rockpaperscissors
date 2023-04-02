/** @jsxImportSource @emotion/react */
import React, { ReactComponentElement } from "react";
import { Button, IconButton } from "@mui/material";
import { ReactComponent as RockLogo } from "../assets/rock-outline.svg";
import { ReactComponent as PaperLogo } from "../assets/paper-outline.svg";
import { ReactComponent as ScissorsLogo } from "../assets/scissors-outline.svg";
import { ReactComponent as LizardLogo } from "../assets/lizard-outline.svg";
import { ReactComponent as SpockLogo } from "../assets/spock-outline.svg";
import { css } from "@mui/material";

export enum ActionType {
    Rock = "Rock", 
    Paper = "Paper", 
    Scissors = "Scissors", 
    Lizard = "Lizard", 
    Spock = "Spock",
}

export interface ActionProps {
    action: ActionType, 
    selected: boolean,
    toggleSelected: () => void,
};

const styles = css({
    display: "flex",
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 'clamp(1em, calc(1em + 2vw), 3em)',
    width: 'fit-content',
    textTransform: 'none',
    color: '7CA0DC',
    height: "1vh)",
});

const imgStyles = css({
    height: "clamp(1vh, calc(1em + 13vh), 30vh)",
    width: "clamp(1vw, calc(1em + min-content), 30vw)",
});

export const rpsGameActions = [ActionType.Rock, ActionType.Paper, ActionType.Scissors];
export const rpslsGameActions = rpsGameActions.concat(ActionType.Lizard, ActionType.Spock) ;

const ActionButton: React.FC<ActionProps> = ({action, selected, toggleSelected}) => {
    let Icon; 
    switch(action) {
        case ActionType.Rock:
            Icon = RockLogo;
            break;
        case ActionType.Paper:
            Icon = PaperLogo;
            break;
        case ActionType.Scissors:
            Icon = ScissorsLogo;
            break;
        case ActionType.Lizard:
            Icon = LizardLogo;
            break;
        case ActionType.Spock:
            Icon = SpockLogo;
            break;
    }
    return (
            <Button css={styles} onClick={toggleSelected}>
                <Icon />
                <span>{action}</span>
            </Button>
    );
}

export default ActionButton;