import { eventEmitter } from "./app";

// Set var to elementos
const numberButtons = document.querySelectorAll(".button") as NodeListOf<HTMLInputElement>;
const signalButtons = document.querySelectorAll(".signal") as NodeListOf<HTMLInputElement>;
const equalButton = document.getElementById("button_equal") as HTMLInputElement;
const clearButton = document.getElementById("button_clear") as HTMLInputElement;

// Set function to buttons
numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        eventEmitter.emit("number", button.value);
    });
})

signalButtons.forEach((button) => {
    button.addEventListener("click", () => {
        eventEmitter.emit("signal", button.value);
    });
})

equalButton.addEventListener("click", () => {
    eventEmitter.emit("equal", {});
});

clearButton.addEventListener("click", () => {
    eventEmitter.emit("clear", {});
});

export { numberButtons, signalButtons, equalButton, clearButton }