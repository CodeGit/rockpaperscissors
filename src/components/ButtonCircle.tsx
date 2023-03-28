/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@mui/material";
import ActionButton from "./ActionButton";

const box = {
    height: 90,
    width: 100
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

const ButtonCircle: React.FC<{buttons: React.ReactElement[]}> = ({buttons}) => {
    console.log(circle);
    return (
        <svg css={styles}>
            <circle fill="none" stroke="#231F20" strokeWidth={`${circle.stroke}vh`} cx={`${circle.width}vw`} cy={`${circle.height}vh`} r={`${circle.radius}vh`} opacity="0.6" />
        </svg>
    );
};

export default ButtonCircle;