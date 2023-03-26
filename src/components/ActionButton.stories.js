import { Button } from "@mui/material";
import ActionButton, { LizardAction, PaperAction, ScissorsAction, SpockAction } from "./ActionButton";
import { RockAction } from "./ActionButton";

export default {
    title: "Action Button",
    component: ActionButton,
};

export const Rock = () => <ActionButton action={RockAction} />;
export const Paper = () => <ActionButton action={PaperAction} />;
export const Scissors = () => <ActionButton action={ScissorsAction} />;
export const Lizard = () => <ActionButton action={LizardAction} />;
export const Spock = () => <ActionButton action={SpockAction} />;

export const Test = () => <Button >Test</Button>