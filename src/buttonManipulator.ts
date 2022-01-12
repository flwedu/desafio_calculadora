import { eventEmitter } from "./app";

const numberButtons: NodeListOf<HTMLInputElement> = document.querySelectorAll("input.number");
const operatorButtons: NodeListOf<HTMLInputElement> = document.querySelectorAll("input.operator");
const button__clear = document.getElementById("button_clear");

/**
 * Buttons event listners
 */
numberButtons.forEach(button => {
    button.onclick = () => {
        eventEmitter.emit("numberClicked", button.value)
    }
})

operatorButtons.forEach(button => {
    button.onclick = () => {
        eventEmitter.emit("signalClicked", button.value)
    }
})

button__clear?.addEventListener("click", () => {
    eventEmitter.emit("clear", null)
})

export { numberButtons, operatorButtons, button__clear };