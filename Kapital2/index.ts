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
let abc2: string, wat2: number;
abc2 = "sdsd7456745";
wat2 = 2342;

//example4
console.log("Example4");
import { cher } from "./moduleCher";
cher.firstname = "mauricechanged";
cher.lastname = "schmitzchanged";

console.log(cher.firstname, cher.lastname);
