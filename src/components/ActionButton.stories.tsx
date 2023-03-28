import { Button } from "@mui/material";
import ActionButton, { RockAction, PaperAction, ScissorsAction, LizardAction, SpockAction }  from "./ActionButton";

export default {
    title: "Action Button",
    component: ActionButton,
};

let rockSelected = false;
export const Rock = () => <ActionButton action={RockAction} selected={rockSelected} toggleSelected={() => {rockSelected = rockSelected ? false : true} } />;
let  paperSelected = false;
export const Paper = () => <ActionButton action={PaperAction} selected={paperSelected} toggleSelected={() => {paperSelected = paperSelected ? false : true}} />;
let  scissorsSelected = false;
export const Scissors = () => <ActionButton action={ScissorsAction} selected={scissorsSelected} toggleSelected={() => {scissorsSelected = scissorsSelected ? false : true}} />;
let  lizardSelected = false;
export const Lizard = () => <ActionButton action={LizardAction} selected={lizardSelected} toggleSelected={() => {lizardSelected = lizardSelected ? false : true}} />;
let spockSelected = false;
export const Spock = () => <ActionButton action={SpockAction} selected={spockSelected} toggleSelected={() => {spockSelected = spockSelected ? false : true}} />;
