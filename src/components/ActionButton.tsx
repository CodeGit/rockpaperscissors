/** @jsxImportSource @emotion/react */
import React from "react";
import { Button, IconButton } from "@mui/material";
import RockLogo from "../assets/rock.svg";
import PaperLogo from "../assets/paper.svg";
import ScissorsLogo from "../assets/scissors.svg";
import LizardLogo from "../assets/lizard.svg";
import SpockLogo from "../assets/spock.svg";
import { css } from "@mui/material";

interface Action {
    name: string,
    icon: string,
};

export interface ActionProps {
    action: Action, 
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
});

const imgStyles = css({
    height: "clamp(1vh, calc(1em + 13vh), 30vh)",
    width: "clamp(1vw, calc(1em + min-content), 30vw)",
});

export const RockAction= {name: "Rock", icon: RockLogo};
export const PaperAction = {name: "Paper", icon: PaperLogo};
export const ScissorsAction = {name: "Scissors", icon: ScissorsLogo};
export const LizardAction = {name: "Lizard", icon: LizardLogo};
export const SpockAction = {name: "Spock", icon: SpockLogo};

export const rpsGameActions = [RockAction, PaperAction, ScissorsAction];
export const rpslsGameActions = [RockAction, PaperAction, ScissorsAction, LizardAction, SpockAction];

const ActionButton: React.FC<ActionProps> = ({action, selected, toggleSelected}) => {
    console.log(`State = ${selected}`)
    return (
            <Button css={styles} onClick={toggleSelected}>
                <img src={action.icon} css={imgStyles}/>
                <span>{action.name}</span>
            </Button>
    );
}

export default ActionButton;