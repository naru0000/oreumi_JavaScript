const arr = [1, 2, [3, 4, [5, 6]]];

console.log(arr.flat(1)); //기본값은 1
console.log(arr.flat(2));

console.log(arr);

const users = ["Daniel", "Don", "donald", "Micheal"];

users.sort();
console.log(users);

const numbers = [51, 2, 12, 1, 22, 5];
numbers.sort((a, b) => a - b); //오름차순

console.log(numbers);

numbers.sort((a, b) => b - a); //내림차순

console.log(numbers);

const numbers3 = [1, 2, 3, 4, 5];

const hasEven = numbers3.some((num) => num % 2 === 0); // or,결과값이 하나라도 true
console.log(hasEven);

const allEven = numbers3.every((num) => num % 2 === 0); // and,결과값이 모두 true
console.log(allEven);

//콜백함수
//reduce(reducer 리듀서)
//filter(true,false -> predicate 함수(boolean 값 반환)),some,every
//map(mapping function)

console.clear();

//1 users에 'Amy'가 포함되어 있는지 확인

const users2 = ["Daniel", "Don", "donald", "Micheal"];
const findUser = users2.some((x) => x.includes("Amy"));

//2 numbers에서 3보다 큰 값이 있는지 확인
const numbers4 = [1, 2, 3, 4, 5];
const findNumber = numbers4.some((num) => num > 3);

//3 fruits 변수 안에 있는 값이 모두 문자열인지 확인
const fruits = ["apple", "mango", "banana"];
const findString = fruits.every((x) => typeof x === "String");

//4 이메일형식이 모두 맞는지 확인

const arr2 = [3, 4];
console.log(Array.isArray(arr2)); // 배열인지 아닌지 알 수 있음
