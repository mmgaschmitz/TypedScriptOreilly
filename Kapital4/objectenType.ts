type typepoet = {
  born: number;
  name: string;
  getNameAndYear: () => string;
  AddYears: (years: number) => number;
  SubYears(years: number): Number;
};

let mytypepoet2: typepoet;

mytypepoet2 = {
  born: 1960,
  name: "Maurice",
  getNameAndYear: function () {
    return "Name: " + this.name + " Year: " + this.born;
  },
  AddYears: function (years: number) {
    this.born = this.born + years;
    return this.born;
  },
  SubYears(years) {
    this.born = this.born - years;
    return this.born;
  },
};

console.log(mytypepoet2, typeof mytypepoet2);
console.log(mytypepoet2.born, typeof mytypepoet2.born);
console.log(mytypepoet2["born"], typeof mytypepoet2["born"]);

console.log(mytypepoet2.name, typeof mytypepoet2.name);

mytypepoet2.born = 1980;
console.log(mytypepoet2.born, typeof mytypepoet2.born);
console.log("addyears" + mytypepoet2.AddYears(5));
console.log("subyears" + mytypepoet2.SubYears(3));

mytypepoet2 = {
  born: 1930,
  name: "Tuup",
  getNameAndYear: function () {
    return "Name: " + this.name + " Year: " + this.born;
  },
  AddYears: function (years: number) {
    this.born = this.born + years + years;
    return this.born;
  },
  SubYears(years) {
    this.born = this.born - years - years;
    return this.born;
  },
};

console.log("addyears" + mytypepoet2.AddYears(5));
console.log("subyears" + mytypepoet2.SubYears(3));

let mytypepoet3 = mytypepoet2; // Pointer reference.
console.log(mytypepoet3, typeof mytypepoet3);
mytypepoet2.name = "Tuup2";
console.log(mytypepoet3, typeof mytypepoet3);
