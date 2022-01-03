import { App, Display } from "../script"

describe("Should receives the right value to operation with 4 basic signals (+, -, *, /)", () => {

    const input = document.createElement("input");
    const display = new Display(input);
    const app = new App(display);

    it("Sum", () => {
        const sum = app.preparedOperation("+", 5);
        expect(sum(5)).toBe(10);
        expect(sum(50)).toBe(55);
    })

    it("Division", () => {
        const minus = app.preparedOperation("-", 2);
        expect(minus(3)).toBe(-1);
        expect(minus(1)).toBe(1);
    })

    it("Multiply", () => {

        const multiply = app.preparedOperation("*", 2);
        expect(multiply(3)).toBe(6);
        expect(multiply(1)).toBe(2);
        expect(multiply(-5)).toBe(-10);
    })

    it("Division", () => {
        const division = app.preparedOperation("/", 10);
        expect(division(2)).toBe(5);
        expect(division(1)).toBe(10);
    })
})