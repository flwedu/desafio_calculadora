export default class Display {

    constructor(private htmlDisplayElement: HTMLInputElement) {
    }

    addText(text: string) {
        this.htmlDisplayElement.value += text;
    }

    clearText() {
        this.htmlDisplayElement.value = "";
    }

    setDisplay(newText: string) {
        this.htmlDisplayElement.value = newText;
    }

    getText() {
        return this.htmlDisplayElement.value;
    }
}