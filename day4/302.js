const animals = ["puppy", "cat", "parret"];

let result = animals.filter((animal, index) => index === 2);
result = animals.map((animal, index) => index);
console.log(result);

// animals의 마지막 요소로 Rabbit을 추가하세요.(원본 배열을 변경)
// push,pop,unshift,shift

animals.push("Rabbit");
console.log(animals);

// 1-2번째에 있는 요소만 가져오기

console.log(animals.slice(1, 3));

// splice - push와 pop이랑 비슷해보이지만 원본 배열을 변경시킨다.
animals.splice(1, 2, "Elephant");
console.log("changed Animals : ", animals);

animals.splice(1, 0, "cat");
console.log(animals);

console.clear();

// 배열 순서를 거꾸로 변경한다(원본 배열을 변경)
const arr = ["apple", "mango", "banana"];
arr.reverse;
console.log(arr);
