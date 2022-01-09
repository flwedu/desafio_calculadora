import Calculator from "./Calculator";
import { EventEmitter } from "./core/EventEmitter";
import { IMathOperation } from "./core/MathOperation";
import Display from "./Display";
import "./buttonManipulator";

const displayHtmlElementRef = document.getElementById("display") as HTMLInputElement;

const display = new Display(displayHtmlElementRef);
const calculator = new Calculator();

let lastSignal = "";
let valueA: number | null = null;
let valueB: number | null = null;

/**
 * EventListners to listen in this class:
 *  numberClicked
 *  calculate
 *  signalClicked
 *  equalsClicked
 *  error
 *  clear
 */

EventEmitter.on("numberClicked", (value: string) => {
    display.addText(value);
})

EventEmitter.on("calculate", (data: IMathOperation) => {
    const result = calculator.calculate(data);
    display.setDisplay(result);

    if (result != "Error!") {
        valueA = Number(result);
    }
    else {
        EventEmitter.emit("error", null);
    }
})

EventEmitter.on("signalClicked", (signal: string) => {

    if (signal != "=")
        lastSignal = signal;

    if (!valueA)
        valueA = Number(display.getText());
    else if (!valueB)
        valueB = Number(display.getText());

    const data: IMathOperation = {
        valueA,
        valueB,
        signal: lastSignal
    }

    if (signal == "=") {
        EventEmitter.emit("calculate", data)
    }

})

EventEmitter.on("error", () => {
    valueA = null;
    valueB = null;
})

EventEmitter.on("clear", () => {
    display.clearText();
})