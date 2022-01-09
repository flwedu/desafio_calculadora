import Calculator from "../src/Calculator";
import Display from "../src/Display";
import { EventEmitter } from "../src/EventEmitter";

describe("Should receives the right value to operation with 4 basic signals (+, -, *, /)", () => {

    const input = document.createElement("input");
    const display = new Display(input);
    const eventEmitter = EventEmitter;
    const calculator = new Calculator(display, eventEmitter);

    beforeEach(() => {
        calculator.clearStoredOperation();
    })

    it("Sum", () => {

        expect(calculator.calculate(6, 4, "+")).toBe(10);
        expect(calculator.calculate(50, 5, "+")).toBe(55);
    })

    it("Division", () => {
        expect(calculator.calculate(5, 6, "-")).toBe(-1);
        expect(calculator.calculate(6, 5, "-")).toBe(1);
    })

    it("Multiply", () => {

        expect(calculator.calculate(8, 5, "*")).toBe(40);
        expect(calculator.calculate(10, 5, "*")).toBe(50);
        expect(calculator.calculate(5, -5, "*")).toBe(-25);
    })

    it("Division", () => {
        expect(calculator.calculate(10, 5, "/")).toBe(2);
        expect(calculator.calculate(2, -1, "/")).toBe(-2);
        expect(calculator.calculate(5, 2, "/")).toBe(2.5);
    })

    it("division by 0 returns Infinity", () => {
        expect(calculator.calculate(5, 0, "/")).toBe(Infinity);
    })
})