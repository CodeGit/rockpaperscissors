/** @jsxImportSource @emotion/react */
import React from "react";
import { Button, IconButton } from "@mui/material";
import RockLogo from "../assets/rock.svg";
import PaperLogo from "../assets/paper.svg";
import ScissorsLogo from "../assets/scissors.svg";
import LizardLogo from "../assets/lizard.svg";
import SpockLogo from "../assets/spock.svg";

export interface Action {
    name: string,
    icon: string,
};

export const RockAction= {name: "Rock", icon: RockLogo};
export const PaperAction = {name: "Paper", icon: PaperLogo};
export const ScissorsAction = {name: "Scissors", icon: ScissorsLogo};
export const LizardAction = {name: "Lizard", icon: LizardLogo};
export const SpockAction = {name: "Spck", icon: SpockLogo};

const rpsActions = [RockAction, PaperAction, ScissorsAction];
const rpslsActions = [RockAction, PaperAction, ScissorsAction, LizardAction, SpockAction];

const ActionButton: React.FC<Action> = (action) => {
    return (<Button>
        <img src={action.icon} alt={action.name}/>
    </Button>);
}

export default ActionButton;