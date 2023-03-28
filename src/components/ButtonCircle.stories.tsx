import ActionButton, { rpsGameActions, rpslsGameActions } from "./ActionButton";
import ButtonCircle from "./ButtonCircle";

export default {
    title: "Button Circle",
    component: ButtonCircle
}

const rpsButtons = rpsGameActions.map(
    x => (<ActionButton action={x} selected={false} toggleSelected={() => {console.log(`Clicked ${x.name}`)}} />)
);

export const rockPaperScissors = <ButtonCircle buttons={rpsButtons} /> 