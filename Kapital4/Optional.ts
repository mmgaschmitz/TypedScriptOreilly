type book = {
  author?: string;
  pages: number;
};

const ok: book = {
  pages: 100,
};

const ok2: book = {
  author: "joep",
  pages: 100,
};

console.log(ok);
console.log(ok.author, typeof ok.author);
console.log(ok2);
console.log(ok2.author, typeof ok2.author);
