import { Calculator } from "./Calculator";
import { EventEmitter } from "./core/EventEmitter";
import { DisplayManager } from "./DisplayManager";

export class App {

  constructor(private readonly display: DisplayManager, private readonly calculator: Calculator, private eventEmitter: typeof EventEmitter) { }

  initialize() {

    this.eventEmitter.on("number", (input: string) => {
      this.display.addTextToDisplay(input);
    });

    this.eventEmitter.on("signal", (input: string) => {
      if (this.display.displayIsEmpty()) return;
      const [_, a, signal, b] = this.display.extractExpressionValues();
      if (signal && !b) this.display.backspace();
      if (signal && b) this.doMathAndUpdateDisplay();
      this.display.addTextToDisplay(input);
      this.display.setClearOnNextInput(false);
    });

    this.eventEmitter.on("equal", () => {
      this.doMathAndUpdateDisplay();
      this.display.setClearOnNextInput(true);
    });

    this.eventEmitter.on("clear", () => {
      this.display.clearDisplay();
      this.calculator.clear();
    })

  }
  doMathAndUpdateDisplay() {
    const [_, a, signal, b] = this.display.extractExpressionValues();
    const result = this.calculator.doMath(a, signal, b);
    this.display.setTextToDisplay(result);
  }
}



