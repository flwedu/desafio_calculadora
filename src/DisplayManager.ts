import { MathOperation } from "./MathOperation";

export class DisplayManager {

  private fullExpressionRegexp = /^(-?\d+\.?\d*)([*\-+\/]?)(\d+\.?\d*)?$/;

  constructor(private readonly displayHtmlElement: HTMLInputElement) {
  }

  addTextToDisplay(input: string) {
    this.displayHtmlElement.value += input;
  }

  setTextToDisplay(text: string) {
    this.displayHtmlElement.value = text;
  }

  extractMathOperation(): MathOperation {
    const [_, a, signal, b] = this.extractExpressionValues();
    return new MathOperation({ a, signal, b });
  }

  extractExpressionValues() {
    const array = this.fullExpressionRegexp.exec(this.displayHtmlElement.value);
    return array;
  }

  checkIfExpressionIsComplete(): boolean {
    return this.fullExpressionRegexp.test(this.displayHtmlElement.value);
  }

  displayIsEmpty() {
    return this.displayHtmlElement.value.length != 0;
  }

  clearDisplay() {
    this.setTextToDisplay("");
  }

  backspace() {
    let actual = this.displayHtmlElement.value;
    actual = actual.slice(0, -1);
    this.displayHtmlElement.value = actual;
  }
}
