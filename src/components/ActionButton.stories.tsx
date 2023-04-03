import { JSX } from "@emotion/react/jsx-runtime";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ActionButton, { ActionType }  from "./ActionButton";

export default {
    title: "Action Button",
    component: ActionButton,
} as ComponentMeta<typeof ActionButton>;

const Template:ComponentStory<typeof ActionButton> = (args) => <ActionButton {...args} />
let selected = false;
export const ExampleButton = Template.bind({});
ExampleButton.args = {
    action: ActionType.Rock,
    selected: selected,
    toggleSelected : () => {selected = selected ? false : true}
};
