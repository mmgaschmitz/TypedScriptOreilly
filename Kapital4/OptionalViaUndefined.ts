type book2 = {
  author: string | undefined;
  pages: number;
};

const ok3: book2 = {
  author: undefined,
  pages: 100,
};

const ok4: book2 = {
  author: "joep",
  pages: 100,
};

console.log(ok3);
console.log(ok3.author, typeof ok3.author);
console.log(ok4);
console.log(ok4.author, typeof ok4.author);
