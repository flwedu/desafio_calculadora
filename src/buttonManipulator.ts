import { EventEmitter } from "./core/EventEmitter";

const numberButtons: NodeListOf<HTMLInputElement> = document.querySelectorAll("input.number");
const operatorButtons: NodeListOf<HTMLInputElement> = document.querySelectorAll("input.operator");

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