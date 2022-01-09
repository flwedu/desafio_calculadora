import { IMathOperation } from "./core/MathOperation";
import { IEventEmitter } from "./core/EventEmitter";

export default class Calculator {

    private operations: {
        [index: string]: any
    } = {
            "+": (valueA: number, valueB: number) => valueA + valueB,
            "-": (valueA: number, valueB: number) => valueA - valueB,
            "*": (valueA: number, valueB: number) => valueA * valueB,
            "/": (valueA: number, valueB: number) => valueA / valueB,
        }

    constructor(private eventEmitter: IEventEmitter) {
        this.init();
    }

    private init() {
        this.eventEmitter.on("calculate", (data: IMathOperation) => {
            this.calculate(data);
        })
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