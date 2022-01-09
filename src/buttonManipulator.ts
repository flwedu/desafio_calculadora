import { EventEmitter } from "./core/EventEmitter";

const numberButtons: NodeListOf<HTMLInputElement> = document.querySelectorAll("input.number");
const operatorButtons: NodeListOf<HTMLInputElement> = document.querySelectorAll("input.operator");
const button__clear = document.getElementById("button_clear");

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

button__clear?.addEventListener("click", () => {
    EventEmitter.emit("clear", null)
})

export { numberButtons, operatorButtons, button__clear };