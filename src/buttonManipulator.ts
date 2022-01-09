import { EventEmitter } from "./core/EventEmitter";

const numberButtons: NodeListOf<HTMLInputElement> = document.querySelectorAll("input.number");
const operatorButtons: NodeListOf<HTMLInputElement> = document.querySelectorAll("input.operator");

const button__equals = document.getElementById("button_equal") as HTMLInputElement;

/**
 * Buttons event listners
 */
numberButtons.forEach(button => {
    button.onclick = () => {
        EventEmitter.emit("numberClicked", button.value)
    }
})

operatorButtons.forEach(button => {
    button.onclick = () => {
        EventEmitter.emit("signalClicked", button.value)
    }
})

//@ts-ignore
button__equals.onclick(() => {
    EventEmitter.emit("equalsClicked", null);
})

export { numberButtons, operatorButtons, button__equals };