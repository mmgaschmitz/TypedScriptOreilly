console.log("============================================");
console.log("type alias");

type myName = Boolean | String;
let enNu: myName;

enNu = false;
console.log(enNu, typeof enNu);
enNu = "Hello";
console.log(enNu, typeof enNu);
//enNU = 123n;
//console.log(enNu, typeof enNu);
