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
        const { valueA, valueB, signal } = data;
        try {
            let result = "";

            if (data.valueB)
                result = this.operations[signal](valueA, valueB);
            else
                result = this.operations[signal](valueA, valueA);

            return result.toString();
        }
        catch (error) {
            console.log(error);
            return "Error!"
        }
    }
}