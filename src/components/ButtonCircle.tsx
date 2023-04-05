/** @jsxImportSource @emotion/react */
import React, { ReactElement, ReactNode, useState } from "react";
import { css } from "@mui/material";
import ActionButton, {rpsGameActions, rpslsGameActions, ActionType, ActionProps} from "./ActionButton";
import { GameMode } from "../gameType";

const box = {
    height: 90,
    width: 90
}

const stroke = 2;
const circle = {
    height: box.height/2,
    width: box.width/2,
    radius: box.height/2 - (stroke),
    stroke: stroke,
}

const styles = css({
    width: `${box.width}vw`,
    height: `${box.height}vh`,
});

interface  CircleProps {
    mode: GameMode
}
const ButtonCircle: React.FC<CircleProps> = ({mode}) => {
    const [buttonClicked, setButtonclicked] = useState(false);
    const [selectedButton, setSelectedButton] = useState(ActionType.Rock);

    const positionButton = (button: JSX.Element, index: number) => { 
        console.log(`Index ${index}`);
        
        const top = (index + 1 ) * 50;
        const left = (index + 1 ) * 50;
        const buttonStyle = css({
            position: "relative",
            zIndex: "10",
            top: `${top}`,
            left: `${left}`,
        })
        console.log(`Index = ${index} X = ${top} Y = ${left}`);
        return (<div css={buttonStyle} key={index}>{button}</div>)
    };
    
    let buttons: JSX.Element[];
    switch(mode) {
        case GameMode.RPS:
            buttons = rpsGameActions.map(action => <ActionButton action={action} selected={false} toggleSelected={() => {}} />);
            break;
        case GameMode.RPSLS:
            buttons = rpslsGameActions.map(action => <ActionButton action={action} selected={false} toggleSelected={() => {}} />);
            break;
    }
    return (
        <div>
            <svg css={styles}>
                <circle fill="none" stroke="#231F20" strokeWidth={`${circle.stroke}vh`} cx={`${circle.width}vw`} cy={`${circle.height}vh`} r={`${circle.radius}vh`} opacity="0.6" />
            </svg>
            { buttons.map((button, index) => positionButton(button, index) ) }
        </div>
        
    );
};

export default ButtonCircle;