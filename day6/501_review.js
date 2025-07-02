const person = {
    name: "Ghost",
    age: 20,
};

console.log(person.name);

person.height = 180;
console.log(person);

const arr = ["A", "B", "C"];

arr.forEach(function (x) {
    console.log(x.toUpperCase());
});

arr.forEach((x) => console.log(x.toUpperCase()));

let result = [];

for (const x of arr) {
    result.push(x.toLowerCase());
}

console.log(result);
