import Calculator from "./Calculator";
import { EventEmitter } from "./core/EventEmitter";
import { IMathOperation } from "./core/MathOperation";
import Display from "./Display";
import "./buttonManipulator";
import "./style/styles.css"

const displayHtmlElementRef = document.getElementById("display") as HTMLInputElement;

const display = new Display(displayHtmlElementRef);
const calculator = new Calculator();
const eventEmitter = new EventEmitter();

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

eventEmitter.on("numberClicked", (value: string) => {
    display.addText(value);
})

eventEmitter.on("calculate", (data: IMathOperation) => {

    try {
        const result = calculator.calculate(data);
        display.setDisplay(result.toString());
        valueA = result;
    }
    catch (error) {
        eventEmitter.emit("error", null);
    }
})

eventEmitter.on("signalClicked", (signal: string) => {

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
        eventEmitter.emit("calculate", data)
    }

})

eventEmitter.on("error", () => {
    display.setDisplay("Error!")
    valueA = null;
    valueB = null;
})

eventEmitter.on("clear", () => {
    display.clearText();
    valueA = null;
    valueB = null;
    lastSignal = ""
})

export { eventEmitter };