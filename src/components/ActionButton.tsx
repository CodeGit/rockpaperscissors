/** @jsxImportSource @emotion/react */
import React from "react";
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

export const buttonDiameter = 20;

const styles = css({
    position: "relative",
    backgroundColor: "rgba(0, 0, 0, 0)",
});

const roundButtonStyles = css({
    height: `${buttonDiameter / 1.3}rem`,
    width: `${buttonDiameter / 1.3}rem`,
    top: "50%",
    left: "50%",
    borderRadius: "50%",
    border: "5px solid #ececec",
    cursor: "pointer",
});

const selectedRoundButtonStyles = css({
    backgroundColor: "#0A3463",
    boxShadow: 
    "-1px -1px 10px rgba(255, 255, 255, 1), 1px 1px 10px rgba(70, 70, 70, 0.5)",
    '&: hover': {
        background: "rgba(135, 206, 235, 0.4)",
        transition: "all 0.4s ease"
    },
    '&: active': {
        background: "rgba(10, 52, 99, 0.4)",
        boxShadow: 
        "-10px -10px 10px rgba(255, 255, 255, 1), 10px 10px 10px rgba(70, 70, 70, 0.5)",
        transition: "all 0.4s ease"
    },
}, roundButtonStyles);

const unselectedRoundButtonStyles = css({
    boxShadow: 
    "-10px -10px 10px rgba(255, 255, 255, 1), 10px 10px 10px rgba(70, 70, 70, 0.5)",
    backgroundColor: "#ffffff",
    '&: hover': {
        background: "rgba(135, 206, 235, 0.4)",
        transition: "all 0.4s ease"
    },
    '&: active': {
        background: "rgba(10, 52, 99, 1)",
        boxShadow: 
        "-1px -1px 10px rgba(255, 255, 255, 1), 1px 1px 10px rgba(70, 70, 70, 0.5)",
        transition: "all 0.4s ease"
    },
}, roundButtonStyles);

const svgStyles = css({
    position: "absolute",
    top: `${buttonDiameter * 0.12}rem`,
    left: `${buttonDiameter * 0.12}rem`,
    height: `${buttonDiameter / 1.75}rem`,
    width: `${buttonDiameter / 1.75}rem`,
});

export const rpsGameActions = [ActionType.Rock, ActionType.Paper, ActionType.Scissors];
export const rpslsGameActions = rpsGameActions.concat(ActionType.Lizard, ActionType.Spock) ;

const ActionButton: React.FC<ActionProps> = ({action, selected, toggleSelected}) => {
    // select appropriate SVG icon for type
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
    // set styles and colours based on selected
    let buttonStyles;
    let strokeColour;
    if (selected) {
        buttonStyles = selectedRoundButtonStyles;
        strokeColour = 'white';
    } else {
        buttonStyles = unselectedRoundButtonStyles;
        strokeColour = 'black';
    }
    return (
            <div css={styles}>
                <div 
                    css={buttonStyles} 
                    onClick={toggleSelected} 
                    aria-label={action}>
                    <Icon css={svgStyles} stroke={strokeColour} onClick={toggleSelected}/>
                </div>
            </div>
    );
}

export default ActionButton;