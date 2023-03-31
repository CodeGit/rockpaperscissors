import { JSX } from "@emotion/react/jsx-runtime";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ActionButton, { ActionProps, RockAction, PaperAction, ScissorsAction, LizardAction, SpockAction }  from "./ActionButton";

export default {
    title: "Action Button",
    component: ActionButton,
} as ComponentMeta<typeof ActionButton>;

const Template:ComponentStory<typeof ActionButton> = (args) => <ActionButton {...args} />
let rockSelected = false;
export const Rock = Template.bind({});
Rock.args = {
    action: RockAction,
    selected: rockSelected,
    toggleSelected : () => {rockSelected = rockSelected ? false : true}
};

let  paperSelected = false;
export const Paper = Template.bind({});
Paper.args = {
    action: PaperAction,
    selected: paperSelected,
    toggleSelected : () => {paperSelected = paperSelected ? false : true}
};

let  scissorsSelected = false;
export const Scissors = Template.bind({});
Scissors.args = {
    action: ScissorsAction,
    selected: scissorsSelected,
    toggleSelected : () => {scissorsSelected = scissorsSelected ? false : true}
};

let  lizardSelected = false;
export const Lizard = Template.bind({});
Lizard.args = {
    action: LizardAction,
    selected: lizardSelected,
    toggleSelected : () => {lizardSelected = lizardSelected ? false : true}
};

let spockSelected = false;
export const Spock = Template.bind({});
Spock.args = {
    action: SpockAction,
    selected: spockSelected,
    toggleSelected : () => {spockSelected = spockSelected ? false : true}
};
