import { Calculator, Display } from "../script"

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

describe("Getting values from display", () => {

    const input = document.createElement("input");
    const display = new Display(input);
    const getTextFn = jest.spyOn(display, "getText");
    const calculator = new Calculator(display);

    calculator.storeValueOrDoTheMath("+");
    expect(getTextFn).toBeCalledTimes(1);
})