const poet = {
  born: 1935,
  name: "Mary Olvier",
};

console.log(poet, typeof poet);
console.log(poet.born, typeof poet.born);
console.log(poet["born"], typeof poet["born"]);

console.log(poet.name, typeof poet.name);

poet.born = 1980;
console.log(poet.born, typeof poet.born);

// poet.end;
