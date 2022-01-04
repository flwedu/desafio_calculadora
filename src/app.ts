import Calculator from "./Calculator";
import Display from "./Display";

const displayHtmlElementRef = document.getElementById("display") as HTMLInputElement;
const numberButtons: NodeListOf<HTMLInputElement> = document.querySelectorAll("input.number");
const operatorButtons: NodeListOf<HTMLInputElement> = document.querySelectorAll("input.operator");

const display = new Display(displayHtmlElementRef);
const calculator = new Calculator(display);

/**
 * Buttons event listners
 */
numberButtons.forEach(button => {
    button.onclick = () => {
        display.addText(button.value);
    }
})

operatorButtons.forEach(button => {
    button.onclick = () => {
        calculator.storeValueOrDoTheMath(button.value);
    }
})