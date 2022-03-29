import { Calculator } from "./Calculator";
import { EventEmitter } from "./core/EventEmitter";
import { DisplayManager } from "./DisplayManager";

const displayManager = new DisplayManager(document.getElementById("display") as HTMLInputElement);
const calculator = new Calculator();
const eventEmitter = new EventEmitter();

eventEmitter.on("number", function (input: string) {
  displayManager.addTextToDisplay(input);
});

eventEmitter.on("signal", function (input: string) {
  const [_, a, signal, b] = displayManager.extractExpressionValues();
  if (signal && !b) displayManager.backspace();
  if (signal && b) doMathAndUpdateDisplay();
  displayManager.addTextToDisplay(input);
});

eventEmitter.on("equal", function () {
  doMathAndUpdateDisplay();
});

eventEmitter.on("clear", function () {
  displayManager.clearDisplay();
  calculator.clear();
})

function doMathAndUpdateDisplay() {
  const [_, a, signal, b] = displayManager.extractExpressionValues();
  const result = calculator.doMath(a, signal, b);
  displayManager.setTextToDisplay(result);
}

export { eventEmitter };