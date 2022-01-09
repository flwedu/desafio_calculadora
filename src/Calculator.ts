import { IMathOperation } from "./core/MathOperation";

export default class Calculator {

    private operations: {
        [index: string]: any
    } = {
            "+": (valueA: number, valueB: number) => (valueA + valueB),
            "-": (valueA: number, valueB: number) => (valueA - valueB),
            "*": (valueA: number, valueB: number) => (valueA * valueB),
            "/": (valueA: number, valueB: number) => {
                if (valueB == 0)
                    throw new Error("Math Error!")
                return (valueA / valueB)
            }
        }

    calculate(data: IMathOperation): string {
        const { valueA, valueB, signal } = data;
        try {
            if (data.valueB != null)
                return this.operations[signal](valueA, valueB);
            else
                return this.operations[signal](valueA, valueA);
        }
        catch (err: any) {
            console.log(err);
            throw new Error(err.message)
        }
    }
}