"use strict";
let poet2;
poet2 = {
    born: 1960,
    name: "Maurice",
    getNameAndYear: function () {
        return "Name: " + this.name + " Year: " + this.born;
    },
    SubYears(years) {
        this.born = this.born - years;
        return this.born;
    },
};
console.log(poet2, typeof poet2);
console.log(poet2.born, typeof poet2.born);
console.log(poet2["born"], typeof poet2["born"]);
console.log(poet2.name, typeof poet2.name);
poet2.born = 1980;
console.log(poet2.born, typeof poet2.born);
console.log("getNameAndYear" + poet2.getNameAndYear());
console.log("SubYears" + poet2.SubYears(4));
poet2 = {
    born: 1930,
    name: "Tuup",
    getNameAndYear: function () {
        return "Name: " + this.name + " Year: " + this.born;
    },
    SubYears(years) {
        this.born = this.born - years;
        return this.born;
    },
};
let poet3 = poet2; // Pointer reference.
console.log(poet3, typeof poet3);
poet2.name = "Tuup2";
console.log(poet3, typeof poet3);
console.log(poet2.getNameAndYear());
console.log(poet3.getNameAndYear());
//# sourceMappingURL=objectenLet.js.map