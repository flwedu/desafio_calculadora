import { MathOperation } from "./MathOperation";

export class Calculator {

    constructor() { };

    private lastOperation = new MathOperation();
    private mathTable = {
        "+": (a: string, b: string) => String(Number(a) + Number(b)),
        "-": (a: string, b: string) => String(Number(a) - Number(b)),
        "*": (a: string, b: string) => String(Number(a) * Number(b)),
        "/": (a: string, b: string) => String(Number(a) / Number(b)),
    };

    doMath(a: string, signal?: string, b?: string): string {

        if (a && !b && !signal) {
            if (this.lastOperationIsEmpty()) return a;
            b = this.lastOperation.b;
            signal = this.lastOperation.signal;
        }
        if (a && signal && !b) {
            b = a;
        }

        this.lastOperation = new MathOperation({
            a, signal
            , b
        });
        return this.mathTable[signal](a, b);
    }

    lastOperationIsEmpty() {
        return !this.lastOperation.a && !this.lastOperation.b
    }

    clear() {
        this.lastOperation = new MathOperation();
    }
}