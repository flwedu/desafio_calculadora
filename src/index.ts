import "./style/main.scss";
import { App } from "./app";
import { Calculator } from "./Calculator";
import { EventEmitter } from "./core/EventEmitter";
import { DisplayManager } from "./DisplayManager";

const display = new DisplayManager(document.getElementById("display") as HTMLInputElement);
const calculator = new Calculator();
const app = new App(display, calculator, EventEmitter);
app.initialize();

import "./Buttons";