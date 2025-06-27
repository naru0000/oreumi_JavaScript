// array

const fruits = ["apple", "mango", "banana"];

fruits[1] = "cherry";

fruits.unshift("watermelon", "lemon");
fruits.push("Grape", "mango");

console.log(fruits);

// 삭제,shift,Pop

fruits.pop(); // 맨 뒤의 요소 하나 삭제
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.shift(); // 맨 앞의 요소 하나 삭제
console.log(fruits); // lemon,apple,cherry,banana

fruits.slice(1, 2); //변화가 없음
console.log(fruits);

const newFruits = fruits.slice(1, 2);
console.log(newFruits);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
//const newArr = arr1.concat(arr2); 문자열을 붙이듯이 배열도 붙일 수 있다. 잘 쓰진 않는다.
const newArr = [...arr1, ...arr2]; // spread 연산자(전개)
console.log(newArr);

const whosBig = Math.max(...arr1); // spread 연산자(전개)
console.log(whosBig);

const str = "Ghost, World, Sunny";
// ['Ghost','World','Sunny'] -> names 변수에 배열 넣기

const name = str.split(", ");
console.log(name);

const newStr = name.join("야"); //구분자로 구분지어서 문자열로 만들어줌
console.log(newStr);

const newStr2 = [...str];
console.log(newStr2);

console.clear();

const users = "hello world";

console.log(users.indexOf("w"));

const animals = ["puppy", "cat", "parrot"];
console.log(animals.indexOf("cat"));
console.log(animals.lastIndexOf("cat"));

console.log(animals.includes("cat")); // Boolean 값을 반환
