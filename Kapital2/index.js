"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Example1");
// console.blub("Hello World");
console.log("Hello World");
let singer = "Maurice";
singer += "Schmitz";
// singer = 123; // is volgens typescript fout maar volgens javascript niet
console.log(singer, typeof singer);
console.log(singer.length);
// console.log(singer.length());
// example 2
console.log("Example2");
let bestSong = Math.random() > 0.5 ? "Chain of fools" : "respect";
let bestSong2 = Math.random() > 0.5 ? "Chain of fools" : 3;
console.log(bestSong, typeof bestSong);
console.log(bestSong2, typeof bestSong2);
// example3
console.log("Example3");
// let let  wat;
// let let , wat;
// let abc1 wat1;
let abc2, wat2;
abc2 = "sdsd7456745";
wat2 = 2342;
//example4
console.log("Example4");
const moduleCher_1 = require("./moduleCher");
moduleCher_1.cher.firstname = "mauricechanged";
moduleCher_1.cher.lastname = "schmitzchanged";
console.log(moduleCher_1.cher.firstname, moduleCher_1.cher.lastname);
