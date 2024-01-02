"use strict";
const aPoem = Math.random() > 0.5 ? { name: "The double image", pages: 7 } : { name: "The double image", rhymes: true };
console.log(aPoem.name);
if ("pages" in aPoem) {
    console.log(aPoem.pages);
}
else {
    console.log(aPoem.rhymes);
}
//# sourceMappingURL=ExpliziteVereinigungen.js.map