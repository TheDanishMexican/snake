import * as model from "./model.js";
import * as view from "./view.js";

window.addEventListener("load", start);

function start() {
    console.log("Controller started");
    model.start();
    view.start(20, 20);
}