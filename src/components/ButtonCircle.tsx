/** @jsxImportSource @emotion/react */
import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import { css } from "@mui/material";
import ActionButton, {rpsGameActions, rpslsGameActions, ActionType, buttonDiameter} from "./ActionButton";
import { GameMode } from "../gameType";
import { SerializedStyles } from "@emotion/react";

const box = {
    height: buttonDiameter * 3,
    width: buttonDiameter * 3
}

const stroke = 2;

const circle = {
    height: box.height/2,
    width: box.width/2,
    radius: box.height/2 - (stroke),
    stroke: stroke,
}

const styles = css({
    position: "relative",
    width: "fit-content",
    height: "fit-content",
    top: "0",
    left: "0",
});

const svgStyles = css({
    width: `${box.width}rem`,
    height: `${box.height}rem`,
    margin:"auto",
});

const defaultButtonStyle = css({
    position: "absolute",
    zIndex: "5",
    padding: "auto",
    margin: "0 auto",
});

const rpsStyles = [
    css({
        top: `${0}rem`,
        left: `${(box.width / 2) - (buttonDiameter * 0.4)}rem`
    }, defaultButtonStyle),
    css({
        top: `${box.height - (buttonDiameter * 0.76)}rem`,
        left: `0rem`
    }, defaultButtonStyle),
    css({
        top: `${box.height - (buttonDiameter * 0.76)}rem`,
        left: `${box.width - (buttonDiameter * 0.8)}rem`
    }, defaultButtonStyle),
]; 

const rpslsStyles = [
    css({
        top: `${0}rem`,
        left: `${(box.width / 2) - (buttonDiameter * 0.4)}rem`
    }, defaultButtonStyle),
    css({
        top: `${buttonDiameter}rem`,
        left: `0rem`
    }, defaultButtonStyle),
    css({
        top: `${buttonDiameter}rem`,
        left: `${box.width - (buttonDiameter * 0.8)}rem`
    }, defaultButtonStyle),
    css({
        top: `${box.height - (buttonDiameter * 0.76)}rem`,
        left: `${(buttonDiameter * 0.4)}rem`
    }, defaultButtonStyle),
    css({
        top: `${box.height - (buttonDiameter * 0.76)}rem`,
        left: `${(box.width * 0.45) + (buttonDiameter * 0.4)}rem`
    }, defaultButtonStyle),
    
]; 

interface  CircleProps {
    mode: GameMode
}
const ButtonCircle: React.FC<CircleProps> = ({mode=GameMode.RPS}) => {
    const [selectedButton, setSelectedButton] = useState(-1);
    let buttons: JSX.Element[];
    let buttonStyles: SerializedStyles[];
    
    useEffect(() => {
        console.log(`Selected button ${selectedButton}`);
    }, [selectedButton]);

    const positionButton = (button: JSX.Element, index: number, numButtons: number, buttonDiameter: number, box: {height: number, width: number}, defaultButtonStyle: SerializedStyles, buttonStyles: SerializedStyles[]) => {
        const r = box.height/2;
        const a = box.height/2;
        const b = box.width/2;
        
        const angle = ((Math.PI*2)/numButtons) * index;
        // calculate x and y for first quadrant of circle
        let x = r * Math.cos(angle);
        let y = r * Math.sin(angle);
        
        const top = (box.height/2) - x;
        const left = (box.width/2) + y - (buttonDiameter/2);
        
        console.log(`${index}: angle=${(angle).toFixed(2)} raw-x=${x.toFixed(2)} raw-y=${y.toFixed(2)} h=${box.height} w=${box.width} d=${buttonDiameter} top=${top.toFixed(2)} left=${left.toFixed(2)}`);
        const style = css({
            top: `${top}rem`,
            left: `${left}rem`
        }, defaultButtonStyle);
        return (<div css={style} key={`${index}-button`}>{button}</div>)
    };

    const setActiveButton = (index:number) => {
        setSelectedButton(index);
    };

    const createButtons = (action:ActionType, index:number) => <ActionButton data-test-id={action} action={action} selected={index === selectedButton} toggleSelected={() => {setActiveButton(index)}} />;

    switch(mode) {
        case GameMode.RPS:
            buttons = rpsGameActions.map(createButtons);
            buttonStyles = rpsStyles;
            break;
        case GameMode.RPSLS:
            buttons = rpslsGameActions.map(createButtons);
            buttonStyles = rpslsStyles;
            break;
    }
    return (
        <div data-test-id="circle-container" css={styles}>
            <svg css={svgStyles} data-test-id="circle-svg">
            </svg>
            { buttons.map((button, index) => positionButton(button, index, buttons.length, buttonDiameter, box, defaultButtonStyle, buttonStyles) ) }
        </div>
        
    );
};

export default ButtonCircle;