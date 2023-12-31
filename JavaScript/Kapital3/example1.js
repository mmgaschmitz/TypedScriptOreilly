"use strict";
console.log("============================================");
console.log("Example type union 1");
let mathematician = Math.random() > 0.5 ? undefined : "Mark Goldberg";
console.log(mathematician, typeof mathematician);
let thinker = null;
console.log(thinker, typeof thinker);
//thinker = 121; kan niet
thinker = null;
console.log(thinker, typeof thinker);
thinker = "Maurice";
console.log(thinker, typeof thinker);
if (Math.random() > 0.5) {
    thinker = "Maurice Random";
}
else {
    thinker = null;
}
console.log(thinker, typeof thinker);
console.log("============================================");
console.log("Example type union 2");
let physicist = Math.random() > 0.5 ? "Maurice " : 84;
physicist.toString();
if (typeof physicist === "string") {
    console.log(physicist.toUpperCase());
}
else {
    console.log(physicist.toFixed());
}
console.log(physicist, typeof physicist);
console.log("============================================");
console.log("Example type narrowering");
let admiral;
admiral = 32;
admiral = "Hello";
admiral.toUpperCase();
//admiral.toFixed();
console.log("============================================");
console.log("Example == verus ===");
let mybool = false;
let mynumber = 343;
let mystring = "maurice";
let mystringSamenUmber = "343";
// console.log("mybool === mynumber =>", mybool === mynumber);
//console.log("mybool == mynumber =>", mybool == mynumber);
// console.log("mybool === true =>", mybool === true);
//console.log("mybool === false =>", mybool === false);
// console.log("mybool == true =>", mybool == true);
//console.log("mybool == false =>", mybool == false);
if (mybool) {
    console.log(mybool, "is true");
}
else {
    console.log(mybool, "is false");
}
console.log(mynumber, "=== 10", mynumber === 10);
console.log(mynumber, "== 10", mynumber == 10);
console.log(mynumber, "=== 343", mynumber === 343);
console.log(mynumber, "== 343", mynumber == 343);
console.log("============================================");
console.log("Error voor typed script maar niet fout voor javascript");
/*

The strict equality (===) operator checks whether its two operands are equal,
returning a Boolean result. Unlike the equality operator,
the strict equality operator always considers operands of different types to be different.
*/
console.log(mynumber, "=== ", mystringSamenUmber
// mynumber === mystringSamenUmber
);
/*
The equality (==) operator checks whether its two operands are equal,
returning a Boolean result. Unlike the strict equality operator,
it attempts to convert and compare operands that are of different types.
*/
console.log(mynumber, "== ", mystringSamenUmber
// mynumber == mystringSamenUmber
);
console.log("============================================");
/*
null
*/
console.log("null and undefined");
let myvar;
console.log(myvar, typeof myvar, myvar === undefined, myvar === null);
myvar = 10;
console.log(myvar, typeof myvar, myvar === undefined, myvar === null);
myvar = undefined;
console.log(myvar, typeof myvar, myvar === undefined, myvar === null);
myvar = "ddef";
console.log(myvar, typeof myvar, myvar === undefined, myvar === null);
myvar = null;
console.log(myvar, typeof myvar, myvar === undefined, myvar === null);
console.log("============================================");
console.log("Literal const");
// const philosopher = "Hypatia";
const aNumber = 12;
console.log(philosopher, typeof philosopher);
console.log(aNumber, typeof aNumber);
console.log("============================================");
console.log("Typeof results is always a string");
let typeNum = typeof 123;
let typeString = typeof "Maurice";
let typeBool = typeof true;
console.log(typeNum, typeof typeNum, typeNum === "number");
console.log(typeString, typeof typeString, typeString === "string");
console.log(typeBool, typeof typeBool, typeBool === "boolean");
console.log("============================================");
console.log("number types");
let asecondNumber;
let abigintNumber;
asecondNumber = 10;
console.log(asecondNumber, typeof asecondNumber);
asecondNumber = 10.347;
console.log(asecondNumber, typeof asecondNumber);
asecondNumber = 12345678901.987654321;
console.log(asecondNumber, typeof asecondNumber);
asecondNumber = 123456789012.987654321;
console.log(asecondNumber, typeof asecondNumber);
asecondNumber = 1234567890123.987654321;
console.log(asecondNumber, typeof asecondNumber);
asecondNumber = 12345678901234.987654321;
console.log(asecondNumber, typeof asecondNumber);
asecondNumber = 123456789012345.987654321;
console.log(asecondNumber, typeof asecondNumber);
asecondNumber = 1234567890123456.987654321;
console.log(asecondNumber, typeof asecondNumber);
asecondNumber = 12345678901234567.987654321;
console.log(asecondNumber, typeof asecondNumber);
asecondNumber = 123456789012345678.987654321;
console.log(asecondNumber, typeof asecondNumber);
asecondNumber = 1234567890123456789.987654321;
console.log(asecondNumber, typeof asecondNumber);
abigintNumber = 1234567890123456789012345678901234567890n;
console.log(abigintNumber, typeof abigintNumber);
abigintNumber =
    12345678901234567890123456789012345678901234567890123456789012345678901234567890n;
console.log(abigintNumber, typeof abigintNumber);
abigintNumber =
    99999999999999999999999999999999999999999999999999999999999999999999999999999999199999999999999999991999999999999999199999999999999n;
console.log(abigintNumber, typeof abigintNumber);
abigintNumber = abigintNumber * 9434242342342429999n;
console.log(abigintNumber, typeof abigintNumber);
//# sourceMappingURL=example1.js.map