import ActionButton from "./ActionButton";
import { RockAction } from "./ActionButton";

export default {
    title: "Action Button",
    component: ActionButton,
};

export const Rock = () => <ActionButton action={RockAction} />;