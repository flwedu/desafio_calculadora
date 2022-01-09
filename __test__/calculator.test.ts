import Calculator from "../src/Calculator";
import { EventEmitter } from "../src/core/EventEmitter";

describe("Should receives the right value to operation with 4 basic signals (+, -, *, /)", () => {

    const eventEmitter = EventEmitter;
    const calculator = new Calculator(eventEmitter);

    it("Sum", () => {

        expect(calculator.calculate({
            valueA: 6,
            valueB: 4,
            signal: "+"
        })).toBe("10");
        expect(calculator.calculate({
            valueA: 50,
            valueB: 5,
            signal: "+"
        })).toBe("55");
    })

    it("Division", () => {
        expect(calculator.calculate({
            valueA: 5,
            valueB: 6,
            signal: "-"
        })).toBe("-1");
        expect(calculator.calculate({
            valueA: 6,
            valueB: 5,
            signal: "-"
        })).toBe("1");
    })

    it("Multiply", () => {

        expect(calculator.calculate({
            valueA: 6,
            valueB: 4,
            signal: "*"
        })).toBe("24");
        expect(calculator.calculate({
            valueA: -10,
            valueB: -5,
            signal: "*"
        })).toBe("50");
        expect(calculator.calculate({
            valueA: 5,
            valueB: -5,
            signal: "*"
        })).toBe("-25");
    })

    it("Division", () => {
        expect(calculator.calculate({
            valueA: 10,
            valueB: 5,
            signal: "/"
        })).toBe("2");
        expect(calculator.calculate({
            valueA: -2,
            valueB: 1,
            signal: "/"
        })).toBe("-2");
        expect(calculator.calculate({
            valueA: -5,
            valueB: -2,
            signal: "/"
        })).toBe("2.5");
    })

    it("division by 0 returns Error", () => {
        expect(calculator.calculate({
            valueA: 5,
            valueB: 0,
            signal: "/"
        })).toBe("Error!");
    })
})