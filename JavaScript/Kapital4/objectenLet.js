"use strict";
let poet2;
poet2 = {
    born: 1960,
    name: "Maurice",
};
console.log(poet2, typeof poet2);
console.log(poet2.born, typeof poet2.born);
console.log(poet2["born"], typeof poet2["born"]);
console.log(poet2.name, typeof poet2.name);
poet2.born = 1980;
console.log(poet2.born, typeof poet2.born);
poet2 = {
    born: 1930,
    name: "Tuup",
};
let poet3 = poet2; // Pointer reference.
console.log(poet3, typeof poet3);
poet2.name = "Tuup2";
console.log(poet3, typeof poet3);
//# sourceMappingURL=objectenLet.js.map