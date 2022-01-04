export default class Display {

    // This boolean is used to clear the display when a number input is clicked.
    nextInputClearTheDisplay = false;

    constructor(private htmlDisplayElement: HTMLInputElement) {
    }

    addText(text: string) {
        if (this.nextInputClearTheDisplay) {
            this.clearText();
            this.nextInputClearTheDisplay = false;
        }

        this.htmlDisplayElement.value += text;
    }

    clearText() {
        this.htmlDisplayElement.value = "";
    }

    setDisplay(newText: string) {
        this.htmlDisplayElement.value = newText;
        this.nextInputClearTheDisplay = true;
    }

    getText() {
        this.nextInputClearTheDisplay = true;
        return this.htmlDisplayElement.value;
    }
}