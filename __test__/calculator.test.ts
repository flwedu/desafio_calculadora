import Calculator from "../src/Calculator";
import Display from "../src/Display";

describe("Should receives the right value to operation with 4 basic signals (+, -, *, /)", () => {

    const input = document.createElement("input");
    const display = new Display(input);
    const calculator = new Calculator(display);

    it("Sum", () => {
        const sum = calculator.preparedOperation("+", 5);
        expect(sum(5)).toBe(10);
        expect(sum(50)).toBe(55);
    })

    it("Division", () => {
        const minus = calculator.preparedOperation("-", 2);
        expect(minus(3)).toBe(-1);
        expect(minus(1)).toBe(1);
    })

    it("Multiply", () => {

        const multiply = calculator.preparedOperation("*", 2);
        expect(multiply(3)).toBe(6);
        expect(multiply(1)).toBe(2);
        expect(multiply(-5)).toBe(-10);
    })

    it("Division", () => {
        const division = calculator.preparedOperation("/", 10);
        expect(division(2)).toBe(5);
        expect(division(1)).toBe(10);
    })
})

describe("Updating the display", () => {

    const input = document.createElement("input");
    const display = new Display(input);
    const calculator = new Calculator(display);

    beforeEach(() => {
        display.clearText();
        calculator.clearStoredOperation();
    })

    it("Should update the display with results when using '=' signal", () => {

        display.addText("10");
        calculator.storeValueOrDoTheMath("+")
        display.addText("15");
        calculator.storeValueOrDoTheMath("=");

        expect(display.getText()).toEqual("25");

    });

    it("Should get data from display and show the results", () => {

        const getTextFn = jest.spyOn(display, "getText");

        display.addText("45");
        calculator.storeValueOrDoTheMath("-");
        expect(getTextFn).toBeCalledTimes(1);

        display.addText("6");
        calculator.storeValueOrDoTheMath("*")
        expect(getTextFn).toBeCalledTimes(2);

        expect(display.getText()).toEqual("39");
    })
})

describe("Other math operations with signals + and =", () => {

    const input = document.createElement("input");
    const display = new Display(input);
    const calculator = new Calculator(display);

    beforeEach(() => {
        display.clearText();
        calculator.clearStoredOperation();
    })

    it("repeating the value to sum when clicked in = then +", () => {

        display.addText("3");
        calculator.storeValueOrDoTheMath("+");
        calculator.storeValueOrDoTheMath("=");

        expect(display.getText()).toEqual("6");
        calculator.storeValueOrDoTheMath("=");

        expect(display.getText()).toEqual("9");
    })

    it("repeating the sum when clicked in '='", () => {

        display.addText("5");

        calculator.storeValueOrDoTheMath("=");
        expect(display.getText()).toEqual("5");

        calculator.storeValueOrDoTheMath("+");
        display.addText("10");
        calculator.storeValueOrDoTheMath("=");
        expect(display.getText()).toEqual("15");

        calculator.storeValueOrDoTheMath("=");
        expect(display.getText()).toEqual("25");
    })
})