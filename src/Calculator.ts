import Display from "./Display";

export default class Calculator {

    /**
     *List of avaliables operations to the calculator
     *The index of properties is a string, wich is used to get the curry function
     * @private
     * @type {{
     *         [index: string]: Function
     *     }}
     * @memberof App
     */
    private operations: {
        [index: string]: Function
    } = {
            "+": (valueA: number) => (valueB: number) => valueA + valueB,
            "-": (valueA: number) => (valueB: number) => valueA - valueB,
            "*": (valueA: number) => (valueB: number) => valueA * valueB,
            "/": (valueA: number) => (valueB: number) => valueA / valueB
        }

    private selectedOperation: Function | undefined;

    constructor(private display: Display) {
    }

    preparedOperation(operationSignal: string, valueA: number) {

        return this.operations[operationSignal](valueA);
    }

    storeValueOrDoTheMath(clickedOperationSignal: string) {

        // Verify if there's no function previously stored to do the results math
        if (!this.selectedOperation) {
            this.selectedOperation = this.preparedOperation(clickedOperationSignal, Number(this.display.getText()));
        }
        // If Already has a function stored, set the second value to do the math
        else {
            try {
                const result = this.selectedOperation(Number(this.display.getText()));
                this.display.setDisplay(result);
            }
            catch (error) {
                console.log(error);
                this.display.setDisplay("ERROR")
            }
        }
    }

    clearStoredOperation() {
        this.selectedOperation = undefined;
    }
}