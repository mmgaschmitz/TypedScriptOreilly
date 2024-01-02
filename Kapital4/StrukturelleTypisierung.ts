type WithFirstName = {
  firstName: string;
};

type WithLastName = {
  lastName: string;
};

const hasBoth = {
  firstName: "Lucille",
  lastName: "Clifton",
};

let awithFirstName: WithFirstName = hasBoth;
console.log("hasBoth", hasBoth);
console.log("awithFirstName", awithFirstName);

let awithLastName: WithLastName = hasBoth;
console.log("hasBoth", hasBoth);
console.log("awithFirstName", awithLastName);
