if (HTMLScriptElement.supports?.("importmap")) {
  console.log("Browser supports import maps.");
}

// import { create, createReportList } from "./modules/canvas.js";
import { create, createReportList } from "canvas";
import {
  name,
  draw as drawASquare,
  reportArea,
  reportPerimeter,
} from "./modules/square.js";
import randomSquare from "./modules/square.js";

// let myCanvas = create("myCanvas", document.body, 480, 320);
let myCanvas = create("myCanvas", document.body.querySelector("div"), 480, 320);
let reportList = createReportList(myCanvas.id);

let square1 = drawASquare(myCanvas.ctx, 50, 50, 100, "blue");
let square2 = drawASquare(myCanvas.ctx, 100, 100, 160, "red");
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);

// Use the default
let square3 = randomSquare(myCanvas.ctx);
let square4 = randomSquare(myCanvas.ctx);
