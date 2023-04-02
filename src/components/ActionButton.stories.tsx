import { JSX } from "@emotion/react/jsx-runtime";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ActionButton, { ActionProps, ActionType }  from "./ActionButton";

export default {
    title: "Action Button",
    component: ActionButton,
} as ComponentMeta<typeof ActionButton>;

const Template:ComponentStory<typeof ActionButton> = (args) => <ActionButton {...args} />
let rockSelected = false;
export const Rock = Template.bind({});
Rock.args = {
    action: ActionType.Rock,
    selected: rockSelected,
    toggleSelected : () => {rockSelected = rockSelected ? false : true}
};

let  paperSelected = false;
export const Paper = Template.bind({});
Paper.args = {
    action: ActionType.Paper,
    selected: paperSelected,
    toggleSelected : () => {paperSelected = paperSelected ? false : true}
};

let  scissorsSelected = false;
export const Scissors = Template.bind({});
Scissors.args = {
    action: ActionType.Scissors,
    selected: scissorsSelected,
    toggleSelected : () => {scissorsSelected = scissorsSelected ? false : true}
};

let  lizardSelected = false;
export const Lizard = Template.bind({});
Lizard.args = {
    action: ActionType.Lizard,
    selected: lizardSelected,
    toggleSelected : () => {lizardSelected = lizardSelected ? false : true}
};

let spockSelected = false;
export const Spock = Template.bind({});
Spock.args = {
    action: ActionType.Spock,
    selected: spockSelected,
    toggleSelected : () => {spockSelected = spockSelected ? false : true}
};
