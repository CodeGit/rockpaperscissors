/** @jsxImportSource @emotion/react */
import React from "react";
import { Button, IconButton } from "@mui/material";
import RockLogo from "../assets/rock.svg";
import PaperLogo from "../assets/paper.svg";
import ScissorsLogo from "../assets/scissors.svg";
import LizardLogo from "../assets/lizard.svg";
import SpockLogo from "../assets/spock.svg";
import { css } from "@mui/material";

import PropTypes, { string } from "prop-types";

const styles = css({
    display: "flex",
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
});

const labelStyles = css({
    fontSize: "4vw",
});

const imgStyles = css({
    height: "15vh",
    width: "15vw",
});

export interface Action {
    name: string,
    icon: string,
};

export const RockAction= {name: "Rock", icon: RockLogo};
export const PaperAction = {name: "Paper", icon: PaperLogo};
export const ScissorsAction = {name: "Scissors", icon: ScissorsLogo};
export const LizardAction = {name: "Lizard", icon: LizardLogo};
export const SpockAction = {name: "Spock", icon: SpockLogo};

const rpsActions = [RockAction, PaperAction, ScissorsAction];
const rpslsActions = [RockAction, PaperAction, ScissorsAction, LizardAction, SpockAction];

const ActionButton: React.FC<{action: Action, onClick: Function}> = ({action, onClick}) => {
    console.log(`Action ${action.name}`);
    return (
        <div css={styles}>
            <Button>
                <img src={action.icon} css={imgStyles}/>
            </Button>
            <span css={labelStyles}>{action.name}</span>
        </div>
    );
}

export default ActionButton;