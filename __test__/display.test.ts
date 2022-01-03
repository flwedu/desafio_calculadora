import { Display } from "../script";

it("Sould set the value of element", () => {

    const input = document.createElement("input");
    const display = new Display(input);

    display.setDisplay("111");
    expect(input.value).toBe("111");
})

it("Sould add a text to value of element", () => {

    const input = document.createElement("input");
    const display = new Display(input);
    input.value = "22"

    display.addText("111");
    expect(input.value).toEqual("22111");
})

it("Sould clear the text value of element", () => {

    const input = document.createElement("input");
    const display = new Display(input);
    input.value = "222"

    display.clearText();
    expect(input.value).toEqual("");
})