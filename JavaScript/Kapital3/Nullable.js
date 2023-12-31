"use strict";
console.log("============================================");
console.log("Nullable ");
let Maybe = Math.random() > 0.5 ? "Hello" : undefined;
// console.log(Maybe.toLowerCase());
console.log(Maybe?.toLowerCase());
console.log(Maybe, typeof Maybe);
console.log(Maybe ? Maybe : null, typeof (Maybe ? Maybe : null));
let Maybe2 = Math.random() > 0.5 ? "Hello" : null;
// console.log(Maybe2.toLowerCase());
console.log(Maybe2?.toLowerCase());
console.log(Maybe2, typeof Maybe2);
console.log(Maybe2 ? Maybe2 : null, typeof (Maybe2 ? Maybe2 : null));
console.log("============================================");
console.log("falsy ");
// let biologist = Math.random() > 0.5 && "Hello";
let biologist = Math.random() > 0.5 && "";
if (biologist) {
    console.log("truthy", biologist, typeof biologist);
}
else {
    console.log("falsy", biologist, typeof biologist);
}
console.log("============================================");
console.log("nog een undefined ");
let mathematician2;
//let mathematician2 : string ;
// let mathematician2  = "iets";
console.log(mathematician2?.length);
mathematician2 = "Hello";
console.log(mathematician2.length);
//# sourceMappingURL=Nullable.js.map