"use strict";
let mytypepoet2;
mytypepoet2 = {
    born: 1960,
    name: "Maurice",
};
console.log(mytypepoet2, typeof mytypepoet2);
console.log(mytypepoet2.born, typeof mytypepoet2.born);
console.log(mytypepoet2["born"], typeof mytypepoet2["born"]);
console.log(mytypepoet2.name, typeof mytypepoet2.name);
mytypepoet2.born = 1980;
console.log(mytypepoet2.born, typeof mytypepoet2.born);
mytypepoet2 = {
    born: 1930,
    name: "Tuup",
};
let mytypepoet3 = mytypepoet2; // Pointer reference.
console.log(mytypepoet3, typeof mytypepoet3);
mytypepoet2.name = "Tuup2";
console.log(mytypepoet3, typeof mytypepoet3);
//# sourceMappingURL=objectenType.js.map