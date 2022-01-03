// Instanciando elementos html
const app = document.getElementById("app");
const display = document.getElementById("display");
const allNumberButtons = document.querySelectorAll("input.number");
const allOperatorButtons = document.querySelectorAll("input.operator");
const button_clear = document.getElementById("button_clear");
const button_equal = document.getElementById("button_equal");

// Valores da calculadora
var storedValueA = 0;
var storedValueB = 0;
var selectedOperation = null;
//Essa variável verifica se o próximo número digitado deve limpar o display
var shouldClearDisplay = false;

// Adicionando operações disponíveis
const operations = {
  "+": () => Number(storedValueA) + Number(storedValueB),
  "-": () => Number(storedValueA) - Number(storedValueB),
  "*": () => Number(storedValueA) * Number(storedValueB),
  "/": () => Number(storedValueA) / Number(storedValueB),
};

// Adicionando função a todos os botões com número
allNumberButtons.forEach((button) =>
  button.addEventListener("click", (event) => {
    if (shouldClearDisplay) {
      clearDisplayText();
    }
    addTextToDisplay(button.value);
    shouldClearDisplay = false;
  })
);

//Adicionando função de operadores
allOperatorButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    doOperation(button.value);
  });
});

button_equal.addEventListener("click", () => {
  if (selectedOperation) {
    doOperation(selectedOperation);
  }
});

button_clear.addEventListener("click", () => {
  resetStoredValues();
  clearDisplayText();
});

// Realiza cálculos e atualiza o display
function doOperation(operation) {
  if (operation != "=") {
    selectedOperation = operation;
  }
  if (!storedValueA) {
    storedValueA = display.value;
    storedValueB = 0;
    shouldClearDisplay = true;
  } else {
    storedValueB = display.value;
    try {
      let result = doMath(operation);
      clearDisplayText();
      setDisplay(result);
      shouldClearDisplay = true;
    } catch (err) {
      resetStoredValues();
      console.error(err);
      setDisplay("Error");
      shouldClearDisplay = true;
    }
  }
}

function doMath(operation) {
  return operations[operation]();
}

function resetStoredValues() {
  selectedOperation = null;
  storedValueA = 0;
  storedValueB = 0;
}

// Funções do display
function addTextToDisplay(text) {
  display.value += text;
}

function clearDisplayText() {
  display.value = "";
}

function setDisplay(text) {
  display.value = text;
}

class App {
  operations = {
    "+": (valueA) => (valueB) => Number(valueA) + Number(valueB),
    "-": (valueA) => (valueB) => Number(valueA) - Number(valueB),
    "*": (valueA) => (valueB) => Number(valueA) * Number(valueB),
    "/": (valueA) => (valueB) => Number(valueA) / Number(valueB),
  };
  /**
   * Constructor of App class
   * @param {Display} display
   */
  constructor(display) {
    this.storedValueA = 0;
    this.storedValueB = 0;
    this.selectedOperation = null;
    this.display = display;
  }

  getResult() {
    return this.operations[selectedOperation](this.storedValueA)(
      this.storedValueB
    );
  }
}

// Classes
class Display {
  /**
   * Constructor of Display class
   * @param {HTMLInputElement} htmlDisplayElement
   */
  constructor(htmlDisplayElement) {
    this.htmlDisplayElement = htmlDisplayElement;
  }

  addText(text) {
    this.htmlDisplayElement.value += text;
  }

  clearText() {
    this.htmlDisplayElement.value = "";
  }

  setDisplay(newText) {
    this.htmlDisplayElement.value = newText;
  }
}
