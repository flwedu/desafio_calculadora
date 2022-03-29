import { Calculator } from "./Calculator"

describe("Calculator class tests", () => {

    const calculator = new Calculator();

    test.each([["1", "1"], ["-40", "-40"], ["0", "0"]])(
        `Given a = %s
                        if doMath()
                        expect %i`, (a, expected) => {

        const result = calculator.doMath(a);
        expect(result).toBe(expected);
    })

    test.each([["2", "*", "4"], ["-5", "*", "25"], ["2", "+", "4"]])(
        `Given a = %s, signal = %s
                        if doMath()
                        expect %i`, (a, signal, expected) => {

        const result = calculator.doMath(a, signal);
        expect(result).toBe(expected);
    })

    test.each([["2", "*", "4", "8"], ["-5", "*", "25", "-125"], ["2", "+", "4", "6"]])(
        `Given a = %s, signal = %s, b = %s
                        if doMath()
                        expect %i`, (a, signal, b, expected) => {

        const result = calculator.doMath(a, signal, b);
        expect(result).toBe(expected);
    })
})