import { IMathOperation } from "./core/MathOperation";

export default class Calculator {

    private operations: {
        [index: string]: any
    } = {
            "+": (valueA: number, valueB: number) => valueA + valueB,
            "-": (valueA: number, valueB: number) => valueA - valueB,
            "*": (valueA: number, valueB: number) => valueA * valueB,
            "/": (valueA: number, valueB: number) => {
                if (valueB == 0)
                    return "Error!"
                return valueA / valueB
            }
        }

    calculate(data: IMathOperation): string {
        try {
            const result = this.operations[data.signal](data.valueA, data.valueB);
            return result.toString();
        }
        catch (error) {
            console.log(error);
            return "Error!"
        }
    }
}