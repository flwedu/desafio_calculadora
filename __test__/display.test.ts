import Display from "../src/Display";

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

    display.addText(".54");
    expect(input.value).toEqual("22111.54");
})

it("Sould clear the text value of element", () => {

    const input = document.createElement("input");
    const display = new Display(input);
    input.value = "222"

    display.clearText();
    expect(input.value).toEqual("");
})

it("Should delete the input.value after using getText method", () => {

    const input = document.createElement("input");
    const display = new Display(input);

    display.addText("152")
    const value = display.getText();

    expect(value).toBe("152");

    display.addText("2")
    expect(input.value).toEqual("2");

})