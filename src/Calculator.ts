import Display from "./Display";
import { IEventEmitter } from "./EventEmitter";

export default class Calculator {

    private operations: {
        [index: string]: any
    } = {
            "+": (valueA: number, valueB: number) => valueA + valueB,
            "-": (valueA: number, valueB: number) => valueA - valueB,
            "*": (valueA: number, valueB: number) => valueA * valueB,
            "/": (valueA: number, valueB: number) => valueA / valueB,
        }

    private valueA: number = Infinity
    private valueB: number = Infinity

    constructor(private display: Display, private eventEmitter: IEventEmitter) {
        this.init();
    }

    private init() {
        this.eventEmitter.on("calculate", (signal: string) => {
            this.calculate(this.valueA, this.valueB, signal);
        })

        this.eventEmitter.on("clickSignal", (signal: string) => {

            if (this.valueA == Infinity) {
                this.valueA = this.getValueFromDisplay();
            }
            else {
                this.valueB = this.getValueFromDisplay();
                this.eventEmitter.emit("calculate", signal)
            }

        })
    }

    calculate(valueA: number, valueB: number, signal: string) {
        try {
            const result = this.operations[signal](valueA, valueB);
            this.updateDisplayText(result);
            this.valueA = result;
            this.valueB = Infinity;
            return result;
        }
        catch (error) {
            console.log(error);
            this.updateDisplayText("Error!");
            this.valueA = Infinity;
            this.valueB = Infinity;
        }
    }

    private getValueFromDisplay() {
        return Number(this.display.getText());
    }

    private updateDisplayText(text: string) {
        this.eventEmitter.emit("updateDisplay", text);
    }

    clearStoredOperation() {
        this.valueA = Infinity;
        this.valueB = Infinity;
    }
}