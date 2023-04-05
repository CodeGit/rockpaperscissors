import ActionButton from "./ActionButton";
import ButtonCircle from "./ButtonCircle";
import { GameMode } from "../gameType";

export default {
    title: "Button Circle",
    component: ButtonCircle
}

export const rockPaperScissors = <ButtonCircle mode={GameMode.RPS} /> 