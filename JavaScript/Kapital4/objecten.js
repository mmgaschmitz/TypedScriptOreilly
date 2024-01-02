"use strict";
const poet = {
    born: 1935,
    name: "Mary Olvier",
    getNameAndYear: function () {
        return "Name: " + this.name + " Year: " + this.born;
    },
    SubYears(years) {
        this.born = this.born - years;
        return this.born;
    },
};
console.log(poet, typeof poet);
console.log(poet.born, typeof poet.born);
console.log(poet["born"], typeof poet["born"]);
console.log(poet.name, typeof poet.name);
poet.born = 1980;
console.log(poet.born, typeof poet.born);
console.log(poet.getNameAndYear());
// poet.end;
//# sourceMappingURL=objecten.js.map